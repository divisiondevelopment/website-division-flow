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
    title: "Organize seus contatos",
    description:
      "Todos os seus leads e clientes num Kanban visual. Sem planilha, sem duplicar cadastro.",
  },
  {
    id: 2,
    aos: "fade-up",
    delay: 400,
    icon: "/assets/images/icon/choose1-2.svg",
    alt: "Ícone de Conexão e Automação",
    title: "Feche contratos mais rápido",
    description:
      "Propostas, contratos e documentos direto na plataforma. Assinatura e acompanhamento sem sair do CRM.",
  },
  {
    id: 3,
    aos: "fade-left",
    delay: 500,
    icon: "/assets/images/icon/choose1-3.svg",
    alt: "Ícone de Lançamento e Crescimento",
    title: "Acompanhe cada projeto",
    description:
      "Do orçamento à entrega, veja o status de tudo num painel só — sem perguntar 'como que tá aquele projeto?' no WhatsApp.",
  },
];
