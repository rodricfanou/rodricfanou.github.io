export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      publications: "Publications",
      blog: "Blog",
      contact: "Services",
      showcase: "Showcase",
    },
    footer: {
      quickLinks: "Quick Links",
      contact: "Contact",
      payBill: "Pay Bill",
      home: "Home",
      publications: "Publications",
      blog: "Blog",
      showcase: "Showcase",
      email: "Email:",
      linkedIn: "LinkedIn",
      googleScholar: "Google Scholar",
      github: "GitHub",
      description: "Internet scientist and Senior Systems Engineer building at the intersection of computer networks, data, and AI.",
      tagline: "Roderick Fanou",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      publications: "Publications",
      blog: "Blog",
      contact: "Contact",
      showcase: "Réalisations",
    },
    footer: {
      quickLinks: "Liens Rapides",
      contact: "Contact",
      payBill: "Payer la Facture",
      home: "Accueil",
      publications: "Publications",
      blog: "Blog",
      showcase: "Réalisations",
      email: "Email :",
      linkedIn: "LinkedIn",
      googleScholar: "Google Scholar",
      github: "GitHub",
      description: "Scientifique Internet et Ingénieur Systèmes senior, construisant à l'intersection des réseaux informatiques, des données et de l'IA.",
      tagline: "Roderick Fanou",
    },
  },
} as const;