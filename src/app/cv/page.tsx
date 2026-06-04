"use client";

import FadeIn from "@/components/FadeIn";

export default function CV() {
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
                CV
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl max-w-2xl mx-auto">
                Work experience, skills, and professional background.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Work Experience */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <FadeIn>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 md:text-3xl">Work Experience</h2>
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
      </section>

      {/* Skills */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <FadeIn>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 md:text-3xl">Skills</h2>
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
