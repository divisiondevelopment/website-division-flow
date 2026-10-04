"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { comingSoonContent, countdownParts } from "@/data/comingSoon";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function getRemainingTime(targetTime: number): Countdown {
  const diff = Math.max(targetTime - Date.now(), 0);

  const days = Math.floor(diff / DAY);
  const hours = Math.floor((diff % DAY) / HOUR);
  const minutes = Math.floor((diff % HOUR) / MINUTE);
  const seconds = Math.floor((diff % MINUTE) / SECOND);

  return { days, hours, minutes, seconds };
}

function formatCountdownValue(value: number) {
  return value.toString().padStart(2, "0");
}

const Page = () => {
  const targetTime = useMemo(() => {
    const parsed = Date.parse(comingSoonContent.countdownTargetIso);
    return Number.isNaN(parsed) ? 0 : parsed;
  }, []);

  const [countdown, setCountdown] = useState<Countdown>(() =>
    getRemainingTime(targetTime),
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(getRemainingTime(targetTime));
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetTime]);

  // TODO: Replace this handler with your own email signup integration (e.g. Mailchimp, ConvertKit, or a server action).
  const onNotifySubmit: React.ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    )?.value;
    toast.success("Você está na lista!", {
      description: email
        ? `Avisaremos você em ${email} quando lançarmos.`
        : "Avisaremos você quando lançarmos.",
    });
    event.currentTarget.reset();
  };

  return (
    <section className="coming-soon">
      <div className="carousel-container">
        <div className="coming-soon-content">
          <Image
            src="/assets/images/logo.png"
            alt="Division Flow"
            width={600}
            height={465}
            className="coming-soon-logo"
          />

          <div className="coming-soon-info">
            <span className="sub-title">{comingSoonContent.lead}</span>
            <h1 className="title">{comingSoonContent.title}</h1>
          </div>

          <div className="timer" aria-live="polite">
            {countdownParts.map((part) => (
              <div className="timer-content" key={part.key}>
                <span id={part.key} className="time">
                  {formatCountdownValue(countdown[part.key])}
                </span>
                <span className="days">{part.label}</span>
              </div>
            ))}
          </div>

          <p>{comingSoonContent.description}</p>

          <form className="notify-form" onSubmit={onNotifySubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder={comingSoonContent.notify.emailPlaceholder}
                required
              />
              <button type="submit" className="btn-style1">
                {comingSoonContent.notify.buttonText}
                <span>
                  <Image
                    src={comingSoonContent.notify.arrowIcon.src}
                    alt={comingSoonContent.notify.arrowIcon.alt}
                    width={comingSoonContent.notify.arrowIcon.width}
                    height={comingSoonContent.notify.arrowIcon.height}
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
