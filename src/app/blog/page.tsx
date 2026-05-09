"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Generating AI Agents Using ChatGPT and Claude",
    date: "2026-05-04",
    excerpt: "How I combine ChatGPT and Claude to build autonomous agents that plan, reason, and execute multi-step tasks. A practical guide to dual-model orchestration.",
    category: "AI",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Building a Daily AI News Agent with ChatGPT and Claude",
    date: "2026-05-04",
    excerpt: "A deep dive into my three-stage pipeline for automated AI news curation: scraping, filtering with GPT-4o-mini, and deep analysis with Claude Sonnet 4.",
    category: "AI",
    readTime: "5 min",
  },
  {
    id: 3,
    title: "From Prompts to Agents: A Practical Framework for Autonomous AI",
    date: "2026-05-09",
    excerpt: "A step-by-step guide to building production-ready AI agents — from simple prompt chaining to tool use, memory, and multi-agent orchestration with guardrails.",
    category: "AI",
    readTime: "5 min",
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md"
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
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-30">{post.category}</span>
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
                    className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  );
}
