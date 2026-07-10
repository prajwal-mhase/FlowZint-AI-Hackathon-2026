import { conversations, documents, insights, sentimentTrend } from "./demo-data";

export const mockApi = {
  async dashboard() {
    return {
      kpis: {
        conversations: 1284,
        satisfaction: 87,
        churnRisk: 14,
        documentationScore: 82,
        aiConfidence: 91,
        recommendations: insights.length
      },
      sentimentTrend,
      insights,
      conversations,
      documents
    };
  },

  async ask(question: string) {
    const lower = question.toLowerCase();
    const topic = lower.includes("billing")
      ? "billing proration"
      : lower.includes("csv")
        ? "CSV import limits"
        : lower.includes("api")
          ? "API key rotation"
          : "customer support workflow";

    return {
      answer: `EchoTwin found a grounded answer about ${topic}. The knowledge base suggests responding with the documented policy first, then escalating if the customer has an account-specific exception. The same conversation should also be tagged for analytics because it may reveal a documentation or product gap.`,
      confidence: lower.includes("pricing") || lower.includes("billing") ? 94 : 87,
      citations: [
        "Billing and invoices handbook.pdf, section 4",
        "Enterprise onboarding.md, troubleshooting notes"
      ],
      followUps: [
        "Should I create a documentation-gap insight?",
        "Should this account be marked as churn risk?",
        "Do you want a product recommendation drafted?"
      ]
    };
  }
};

