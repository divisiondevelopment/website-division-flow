"use client";

import Image from "next/image";
import DataLink from "@/components/common/DataLink";
import { header } from "@/data/header";
import HeaderNav from "./HeaderNav";
import { useMobileMenu } from "./MobileMenuProvider";

export default function MobileMenu() {
  const { dropdownIcon, menu, mobile, toolbar } = header;
  const { isOpen, close } = useMobileMenu();

  return (
    <>
      <div
        className={`mobile-menu${isOpen ? " active" : ""}`}
        id="mobile-navigation"
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="close-btn"
          style={{ background: "none", border: "none", padding: 0 }}
          onClick={close}
          aria-label="Close menu"
        >
          <Image
            src={mobile.closeIcon.src}
            alt="close"
            width={mobile.closeIcon.width}
            height={mobile.closeIcon.height}
            aria-hidden
          />
        </button>
        <nav className="main-menu11 menu-style11" aria-label="Main Navigation">
          <HeaderNav menu={menu} dropdownIcon={dropdownIcon} accordion />
        </nav>
        <DataLink
          href={toolbar.login.href}
          className="btn-style1 mobile-menu-login"
        >
          {toolbar.login.label}
          <span>
            <Image
              src={toolbar.login.arrowIcon.src}
              alt={toolbar.login.arrowIcon.alt}
              width={toolbar.login.arrowIcon.width}
              height={toolbar.login.arrowIcon.height}
            />
          </span>
        </DataLink>
      </div>
      <div
        className={`menu-overlay${isOpen ? " active" : ""}`}
        aria-hidden={!isOpen}
        onClick={close}
      />
    </>
  );
}
