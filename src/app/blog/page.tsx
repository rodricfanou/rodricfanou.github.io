"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  type: "AI+HI" | "HI";
}

const posts: BlogPost[] = [
  {
    id: 9,
    title: "Cape Town: Twenty Essential Encounters in the Mother City",
    date: "2026-06-03",
    excerpt: "From Table Mountain at dawn and Bo-Kaap's painted houses to African penguins at Boulders Beach, the UNESCO-listed Robben Island, and live jazz every night in De Waterkant: an honest four-day account of twenty encounters that explain why Cape Town is one of the most dramatically beautiful cities on earth.",
    category: "Tourism",
    readTime: "5 min",
    type: "HI",
  },
  {
    id: 8,
    title: "This Week in AI: Silicon Valley Heads to Wall Street and the Search Bar Disappears",
    date: "2026-06-03",
    excerpt: "Anthropic filed a confidential S-1 targeting a $1.75 trillion valuation on $47 billion in annualized revenue. Google declared the biggest shift in search in 25 years. Nvidia entered the $200 billion PC chip market, and Anthropic's Claude Mythos discovered more than 10,000 zero-day vulnerabilities across major operating systems in a single month.",
    category: "AI",
    readTime: "5 min",
    type: "HI",
  },
  {
    id: 7,
    title: "Rio de Janeiro: Twenty Essential Encounters in the Cidade Maravilhosa",
    date: "2026-05-27",
    excerpt: "From the hike through Tijuca rainforest to Christ the Redeemer at dawn, Arpoador's applauding crowds at sunset, live samba in Lapa until 4 AM, and Michelin-starred counters in Botafogo: an honest account of twenty encounters that explain why Rio de Janeiro is one of the most dramatically beautiful cities on earth.",
    category: "Tourism",
    readTime: "5 min",
    type: "HI",
  },
  {
    id: 6,
    title: "Tokyo: Twenty Essential Encounters in one of the World's Greatest Cities",
    date: "2026-05-27",
    excerpt: "From the organized bedlam of Shibuya Crossing at midnight to pre-dawn sushi at Tsukiji and jazz until 5 AM in Golden Gai — an honest account of twenty experiences that explain why Tokyo ruins you for every other city.",
    category: "Tourism",
    readTime: "5 min",
    type: "HI",
  },
  {
    id: 5,
    title: "This Week in AI: Google Goes Agentic, OpenAI Proves a Theorem, and ChatGPT Gets Ads",
    date: "2026-05-26",
    excerpt: "An OpenAI reasoning model disproved an 80-year-old conjecture in discrete geometry. Google turned I/O into an agentic product launch with Gemini Spark and Gemini 3.5 Flash. OpenAI expanded its ad platform globally while Anthropic disclosed a model too dangerous to release — and targeted a $900 billion valuation.",
    category: "AI",
    readTime: "5 min",
    type: "HI",
  },
  {
    id: 4,
    title: "Manus AI: The General Purpose Agent That Actually Works",
    date: "2026-05-19",
    excerpt: "Hands-on breakdown of Manus AI — what it is, how it works, and why it represents a real shift from chatbots to autonomous work agents.",
    category: "AI",
    readTime: "6 min",
    type: "HI",
  },
  {
    id: 3,
    title: "From Prompts to Agents: A Practical Framework for Autonomous AI",
    date: "2026-05-09",
    excerpt: "A step-by-step guide to building production-ready AI agents — from simple prompt chaining to tool use, memory, and multi-agent orchestration with guardrails.",
    category: "AI",
    readTime: "5 min",
    type: "HI",
  },
  {
    id: 1,
    title: "Generating AI Agents Using ChatGPT and Claude",
    date: "2026-05-04",
    excerpt: "How I combine ChatGPT and Claude to build autonomous agents that plan, reason, and execute multi-step tasks. A practical guide to dual-model orchestration.",
    category: "AI",
    readTime: "5 min",
    type: "HI",
  },
  {
    id: 2,
    title: "Building a Daily AI News Agent with ChatGPT and Claude",
    date: "2026-05-04",
    excerpt: "A deep dive into my three-stage pipeline for automated AI news curation: scraping, filtering with GPT-4o-mini, and deep analysis with Claude Sonnet 4.",
    category: "AI",
    readTime: "5 min",
    type: "HI",
  },
];

export default function Blog() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const filteredPosts = filter === "All" ? posts : posts.filter((p) => p.category === filter);

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
                Blog
              </h1>
              <p className="text-base text-white/90 drop-shadow-sm md:text-lg md:text-xl">
                Thoughts, tutorials, and things I&apos;ve learned along the way.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16 bg-gray-200 transition-shadow duration-300 hover:shadow-xl">
        <FadeIn>
          <div className="flex flex-wrap gap-2 justify-center mb-6 md:mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 100}>
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:rounded-2xl">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                  <span className="text-white text-4xl font-bold opacity-30">{post.category}</span>
                  <span className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-bold leading-tight shadow-md ${
                    post.type === "AI+HI"
                      ? "bg-yellow-300 text-gray-900"
                      : "bg-gray-300 text-gray-700"
                  }`}>
                    {post.type}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-block text-gray-700 hover:text-gray-900 font-medium text-sm"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Types Explanation */}
      <section className="relative w-full max-w-5xl mt-8 rounded-2xl shadow-lg px-6 py-8 md:rounded-3xl md:px-16 md:py-10 bg-gray-200">
        <FadeIn>
          <div className="text-center text-gray-700">
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-300 text-gray-900 mr-1">AI + HI</span>
              &nbsp;posts are generated by an AI agent and reviewed by Human Intelligence (myself or co-authors).
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-300 text-gray-700 ml-2 mr-1">HI</span>
              &nbsp;posts are written solely by myself or co-authors.
            </p>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
