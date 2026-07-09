export type StartedStepItem = {
  id: number;
  aos: string;
  delay: number;
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export const startedStepsData: StartedStepItem[] = [
  {
    id: 1,
    aos: "fade-right",
    delay: 300,
    icon: "/assets/images/icon/choose1-1.svg",
    alt: "Ícone de Cadastro e Configuração",
    title: "Cadastre-se e Configure",
    description:
      "Crie sua conta em minutos e configure facilmente o CRM para refletir o processo comercial da sua empresa — sem precisar de código.",
  },
  {
    id: 2,
    aos: "fade-up",
    delay: 400,
    icon: "/assets/images/icon/choose1-2.svg",
    alt: "Ícone de Conexão e Automação",
    title: "Conecte e Automatize",
    description:
      "Integre suas ferramentas favoritas, importe seus contatos e configure fluxos de automação para economizar tempo desde o primeiro dia.",
  },
  {
    id: 3,
    aos: "fade-left",
    delay: 500,
    icon: "/assets/images/icon/choose1-3.svg",
    alt: "Ícone de Lançamento e Crescimento",
    title: "Lance e Cresça",
    description:
      "Use a plataforma para otimizar suas operações, aumentar a produtividade da equipe e escalar seu negócio com insights em tempo real.",
  },
];
