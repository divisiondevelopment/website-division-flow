"use client";

import { useMobileMenu } from "./MobileMenuProvider";

export default function HamburgerButton() {
  const { isOpen, toggle } = useMobileMenu();

  return (
    <button
      className="hamburger-btn"
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={toggle}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
