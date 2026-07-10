import { Activity, Bot, Database, LineChart, ShieldCheck, Sparkles } from "lucide-react";

const phases = [
  "Architecture",
  "Backend",
  "Database",
  "AI Pipeline",
  "Frontend",
  "Authentication",
  "Deployment",
  "Testing",
  "Documentation"
];

const capabilities = [
  { icon: Bot, label: "RAG support chat" },
  { icon: LineChart, label: "Business insights" },
  { icon: Activity, label: "Sentiment analytics" },
  { icon: Database, label: "Knowledge retrieval" },
  { icon: ShieldCheck, label: "Secure SaaS core" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-8 text-slate-50">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg border border-white/15 bg-white/10 shadow-2xl shadow-emerald-500/10 backdrop-blur">
              <Sparkles className="size-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">EchoTwin AI</p>
              <p className="text-xs text-slate-400">Every Conversation Builds a Better Business.</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur md:flex">
            Phase 1 complete
          </div>
        </nav>

        <div className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm text-emerald-100">
              <span className="size-2 rounded-full bg-emerald-300" />
              Production architecture scaffold is running
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white md:text-7xl">
              Customer intelligence that learns from every conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              EchoTwin AI is being assembled as a full-stack SaaS platform with a Next.js frontend,
              FastAPI backend, RAG workflows, analytics, and secure organization-ready foundations.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability.label}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur"
                >
                  <capability.icon className="size-5 text-emerald-200" />
                  <span className="text-sm text-slate-200">{capability.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Build Roadmap</h2>
                <p className="text-sm text-slate-400">Phase-gated implementation plan</p>
              </div>
              <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs text-emerald-100">
                1 / 9
              </div>
            </div>
            <div className="space-y-3">
              {phases.map((phase, index) => {
                const complete = index === 0;
                return (
                  <div
                    key={phase}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <div
                      className={
                        complete
                          ? "grid size-7 place-items-center rounded-full bg-emerald-300 text-xs font-bold text-slate-950"
                          : "grid size-7 place-items-center rounded-full border border-white/15 text-xs text-slate-400"
                      }
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-100">{phase}</p>
                      <p className="text-xs text-slate-500">
                        {complete ? "Completed and ready for review" : "Waiting for approval"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

