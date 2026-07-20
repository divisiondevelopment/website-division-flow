const onepageHeaderData = {
  logo: {
    href: "/",
    title: "Home",
    alt: "Division Flow — CRM para Equipes de Alta Performance",
    lightSrc: "/assets/images/logo.svg",
    darkSrc: "/assets/images/logo-dark.svg",
    width: 140,
    height: 40,
  },
  menuItems: [
    { label: "Início", href: "/onepage-landing#Home", section: "Home" },
    {
      label: "Funcionalidades",
      href: "/onepage-landing#Features",
      section: "Features",
    },
    { label: "Preços", href: "/onepage-landing#Pricing", section: "Pricing" },
    { label: "Contato", href: "/onepage-landing#Contact", section: "Contact" },
  ],
  mobile: {
    closeIcon: {
      src: "/assets/images/icon/xmark2.svg",
      alt: "Close Menu",
      width: 20,
      height: 20,
    },
  },
  toolbar: {
    buttons: [
      {
        label: "Entrar",
        href: "https://app.divisionflow.com",
        variantClass: "v3",
      },
    ],
    arrowIcon: {
      src: "/assets/images/icon/arrow.svg",
      alt: "Arrow Icon",
      width: 14,
      height: 14,
    },
  },
} as const;

export default onepageHeaderData;
