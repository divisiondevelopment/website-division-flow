"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { homeHeroData } from "@/data/homeHero";

type DemoRequestStatus = "idle" | "loading" | "success" | "error";

export default function Hero() {
  const { subTitle, title, description, form } = homeHeroData;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<DemoRequestStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status !== "error") return;
    const timeoutId = setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          response.status === 400
            ? "Informe um e-mail válido."
            : "Algo deu errado. Tente novamente em instantes.",
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Algo deu errado. Tente novamente em instantes.");
    }
  }

  return (
    <div className="hero-sec">
      <div className="carousel-container">
        <div className="hero-info">
          <div className="hero-content">
            <span
              className="sub-title"
              data-aos="zoom-in"
              data-aos-duration={900}
              data-aos-delay={200}
            >
              {subTitle}
            </span>
            <h1
              className="title"
              data-aos="zoom-in"
              data-aos-duration={900}
              data-aos-delay={200}
            >
              {title}
            </h1>
            <p data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
              {description}
            </p>

            <form
              className="hero-form"
              onSubmit={onSubmit}
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={400}
            >
              <div className="form-group">
                {status === "success" ? (
                  <p className="mb-0">
                    Solicitação recebida! Entraremos em contato em breve.
                  </p>
                ) : (
                  <>
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      placeholder={form.placeholder}
                      aria-label="Email address"
                      required={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                    />
                    <button
                      type="submit"
                      className="btn-style1"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Enviando..." : form.buttonText}
                      <span>
                        <Image
                          src={form.buttonIcon.src}
                          alt={form.buttonIcon.alt}
                          width={form.buttonIcon.width}
                          height={form.buttonIcon.height}
                        />
                      </span>
                    </button>
                  </>
                )}
              </div>
              {status === "error" && (
                <p style={{ color: "red", fontSize: "0.85rem" }} className="mt-2 mb-0">
                  {errorMessage}
                </p>
              )}
            </form>
            {/* End form */}
          </div>
        </div>
      </div>
    </div>
  );
}
