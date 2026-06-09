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
                AI Strategist &amp; Consultant &bull; Internet Scientist &bull; Senior Systems Engineer
              </p>
              <p className="text-sm text-white/80 drop-shadow-sm mt-2 max-w-xl md:text-base">
                Helping organizations understand, build, measure, and optimize complex systems through AI, data, networking, and Internet-scale infrastructure.
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900 md:text-3xl md:text-4xl">Work With Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900 text-base mb-1">AI Consulting</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Helping organizations adopt AI strategically.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900 text-base mb-1">Speaking</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Keynotes, workshops, and conferences.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900 text-base mb-1">Technical Advisory</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Networking, Internet infrastructure, observability, and data systems.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-semibold text-gray-900 text-base mb-1">Training</h3>
                <p className="text-gray-500 text-sm leading-relaxed">AI and technology workshops for teams.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 md:text-3xl">Contact Me</h2>
            <p className="text-gray-700 text-base md:text-lg">
              <a href="mailto:roderick@roderickfanou.com" className="text-blue-600 hover:underline font-medium">
                roderick@roderickfanou.com
              </a>
            </p>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
