const onepageHeaderData = {
  logo: {
    href: "/",
    title: "Home",
    alt: "Division Flow — CRM com IA",
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
    search: {
      href: "#",
      ariaLabel: "Search",
      icon: {
        src: "/assets/images/icon/search.svg",
        alt: "Search Icon",
        width: 20,
        height: 20,
      },
    },
    buttons: [
      {
        label: "Entrar",
        href: "#",
        variantClass: "v3",
      },
      {
        label: "Cadastrar",
        href: "#",
        variantClass: "v2",
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
