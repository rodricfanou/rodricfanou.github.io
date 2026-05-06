"use client";

import { useEffect, useState } from "react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div
      className="transition-opacity duration-1000"
      style={{ opacity: mounted ? 1 : 0, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  type: "journal" | "conference";
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Unintended Consequences: Effects of Submarine Cable Deployment on Internet Routing",
    authors: "R. Fanou, B. Huffaker, R. Mok, KC. Claffy",
    journal: "Passive and Active Measurement (PAM 2020)",
    year: 2020,
    doi: "10.1007/978-3-030-44081-7_13",
    abstract: "This paper analyzes how submarine cable deployments impact Internet routing, revealing unintended consequences on traffic patterns, latency, and path diversity. Awarded Best Paper at PAM 2020.",
    type: "conference",
  },
  {
    id: 2,
    title: "On the Diversity of Interdomain Routing in Africa",
    authors: "R. Fanou, P. Francois, E. Aben",
    journal: "Passive and Active Measurement (PAM 2015)",
    year: 2015,
    doi: "10.1007/978-3-319-15509-8_4",
    abstract: "This paper presents the first comprehensive study of the diversity of interdomain routing in Africa, analyzing BGP data to reveal the unique characteristics of African Internet routing infrastructure.",
    type: "conference",
  },
  {
    id: 3,
    title: "Pushing the Frontier: Exploring the African Web Ecosystem",
    authors: "R. Fanou, G. Tyson, P. Francois, A. Sathiaseelan",
    journal: "The Web Conference (WWW 2016)",
    year: 2016,
    doi: "10.1145/2872427.2882997",
    abstract: "A large-scale measurement study of the African web ecosystem, revealing the structure, hosting patterns, and content delivery characteristics of websites across the continent.",
    type: "conference",
  },
  {
    id: 4,
    title: "Investigating the Causes of Congestion on the African IXP Substrate",
    authors: "R. Fanou, F. Valera, A. Dhamdhere",
    journal: "Internet Measurement Conference (IMC 2017)",
    year: 2017,
    doi: "10.1145/3131365.3131394",
    abstract: "This work investigates the causes and characteristics of congestion at African Internet Exchange Points (IXPs), providing insights into traffic patterns and peering dynamics.",
    type: "conference",
  },
  {
    id: 5,
    title: "Reshaping the African Internet: From Scattered Islands to a Connected Continent",
    authors: "R. Fanou, F. Valera, P. Francois, A. Dhamdhere",
    journal: "Computer Communications 113, 25-42",
    year: 2017,
    doi: "10.1016/j.comcom.2017.09.006",
    abstract: "This paper analyzes the evolution of African Internet infrastructure, documenting the transition from isolated networks to an increasingly interconnected continental ecosystem.",
    type: "journal",
  },
  {
    id: 6,
    title: "Exploring and Analysing the African Web Ecosystem",
    authors: "R. Fanou, G. Tyson, E.L. Fernandes, P. Francois, F. Valera, A. Sathiaseelan",
    journal: "ACM Transactions on the Web 12 (4)",
    year: 2018,
    doi: "10.1145/3213897",
    abstract: "An extended journal version presenting a comprehensive analysis of the African web, including hosting infrastructure, content delivery, and accessibility patterns across the continent.",
    type: "journal",
  },
  {
    id: 7,
    title: "Four Years Tracking Unrevealed Topological Changes in the African Interdomain",
    authors: "R. Fanou, P. Francois, E. Aben, M. Mwangi, N. Goburdhan, F. Valera",
    journal: "Computer Communications 106, 117-135",
    year: 2017,
    doi: "10.1016/j.comcom.2017.02.014",
    abstract: "This paper presents a four-year longitudinal study of topological changes in the African interdomain routing landscape, uncovering previously unreported dynamics and evolution patterns.",
    type: "journal",
  },
];

const PublicationCard = ({ pub, expandedId, setExpandedId, index }: { pub: Publication; expandedId: number | null; setExpandedId: (id: number | null) => void; index: number }) => {
  const isBestPaper = pub.id === 1;
  return (
  <FadeIn key={pub.id} delay={index * 100}>
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 md:rounded-2xl md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900 mb-1 md:text-xl">{pub.title}</h2>
          <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-blue-600 font-medium">{pub.journal}</span>
            <span className="text-gray-400">&bull;</span>
            <span className="text-gray-500">{pub.year}</span>
            {isBestPaper && (
              <>
                <span className="text-gray-400">&bull;</span>
                <span className="text-red-600 font-bold">Best Paper</span>
              </>
            )}
          </div>
        </div>
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start shrink-0 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          DOI
        </a>
      </div>

      <button
        onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
        className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        {expandedId === pub.id ? "Hide abstract" : "Show abstract"}
      </button>

      {expandedId === pub.id && (
        <p className="mt-3 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {pub.abstract}
        </p>
      )}
    </article>
  </FadeIn>
  );
};

export default function Publications() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const journals = publications.filter((p) => p.type === "journal").sort((a, b) => b.year - a.year);
  const conferences = publications.filter((p) => p.type === "conference").sort((a, b) => b.year - a.year);

  return (
    <main className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center relative md:py-12 md:px-8">

      {/* Hero */}
      <section
        className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden md:rounded-3xl"
        style={{
          backgroundImage: "url('/headerimages/1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>

        <div className="relative px-6 py-12 md:px-16 md:py-16">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg md:text-5xl">
                Top Publications
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl">
                Peer-reviewed research and contributions to the scientific community.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Conferences */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-gray-900 md:text-2xl md:text-3xl">Conferences</h2>
        <div className="space-y-4 md:space-y-6">
          {conferences.map((pub, i) => (
            <PublicationCard key={pub.id} pub={pub} expandedId={expandedId} setExpandedId={setExpandedId} index={i} />
          ))}
        </div>
      </section>

      {/* Journals */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-gray-900 md:text-2xl md:text-3xl">Journals</h2>
        <div className="space-y-4 md:space-y-6">
          {journals.map((pub, i) => (
            <PublicationCard key={pub.id} pub={pub} expandedId={expandedId} setExpandedId={setExpandedId} index={i} />
          ))}
        </div>
      </section>

      {/* References */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-gray-900 md:text-2xl md:text-3xl">References</h2>
        <FadeIn>
          <a
            href="https://users.caida.org/~roderick/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            CAIDA Profile &rarr;
          </a>
        </FadeIn>
      </section>

    </main>
  );
}
