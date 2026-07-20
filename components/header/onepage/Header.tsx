"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "@/components/header/onepage/MobileMenu";
import headerData from "@/data/onepage-header";

const ONEPAGE_ACTIVE_MENU_EVENT = "onepage-active-menu-change";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { logo, menuItems, toolbar } = headerData;
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onActiveMenuChange = (event: Event) => {
      const custom = event as CustomEvent<string>;
      if (typeof custom.detail === "string") setActiveSection(custom.detail);
    };
    window.addEventListener(ONEPAGE_ACTIVE_MENU_EVENT, onActiveMenuChange);
    return () => {
      window.removeEventListener(ONEPAGE_ACTIVE_MENU_EVENT, onActiveMenuChange);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
    window.dispatchEvent(
      new CustomEvent<string>(ONEPAGE_ACTIVE_MENU_EVENT, { detail: section }),
    );
  };

  return (
    <>
      <header className={`header-main ${isSticky ? "sticky" : ""}`.trim()}>
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row">
              {/* Logo */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="header-logo">
                  <Link href="/" className="logo" title={logo.title}>
                    <span className="logo-text">Division Flow</span>
                  </Link>
                </div>
              </div>
              {/* Navigation Menu */}
              <div className="col-lg-6">
                <nav className="main-menu11 v2 menu-style11 one_page_nav">
                  <ul>
                    {menuItems.map((item) => (
                      <li
                        key={item.href}
                        className={
                          activeSection === item.section ? "active" : ""
                        }
                      >
                        <ScrollLink
                          to={item.section}
                          title={item.label}
                          smooth={true}
                          spy={true}
                          duration={500}
                          offset={-90}
                          onSetActive={(section: string) =>
                            handleMenuClick(section)
                          }
                          onClick={() => handleMenuClick(item.section)}
                        >
                          {item.label}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/* Buttons */}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="header-btn">
                  {toolbar.buttons.map((button) => (
                    <a
                      key={button.label}
                      href={button.href}
                      className={`btn-style1 ${button.variantClass}`}
                    >
                      {button.label}
                      <span>
                        <Image
                          src={toolbar.arrowIcon.src}
                          alt={toolbar.arrowIcon.alt}
                          width={toolbar.arrowIcon.width}
                          height={toolbar.arrowIcon.height}
                        />
                      </span>
                    </a>
                  ))}
                  <button
                    className="hamburger-btn"
                    aria-label="Toggle Menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
