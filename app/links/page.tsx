import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import styles from "./links.module.css";

export const metadata: Metadata = {
  title: "Division Flow — Links",
  robots: { index: false, follow: false },
};

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={styles.linkIcon}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.235 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.133-.606.151-.149.297-.347.446-.52.148-.173.198-.297.297-.496.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.057 3.133 4.986 4.27.232.09.422.172.572.22.468.15.892.129 1.228.078.374-.057 1.153-.472 1.315-.928.164-.456.164-.846.114-.927z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={styles.linkIcon}
    >
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.789-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C20.6.935 19.932.522 19.14.63c-.766-.297-1.636-.499-2.913-.558C14.933.012 14.526 0 12.001 0zm-.001 2.161c3.237 0 3.584.015 4.85.072 1.169.054 1.805.249 2.227.415.56.217.96.477 1.382.898.421.422.681.822.898 1.382.164.422.36 1.058.413 2.227.058 1.266.07 1.613.07 4.85s-.012 3.585-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.56-.477.96-.898 1.382-.422.42-.822.68-1.382.897-.422.165-1.058.36-2.227.413-1.266.059-1.613.07-4.85.07s-3.584-.011-4.85-.07c-1.17-.054-1.805-.248-2.227-.413-.56-.217-.96-.477-1.382-.897-.421-.422-.68-.822-.898-1.382-.164-.422-.36-1.057-.413-2.227-.059-1.265-.07-1.613-.07-4.85s.012-3.584.07-4.85c.054-1.169.249-1.805.413-2.227.217-.56.477-.96.898-1.382.422-.421.822-.68 1.382-.898.422-.165 1.057-.36 2.227-.413 1.266-.058 1.613-.07 4.85-.07zm0 3.678a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
    </svg>
  );
}

const links = [
  {
    label: "WhatsApp",
    subtitle: "Resposta rápida pelo WhatsApp",
    href: "https://wa.me/5551995829213",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Site",
    subtitle: "Conheça a plataforma",
    href: "https://divisionflow.com",
    icon: <Globe className={styles.linkIcon} />,
  },
  {
    label: "Instagram",
    subtitle: "Acompanhe as novidades",
    href: "https://www.instagram.com/divisionflow.app",
    icon: <InstagramIcon />,
  },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5551995829213",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/divisionflow.app",
    icon: <InstagramIcon />,
  },
];

export default function LinksPage() {
  return (
    <div className={styles.page}>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#6c33ff" />
      <div className={styles.card}>
        <div className={styles.logoBadge}>
          <Image
            src="/assets/images/logo.png"
            alt="Division Flow"
            width={600}
            height={465}
            className={styles.logo}
            priority
          />
        </div>
        <h1 className={styles.title}>Division Flow</h1>
        <p className={styles.subtitle}>Sua gestão em fluxo</p>
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <span className={styles.linkIconWrap}>{link.icon}</span>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkSubtitle}>{link.subtitle}</span>
              </span>
              <ExternalLink className={styles.externalIcon} />
            </a>
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.socialRow}>
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={styles.socialIconLink}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className={styles.copyright}>
            © 2026 Division Flow. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
