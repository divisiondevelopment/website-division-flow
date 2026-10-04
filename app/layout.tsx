import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../public/assets/css/style.css";
import "../public/assets/css/custom.css";
import AOSInit from "@/components/common/AOSInit";
import BootstrapInit from "@/components/common/BootstrapInit";
import { MobileMenuProvider } from "@/components/header/MobileMenuProvider";
import AppToast from "@/components/common/AppToast";
import {
  SITE_DESCRIPTION,
  SITE_TITLE_DEFAULT,
  SITE_TITLE_TEMPLATE_SUFFIX,
} from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE_TITLE_TEMPLATE_SUFFIX}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="main-home">
        <div className="wrapper">
          <Suspense fallback={null}>
            <MobileMenuProvider>
              <Suspense fallback={null}>
                <AOSInit offset={100} anchorPlacement="center-bottom" />
              </Suspense>
              <BootstrapInit />
              {children}
              <AppToast />
            </MobileMenuProvider>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
