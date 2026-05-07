export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      publications: "Publications",
      blog: "Blog",
    },
    footer: {
      quickLinks: "Quick Links",
      contact: "Contact",
      payBill: "Pay Bill",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      publications: "Publications",
      blog: "Blog",
    },
    footer: {
      quickLinks: "Liens Rapides",
      contact: "Contact",
      payBill: "Payer la Facture",
    },
  },
} as const;
