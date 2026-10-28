"use client";

// import { useEffect, useState, type FormEvent } from "react";
import WordRotate from "@/components/common/WordRotate";
import { Spotlight } from "@/components/ui/spotlight";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { homeHeroData } from "@/data/homeHero";

// type DemoRequestStatus = "idle" | "loading" | "success" | "error";

const MASCOT_ANCHOR_WORD = /\bde\b/;

export default function Hero() {
  const { titleBefore, rotatingWords, titleAfter, description } = homeHeroData;
  const anchorMatch = titleBefore.match(MASCOT_ANCHOR_WORD);
  const titleBeforeStart = anchorMatch
    ? titleBefore.slice(0, anchorMatch.index)
    : titleBefore;
  const titleBeforeAnchor = anchorMatch ? anchorMatch[0] : null;
  const titleBeforeEnd =
    anchorMatch && anchorMatch.index !== undefined
      ? titleBefore.slice(anchorMatch.index + anchorMatch[0].length)
      : "";
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
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#6c33ff"
      />
      <div className="carousel-container">
        <div className="hero-info">
          <div className="hero-content">
            <h3
              className="title"
              data-aos="zoom-in"
              data-aos-duration={900}
              data-aos-delay={200}
            >
              {titleBeforeStart}
              {titleBeforeAnchor ? (
                <span className="hero-mascot-anchor">
                  {titleBeforeAnchor}
                  <img
                    src="/assets/gif/bloub-flow-cycle.gif"
                    alt=""
                    aria-hidden="true"
                    className="hero-mascot"
                  />
                </span>
              ) : null}
              {titleBeforeEnd}
              <WordRotate words={rotatingWords} />
              {titleAfter}
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
              <MovingBorderButton
                as="a"
                href="https://app.divisionflow.com/checkout?plan=flow"
                borderRadius="var(--radius-md)"
                duration={3500}
                containerClassName="inline-flex h-auto w-auto items-center p-[3px] cta-moving-border-link"
                borderClassName="h-11 w-11 opacity-90 cta-moving-border-glow"
                className="cta-moving-border h-[38px] w-auto border-0 bg-[var(--primary)] px-[18px] text-[15px] font-semibold text-white antialiased backdrop-blur-none"
              >
                Assinar agora
              </MovingBorderButton>
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
