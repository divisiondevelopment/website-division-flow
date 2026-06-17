export type OurTeamAnalyticsSectionData = {
  subtitle: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
    iconSrc: string;
    iconAlt: string;
  };
  image: {
    src: string;
    alt: string;
  };
  aos: {
    contentDelay: number;
    imageDelay: number;
    duration: number;
  };
};

export const ourTeamAnalytics: OurTeamAnalyticsSectionData = {
  subtitle: "Resultados de Vendas",
  title: "Visualize Seu Desempenho Anual de Vendas com IA",
  description:
    "Identifique tendências de performance, descubra os principais motores de receita e tome decisões baseadas em dados para escalar mais rápido. Sem planilhas, sem achismos — apenas insights reais que geram resultados reais.",
  cta: {
    label: "Explorar Mais Funcionalidades",
    href: "#",
    iconSrc: "/assets/images/icon/arrow.svg",
    iconAlt: "Ícone de seta",
  },
  image: {
    src: "/assets/images/event/result2-1.png",
    alt: "Visualização de vendas e analytics anuais",
  },
  aos: {
    contentDelay: 300,
    imageDelay: 300,
    duration: 900,
  },
};
