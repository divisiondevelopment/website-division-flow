"use client";

import { useEffect, useState, type ReactNode } from "react";

const STICKY_AFTER_SCROLL_PX = 250;

export default function StickyHeaderRoot({ children }: { children: ReactNode }) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY >= STICKY_AFTER_SCROLL_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header-main${sticky ? " sticky" : ""}`}>
      {children}
    </header>
  );
}
