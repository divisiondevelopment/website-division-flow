"use client";

import Image from "next/image";
import { header } from "@/data/header";
import { useSearchPopup } from "./SearchPopupProvider";

export default function SearchToggleButton() {
  const { isOpen, toggle } = useSearchPopup();
  const { search } = header.toolbar;

  return (
    <button
      type="button"
      className="search-btn"
      aria-label={search.ariaLabel}
      aria-expanded={isOpen}
      aria-controls="search-popup"
      onClick={toggle}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <Image
        src={search.icon.src}
        alt={search.icon.alt}
        width={search.icon.width}
        height={search.icon.height}
      />
    </button>
  );
}
