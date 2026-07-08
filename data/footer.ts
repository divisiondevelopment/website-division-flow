export type SocialLink = {
  href: string;
  icon: string;
  alt: string;
  width: number;
  height: number;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  delay: number;
  links: FooterLink[];
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/",
    icon: "/assets/images/icon/facebook.svg",
    alt: "Ícone do Facebook",
    width: 10,
    height: 10,
  },
  {
    href: "https://twitter.com/",
    icon: "/assets/images/icon/twitter.svg",
    alt: "Ícone do Twitter",
    width: 16,
    height: 16,
  },
  {
    href: "https://www.linkedin.com/",
    icon: "/assets/images/icon/linked-in.svg",
    alt: "Ícone do LinkedIn",
    width: 16,
    height: 16,
  },
  {
    href: "https://www.youtube.com/",
    icon: "/assets/images/icon/youtube.svg",
    alt: "Ícone do YouTube",
    width: 16,
    height: 16,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Produto",
    delay: 200,
    links: [
      { label: "Funcionalidades", href: "/#features" },
      { label: "Preços", href: "/#pricing" },
      { label: "Contato", href: "/#Contact" },
    ],
  },
  {
    title: "Empresa",
    delay: 300,
    links: [
      { label: "Privacidade", href: "/privacy" },
      { label: "Termos de Uso", href: "/terms" },
      { label: "Reembolso", href: "/refund" },
    ],
  },
  {
    title: "Recursos",
    delay: 400,
    links: [
      { label: "CRM com IA", href: "/#features" },
      { label: "Automações", href: "/#features" },
      { label: "Dashboards", href: "/#features" },
    ],
  },
  {
    title: "Links Úteis",
    delay: 500,
    links: [{ label: "Minha Conta", href: "/" }],
  },
];
