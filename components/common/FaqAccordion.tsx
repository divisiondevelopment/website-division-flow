"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div className="faq-item" key={item.id}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              {item.question}
              <span className="faq-question__icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="faq-answer" id={`faq-answer-${item.id}`}>
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
