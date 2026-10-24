export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "planos",
    question: "Quais planos o Flow oferece?",
    answer:
      "Dois planos: Flow, por R$24,90/mês, com 1 usuário, 5 GB de armazenamento, 150 créditos de prospecção por mês, calendário e dashboard básica; e Flow Pro, por R$74,90/mês, com 5 usuários, 20 GB de armazenamento, 450 créditos de prospecção por mês, calendário, dashboard básica, módulo de IA e suporte personalizado.",
  },
  {
    id: "cobranca",
    question: "Como funciona a cobrança?",
    answer:
      "A cobrança é feita por workspace: cada workspace tem sua própria assinatura, vinculada ao plano escolhido (Flow ou Flow Pro), processada por um gateway de pagamento terceirizado — a Division Flow não armazena dados de cartão de crédito.",
  },
  {
    id: "cancelamento",
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim, o cancelamento pode ser feito a qualquer momento e o acesso permanece ativo até o fim do ciclo de cobrança em curso. Nos primeiros 7 dias após a primeira cobrança (mensal ou anual), o reembolso é integral, sem necessidade de justificativa. Após esse período, não há reembolso proporcional pelo tempo não utilizado.",
  },
  {
    id: "suporte",
    question: "Como falo com o suporte?",
    answer:
      "Pelo e-mail contato@divisiondev.com.br, pelo telefone +55 51 90203-0290 ou pelo WhatsApp +55 51 9582-9213.",
  },
  {
    id: "testar-antes",
    question: "Preciso testar antes de assinar?",
    answer:
      "Não há período de teste — a assinatura do Flow ou do Flow Pro é direta, sem etapa de teste grátis.",
  },
  {
    id: "forma-pagamento",
    question: "Quais formas de pagamento são aceitas?",
    answer: "Você pode assinar com cartão de crédito ou via PIX, com cobrança mensal.",
  },
  {
    id: "trocar-plano",
    question: "Posso trocar de plano depois?",
    answer:
      "É possível fazer upgrade do Flow para o Flow Pro a qualquer momento. Downgrade de um plano para outro não está disponível.",
  },
];
