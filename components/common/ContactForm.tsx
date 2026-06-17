"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import {
  contactFormCopy,
  contactFormFields,
  type ContactFormField,
} from "@/data/contact";

const AOS_DURATION = 900;

async function submitContactForm(data: FormData): Promise<void> {
  void data;
  // Wire to e.g. `await fetch("/api/contact", { method: "POST", body: data })`
  await new Promise((r) => setTimeout(r, 700));
}

function FormField({ field }: { field: ContactFormField }) {
  const inputId = field.id;

  return (
    <div className={field.colClass}>
      <div className="form-group">
        <label className="visually-hidden" htmlFor={inputId}>
          {field.label}
        </label>
        {field.type === "textarea" ? (
          <textarea
            id={inputId}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            rows={field.rows ?? 4}
            maxLength={field.maxLength}
            autoComplete={field.autoComplete}
            spellCheck
          />
        ) : (
          <input
            id={inputId}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            autoComplete={field.autoComplete}
            inputMode={field.type === "tel" ? "tel" : undefined}
          />
        )}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm(new FormData(form));
      setStatus("success");
      form.reset();
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
        successTimeoutRef.current = null;
      }, 5000);
    } catch {
      setStatus("error");
    }
  }, []);

  const isSubmitting = status === "submitting";
  const buttonLabel = isSubmitting
    ? contactFormCopy.submittingLabel
    : contactFormCopy.submitLabel;

  return (
    <form
      className="contact-form"
      data-aos="fade-left"
      data-aos-duration={AOS_DURATION}
      data-aos-delay={contactFormCopy.aosDelay}
      method="post"
      onSubmit={handleSubmit}
    >
      <h2 className="title">{contactFormCopy.title}</h2>

      <div
        className="mb-3"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "success" ? (
          <p className="mb-0 text-success small">{contactFormCopy.successMessage}</p>
        ) : null}
        {status === "error" ? (
          <p className="mb-0 text-danger small">{contactFormCopy.errorMessage}</p>
        ) : null}
      </div>

      <div className="row">
        {contactFormFields.map((field) => (
          <FormField key={field.id} field={field} />
        ))}
        <div className="col-lg-8">
          <div className="form-group mb-0">
            <button
              type="submit"
              className="btn-style1"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {buttonLabel}
              <span>
                <Image
                  src="/assets/images/icon/arrow.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
