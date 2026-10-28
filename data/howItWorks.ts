export type HowItWorksItem = {
  id: number;
  icon: string;
  alt: string;
  text: string;
};

export const howItWorksData: HowItWorksItem[] = [
  {
    id: 1,
    icon: "/assets/images/icon/choose1-1.svg",
    alt: "Ícone de Cadastro e Configuração",
    text: "Contatos e clientes num Kanban visual, sem planilha.",
  },
  {
    id: 2,
    icon: "/assets/images/icon/choose1-2.svg",
    alt: "Ícone de Conexão e Automação",
    text: "Propostas e contratos direto na plataforma.",
  },
  {
    id: 3,
    icon: "/assets/images/icon/choose1-3.svg",
    alt: "Ícone de Lançamento e Crescimento",
    text: "Pós-venda e recorrência, sem perder o fio.",
  },
];
