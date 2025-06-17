# User Guide: Strategic Billing & Value Specialist Persona

## 1. Introduction

This guide explains how to utilize the Strategic Billing & Value Specialist persona (`personas/system/strategic_billing_persona.md`). This AI persona is designed to assist in managing the financial aspects of client engagements with a focus on fairness, transparency, value articulation, and strategic opportunity identification.

Its purpose is to help ensure that billing is accurate, aligned with agreements, and that KingdomCraft's financial interests are protected while fostering strong, trust-based client relationships.

## 2. Core Capabilities

The Strategic Billing & Value Specialist can:

*   **Master Agreements & Scope:** Understand client contracts, Statements of Work (SOWs), and specific billing terms.
*   **Analyze Effort & Value:** Review time logs (`[ClientName]_TimeLog.md`) to connect hours worked with the strategic value delivered to the client.
*   **Develop Client Financial Acumen:** Over time, learn to recognize client financial patterns, perspectives, and sensitivities.
*   **Identify Strategic Opportunities:** Suggest potential upselling/cross-selling, recognize when internal process improvements might warrant goodwill gestures, and identify opportunities to strengthen client relationships through strategic financial management.
*   **Review Billing Statements:** Assist in checking draft invoices for accuracy, clarity, and alignment with logged effort and contracts.

## 3. How to Use

### 3.1. Activation

To use the persona for a specific client or task, clearly state your intent:

*   `"Billing Specialist, I need insights for the upcoming MarinBio invoice."`
*   `"Strategic Billing Persona, review the SOW for ClientX and highlight key billing terms."`

### 3.2. Providing Context for Analysis & Recommendations

When requesting analysis or recommendations, provide the following:

*   **Client Name:** Specify the client in question.
*   **Relevant Documents:** Point to contracts, SOWs, time logs, draft invoices, or specific communications related to billing or project scope. (e.g., `"Review the MarinBio TimeLog at clients/MarinBio/admin/MarinBio_TimeLog.md and the SOW at clients/MarinBio/05_admin/contracts/MarinBio_SOW_v1.pdf"` - *Note: PDF access would depend on future capabilities; for now, assume text-based inputs or summaries of such documents*).
*   **Specific Questions/Concerns:** Clearly state what you need assistance with (e.g., "Are there any upsell opportunities evident in the recent work?", "How should we position the value of X activity on the invoice?", "Is this out-of-scope work?").

**Example Prompt:**
`"Billing Specialist, review the MarinBio TimeLog for the past month. Identify any work that delivered exceptional value or where our internal process improvements were significant. Are there any opportunities for a goodwill gesture or a value-add discussion? Reference: `clients/MarinBio/admin/MarinBio_TimeLog.md`."`

### 3.3. Reviewing Billing Drafts

When requesting a review of a draft invoice or billing summary:

*   Provide the full text or a detailed summary of the draft.
*   Specify any particular areas of concern or aspects you want the persona to focus on.

**Example Prompt:**
`"Billing Specialist, please review this draft invoice for MarinBio. Check for accuracy against the time log, ensure all items are within scope as per the SOW, and advise if the value descriptions are clear. [Draft Invoice Text/Summary]"`

## 4. Expected Output

The persona will provide:

*   **Financial Analysis:** Insights into billing patterns, value delivery, and alignment with agreements.
*   **Strategic Recommendations:** Suggestions for upselling, goodwill gestures, or addressing potential client financial concerns.
*   **Billing Narratives:** Help in drafting clear, value-focused descriptions for line items on invoices.
*   **Risk/Opportunity Highlights:** Identification of potential billing issues or strategic financial opportunities.

## 5. Best Practices

*   **Provide Comprehensive Data:** The more complete the information (contracts, time logs, client communications about scope/budget), the more insightful the persona's analysis will be.
*   **Be Clear About Objectives:** Specify whether you're looking for cost optimization, value articulation, opportunity identification, or risk mitigation.
*   **Iterate on Recommendations:** Use the persona's advice as a starting point for strategic discussions. Explore different scenarios and options.
*   **Maintain Document Hygiene:** Ensure all contracts, SOWs, and significant financial communications are stored in a consistent, accessible location (e.g., `clients/[ClientName]/05_admin/contracts/`) for the persona to reference.
