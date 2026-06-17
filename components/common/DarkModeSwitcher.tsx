"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";

const STORAGE_KEY = "theme-active";

export default function DarkModeSwitcher() {
  // Must match server render; apply real preference after mount (avoids hydration mismatch).
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) === "true";
    document.body.classList.toggle("active", stored);
    startTransition(() => setIsActive(stored));
  }, []);

  const toggleMode = () => {
    setIsActive((prev) => {
      const next = !prev;
      document.body.classList.toggle("active", next);
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return (
    <button
      id="darkModeBtn"
      type="button"
      className={`dark-active${isActive ? " active" : ""}`}
      onClick={toggleMode}
      aria-label="Toggle dark mode"
    >
      <Image
        src="/assets/images/icon/moon.png"
        loading="eager"
        alt="Moon Icon"
        className="moon"
        width={30}
        height={30}
      />
      <Image
        src="/assets/images/icon/sun.png"
        loading="eager"
        alt="Sun Icon"
        className="sun"
        width={30}
        height={30}
      />
    </button>
  );
}
