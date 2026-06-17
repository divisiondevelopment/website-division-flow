"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { homeHeroData } from "@/data/homeHero";

export default function Hero() {
  const { subTitle, title, description, form } = homeHeroData;

  // TODO: Replace this handler with your own email signup integration (e.g. Mailchimp, ConvertKit, or a server action).
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    toast.success("Thanks for signing up!", {
      description: `We'll be in touch at ${email}.`,
    });
    e.currentTarget.reset();
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
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  placeholder={form.placeholder}
                  aria-label="Email address"
                  required={true}
                />
                <button type="submit" className="btn-style1">
                  {form.buttonText}
                  <span>
                    <Image
                      src={form.buttonIcon.src}
                      alt={form.buttonIcon.alt}
                      width={form.buttonIcon.width}
                      height={form.buttonIcon.height}
                    />
                  </span>
                </button>
              </div>
            </form>
            {/* End form */}
          </div>
        </div>
      </div>
    </div>
  );
}
