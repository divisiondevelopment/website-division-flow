export type ContactFormField = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  colClass: string;
  rows?: number;
  maxLength?: number;
};

export const contactFormCopy = {
  title: "Precisa de Ajuda? Fale Conosco",
  submitLabel: "Enviar Mensagem",
  submittingLabel: "Enviando…",
  successMessage: "Mensagem enviada com sucesso! Retornaremos em breve.",
  errorMessage: "Não foi possível enviar. Por favor, tente novamente em instantes.",
  aosDelay: 300,
  arrowAlt: "Ícone de seta",
};

export const contactFormFields: ContactFormField[] = [
  {
    id: "contact-name",
    name: "name",
    label: "Seu nome",
    type: "text",
    placeholder: "Seu Nome",
    autoComplete: "name",
    required: true,
    colClass: "col-lg-6",
  },
  {
    id: "contact-phone",
    name: "phone",
    label: "Telefone",
    type: "tel",
    placeholder: "Telefone",
    autoComplete: "tel",
    colClass: "col-lg-6",
  },
  {
    id: "contact-email",
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Seu E-mail",
    autoComplete: "email",
    required: true,
    colClass: "col-lg-12",
  },
  {
    id: "contact-message",
    name: "message",
    label: "Sua mensagem",
    type: "textarea",
    placeholder: "Sua Mensagem",
    autoComplete: "off",
    required: true,
    colClass: "col-lg-12",
    rows: 5,
    maxLength: 2000,
  },
];
