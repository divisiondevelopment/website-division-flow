export type CountdownPartKey = "days" | "hours" | "minutes" | "seconds";

export type CountdownPart = {
  key: CountdownPartKey;
  label: string;
};

export const comingSoonContent = {
  lead: "Em Breve",
  title: "Algo Incrível Está a Caminho",
  description:
    "Estamos trabalhando nos bastidores para trazer a você uma experiência totalmente nova no CRM com IA.",
  countdownTargetIso: "2028-01-01T00:00:00",
  notify: {
    emailPlaceholder: "Digite seu e-mail",
    buttonText: "Me Avise",
    arrowIcon: {
      src: "/assets/images/icon/arrow.svg",
      alt: "Ícone de seta",
      width: 12,
      height: 12,
    },
  },
};

export const countdownParts: CountdownPart[] = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];
