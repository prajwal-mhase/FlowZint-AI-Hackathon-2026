"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  CircleDashed,
  Command,
  Database,
  FileText,
  Globe,
  Lightbulb,
  Lock,
  MessageSquare,
  PanelTop,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  UploadCloud,
  Users,
  X,
  Zap
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { agentHealth, conversations, documents, insights, sentimentTrend } from "@/lib/demo-data";
import { mockApi } from "@/lib/mock-api";

const navItems = [
  { id: "dashboard", label: "Overview", icon: PanelTop },
  { id: "chat", label: "AI Chat", icon: MessageSquare },
  { id: "knowledge", label: "Knowledge", icon: Database },
  { id: "insights", label: "Insights", icon: Lightbulb },
  { id: "agents", label: "Agents", icon: Brain },
  { id: "security", label: "Security", icon: ShieldCheck }
] as const;

const kpis = [
  { label: "Active conversations", value: "1,284", delta: "+18%", icon: MessageSquare },
  { label: "Customer satisfaction", value: "87%", delta: "+6%", icon: Activity },
  { label: "Churn risk accounts", value: "14", delta: "-9%", icon: TrendingDown },
  { label: "Documentation score", value: "82", delta: "+11", icon: FileText }
];

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  meta?: string;
};

type CommandAction = {
  label: string;
  description: string;
  target: (typeof navItems)[number]["id"];
};

