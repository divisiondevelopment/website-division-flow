import Image from "next/image";
import Link from "next/link";
import DataLink from "@/components/common/DataLink";
import HeaderNav from "./HeaderNav";
import HamburgerButton from "./HamburgerButton";
import StickyHeaderRoot from "./StickyHeaderRoot";
import { header } from "@/data/header";

const imgStyle = { width: "auto", height: "auto", maxWidth: "100%" } as const;

export default function Header() {
  const { logo, dropdownIcon, menu, toolbar } = header;

  return (
    <StickyHeaderRoot>
      <div className="header-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="header-logo">
                <Link href={logo.href} className="logo" title={logo.title}>
                  <span className="logo-text">Division Flow</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <nav
                className="main-menu11 menu-style11"
                aria-label="Main Navigation"
              >
                <HeaderNav menu={menu} dropdownIcon={dropdownIcon} />
              </nav>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="header-btn">
                <DataLink
                  href={toolbar.login.href}
                  className={`btn-style1 ${toolbar.login.variant}`}
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
                <HamburgerButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StickyHeaderRoot>
  );
}
