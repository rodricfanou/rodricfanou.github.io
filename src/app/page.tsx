"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center relative md:py-12 md:px-8">

      {/* Hero / Top Box */}
      <section
        className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden md:rounded-3xl"
        style={{
          backgroundImage: "url('/headerimages/1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>

        {/* Content */}
        <div className="relative px-6 py-12 flex flex-col items-center gap-6 md:px-16 md:py-16 md:flex-row md:items-center md:gap-12">

          {/* Profile picture */}
          <div className="flex-shrink-0 z-10">
            <img
              src="/profilepics/profilepic1.png"
              alt="Roderick Fanou"
              className="w-28 h-28 rounded-full border-4 border-white shadow-2xl object-cover transition-transform duration-300 hover:scale-105 md:w-40 md:h-40"
            />
          </div>

          {/* Name, tagline */}
          <FadeIn>
            <div className="text-center text-white md:text-left">
              <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg md:text-5xl">
                Roderick Fanou
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl font-medium">
                Building at the Intersection of AI, Networks, and Digital Infrastructure
              </p>
              <p className="text-sm text-white/80 drop-shadow-sm mt-2 max-w-xl md:text-base">
                Internet Scientist, Sr. Software Engineer, and Technology Strategist helping organizations understand, measure, and optimize complex systems through AI, data, and Internet-scale infrastructure.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors shadow-md"
                >
                  Work With Me
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors shadow-md border border-white/40"
                >
                  Speaking &amp; Workshops
                </Link>
                <Link
                  href="/blog"
                  className="px-5 py-2.5 bg-white/20 text-white rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors shadow-md border border-white/40"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Work With Me — full-width prominent section */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-white border border-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold mb-3 text-gray-900 md:text-4xl">Work With Me</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Helping organizations leverage AI, data, and Internet-scale systems to improve performance, decision-making, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🤖</span>
                <h3 className="font-semibold text-gray-900 text-sm">AI Strategy &amp; Adoption</h3>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">Identify practical opportunities to use AI, improve productivity, and build an actionable roadmap for implementation.</p>
              <div className="mt-auto">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Ideal for:</p>
                <p className="text-xs text-gray-600 mb-3">Business leaders &bull; Technology teams &bull; Growing organizations</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Outcome:</p>
                <p className="text-xs text-green-700 font-medium">Clear AI strategy with measurable business value.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎙️</span>
                <h3 className="font-semibold text-gray-900 text-sm">AI Workshops &amp; Executive Briefings</h3>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">Interactive sessions that help teams understand AI, automation, and emerging technologies without the hype.</p>
              <div className="mt-auto">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Ideal for:</p>
                <p className="text-xs text-gray-600 mb-3">Leadership teams &bull; Professional organizations &bull; Conferences &bull; Associations</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Outcome:</p>
                <p className="text-xs text-green-700 font-medium">Greater AI literacy, alignment, and confidence.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⚙️</span>
                <h3 className="font-semibold text-gray-900 text-sm">Technical Advisory</h3>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">Guidance on networking, observability, Internet infrastructure, measurement systems, and large-scale data platforms.</p>
              <div className="mt-auto">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Ideal for:</p>
                <p className="text-xs text-gray-600 mb-3">Technology companies &bull; Research organizations &bull; Infrastructure teams</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Outcome:</p>
                <p className="text-xs text-green-700 font-medium">Better visibility, reliability, and system performance.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎤</span>
                <h3 className="font-semibold text-gray-900 text-sm">Speaking &amp; Thought Leadership</h3>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">Keynotes, workshops, and presentations on AI, digital infrastructure, the future of technology, and data-driven decision-making.</p>
              <div className="mt-auto">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Ideal for:</p>
                <p className="text-xs text-gray-600 mb-3">Conferences &bull; Universities &bull; Industry events &bull; Executive retreats</p>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Outcome:</p>
                <p className="text-xs text-green-700 font-medium">Engaging, actionable insights tailored to your audience.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg text-sm transition-colors shadow-md"
            >
              Let's Work Together
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Bottom Box */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 space-y-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 md:space-y-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">

        <FadeIn>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 md:text-3xl md:text-4xl">About Me</h2>
            <p data-justify className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {`I am passionate about the Internet, artificial intelligence, and the systems that power our digital world. With a background as an Internet Scientist specializing in network measurement, monitoring, large-scale data analysis, and real-time systems, I have spent my career exploring how complex networks operate, evolve, and impact society.

Over the years, I transitioned from research into the technology industry, where I have built and operated systems focused on network observability, Internet traffic management, and large-scale infrastructure. This unique combination of research and industry experience allows me to bridge deep technical expertise with practical business outcomes.

Today, my interests span Internet architecture, computer networks, AI, automation, data-driven decision making, and the future of digital infrastructure. I enjoy building innovative solutions, exploring emerging technologies, sharing knowledge through writing, speaking, code, tutorials, and scientific publications, and helping organizations navigate an increasingly connected and AI-driven world.`}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 md:text-3xl md:text-4xl">Common Reasons People Reach Out</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                "Exploring AI adoption",
                "Looking for an AI keynote speaker",
                "Planning an AI workshop",
                "Improving team productivity",
                "Evaluating automation opportunities",
                "Seeking technical expertise in networking and Internet infrastructure",
              ].map((reason) => (
                <div key={reason} className="flex items-center gap-3 text-gray-700 text-base md:text-lg">
                  <span className="text-green-600 text-lg shrink-0">✔</span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 md:text-3xl">Let's Talk</h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Whether you're exploring AI, planning a workshop, seeking a speaker, or tackling a complex technical challenge, I'd be happy to learn more about your goals and discuss how I can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg text-sm transition-colors shadow-md"
              >
                Schedule a Conversation
              </Link>
              <a
                href="mailto:roderick@roderickfanou.com"
                className="px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/roderick-fanou/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
