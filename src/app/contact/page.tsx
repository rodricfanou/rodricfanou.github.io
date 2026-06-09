"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";

const services = {
  en: [
    {
      icon: "🤖",
      title: "AI Strategy & Adoption",
      desc: "Identify practical opportunities to use AI, improve productivity, and build an actionable roadmap for implementation.",
      idealFor: ["Business leaders", "Technology teams", "Growing organizations"],
      outcome: "Clear AI strategy with measurable business value.",
    },
    {
      icon: "🎙️",
      title: "AI Workshops & Executive Briefings",
      desc: "Interactive sessions that help teams understand AI, automation, and emerging technologies without the hype.",
      idealFor: ["Leadership teams", "Professional organizations", "Conferences", "Associations"],
      outcome: "Greater AI literacy, alignment, and confidence.",
    },
    {
      icon: "⚙️",
      title: "Technical Advisory",
      desc: "Guidance on networking, observability, Internet infrastructure, measurement systems, and large-scale data platforms.",
      idealFor: ["Technology companies", "Research organizations", "Infrastructure teams"],
      outcome: "Better visibility, reliability, and system performance.",
    },
    {
      icon: "🎤",
      title: "Speaking & Thought Leadership",
      desc: "Keynotes, workshops, and presentations on AI, digital infrastructure, the future of technology, and data-driven decision-making.",
      idealFor: ["Conferences", "Universities", "Industry events", "Executive retreats"],
      outcome: "Engaging, actionable insights tailored to your audience.",
    },
  ],
  fr: [
    {
      icon: "🤖",
      title: "Conseil en IA",
      desc: "Aider les organisations à adopter l'IA de manière stratégique.",
      idealFor: ["Business leaders", "Technology teams", "Growing organizations"],
      outcome: "Clear AI strategy with measurable business value.",
    },
    {
      icon: "🎙️",
      title: "Conférences",
      desc: "Keynotes, ateliers et conférences.",
      idealFor: ["Leadership teams", "Professional organizations", "Conferences", "Associations"],
      outcome: "Greater AI literacy, alignment, and confidence.",
    },
    {
      icon: "⚙️",
      title: "Conseil Technique",
      desc: "Réseaux, infrastructure Internet, observabilité et systèmes de données.",
      idealFor: ["Technology companies", "Research organizations", "Infrastructure teams"],
      outcome: "Better visibility, reliability, and system performance.",
    },
    {
      icon: "🎤",
      title: "Speaking & Thought Leadership",
      desc: "Keynotes, workshops, and presentations on AI, digital infrastructure, the future of technology, and data-driven decision-making.",
      idealFor: ["Conferences", "Universities", "Industry events", "Executive retreats"],
      outcome: "Engaging, actionable insights tailored to your audience.",
    },
  ],
};

const interests = {
  en: [
    "AI Consulting",
    "Speaking",
    "Technical Advisory",
    "Training",
    "Other",
  ],
  fr: [
    "Conseil en IA",
    "Conférences",
    "Conseil Technique",
    "Formation",
    "Autre",
  ],
};

const featured = {
  en: [
    {
      icon: "🏠",
      title: "Summit Global Property",
      tag: "Web Development",
      result: "Modern web presence",
      desc: "A responsive, SEO-optimized website for a property management firm with property listings and an inquiry system.",
      url: "https://summitglobalproperty.com/",
    },
    {
      icon: "🏘️",
      title: "Real Estate AI Showcase",
      tag: "AI Automation",
      result: "10 sample listings",
      desc: "See how AI generates professional real estate listings — 10 samples created with AI, with a demo video showing the process.",
      url: "/real-estate-showcase",
    },
  ],
  fr: [
    {
      icon: "🏠",
      title: "Summit Global Property",
      tag: "Développement Web",
      result: "Présence web moderne",
      desc: "Site web responsive et optimisé SEO pour une société de gestion immobilière avec listes de propriétés.",
      url: "https://summitglobalproperty.com/",
    },
    {
      icon: "🏘️",
      title: "Réalisations Immobilières IA",
      tag: "Automatisation IA",
      result: "10 annonces exemples",
      desc: "Découvrez comment l'IA génère des annonces immobilières professionnelles — 10 exemples avec vidéo de démonstration.",
      url: "/real-estate-showcase",
    },
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
  const tFeatured = featured[langKey];

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
                  ? "Vous avez un projet technique ou créatif ? Je propose du consulting en IA, réseaux informatiques, IT, conception de sites web, développement logiciel et plus."
                  : "Have a technical or creative project? I offer consulting in AI, computer networks, IT, web design, software development, and more."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-5xl mt-8 md:mt-10">
        <FadeIn>
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Work With Me</h2>
            <p className="text-gray-500 text-sm mt-1 max-w-2xl mx-auto">
              Helping organizations leverage AI, data, and Internet-scale systems to improve performance, decision-making, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{svc.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{svc.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{svc.desc}</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  {isFr ? "Idéal pour :" : "Ideal for:"}
                </p>
                <p className="text-xs text-gray-600 mb-3">{svc.idealFor.join(" • ")}</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                  {isFr ? "Résultat :" : "Outcome:"}
                </p>
                <p className="text-xs text-green-700 font-medium">{svc.outcome}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Featured Case Studies */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-10 md:mt-10 md:rounded-3xl md:px-16 md:py-12 bg-gray-200">
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {isFr ? "Études de Cas" : "Featured Case Studies"}
            </h2>
            <Link
              href="/showcase"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
            >
              {isFr ? "Voir tout →" : "View all →"}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tFeatured.map((item) => {
              const isExternal = item.url.startsWith("http");
              const Card = isExternal ? "a" : Link;
              const cardProps = isExternal
                ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
                : { href: item.url };
              return (
                <Card
                  key={item.title}
                  {...cardProps}
                  className="block bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    {item.result}
                  </span>
                </Card>
              );
            })}
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
                      <a href="https://www.linkedin.com/in/roderick-fanou/" target="_blank" rel="noopener noreferrer" className="hover:underline text-white/90 text-sm">
                        linkedin.com/in/roderick-fanou
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