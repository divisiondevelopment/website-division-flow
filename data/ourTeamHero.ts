export type OurTeamHeroImage = {
  id: number;
  src: string;
  alt: string;
  colClass: string;
  aosDelay: number;
};

export type OurTeamHeroContent = {
  breadcrumb: string;
  title: string;
  description: string;
};

export const ourTeamHeroContent: OurTeamHeroContent = {
  breadcrumb: "Our Team",
  title: "Empowering brands through design and innovation",
  description:
    "Our team of passionate designers, developers, and strategists work together to help businesses grow, adapt, and stand out in the digital world.",
};

export const ourTeamHeroImages: OurTeamHeroImage[] = [
  {
    id: 1,
    src: "/assets/images/hero/page4-1.png",
    alt: "Portfolio showcase image 1",
    colClass: "col-lg-4 col-md-6",
    aosDelay: 300,
  },
  {
    id: 2,
    src: "/assets/images/hero/page4-2.png",
    alt: "Portfolio showcase image 2",
    colClass: "col-lg-8 col-md-6",
    aosDelay: 300,
  },
];
