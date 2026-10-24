import Image from "next/image";
import Link from "next/link";
import DataLink from "@/components/common/DataLink";
import AnnouncementBar from "./AnnouncementBar";
import HeaderNav from "./HeaderNav";
import HamburgerButton from "./HamburgerButton";
import StickyHeaderRoot from "./StickyHeaderRoot";
import { header } from "@/data/header";

const imgStyle = { width: "auto", height: "auto", maxWidth: "100%" } as const;

export default function Header() {
  const { logo, dropdownIcon, menu, toolbar } = header;

  return (
    <>
      <AnnouncementBar />
      <StickyHeaderRoot>
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="header-left">
                  <div className="header-logo header-logo--main">
                    <Link href={logo.href} className="logo" title={logo.title}>
                      <Image
                        src="/assets/images/logo.png"
                        alt="Division Flow"
                        width={600}
                        height={465}
                        className="site-logo"
                        priority
                      />
                    </Link>
                  </div>

                  <nav
                    className="main-menu11 main-menu11--flat menu-style11"
                    aria-label="Main Navigation"
                  >
                    <HeaderNav menu={menu} dropdownIcon={dropdownIcon} />
                  </nav>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="header-btn">
                  <DataLink
                    href={toolbar.login.href}
                    className={`btn-style1 no-icon ${toolbar.login.variant}`}
                  >
                    {toolbar.login.label}
                  </DataLink>
                  <DataLink
                    href={toolbar.subscribeCta.href}
                    className={`btn-style1 no-icon ${toolbar.subscribeCta.variant}`}
                  >
                    {toolbar.subscribeCta.label}
                  </DataLink>
                  <HamburgerButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickyHeaderRoot>
    </>
  );
}
