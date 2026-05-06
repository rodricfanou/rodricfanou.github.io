import FadeIn from "@/components/FadeIn";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const posts: Record<string, { title: string; date: string; readTime: string; content: React.ReactNode }> = {
    "1": {
      title: "Generating AI Agents Using ChatGPT and Claude",
      date: "2026-05-04",
      readTime: "5 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg">
          <p>
            I&apos;ve been experimenting with AI agents — autonomous systems that can plan, reason, and execute multi-step tasks. The most effective approach I&apos;ve found involves combining ChatGPT and Claude, leveraging their complementary strengths.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Why Two Models?</h2>
          <p>
            ChatGPT excels at creative ideation and rapid iteration, while Claude shines at structured reasoning and longer-context analysis. My typical workflow uses ChatGPT for brainstorming and code scaffolding, then Claude for review, refinement, and edge-case handling.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The Architecture</h2>
          <p>
            A simple coordinator agent delegates tasks to specialized sub-agents, each backed by a different model:
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`class AgentCoordinator:
    def __init__(self):
        self.chatgpt = OpenAI()
        self.claude = anthropic.Anthropic()

    def brainstorm(self, task: str) -> str:
        return self.chatgpt.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": task}]
        )

    def refine(self, draft: str) -> str:
        return self.claude.messages.create(
            model="claude-sonnet-4-20250514",
            messages=[{"role": "user", "content": f"Review: {draft}"}
        )`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Prompt Patterns That Work</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Role assignment:</strong> Give each agent a specific persona and expertise area.</li>
            <li><strong>Chain-of-thought:</strong> Ask agents to reason step-by-step before producing output.</li>
            <li><strong>Self-correction loops:</strong> Have Claude review ChatGPT&apos;s output and flag issues.</li>
            <li><strong>Structured outputs:</strong> Enforce JSON or markdown for reliable parsing.</li>
          </ul>

          <p>
            Key takeaways:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Start simple — a two-agent coordinator is enough for most tasks.</li>
            <li>Don&apos;t over-prompt. Clear instructions are better than complex ones.</li>
            <li>Always keep a human-in-the-loop for critical decisions.</li>
            <li>Cache responses to reduce cost and latency.</li>
          </ul>

          <p>
            The future of AI agents isn&apos;t about finding the single best model — it&apos;s about orchestrating multiple models to play to their individual strengths.
          </p>
        </div>
      ),
    },
    "2": {
      title: "Building a Daily AI News Agent with ChatGPT and Claude",
      date: "2026-05-04",
      readTime: "5 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg">
          <p>
            The AI field moves too fast for any human to track comprehensively. I used to spend 30-45 minutes each morning scanning Hacker News, ArXiv, and various newsletters — and still missed things. So I built an agent that does it for me in under a minute.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The Pipeline</h2>
          <p>
            My agent runs daily on a cron schedule with three stages:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Scrape &amp; Collect</strong> — Gather raw content from 10+ sources (ArXiv, HN, RSS feeds, GitHub trends).</li>
            <li><strong>ChatGPT — First Pass Filter</strong> — Process items in parallel, tag by category, and score relevance (1-10). Fast and cheap.</li>
            <li><strong>Claude — Deep Analysis</strong> — Take the top ~15 items, produce summaries, cross-reference, and flag hype.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900">Stage 2: The Fast Filter</h2>
          <p>
            I use GPT-4o-mini for filtering — it&apos;s fast and cheap. The prompt returns structured JSON:
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`PROMPT = """
For each item, return:
- category: [research, product, infra, policy, opinion]
- relevance_score: 1-10
- one_sentence_summary: max 15 words

Items: {items_json}
Respond as JSON only.
"""`}</pre>
          </div>

          <p>
            From ~150 raw items, this filters down to 15-25 that score 6+. Cost: ~$0.05/day.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Stage 3: Claude&apos;s Deep Analysis</h2>
          <p>
            Claude Sonnet 4 receives the filtered items and produces a structured briefing with sections for major developments, notable research, infrastructure changes, and a &quot;signal vs noise&quot; assessment. Its strength is synthesizing information across sources and applying contextual judgment — often noticing connections ChatGPT misses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Delivery &amp; Cost</h2>
          <p>
            The briefing arrives via email at 7 AM (3-5 minutes to read), with an optional Telegram bot. Cost breakdown:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 px-4">Stage</th>
                  <th className="text-left py-2 px-4">Model</th>
                  <th className="text-left py-2 px-4">Cost/day</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">Scrape</td>
                  <td className="py-2 px-4">—</td>
                  <td className="py-2 px-4">$0.00</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">Filter</td>
                  <td className="py-2 px-4">GPT-4o-mini</td>
                  <td className="py-2 px-4">~$0.05</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">Analysis</td>
                  <td className="py-2 px-4">Claude Sonnet 4</td>
                  <td className="py-2 px-4">~$0.15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Total: ~$6/month. Less than a cup of coffee for a personalized briefing better than any newsletter.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Iterative Improvements</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Feedback loop:</strong> Thumbs-up/down on items adjusts scoring weights weekly.</li>
            <li><strong>Deduplication:</strong> Hash-based dedup avoids processing the same story from multiple sources.</li>
            <li><strong>Historical context:</strong> Claude has access to a rolling 30-day index for tracking evolving stories.</li>
            <li><strong>Weekend mode:</strong> Synthesizes the past 7 days into a longer, reflective piece.</li>
          </ul>

          <p>
            The lesson: AI agents don&apos;t need to be complex. The best ones solve a specific, recurring pain point with a simple pipeline. Start small, measure value, and iterate.
          </p>
        </div>
      ),
    },
  };

  const post = posts[id];

  if (!post) {
    return (
      <main className="bg-gray-100 min-h-screen py-12 px-4 md:px-8 flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-3xl font-bold text-gray-900">Post not found</h1>
          <a href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
            &larr; Back to blog
          </a>
        </div>
      </main>
    );
  }

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>

        <div className="relative px-6 py-12 md:px-16 md:py-16">
          <FadeIn>
            <div className="text-center text-white">
              <h1 className="text-3xl font-extrabold mb-2 drop-shadow-lg md:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-white/80 text-sm mt-4">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>&bull;</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article */}
      <article className="relative w-full max-w-5xl mt-8 bg-white rounded-2xl shadow-lg px-6 py-12 md:mt-10 md:rounded-3xl md:px-16 md:py-16">
        <FadeIn>
          {post.content}
        </FadeIn>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/blog" className="text-blue-600 hover:underline font-medium">
            &larr; Back to all posts
          </a>
        </div>
      </article>
    </main>
  );
}
