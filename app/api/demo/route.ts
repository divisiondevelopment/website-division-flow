import { NextRequest, NextResponse } from "next/server";

const GENERIC_ERROR =
  "Não foi possível processar sua solicitação. Tente novamente.";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Informe um e-mail válido." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
      }),
    });

    if (!response.ok && response.status !== 204) {
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
