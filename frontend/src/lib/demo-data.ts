export type SentimentPoint = {
  day: string;
  positive: number;
  neutral: number;
  negative: number;
};

export type Insight = {
  title: string;
  impact: string;
  severity: "high" | "medium" | "low";
  evidence: string;
  recommendation: string;
};

export type Conversation = {
  customer: string;
  company: string;
  status: string;
  sentiment: string;
  risk: string;
  summary: string;
};

export type Document = {
  name: string;
  type: string;
  chunks: number;
  status: string;
  score: number;
};

export const sentimentTrend: SentimentPoint[] = [
  { day: "Mon", positive: 61, neutral: 27, negative: 12 },
  { day: "Tue", positive: 58, neutral: 30, negative: 12 },
  { day: "Wed", positive: 64, neutral: 22, negative: 14 },
  { day: "Thu", positive: 67, neutral: 20, negative: 13 },
  { day: "Fri", positive: 72, neutral: 18, negative: 10 },
  { day: "Sat", positive: 70, neutral: 21, negative: 9 },
  { day: "Sun", positive: 76, neutral: 16, negative: 8 }
];

export const insights: Insight[] = [
  {
    title: "Billing proration confusion",
    impact: "18 repeated conversations this week",
    severity: "high",
    evidence: "Customers ask why mid-cycle plan upgrades create two invoice rows.",
    recommendation: "Add a billing-proration section to the pricing FAQ and link it inside upgrade flows."
  },
  {
    title: "CSV import timeout reports",
    impact: "7 churn-risk accounts affected",
    severity: "high",
    evidence: "Enterprise users mention imports freezing above 25k rows.",
    recommendation: "Prioritize background CSV imports and publish large-file limits in docs."
  },
  {
    title: "API key setup docs gap",
    impact: "Documentation score dropped 9%",
    severity: "medium",
    evidence: "Support agent repeatedly could not cite a page for rotating API keys.",
    recommendation: "Create a short API key rotation guide with screenshots and security warnings."
  },
  {
    title: "Upgrade opportunity in analytics",
    impact: "11 high-value users asked for exports",
    severity: "low",
    evidence: "Customers on Growth plan asked for scheduled executive reports.",
    recommendation: "Package scheduled PDF reports as a Business plan upsell."
  }
];

export const conversations: Conversation[] = [
  {
    customer: "Maya Chen",
    company: "Northstar CRM",
    status: "Live",
    sentiment: "Frustrated",
    risk: "High",
    summary: "CSV import stalled twice during onboarding. Asking for deadline guarantees."
  },
  {
    customer: "Arjun Mehta",
    company: "Stackpilot",
    status: "Resolved",
    sentiment: "Positive",
    risk: "Low",
    summary: "Needed API rate-limit clarification and accepted cited docs."
  },
  {
    customer: "Elena Ross",
    company: "BrightDesk",
    status: "Waiting",
    sentiment: "Neutral",
    risk: "Medium",
    summary: "Asked whether audit logs are available on the Growth plan."
  }
];

export const documents: Document[] = [
  { name: "Billing and invoices handbook.pdf", type: "PDF", chunks: 146, status: "Indexed", score: 86 },
  { name: "Enterprise onboarding.md", type: "Markdown", chunks: 82, status: "Indexed", score: 91 },
  { name: "API authentication guide.docx", type: "DOCX", chunks: 64, status: "Needs review", score: 68 },
  { name: "CSV import troubleshooting.txt", type: "TXT", chunks: 39, status: "Indexed", score: 74 }
];

export const agentHealth = [
  { name: "Support Agent", score: 94, state: "Answering grounded questions" },
  { name: "Knowledge Agent", score: 88, state: "Checking citations and gaps" },
  { name: "Sentiment Agent", score: 91, state: "Classifying emotion and urgency" },
  { name: "Analytics Agent", score: 85, state: "Aggregating product feedback" },
  { name: "Recommendation Agent", score: 89, state: "Drafting business actions" },
  { name: "Sales Agent", score: 78, state: "Detecting expansion signals" }
];

