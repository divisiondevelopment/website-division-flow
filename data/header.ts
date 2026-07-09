export type HeaderImageSpec = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type HeaderNavLeaf = {
  label: string;
  href: string;
};

export type HeaderNavSubmenu = {
  label: string;
  href: string;
  children: HeaderNavLeaf[];
};

export type HeaderNavDropdownChild = HeaderNavLeaf | HeaderNavSubmenu;

export type HeaderNavDropdown = {
  label: string;
  href: string;
  dropdownVariant?: string;
  children: HeaderNavDropdownChild[];
};

export type HeaderNavTopItem = HeaderNavLeaf | HeaderNavDropdown;

export function isDropdown(item: HeaderNavTopItem): item is HeaderNavDropdown {
  return "children" in item && Array.isArray(item.children);
}

export function isSubmenu(
  item: HeaderNavDropdownChild,
): item is HeaderNavSubmenu {
  return "children" in item && Array.isArray(item.children);
}

export const headerMenu: HeaderNavTopItem[] = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Preços", href: "#pricing" },
  { label: "Contato", href: "#Contact" },
];

const logo = {
  href: "/",
  title: "Home",
  alt: "Division Flow — CRM para Equipes de Alta Performance",
  lightSrc: "/assets/images/logo.svg",
  darkSrc: "/assets/images/logo-dark.svg",
  width: 140,
  height: 40,
};

const dropdownIcon: HeaderImageSpec = {
  src: "/assets/images/icon/angel.svg",
  alt: "image",
  width: 12,
  height: 12,
};

const mobile = {
  closeIcon: {
    src: "/assets/images/icon/xmark2.svg",
    alt: "Close Menu",
    width: 24,
    height: 24,
  } satisfies HeaderImageSpec,
};

const toolbar = {
  search: {
    href: "#",
    ariaLabel: "Search",
    icon: {
      src: "/assets/images/icon/search.svg",
      alt: "Search Icon",
      width: 20,
      height: 20,
    } satisfies HeaderImageSpec,
  },
  login: {
    href: "#",
    label: "Entrar",
    variant: "v3",
    arrowIcon: {
      src: "/assets/images/icon/arrow.svg",
      alt: "Arrow Icon",
      width: 12,
      height: 12,
    } satisfies HeaderImageSpec,
  },
  signUp: {
    href: "#",
    label: "Cadastrar",
    variant: "v2",
    arrowIcon: {
      src: "/assets/images/icon/arrow.svg",
      alt: "Arrow Icon",
      width: 12,
      height: 12,
    } satisfies HeaderImageSpec,
  },
};

/** Logo, toolbar, and `menu` (same as `headerMenu`). Used by `Header` and `MobileMenu`. */
export const header = {
  logo,
  dropdownIcon,
  mobile,
  toolbar,
  menu: headerMenu,
};
