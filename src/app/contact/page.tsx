"use client";

import { useForm, ValidationError } from "@formspree/react";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";

const services = {
  en: [
    {
      icon: "🤖",
      title: "AI Agents & Automation",
      desc: "Build custom autonomous pipelines, multi-agent orchestrations, and LLM-powered workflows for your business.",
    },
    {
      icon: "🌐",
      title: "Network Architecture",
      desc: "Design and optimize CDN, edge computing, and distributed systems at scale.",
    },
    {
      icon: "⚡",
      title: "Infrastructure Consulting",
      desc: "Technical advisory on cloud architecture, performance optimization, and system design.",
    },
    {
      icon: "🔬",
      title: "Research Collaboration",
      desc: "Co-author papers, contribute to open-source, or collaborate on applied research.",
    },
  ],
  fr: [
    {
      icon: "🤖",
      title: "Agents IA & Automatisation",
      desc: "Construisez des pipelines autonomes, des orchestrations multi-agents et des workflows alimentés par LLM.",
    },
    {
      icon: "🌐",
      title: "Architecture Réseau",
      desc: "Concevez et optimisez les CDN, l'edge computing et les systèmes distribués à grande échelle.",
    },
    {
      icon: "⚡",
      title: "Conseil en Infrastructure",
      desc: "Accompagnement technique sur l'architecture cloud, l'optimisation des performances et la conception de systèmes.",
    },
    {
      icon: "🔬",
      title: "Collaboration Recherche",
      desc: "Co-rédigez des articles, contribuez à l'open-source ou collaborez sur de la recherche appliquée.",
    },
  ],
};

const interests = {
  en: [
    "AI Agents & Automation",
    "Network Architecture",
    "Infrastructure Consulting",
    "Research Collaboration",
    "Speaking / Talk",
    "Website Design",
    "Other",
  ],
  fr: [
    "Agents IA & Automatisation",
    "Architecture Réseau",
    "Conseil en Infrastructure",
    "Collaboration Recherche",
    "Conférence / Parole",
    "Conception de Site Web",
    "Autre",
  ],
};

function ContactForm({ isFr, tInterests }: { isFr: boolean; tInterests: string[] }) {
  const [state, handleSubmit] = useForm("mkoyqdla");

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {isFr ? "Message envoyé !" : "Message Sent!"}
        </h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
            {isFr ? "Nom complet" : "Full Name"}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            maxLength={100}
            placeholder={isFr ? "Votre nom" : "Your name"}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition placeholder:text-gray-400"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            maxLength={150}
            placeholder={isFr ? "votre@email.com" : "your@email.com"}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition placeholder:text-gray-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
          {isFr ? "Entreprise (optionnel)" : "Company (optional)"}
        </label>
        <input
          id="company"
          type="text"
          name="company"
          maxLength={100}
          placeholder={isFr ? "Votre entreprise" : "Your company"}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition placeholder:text-gray-400"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
          {isFr ? "Sujet" : "Topic"}
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition bg-white placeholder:text-gray-400"
        >
          <option value="">
            {isFr ? "Sélectionnez un sujet" : "Select a topic"}
          </option>
          {tInterests.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ValidationError prefix="Interest" field="interest" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase mb-1">
          {isFr ? "Message" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder={
            isFr
              ? "Décrivez votre projet, vos besoins, votre calendrier..."
              : "Describe your project, your needs, and your timeline..."
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition resize-none placeholder:text-gray-400"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 bg-gray-800 hover:bg-gray-900 disabled:bg-gray-400 text-white font-semibold rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {state.submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {isFr ? "Envoi en cours..." : "Sending..."}
          </>
        ) : (
          isFr ? "Envoyer le message" : "Send Message"
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";
  const langKey = lang as "en" | "fr";
  const tServices = services[langKey];
  const tInterests = interests[langKey];

  return (
    <main className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center md:py-12 md:px-8">
      {/* Hero */}
      <section
        className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden md:rounded-3xl"
        style={{
          backgroundImage: "url('/headerimages/1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        <div className="relative px-6 py-12 md:px-16 md:py-20">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-3 drop-shadow-lg md:text-5xl">
                {isFr ? "Conseil & Collaboration" : "Tech Consulting & Collaboration"}
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl max-w-2xl mx-auto">
                {isFr
                  ? "Vous avez un projet technique ? Je propose du consulting en IA, réseaux informatiques, conception de sites web et architecture de systèmes."
                  : "Have a technical project? I offer consulting in AI agents, computer networks, website design, and systems architecture."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-5xl mt-8 md:mt-10">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200 flex gap-4 items-start"
              >
                <span className="text-2xl mt-0.5 shrink-0">{svc.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{svc.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Contact Section */}
      <section className="relative w-full max-w-5xl mt-6 rounded-2xl shadow-lg bg-gray-200 overflow-hidden md:mt-8 md:rounded-3xl">
        <div className="grid md:grid-cols-5 gap-0">

          {/* Left — Info */}
          <div className="md:col-span-2 bg-gray-800 p-8 md:p-10 text-white flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-xl font-bold mb-5">
                {isFr ? "Me contacter" : "Get in Touch"}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  {isFr
                    ? "Remplissez le formulaire ou contactez-moi directement pour discuter de votre projet."
                    : "Fill out the form or reach out directly to discuss your project."}
                </p>
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 mt-0.5">✉️</span>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide text-gray-400 mb-0.5">Email</p>
                      <a href="mailto:roderick@roderickfanou.com" className="hover:underline text-white/90 text-sm">
                        roderick@roderickfanou.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 mt-0.5">💻</span>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide text-gray-400 mb-0.5">GitHub</p>
                      <a href="https://github.com/rodricfanou" target="_blank" rel="noopener noreferrer" className="hover:underline text-white/90 text-sm">
                        github.com/rodricfanou
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400 mt-0.5">💼</span>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide text-gray-400 mb-0.5">LinkedIn</p>
                      <a href="https://linkedin.com/in/roderickfanou" target="_blank" rel="noopener noreferrer" className="hover:underline text-white/90 text-sm">
                        linkedin.com/in/roderickfanou
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3 p-8 md:p-12 bg-white">
            <FadeIn>
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {isFr ? "Envoyez-moi un message" : "Send me a message"}
              </h2>
              <ContactForm isFr={isFr} tInterests={tInterests} />
              <p className="text-xs text-gray-400 mt-4 text-center">
                {isFr
                  ? "Propulsé par Formspree — votre email reste privée."
                  : "Powered by Formspree — your email stays private."}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}