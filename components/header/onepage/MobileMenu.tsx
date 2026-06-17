import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import headerData from "@/data/onepage-header";

const ONEPAGE_ACTIVE_MENU_EVENT = "onepage-active-menu-change";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuClassName = `mobile-menu ${isOpen ? "active" : ""}`.trim();
  const overlayClassName = `menu-overlay ${isOpen ? "active" : ""}`.trim();
  const { menuItems, mobile } = headerData;
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
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

  const isActiveMenuItem = (section: string) => {
    return activeSection === section;
  };

  const syncActiveSection = (section: string) => {
    setActiveSection(section);
    window.dispatchEvent(
      new CustomEvent<string>(ONEPAGE_ACTIVE_MENU_EVENT, { detail: section }),
    );
  };

  const handleMenuClick = (section: string) => {
    syncActiveSection(section);
    onClose();
  };

  return (
    <>
      <div className={menuClassName}>
        {/* Close Button */}
        <button
          type="button"
          className="close-btn"
          aria-label="Close Menu"
          onClick={onClose}
        >
          <Image
            src={mobile.closeIcon.src}
            alt={mobile.closeIcon.alt}
            width={mobile.closeIcon.width}
            height={mobile.closeIcon.height}
          />
        </button>
        <nav className="main-menu11 v3 menu-style11 one_page_nav p-0">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.href}
                className={[
                  isActiveMenuItem(item.section) ? "active" : "",
                  hoveredHref === item.href ? "hover-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onMouseEnter={() => setHoveredHref(item.href)}
                onMouseLeave={() =>
                  setHoveredHref((prev) => (prev === item.href ? null : prev))
                }
              >
                <ScrollLink
                  to={item.section}
                  title={item.label}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-90}
                  onSetActive={(section: string) => syncActiveSection(section)}
                  onClick={() => handleMenuClick(item.section)}
                  className={isActiveMenuItem(item.section) ? "active" : ""}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={overlayClassName}
        role="button"
        tabIndex={0}
        aria-label="Close Menu Overlay"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
      />
    </>
  );
};

export default MobileMenu;
