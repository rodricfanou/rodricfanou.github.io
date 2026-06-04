"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const serviceCategories = [
  {
    title: "AI Consulting",
    icon: "🤖",
    items: [
      { name: "AI Readiness", desc: "Assess your organization's data, infrastructure, and team readiness for AI adoption." },
      { name: "AI Strategy", desc: "Develop a roadmap aligned with your business goals — from opportunity identification to deployment." },
      { name: "AI Adoption", desc: "Guide your teams through the transition: tooling, workflows, change management, and governance." },
    ],
  },
  {
    title: "Speaking",
    icon: "🎙️",
    items: [
      { name: "AI", desc: "Keynotes and panels on AI trends, agentic systems, and real-world deployment lessons." },
      { name: "Internet Infrastructure", desc: "Talks on Internet measurement, BGP routing, IXPs, and the evolution of global connectivity." },
      { name: "Future of Work", desc: "How AI and automation are reshaping jobs, skills, and organizational structures." },
      { name: "Digital Transformation", desc: "Strategic perspectives on technology adoption in emerging markets and developing regions." },
    ],
  },
  {
    title: "Technical Advisory",
    icon: "⚙️",
    items: [
      { name: "Network Monitoring", desc: "Design and implement monitoring systems for large-scale network infrastructure." },
      { name: "Internet Measurement", desc: "Custom measurement studies: topology, performance, routing, and CDN analysis." },
      { name: "Data Systems", desc: "Architecture, pipeline design, and real-time analytics for data-intensive applications." },
      { name: "Observability", desc: "Build observability strategies — metrics, logs, traces — for distributed systems." },
    ],
  },
  {
    title: "Training",
    icon: "📚",
    items: [
      { name: "AI Training", desc: "Hands-on training programs tailored to your team's skill level and use cases." },
      { name: "Team Workshops", desc: "Collaborative sessions to align technical and non-technical teams on AI strategy and execution." },
      { name: "AI Productivity Training", desc: "Practical training on leveraging AI tools to improve daily workflows and decision-making." },
    ],
  },
];

export default function Services() {
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
                Services
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl max-w-2xl mx-auto">
                AI consulting, speaking, technical advisory, and training — helping organizations navigate technology and infrastructure at scale.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, i) => (
        <section
          key={category.title}
          className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-10 md:mt-10 md:rounded-3xl md:px-16 md:py-14 bg-gray-200 transition-shadow duration-300 hover:shadow-xl"
        >
          <FadeIn delay={i * 100}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      ))}

      {/* CTA */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-10 md:mt-10 md:rounded-3xl md:px-16 md:py-14 bg-gray-800 text-white text-center">
        <FadeIn>
          <h2 className="text-xl font-bold mb-3 md:text-2xl">Let&apos;s Work Together</h2>
          <p className="text-sm text-gray-300 mb-6 max-w-xl mx-auto md:text-base">
            Have a project, a talk proposal, or a challenge you need help with? Reach out and let&apos;s discuss how I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors shadow-md"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}
