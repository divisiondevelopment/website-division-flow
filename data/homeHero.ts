export type HomeHeroData = {
  socialProof: {
    avatars: string[];
    text: string;
  };
  title: string;
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
  socialProof: {
    avatars: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg",
    ],
    text: "+20 donos de empresas já usam o Division Flow",
  },
  title: "Chega de planilha e WhatsApp. Tudo num só lugar.",
  description:
    "Division Flow junta contatos, propostas, contratos e projetos num CRM simples de usar — pra você parar de perder tempo (e clientes) entre planilha e WhatsApp.",
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
