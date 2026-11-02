"use client";

import { useEffect, useRef, useState } from "react";
import { faqItems, type FaqItem } from "@/data/faq";
import { SITE_NAME } from "@/data/site";

type ConversationMessage = {
  id: string;
  from: "user" | "bot";
  text: string;
};

export default function FaqChatWidget() {
  const [open, setOpen] = useState(false);
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set());
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const conversationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    conversationRef.current?.scrollTo({
      top: conversationRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleOpen = () => {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([
        { id: "welcome", from: "bot", text: "Oi! Selecione uma pergunta abaixo." },
      ]);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([]);
    setAnsweredIds(new Set());
  };

  const handleToggle = () => {
    if (open) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const handleSelectQuestion = (item: FaqItem) => {
    if (answeredIds.has(item.id)) return;
    setMessages((prev) => [
      ...prev,
      { id: `${item.id}-q`, from: "user", text: item.question },
      { id: `${item.id}-a`, from: "bot", text: item.answer },
    ]);
    setAnsweredIds((prev) => new Set(prev).add(item.id));
  };

  return (
    <>
      <button
        type="button"
        className="faq-chat-widget__button"
        onClick={handleToggle}
        aria-label={open ? "Fechar perguntas frequentes" : "Abrir perguntas frequentes"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9.5" stroke="#fff" strokeWidth="1.8" />
          <path
            d="M9.3 9.3a2.7 2.7 0 1 1 3.7 2.5c-.75.3-1.1.9-1.1 1.7v.3"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="11.95" cy="16.8" r="1" fill="#fff" />
        </svg>
      </button>

      {open && (
        <div
          className="faq-chat-widget__overlay"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {open && (
        <div className="faq-chat-widget__panel" role="dialog" aria-label="Perguntas frequentes">
          <div className="faq-chat-widget__header">
            <span className="faq-chat-widget__title">{SITE_NAME.split(" - ")[0]}</span>
            <button
              type="button"
              className="faq-chat-widget__close"
              onClick={handleClose}
              aria-label="Fechar"
            >
              &times;
            </button>
          </div>

          <div className="faq-chat-widget__conversation" ref={conversationRef}>
            {messages.map((message) => (
              <p
                key={message.id}
                className={`faq-chat-widget__bubble faq-chat-widget__bubble--${message.from}`}
              >
                {message.text}
              </p>
            ))}
          </div>

          <div className="faq-chat-widget__questions">
            {faqItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="faq-chat-widget__chip"
                onClick={() => handleSelectQuestion(item)}
                disabled={answeredIds.has(item.id)}
              >
                {item.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
