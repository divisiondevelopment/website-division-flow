import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const GENERIC_ERROR =
  "Não foi possível enviar sua mensagem. Tente novamente.";

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const MAX_MESSAGE_LENGTH = 2000;
const MAX_URLS = 5;
const MAX_SPAM_MATCHES = 3;
const URL_REGEX = /https?:\/\//gi;
const SPAM_KEYWORDS = [
  "casino",
  "crypto",
  "bitcoin",
  "forex",
  "loan",
  "prize",
  "winner",
  "click here",
];

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  for (const [key, entry] of rateLimitMap) {
    if (entry.resetAt <= now) {
      rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

function countOccurrences(value: string, pattern: RegExp): number {
  return (value.match(pattern) ?? []).length;
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  if (formData.get("website")) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "too_many_requests" }, { status: 429 });
  }

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Preencha os campos obrigatórios." },
      { status: 400 },
    );
  }

  const nameStr = String(name);
  const messageStr = String(message);

  if (phone) {
    const phoneDigits = String(phone).replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return NextResponse.json(
        { error: "Telefone inválido." },
        { status: 400 },
      );
    }

    const ddd = Number(phoneDigits.slice(0, 2));
    if (ddd < 11 || ddd > 99) {
      return NextResponse.json(
        { error: "Telefone inválido." },
        { status: 400 },
      );
    }
  }

  if (messageStr.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "Mensagem muito longa." },
      { status: 400 },
    );
  }

  if (
    countOccurrences(messageStr, URL_REGEX) > MAX_URLS ||
    countOccurrences(nameStr, URL_REGEX) > MAX_URLS
  ) {
    return NextResponse.json({ error: "Conteúdo inválido." }, { status: 400 });
  }

  const spamMatches = SPAM_KEYWORDS.reduce((total, keyword) => {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return total + countOccurrences(messageStr, new RegExp(escaped, "gi"));
  }, 0);

  if (spamMatches > MAX_SPAM_MATCHES) {
    return NextResponse.json({ error: "Conteúdo inválido." }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "contato@divisionflow.com",
      to: "contato@divisiondev.com.br",
      replyTo: String(email),
      subject: "Nova mensagem de contato — Division Flow",
      text: `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nMensagem: ${message}`,
    });

    if (error) {
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
