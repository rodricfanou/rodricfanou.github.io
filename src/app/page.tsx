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
            <p data-justify className="text-gray-700 text-base md:text-lg leading-relaxed">
              I am passionate about the Internet architecture, computer networks, and AI. With a background as an Internet Scientist specialized in Network Measurements, monitoring, big data analysis, and real-time storage, I transitioned to the tech industry as a Systems engineer a few years back. 

              I have developed extensive experience and a robust technical foundation in designing and implementing systems focused on network monitoring and Internet traffic management. 
              
              I enjoy contributing to innovative projects, exploring new technologies, measuring the Internet, and sharing knowledge through code, blog posts, tutorials, and scientific papers.

            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 md:text-3xl md:text-4xl">Work Experience</h2>
            <div className="space-y-8 border-l-2 border-gray-300 ml-3 pl-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">CEO and Founder</h3>
                <p className="text-blue-600 font-medium">Novaris Nexus Tech</p>
                <p className="text-gray-500 text-sm">2026 - Present</p>
                <p className="text-gray-700 mt-2">Building AI-powered solutions and consulting services at the intersection of AI, networking, and infrastructure.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Systems Engineer</h3>
                <p className="text-blue-600 font-medium">Cloudflare, Inc - US</p>
                <p className="text-gray-500 text-sm">2021 - 2026</p>
                <p className="text-gray-700 mt-2">Designed and built scalable systems for Internet traffic management worldwide, network monitoring, and real-time data processing.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Postdoctoral Researcher</h3>
                <p className="text-blue-600 font-medium">CAIDA/UC San Diego at the San Diego Supercomputer Center - US</p>
                <p className="text-gray-500 text-sm">2018 - 2021</p>
                <p className="text-gray-700 mt-2">Conducted large-scale Internet measurements, BGP routing analysis, and submarine cable impact studies. Best Paper Award at PAM 2020.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Assistant Researcher</h3>
                <p className="text-blue-600 font-medium">IMDEA Networks Institute - Spain</p>
                <p className="text-gray-500 text-sm">2013 - 2017</p>
                <p className="text-gray-700 mt-2">Led projects on Internet infrastructure measurements with a focus on developing regions like Afrinic, IXP mapping, interdomain routing analysis, and Content Delivery Networks.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Lead Instructor</h3>
                <p className="text-blue-600 font-medium">Internet Society (ISOC)</p>
                <p className="text-gray-500 text-sm">2013 - 2016</p>
                <p className="text-gray-700 mt-2">Led week-long ISOC IXP workshops across Africa. Trained 40+ renowned engineers, network operators, and policy makers on how to set up an Internet Exchange Points in each country.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 md:text-3xl md:text-4xl">Skills</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Go", "C/C++", "LateX", "Matlab", "R"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Networking & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {["BGP", "DNS", "IXP", "Internet Measurement", "Content Delivery", "Distributed Systems", "RIPE Atlas", "CAIDA Ark", "Network Monitoring"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data & Storage</h3>
                <div className="flex flex-wrap gap-2">
                  {["Big Data", "Real-time Analytics", "Kafka", "PostgreSQL", "Redis", "Elasticsearch", "ClickHouse"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {["GCP", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
