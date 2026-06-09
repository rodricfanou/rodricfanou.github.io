"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

const projects = {
  en: [
    {
      icon: "🏠",
      title: "Summit Global Property Platform",
      client: "Summit Global Property",
      tag: "Web Development",
      result: "Modern web presence",
      desc: "Built a responsive, SEO-optimized website for a property management firm featuring property listings, virtual tours, and an integrated inquiry system that increased lead generation by 45%.",
      metrics: ["45% more leads", "60% faster load time", "Mobile-first design"],
      url: "https://summitglobalproperty.com/",
    },
    {
      icon: "🏘️",
      title: "Real Estate AI Showcase",
      client: "AI-Generated Content",
      tag: "AI Automation",
      result: "10 sample listings",
      desc: "10 professional real estate listings generated entirely with AI, demonstrating how AI can produce high-quality property descriptions, pricing, and features.",
      metrics: ["AI-generated", "Under 2 minutes", "Production-ready"],
      url: "/real-estate-showcase",
    },
  ],
  fr: [
    {
      icon: "🏠",
      title: "Plateforme Summit Global Property",
      client: "Summit Global Property",
      tag: "Développement Web",
      result: "Présence web moderne",
      desc: "Site web responsive et optimisé SEO pour une société de gestion immobilière avec listes de propriétés, visites virtuelles et système de demandes intégré, augmentant la génération de leads de 45%.",
      metrics: ["45% plus de leads", "60% temps de charge réduit", "Design mobile"],
      url: "https://summitglobalproperty.com/",
    },
    {
      icon: "🏘️",
      title: "Réalisations Immobilières IA",
      client: "Contenu Généré par IA",
      tag: "Automatisation IA",
      result: "10 annonces exemples",
      desc: "10 annonces immobilières professionnelles générées entièrement par l'IA, démontrant comment l'IA peut produire des descriptions de propriétés de haute qualité.",
      metrics: ["Généré par IA", "Moins de 2 minutes", "Prêt à l'emploi"],
      url: "/real-estate-showcase",
    },
  ],
};

function ProjectCard({ item }: { item: (typeof projects.en)[number] }) {
  const Card = item.url ? "a" : "div";
  const props = item.url
    ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Card
      {...props}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
    >
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">{item.icon}</span>
          <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
            {item.tag}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-700 transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          {item.client}
        </p>
        <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
          {item.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.metrics.map((m) => (
            <span
              key={m}
              className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-[11px] font-medium"
            >
              {m}
            </span>
          ))}
        </div>
        <div className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full inline-block">
          {item.result}
        </div>
      </div>
    </Card>
  );
}

export default function Showcase() {
  const { lang } = useLanguage();
  const isFr = lang === "fr";
  const items = projects[lang as "en" | "fr"];

  return (
    <main className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center md:py-12 md:px-8">
      {/* Hero */}
      <section
        className="relative w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden md:rounded-3xl"
        style={{
          backgroundImage: "url('/headerimages/1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
        <div className="relative px-6 py-14 md:px-16 md:py-24">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-3 drop-shadow-lg md:text-5xl">
                {isFr ? "Études de Cas" : "Case Studies"}
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl max-w-3xl mx-auto">
                {isFr
                  ? "Découvrez comment j'ai aidé des organisations à résoudre des défis complexes grâce à l'IA, aux réseaux, au cloud et à la transformation numérique."
                  : "See how I've helped organizations solve complex challenges through AI, networking, cloud, and digital transformation."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demo Video Section — commented out until video is ready */}
      {/*
      <section className="relative w-full max-w-6xl mt-8 rounded-2xl shadow-lg px-6 py-10 md:mt-10 md:rounded-3xl md:px-16 md:py-14 bg-gray-200">
        <FadeIn>
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            {isFr ? "Vidéo de Démonstration" : "Demo Video"}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6 max-w-2xl mx-auto">
            {isFr
              ? "Un aperçu de 2 minutes de mon approche de consulting et de l'impact de mes projets."
              : "A 2-minute overview of my consulting approach and project impact."}
          </p>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title={isFr ? "Vidéo de démonstration" : "Demo video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-3">
            {isFr
              ? "Remplacez VIDEO_ID par l'ID de votre vidéo YouTube."
              : "Replace VIDEO_ID with your YouTube video ID."}
          </p>
        </FadeIn>
      </section>
      */}

      {/* Projects Grid */}
      <section className="w-full max-w-4xl mt-8 md:mt-10">
        <FadeIn>
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {isFr ? "Projets à la Une" : "Featured Projects"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="relative w-full max-w-6xl mt-8 rounded-2xl shadow-lg px-6 py-10 md:mt-10 md:rounded-3xl md:px-16 md:py-14 bg-gray-800 text-white text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-3">
            {isFr ? "Prêt à Travailler Ensemble ?" : "Ready to Work Together?"}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-6">
            {isFr
              ? "Si l'un de ces projets ressemble à ce dont vous avez besoin, je serais ravi d'en discuter. Contactez-moi pour une consultation gratuite."
              : "If any of these projects sound like what you need, I'd love to discuss. Reach out for a free consultation."}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            {isFr ? "Me Contacter" : "Get in Touch"}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
