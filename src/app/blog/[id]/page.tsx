import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
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
    "3": {
      title: "From Prompts to Agents: A Practical Framework for Autonomous AI",
      date: "2026-05-09",
      readTime: "5 min",
      content: (
        <div className="space-y-8 text-gray-700 text-base leading-relaxed md:text-lg">
          <p>
            Most AI tutorials stop at prompts. But the real shift happens when you build systems that can perceive, decide, and act — with or without human input. Here is the framework I use to take an idea from single-prompt to production-ready agent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">The Agent Maturity Model</h2>
          <p>
            Not all agents are equal. I think about AI autonomy across four levels:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Level 0 — Prompt:</strong> Single request, single response. No state. ChatGPT at its most basic.</li>
            <li><strong>Level 1 — Chain:</strong> Sequential prompts where output from one becomes input to the next. Memory is minimal.</li>
            <li><strong>Level 2 — Tool Use:</strong> The agent calls external functions — web search, code execution, APIs. This is where autonomy begins.</li>
            <li><strong>Level 3 — Memory:</strong> The agent maintains state across sessions, learns from past interactions, and builds a knowledge base.</li>
            <li><strong>Level 4 — Multi-Agent:</strong> Multiple specialized agents coordinate, delegate, and debate. Emergent behavior begins.</li>
          </ul>
          <p>
            Most production agents today operate at Level 2 or 3. Level 4 is experimental but increasingly practical.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Step 1: Define the Loop</h2>
          <p>
            Every agent is fundamentally a loop: <strong>Perceive → Think → Act → Reflect</strong>. Before writing any code, I map this loop for the task:
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`AGENT LOOP TEMPLATE:
1. PERCEIVE: What triggers the agent? (input, schedule, event)
2. THINK: What model and prompt interpret the input?
3. ACT: What tool(s) does it call?
4. REFLECT: Did the output achieve the goal? Retry or exit?

Edge cases:
- What if the tool fails?
- What if confidence is below threshold?
- When does a human need to be looped in?`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Step 2: Tool Use is Everything</h2>
          <p>
            The difference between a chatbot and an agent is tool access. Without tools, the model is just a prediction engine. With tools, it becomes an actor in the world.
          </p>
          <p>
            My starter toolkit for any agent:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Web search:</strong> Brave Search, Serper, or Tavily for real-time information retrieval.</li>
            <li><strong>Code execution:</strong> Python sandbox or Bash for calculations, file ops, and data processing.</li>
            <li><strong>URL fetch:</strong> Read web pages, scrape data, pull documentation.</li>
            <li><strong>Database:</strong> Query, store, and retrieve structured data — Postgres, Redis, or SQLite.</li>
            <li><strong>Slack/Email:</strong> Deliver results to humans who need them.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Step 3: Guardrails and Fallbacks</h2>
          <p>
            Without guardrails, agents can spiral. I always implement:
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`MAX_STEPS = 10       # Prevent infinite loops
CONFIDENCE_THRESHOLD = 0.7  # Below this, escalate to human
RETRY_LIMIT = 3             # Per tool, before failing gracefully
COST_BUDGET = 0.50          # Per run, hard stop
HUMAN_IN_THE_LOOP = True   # For high-stakes decisions`}</pre>
          </div>

          <p>
            These parameters are tuned per task. A news aggregator can run 50 steps cheaply. A financial trade agent needs strict limits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Step 4: Memory and Context</h2>
          <p>
            Stateless agents forget everything after each run. For tasks that span days or weeks, I implement a simple memory layer:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Short-term:</strong> Conversation context within a session. Handled by the model's context window.</li>
            <li><strong>Medium-term:</strong> Session summaries stored in Redis or a file. Retrieved on next run.</li>
            <li><strong>Long-term:</strong> Vector embeddings in a Pinecone or Weaviate index. Semantic search across all past interactions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Step 5: Orchestration Patterns</h2>
          <p>
            For complex tasks, one agent is not enough. Here are the patterns I use:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Router:</strong> A lightweight model classifies the input and routes to the right specialist agent.</li>
            <li><strong>Parallel:</strong> Multiple agents work simultaneously on independent sub-tasks, results merged at the end.</li>
            <li><strong>Sequential:</strong> Output of Agent A feeds into Agent B. Used for refine-and-expand workflows.</li>
            <li><strong>Debate:</strong> Two agents argue opposing sides of a decision, third agent resolves.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">A Minimal Working Agent</h2>
          <p>
            Here is the simplest production-ready agent I run — a research assistant that searches the web, summarizes findings, and sends a Slack message:
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">{`from anthropic import Anthropic
from brave import BraveSearch
import json, re

claude = Anthropic()
search = BraveSearch()

def research_agent(query: str) -> str:
    # Step 1: Search
    results = search.text(query=query, count=5)

    # Step 2: Summarize
    context = "\\n".join([f"{r['title']}: {r['description']}" for r in results["web"]["results"]])
    prompt = f"Summarize these search results in 3 bullet points:\\n\\n{context}"

    summary = claude.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=512,
        messages=[{"role": "user", "content": prompt}]
    )

    # Step 3: Deliver
    return summary.content

# Run
result = research_agent("latest on AI agent frameworks 2026")
print(result)`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">What&apos;s Next</h2>
          <p>
            I am currently building Level 4 multi-agent systems for portfolio research and automated content pipelines. The key insight: agents fail silently when they are poorly scoped. Start with a single, well-defined task. Measure output quality. Only then expand scope.
          </p>
          <p>
            The future is not one agent that does everything. It is many agents that do one thing — and coordinate.
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
          <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
            &larr; Back to blog
          </Link>
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

        {/* CTA */}
        <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
          <p className="text-gray-700 text-sm leading-relaxed">
            Interested in applying AI agents to your business? I help companies build custom autonomous pipelines — from research to production deployment.{" "}
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Reach out to discuss your project &rarr;
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:underline font-medium">
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
