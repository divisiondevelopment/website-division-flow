export type BillingPeriod = "monthly" | "yearly";

export type PricingTab = {
  id: BillingPeriod;
  label: string;
  saveBadge?: string;
};

export type PricingPlanPrice = {
  amount: string;
  periodNote: string;
};

export type PricingPlan = {
  id: string;
  cardVariant?: "v2";
  icon: string;
  iconAlt: string;
  titleTag: "h2" | "h3";
  priceTag: "h3" | "h4";
  title: string;
  description: string;
  monthly: PricingPlanPrice;
  yearly: PricingPlanPrice;
  ctaHref: string;
  ctaLabel: string;
  features: string[];
  aosDelay: number;
};

export const pricingAssets = {
  checkIcon: "/assets/images/icon/check1-2.svg",
  checkAlt: "Incluso",
  arrowIcon: "/assets/images/icon/arrow.svg",
  arrowAlt: "Ícone de seta",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    icon: "/assets/images/icon/price1-1.svg",
    iconAlt: "Ícone do Plano Starter",
    titleTag: "h2",
    priceTag: "h3",
    title: "Flow",
    description:
      "Ideal para profissionais autônomos e pequenas equipes que estão começando no CRM.",
    monthly: { amount: "R$24,90", periodNote: "/mês" },
    yearly: { amount: "R$24,90", periodNote: "/mês" },
    ctaHref: "https://app.divisionflow.com/checkout?plan=flow",
    ctaLabel: "Começar Agora",
    features: [
      "1 usuário",
      "5 GB de armazenamento",
      "150 créditos de prospecção por mês",
      "Calendário",
      "Dashboard básica",
    ],
    aosDelay: 300,
  },
  {
    id: "professional",
    cardVariant: "v2",
    icon: "/assets/images/icon/price1-2.svg",
    iconAlt: "Ícone do Plano Pro",
    titleTag: "h3",
    priceTag: "h4",
    title: "Flow Pro",
    description: "Para equipes em crescimento que precisam de mais flexibilidade e automação.",
    monthly: { amount: "R$74,90", periodNote: "/mês" },
    yearly: { amount: "R$74,90", periodNote: "/mês" },
    ctaHref: "https://app.divisionflow.com/checkout?plan=flow_pro",
    ctaLabel: "Começar Agora",
    features: [
      "5 usuários",
      "20 GB de armazenamento",
      "450 créditos de prospecção por mês",
      "Calendário",
      "Dashboard básica",
      "Módulo de IA",
      "Suporte personalizado",
    ],
    aosDelay: 400,
  },
];
