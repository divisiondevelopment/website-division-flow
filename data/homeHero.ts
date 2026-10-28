export type HomeHeroData = {
  titleBefore: string;
  rotatingWords: string[];
  titleAfter: string;
  description: string;
  form: {
    placeholder: string;
    buttonText: string;
    buttonIcon: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  images: {
    light: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    dark: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
};

export const homeHeroData: HomeHeroData = {
  titleBefore: "O CRM simples pra quem cansou de gerenciar leads no ",
  rotatingWords: ["Excel", "WhatsApp", "e-mail", "papel"],
  titleAfter: "",
  description:
    "Contatos, propostas, contratos e projetos. Do primeiro contato ao pós-venda, tudo num CRM simples, sem planilha e sem perder cliente no WhatsApp.",
  form: {
    placeholder: "Digite seu e-mail corporativo",
    buttonText: "Solicitar uma Demo",
    buttonIcon: {
      src: "/assets/images/icon/arrow.svg",
      alt: "Ícone de seta",
      width: 16,
      height: 16,
    },
  },
  images: {
    light: {
      src: "/assets/images/bg/hero1-1.png",
      alt: "Dashboard do CRM Division Flow",
      width: 1280,
      height: 941,
    },
    dark: {
      src: "/assets/images/bg/hero1-1-dark.png",
      alt: "Dashboard do CRM Division Flow — modo escuro",
      width: 1400,
      height: 1007,
    },
  },
};
