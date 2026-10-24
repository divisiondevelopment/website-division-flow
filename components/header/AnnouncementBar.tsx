"use client";

import { useEffect, useState } from "react";

const WHATSAPP_HREF = "https://wa.me/555195829213";

const DISMISS_KEY = "df_announcement_dismissed";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <div className="announcement-bar">
      <div className="container-fluid">
        <div className="announcement-bar__inner">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-bar__link"
          >
            Fale com a gente no WhatsApp e tire suas dúvidas
            <span aria-hidden="true">&rarr;</span>
          </a>
          <button
            type="button"
            className="announcement-bar__close"
            aria-label="Fechar aviso"
            onClick={handleDismiss}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
