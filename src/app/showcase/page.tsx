"use client";

import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

const caseStudies = {
  en: [
    {
      icon: "🚚",
      title: "AI Strategy for Global Logistics",
      client: "FreightFlow Inc.",
      tag: "AI Consulting",
      result: "30% cost reduction",
      desc: "Designed and deployed a predictive AI system that optimized route planning and inventory management across 12 warehouses, reducing operational costs by 30% and delivery times by 22%.",
      metrics: ["30% cost reduction", "22% faster deliveries", "12 warehouses"],
    },
    {
      icon: "🌐",
      title: "Network Infrastructure Overhaul",
      client: "Nexus Telecom",
      tag: "Networking",
      result: "99.99% uptime",
      desc: "Led a complete redesign of the core network infrastructure for a regional ISP, implementing redundant BGP peering, traffic engineering, and real-time monitoring to achieve 99.99% uptime.",
      metrics: ["99.99% uptime", "50% latency reduction", "3× throughput"],
    },
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
      icon: "📊",
      title: "AI-Powered Analytics Dashboard",
      client: "DataVision Telecom",
      tag: "Data & AI",
      result: "Real-time insights",
      desc: "Architected a real-time analytics platform processing 10M+ network events daily, with ML-powered anomaly detection and interactive dashboards that reduced incident response time by 60%.",
      metrics: ["10M+ events/day", "60% faster response", "99% detection rate"],
    },
    {
      icon: "☁️",
      title: "Cloud Migration & Observability",
      client: "FinServe Group",
      tag: "DevOps",
      result: "Zero downtime migration",
      desc: "Migrated 200+ microservices from on-premise to AWS with full observability stack (Prometheus, Grafana, Loki). Achieved zero-downtime cutover and reduced infrastructure costs by 35%.",
      metrics: ["Zero downtime", "35% cost savings", "200+ microservices"],
    },
    {
      icon: "🏛️",
      title: "Digital Transformation for Government",
      client: "Ministry of Digital Affairs",
      tag: "Digital Transformation",
      result: "2M+ citizens served",
      desc: "Advised on the digital transformation of citizen services, designing a secure, scalable platform that now serves over 2 million citizens with 99.95% availability.",
      metrics: ["2M+ citizens", "99.95% availability", "40+ services"],
    },
    {
      icon: "🎓",
      title: "Enterprise AI Training Program",
      client: "GlobalTech Corp.",
      tag: "Training",
      result: "500+ employees trained",
      desc: "Developed and delivered a comprehensive AI literacy and adoption program for a multinational with teams across 4 continents, covering AI strategy, prompt engineering, and responsible AI.",
      metrics: ["500+ employees", "4 continents", "92% satisfaction"],
    },
    {
      icon: "📡",
      title: "IoT Network Architecture",
      client: "SmartCity Solutions",
      tag: "Networking",
      result: "10,000+ devices supported",
      desc: "Designed a scalable IoT network architecture supporting 10,000+ concurrent devices with LoRaWAN, 5G, and edge computing, enabling real-time smart city monitoring and automation.",
      metrics: ["10,000+ devices", "5G + LoRaWAN", "Edge computing"],
    },
    {
      icon: "🔒",
      title: "Cybersecurity Posture Assessment",
      client: "SecureBank Ltd.",
      tag: "Security",
      result: "150+ vulnerabilities fixed",
      desc: "Conducted a comprehensive security audit encompassing network penetration testing, SOC 2 gap analysis, and employee training. Remediated 150+ vulnerabilities and achieved SOC 2 certification.",
      metrics: ["SOC 2 certified", "150+ vulnerabilities", "Zero breaches"],
    },
    {
      icon: "🤖",
      title: "ML Model Deployment Pipeline",
      client: "AI-Core Analytics",
      tag: "MLOps",
      result: "80% faster deployment",
      desc: "Built an end-to-end MLOps pipeline with automated CI/CD, model versioning, A/B testing, and monitoring. Reduced model deployment time from weeks to hours while maintaining 99.5% accuracy.",
      metrics: ["80% faster deploys", "99.5% accuracy", "CI/CD automation"],
    },
  ],
  fr: [
    {
      icon: "🚚",
      title: "Stratégie IA pour la Logistique Globale",
      client: "FreightFlow Inc.",
      tag: "Conseil en IA",
      result: "30% de réduction des coûts",
      desc: "Conception et déploiement d'un système d'IA prédictive optimisant la planification des itinéraires et la gestion des stocks dans 12 entrepôts, réduisant les coûts de 30% et les délais de livraison de 22%.",
      metrics: ["30% moins de coûts", "22% livraisons plus rapides", "12 entrepôts"],
    },
    {
      icon: "🌐",
      title: "Refonte de l'Infrastructure Réseau",
      client: "Nexus Telecom",
      tag: "Réseaux",
      result: "99.99% de disponibilité",
      desc: "Refonte complète de l'infrastructure réseau centrale d'un FAI régional avec peering BGP redondant, ingénierie du trafic et surveillance en temps réel pour atteindre 99.99% de disponibilité.",
      metrics: ["99.99% disponibilité", "50% moins de latence", "3× débit"],
    },
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
      icon: "📊",
      title: "Tableau de Bord Analytique par IA",
      client: "DataVision Telecom",
      tag: "Données & IA",
      result: "Informations en temps réel",
      desc: "Architecture d'une plateforme d'analyse en temps réel traitant 10M+ événements réseau par jour, avec détection d'anomalies par ML et tableaux de bord interactifs réduisant le temps de réponse de 60%.",
      metrics: ["10M+ événements/jour", "60% réponse plus rapide", "99% détection"],
    },
    {
      icon: "☁️",
      title: "Migration Cloud & Observabilité",
      client: "FinServe Group",
      tag: "DevOps",
      result: "Migration sans interruption",
      desc: "Migration de 200+ microservices sur site vers AWS avec stack d'observabilité complète (Prometheus, Grafana, Loki). Coupure zéro et réduction des coûts d'infrastructure de 35%.",
      metrics: ["Zéro interruption", "35% économies", "200+ microservices"],
    },
    {
      icon: "🏛️",
      title: "Transformation Numérique Gouvernementale",
      client: "Ministère du Numérique",
      tag: "Transformation Digitale",
      result: "2M+ citoyens servis",
      desc: "Conseil sur la transformation numérique des services citoyens : plateforme sécurisée et scalable servant plus de 2 millions de citoyens avec 99.95% de disponibilité.",
      metrics: ["2M+ citoyens", "99.95% disponibilité", "40+ services"],
    },
    {
      icon: "🎓",
      title: "Programme de Formation IA en Entreprise",
      client: "GlobalTech Corp.",
      tag: "Formation",
      result: "500+ employés formés",
      desc: "Programme complet de formation à l'IA pour une multinationale sur 4 continents, couvrant la stratégie IA, l'ingénierie des prompts et l'IA responsable.",
      metrics: ["500+ employés", "4 continents", "92% satisfaction"],
    },
    {
      icon: "📡",
      title: "Architecture Réseau IoT",
      client: "SmartCity Solutions",
      tag: "Réseaux",
      result: "10 000+ appareils supportés",
      desc: "Architecture réseau IoT scalable supportant 10 000+ appareils simultanés avec LoRaWAN, 5G et edge computing pour la surveillance et l'automatisation de villes intelligentes.",
      metrics: ["10 000+ appareils", "5G + LoRaWAN", "Edge computing"],
    },
    {
      icon: "🔒",
      title: "Évaluation de la Posture Cybersécurité",
      client: "SecureBank Ltd.",
      tag: "Sécurité",
      result: "150+ vulnérabilités corrigées",
      desc: "Audit de sécurité complet incluant tests de pénétration réseau, analyse des écarts SOC 2 et formation des employés. Obtention de la certification SOC 2.",
      metrics: ["Certifié SOC 2", "150+ vulnérabilités", "Zéro incident"],
    },
    {
      icon: "🤖",
      title: "Pipeline de Déploiement de Modèles ML",
      client: "AI-Core Analytics",
      tag: "MLOps",
      result: "80% déploiement plus rapide",
      desc: "Pipeline MLOps complet avec CI/CD automatisé, versionnement de modèles, tests A/B et monitoring. Réduction du temps de déploiement de semaines à heures avec 99.5% de précision.",
      metrics: ["80% plus rapide", "99.5% précision", "CI/CD automatisé"],
    },
  ],
};

function CaseStudyCard({ item }: { item: (typeof caseStudies.en)[number] }) {
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
  const items = caseStudies[lang as "en" | "fr"];

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

      {/* Demo Video Section */}
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

      {/* Case Studies Grid */}
      <section className="w-full max-w-6xl mt-8 md:mt-10">
        <FadeIn>
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {isFr ? "Projets Récents" : "Featured Projects"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => (
              <CaseStudyCard key={item.title} item={item} />
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
