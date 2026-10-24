"use client";

// O site ainda não tem nenhum script de analytics/tracking instalado
// (sem libs desse tipo em package.json), então este banner hoje é só a UI
// de consentimento — não há cookies de terceiros pra efetivamente
// bloquear/liberar com base na escolha do usuário. Quando um script de
// analytics for adicionado, a lógica de bloqueio condicional (ex: só
// disparar o script se CONSENT_KEY === "accepted") ainda precisa ser
// implementada em algum lugar que leia esse mesmo localStorage.

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "df_cookie_consent";
const CONSENT_TTL_DAYS = 180;

type ConsentChoice = "accepted" | "rejected";

type StoredConsent = {
  choice: ConsentChoice;
  date: string;
};

function readStoredConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredConsent;
  } catch {
    return null;
  }
}

function isExpired(stored: StoredConsent): boolean {
  const savedAt = new Date(stored.date).getTime();
  if (Number.isNaN(savedAt)) return true;
  const ageInDays = (Date.now() - savedAt) / (1000 * 60 * 60 * 24);
  return ageInDays > CONSENT_TTL_DAYS;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    setVisible(!stored || isExpired(stored));
  }, []);

  if (!visible) return null;

  const handleChoice = (choice: ConsentChoice) => {
    try {
      const stored: StoredConsent = { choice, date: new Date().toISOString() };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue sem persistir
    }
    setVisible(false);
  };

  return (
    <div className="cookie-consent" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie-consent__text">
        Usamos cookies para melhorar sua experiência. Saiba mais na nossa{" "}
        <Link href="/privacy">política de privacidade</Link>.
      </p>
      <div className="cookie-consent__actions">
        <button
          type="button"
          className="btn-style1 no-icon outline"
          onClick={() => handleChoice("rejected")}
        >
          Rejeitar
        </button>
        <button
          type="button"
          className="btn-style1 no-icon"
          onClick={() => handleChoice("accepted")}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
