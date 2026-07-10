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
  "RAG support chat",
  "Business insights",
  "Sentiment analytics",
  "Knowledge retrieval",
  "Secure SaaS core"
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="home">
        <nav className="topbar">
          <div className="brand">
            <div className="mark">
              <span>ET</span>
            </div>
            <div>
              <p className="brand-title">EchoTwin AI</p>
              <p className="brand-subtitle">Every Conversation Builds a Better Business.</p>
            </div>
          </div>
          <div className="status-pill">Phase 1 complete</div>
        </nav>

        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span />
              Production architecture scaffold is running
            </div>
            <h1>
              Customer intelligence that learns from every conversation.
            </h1>
            <p className="lead">
              EchoTwin AI is being assembled as a full-stack SaaS platform with a Next.js frontend,
              FastAPI backend, RAG workflows, analytics, and secure organization-ready foundations.
            </p>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <div key={capability} className="capability">
                  <span className="capability-dot" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="roadmap">
            <div className="roadmap-head">
              <div>
                <h2>Build Roadmap</h2>
                <p>Phase-gated implementation plan</p>
              </div>
              <div className="counter">1 / 9</div>
            </div>
            <div className="phase-list">
              {phases.map((phase, index) => {
                const complete = index === 0;
                return (
                  <div
                    key={phase}
                    className="phase-row"
                  >
                    <div className={complete ? "phase-number complete" : "phase-number"}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="phase-title">{phase}</p>
                      <p className="phase-state">
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
