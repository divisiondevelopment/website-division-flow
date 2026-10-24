"use client";

import Image from "next/image";
// import { useEffect, useState, type FormEvent } from "react";
import HeroBars from "@/components/home/HeroBars";
import { homeHeroData } from "@/data/homeHero";

// type DemoRequestStatus = "idle" | "loading" | "success" | "error";

export default function Hero() {
  const { title, description } = homeHeroData;
  // Formulário de contato removido temporariamente, manter para uso futuro
  // const [email, setEmail] = useState("");
  // const [status, setStatus] = useState<DemoRequestStatus>("idle");
  // const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   if (status !== "error") return;
  //   const timeoutId = setTimeout(() => {
  //     setStatus("idle");
  //     setErrorMessage("");
  //   }, 5000);
  //   return () => clearTimeout(timeoutId);
  // }, [status]);

  // async function onSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setStatus("loading");
  //   setErrorMessage("");

  //   try {
  //     const response = await fetch("/api/demo", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email }),
  //     });

  //     if (!response.ok) {
  //       setStatus("error");
  //       setErrorMessage(
  //         response.status === 400
  //           ? "Informe um e-mail válido."
  //           : "Algo deu errado. Tente novamente em instantes.",
  //       );
  //       return;
  //     }

  //     setStatus("success");
  //   } catch {
  //     setStatus("error");
  //     setErrorMessage("Algo deu errado. Tente novamente em instantes.");
  //   }
  // }

  return (
    <div className="hero-sec">
      <div className="carousel-container">
        <div className="hero-info">
          <div className="hero-content">
            <HeroBars />
            <h3
              className="title"
              data-aos="zoom-in"
              data-aos-duration={900}
              data-aos-delay={200}
            >
              {title}
            </h3>
            <p data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
              {description}
            </p>

            <div
              className="hero-cta-group"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={400}
            >
              <a
                href="https://wa.me/555195829213"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-style1 no-icon outline"
              >
                Falar com vendas
              </a>
              <a
                href="https://app.divisionflow.com/checkout?plan=flow"
                className="btn-style1 no-icon"
              >
                Assinar agora
              </a>
            </div>

            <div
              className="hero-video-placeholder"
              style={{ overflow: "hidden" }}
            >
              <div className="hero-video-placeholder__chrome" aria-hidden="true">
                <span className="hero-video-placeholder__dot" />
                <span className="hero-video-placeholder__dot" />
                <span className="hero-video-placeholder__dot" />
              </div>
              <Image
                src="/assets/images/feature/dashboard-divflow.png"
                alt="Dashboard da Division Flow"
                width={2932}
                height={1540}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>

            {/* Formulário de contato removido temporariamente, manter para uso futuro
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
            End form */}
          </div>
        </div>
      </div>
    </div>
  );
}