export default function HomePage() {
  const [active, setActive] = useState<(typeof navItems)[number]["id"]>("dashboard");
  const [question, setQuestion] = useState("Why are customers confused about billing proration?");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "I am EchoTwin. Ask a support question and I will answer from the knowledge base, cite sources, score confidence, and create business intelligence signals."
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  const complaintData = useMemo(
    () => [
      { name: "Billing", count: 42 },
      { name: "Imports", count: 31 },
      { name: "API", count: 24 },
      { name: "Access", count: 18 },
      { name: "Reports", count: 16 }
    ],
    []
  );

  const performanceData = useMemo(
    () => [
      { name: "Support", score: 94 },
      { name: "Knowledge", score: 88 },
      { name: "Sentiment", score: 91 },
      { name: "Analytics", score: 85 },
      { name: "Recommendation", score: 89 },
      { name: "Sales", score: 78 }
    ],
    []
  );

  const commands: CommandAction[] = useMemo(
    () => [
      { label: "Go to overview", description: "Open the executive dashboard", target: "dashboard" },
      { label: "Open AI chat", description: "Start a grounded conversation", target: "chat" },
      { label: "Review knowledge base", description: "Inspect indexed documents", target: "knowledge" },
      { label: "Inspect insights", description: "See complaint and churn signals", target: "insights" },
      { label: "Check agent health", description: "Review specialist performance", target: "agents" },
      { label: "Open security view", description: "Review auth and audit posture", target: "security" }
    ],
    []
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  async function askEchoTwin() {
    if (!question.trim() || isThinking) return;
    const currentQuestion = question.trim();
    setMessages((items) => [...items, { role: "user", content: currentQuestion }]);
    setQuestion("");
    setIsThinking(true);
    const response = await mockApi.ask(currentQuestion);
    setTimeout(() => {
      setMessages((items) => [
        ...items,
        {
          role: "assistant",
          content: `${response.answer}\n\nSources: ${response.citations.join(" | ")}\n\nFollow-ups: ${response.followUps.join(" ")}.`,
          meta: `${response.confidence}% confidence`
        }
      ]);
      setIsThinking(false);
    }, 450);
  }

  const activeTitle = navItems.find((item) => item.id === active)?.label ?? "Overview";

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">
            <Sparkles size={18} />
          </div>
          <div>
            <strong>EchoTwin AI</strong>
            <span>Customer intelligence</span>
          </div>
        </div>

        <button className="search-box search-button" onClick={() => setCommandOpen(true)}>
          <Search size={15} />
          <span>Search conversations, docs, insights</span>
          <kbd>Ctrl K</kbd>
        </button>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "nav-item active" : "nav-item"}
              onClick={() => setActive(item.id)}
            >
              <item.icon size={17} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-card pulse-card">
          <div className="mini-icon">
            <Bot size={16} />
          </div>
          <p>AI confidence</p>
          <strong>91%</strong>
          <span>Grounded responses from 331 indexed chunks</span>
          <div className="signal-bar">
            <i style={{ width: "91%" }} />
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">FlowZint AI Hackathon 2026</p>
            <h1>Every Conversation Builds a Better Business.</h1>
            <p className="hero-copy">
              A production-style AI customer intelligence platform that answers customers, extracts business signals,
              and feeds product and support decisions back into one continuous learning loop.
            </p>
            <p className="active-chip">Viewing {activeTitle}</p>
          </div>
          <div className="top-actions">
            <button className="ghost-button" onClick={() => setCommandOpen(true)}>
              <Command size={16} />
              Command palette
            </button>
            <button className="ghost-button">
              <UploadCloud size={16} />
              Upload docs
            </button>
            <button className="primary-button" onClick={() => setActive("chat") }>
              <Send size={16} />
              Ask EchoTwin
            </button>
          </div>
        </header>

        <section className="hero-grid">
          <motion.article className="hero-card primary-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="hero-headline">
              <div>
                <span className="badge badge-brand">Live organization intelligence</span>
                <h2>Grounded answers plus insight extraction in one workflow.</h2>
              </div>
              <div className="hero-pill">
                <Zap size={15} />
                Streaming ready
              </div>
            </div>
            <div className="hero-stats">
              <div>
                <strong>2.4s</strong>
                <span>Median response time</span>
              </div>
              <div>
                <strong>98.7%</strong>
                <span>Source citation coverage</span>
              </div>
              <div>
                <strong>14</strong>
                <span>Detected churn risks</span>
              </div>
            </div>
          </motion.article>

          <motion.article className="hero-card signal-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Today’s intelligence</span>
            <div className="signal-list">
              <div>
                <Users size={16} />
                <span>38 active customer conversations</span>
              </div>
              <div>
                <Lightbulb size={16} />
                <span>12 new product feedback signals</span>
              </div>
              <div>
                <Globe size={16} />
                <span>4 missing documentation pages discovered</span>
              </div>
              <div>
                <CircleDashed size={16} />
                <span>3 conversations escalated for human review</span>
              </div>
            </div>
          </motion.article>
        </section>

        {active === "dashboard" && (
          <div className="content-grid">
            <section className="kpi-grid">
              {kpis.map((kpi) => (
                <article className="metric-card" key={kpi.label}>
                  <div className="metric-head">
                    <span>{kpi.label}</span>
                    <kpi.icon size={18} />
                  </div>
                  <strong>{kpi.value}</strong>
                  <small>{kpi.delta} this week</small>
                </article>
              ))}
            </section>

            <section className="panel wide">
              <div className="panel-head">
                <div>
                  <h2>Sentiment over time</h2>
                  <p>Live conversation intelligence from customer interactions.</p>
                </div>
                <span className="badge">Realtime</span>
              </div>
              <div className="chart">
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={sentimentTrend}>
                    <defs>
                      <linearGradient id="positive" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(148,163,184,.16)" vertical={false} />
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)" }} />
                    <Area type="monotone" dataKey="positive" stroke="#22c55e" fill="url(#positive)" strokeWidth={3} />
                    <Area type="monotone" dataKey="negative" stroke="#ef4444" fill="rgba(239,68,68,.08)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="panel">
              <div className="panel-head">
                <div>
                  <h2>Top complaints</h2>
                  <p>Detected from repeated customer language.</p>
                </div>
              </div>
              <div className="chart small">
                <ResponsiveContainer width="100%" height={230}>
                  <BarChart data={complaintData}>
                    <CartesianGrid stroke="rgba(148,163,184,.14)" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)" }} />
                    <Bar dataKey="count" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="panel">
              <div className="panel-head">
                <div>
                  <h2>Active conversations</h2>
                  <p>Prioritized by risk and sentiment.</p>
                </div>
              </div>
              <div className="conversation-list">
                {conversations.map((conversation) => (
                  <article key={conversation.customer} className="conversation-row">
                    <div>
                      <strong>{conversation.customer}</strong>
                      <span>{conversation.company}</span>
                    </div>
                    <p>{conversation.summary}</p>
                    <div className="row-meta">
                      <span>{conversation.status}</span>
                      <span>{conversation.sentiment}</span>
                      <span>{conversation.risk} risk</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-head">
                <div>
                  <h2>Agent performance</h2>
                  <p>How the specialized AI workers are tracking against the confidence target.</p>
                </div>
              </div>
              <div className="chart small">
                <ResponsiveContainer width="100%" height={230}>
                  <BarChart data={performanceData} layout="vertical">
                    <CartesianGrid stroke="rgba(148,163,184,.14)" horizontal={false} />
                    <XAxis type="number" stroke="#94a3b8" />
                    <YAxis type="category" dataKey="name" stroke="#94a3b8" width={110} />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)" }} />
                    <Bar dataKey="score" fill="#34d399" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        )}

        {active === "chat" && (
          <section className="chat-layout">
            <div className="chat-panel">
              <div className="panel-head">
                <div>
                  <h2>Grounded customer chat</h2>
                  <p>RAG answer, source citations, confidence, and insight extraction.</p>
                </div>
                <span className="badge">Streaming-ready</span>
              </div>
              <div className="messages">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={`message ${message.role}`}>
                    <p>{message.content}</p>
                    {message.meta && <span>{message.meta}</span>}
                  </div>
                ))}
                {isThinking && <div className="typing">EchoTwin is retrieving sources and coordinating agents...</div>}
              </div>
              <div className="composer">
                <input value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => event.key === "Enter" && askEchoTwin()} />
                <button onClick={askEchoTwin}>
                  <Send size={16} />
                </button>
              </div>
            </div>
            <aside className="side-panel">
              <h2>RAG pipeline</h2>
              {["Embedding", "Vector search", "Context retrieval", "Prompt assembly", "LLM response", "Citation check", "Insight storage"].map((step, index) => (
                <div className="pipeline-step" key={step}>
                  <span>{index + 1}</span>
                  {step}
                </div>
              ))}
            </aside>
          </section>
        )}

        {active === "knowledge" && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Knowledge base</h2>
                <p>Upload, chunk, embed, search, delete, and re-index company knowledge.</p>
              </div>
              <button className="primary-button">
                <UploadCloud size={16} />
                Upload file
              </button>
            </div>
            <div className="doc-grid">
              {documents.map((document) => (
                <article className="doc-card" key={document.name}>
                  <FileText size={22} />
                  <strong>{document.name}</strong>
                  <span>{document.type} · {document.chunks} chunks</span>
                  <div className="progress">
                    <i style={{ width: `${document.score}%` }} />
                  </div>
                  <small>{document.status} · doc score {document.score}</small>
                </article>
              ))}
            </div>
          </section>
        )}

        {active === "insights" && (
          <section className="insight-grid">
            {insights.map((insight) => (
              <article className={`insight-card ${insight.severity}`} key={insight.title}>
                <span>{insight.severity} priority</span>
                <h2>{insight.title}</h2>
                <strong>{insight.impact}</strong>
                <p>{insight.evidence}</p>
                <div>{insight.recommendation}</div>
              </article>
            ))}
          </section>
        )}

        {active === "agents" && (
          <section className="agent-grid">
            {agentHealth.map((agent) => (
              <article className="agent-card" key={agent.name}>
                <div className="agent-score">{agent.score}</div>
                <h2>{agent.name}</h2>
                <p>{agent.state}</p>
                <div className="progress">
                  <i style={{ width: `${agent.score}%` }} />
                </div>
              </article>
            ))}
          </section>
        )}

        {active === "security" && (
          <section className="panel security-panel">
            <div className="panel-head">
              <div>
                <h2>Security and production readiness</h2>
                <p>Designed for JWT auth, OAuth, RBAC, audit logs, validation, and tenant isolation.</p>
              </div>
              <Lock size={22} />
            </div>
            {["JWT access and refresh sessions", "Google OAuth ready", "Organization-level RBAC", "Rate limiting with Redis", "Audit logs for sensitive actions", "Source-backed hallucination mitigation", "Input validation and file checks", "Secrets managed through environment variables"].map((item) => (
              <div className="security-row" key={item}>
                <CheckCircle2 size={18} />
                {item}
              </div>
            ))}
          </section>
        )}

        <AnimatePresence>
          {commandOpen && (
            <motion.div className="command-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div
                className="command-panel"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
              >
                <div className="command-head">
                  <div>
                    <span className="section-label">Command palette</span>
                    <h2>Navigate the product surface</h2>
                  </div>
                  <button className="ghost-button command-close" onClick={() => setCommandOpen(false)}>
                    <X size={16} />
                  </button>
                </div>
                <div className="command-list">
                  {commands.map((command) => (
                    <button
                      key={command.label}
                      className="command-item"
                      onClick={() => {
                        setActive(command.target);
                        setCommandOpen(false);
                      }}
                    >
                      <div>
                        <strong>{command.label}</strong>
                        <span>{command.description}</span>
                      </div>
                      <ArrowRight size={16} />
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

