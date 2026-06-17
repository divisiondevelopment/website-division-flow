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

export const pricingTabs: PricingTab[] = [
  { id: "monthly", label: "Mensal" },
  { id: "yearly", label: "Anual", saveBadge: "Economize 23%" },
];

export const pricingAssets = {
  checkIcon: "/assets/images/icon/check1-2.svg",
  checkAlt: "Incluso",
  arrowIcon: "/assets/images/icon/arrow.svg",
  arrowAlt: "Ícone de seta",
  creditIcon: "/assets/images/icon/credit.svg",
  creditAlt: "Ícone sem necessidade de cartão de crédito",
  creditText: "Sem necessidade de cartão de crédito",
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    icon: "/assets/images/icon/price1-1.svg",
    iconAlt: "Ícone do Plano Starter",
    titleTag: "h2",
    priceTag: "h3",
    title: "Starter",
    description:
      "Ideal para profissionais autônomos e pequenas equipes que estão começando no CRM.",
    monthly: { amount: "R$39,90", periodNote: "/mês" },
    yearly: { amount: "R$30,70", periodNote: "/mês cobrado anualmente" },
    ctaHref: "#",
    ctaLabel: "Teste Grátis por 14 Dias",
    features: [
      "Até 1 usuário",
      "Acesso básico ao dashboard",
      "Integrações limitadas",
      "Suporte via comunidade",
      "Gestão simples de contatos",
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
    title: "Pro",
    description: "Para equipes em crescimento que precisam de mais flexibilidade e automação.",
    monthly: { amount: "R$69,90", periodNote: "/mês" },
    yearly: { amount: "R$53,82", periodNote: "/mês cobrado anualmente" },
    ctaHref: "#",
    ctaLabel: "Teste Grátis por 10 Dias",
    features: [
      "Até 5 usuários",
      "Dashboard avançado com IA",
      "Integrações completas",
      "Suporte prioritário",
      "Automação de follow-ups",
    ],
    aosDelay: 400,
  },
];
