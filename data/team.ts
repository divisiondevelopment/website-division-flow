export type TeamSocialLink = {
  id: number;
  href: string;
  iconSrc: string;
  iconAlt: string;
};

export type TeamMember = {
  id: number;
  imageSrc: string;
  imageAlt: string;
  profileHref: string;
  name: string;
  role: string;
  headingTag: "h3" | "h4";
  aosDelay: number;
  socialLinks: TeamSocialLink[];
};

const socialLinksFor = (name: string): TeamSocialLink[] => [
  {
    id: 1,
    href: "#",
    iconSrc: "/assets/images/icon/facebook.svg",
    iconAlt: `Facebook de ${name}`,
  },
  {
    id: 2,
    href: "#",
    iconSrc: "/assets/images/icon/linkedin.svg",
    iconAlt: `LinkedIn de ${name}`,
  },
  {
    id: 3,
    href: "#",
    iconSrc: "/assets/images/icon/twitter.svg",
    iconAlt: `Twitter de ${name}`,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    imageSrc: "/assets/images/author/auther1-1.png",
    imageAlt: "Foto de Daniel Rivera",
    profileHref: "#",
    name: "Daniel Rivera",
    role: "Co-Fundador & CEO",
    headingTag: "h3",
    aosDelay: 200,
    socialLinks: socialLinksFor("Daniel Rivera"),
  },
  {
    id: 2,
    imageSrc: "/assets/images/author/auther1-2.png",
    imageAlt: "Foto de Anika Roy",
    profileHref: "#",
    name: "Anika Roy",
    role: "Co-Fundadora & CTO",
    headingTag: "h3",
    aosDelay: 300,
    socialLinks: socialLinksFor("Anika Roy"),
  },
  {
    id: 3,
    imageSrc: "/assets/images/author/auther1-3.png",
    imageAlt: "Foto de James T",
    profileHref: "#",
    name: "James T",
    role: "Head de Produto",
    headingTag: "h3",
    aosDelay: 400,
    socialLinks: socialLinksFor("James T"),
  },
  {
    id: 4,
    imageSrc: "/assets/images/author/auther1-4.png",
    imageAlt: "Foto de Emily Carter",
    profileHref: "#",
    name: "Emily Carter",
    role: "Head de Vendas",
    headingTag: "h3",
    aosDelay: 500,
    socialLinks: socialLinksFor("Emily Carter"),
  },
];
