# User Guide: Client Communication Specialist Persona

## 1. Introduction

This guide provides instructions on how to effectively utilize the Client Communication Specialist persona (`personas/system/client_communication_persona.md`). This AI persona is designed to assist in crafting, reviewing, and strategically aligning all client-facing communications.

Its primary goal is to ensure that interactions with clients are informed, professional, contextually aware, and tailored to each client's unique preferences and history with KingdomCraft.

## 2. Core Capabilities

The Client Communication Specialist can:

*   **Assimilate Client Context:** Access and process client-specific information, including brand identity, project history, past communications, and executive profiles.
*   **Draft Communications:** Help write emails, summaries, meeting agendas, and other client-facing documents.
*   **Review Communications:** Analyze existing drafts for tone, clarity, strategic alignment, and adherence to client preferences.
*   **Support Meeting Preparation:** Generate briefing notes, summarize key discussion points, and anticipate client questions.
*   **Adapt to Client Styles:** Learn and adjust to the specific communication nuances of different clients and stakeholders over time.

## 3. How to Use

### 3.1. Activation

To use the persona for a specific client, clearly state your intent and the target client. For example:

*   `"Activate Communication Specialist for MarinBio."`
*   `"Communication Specialist, I need help with an email to ClientX."`

### 3.2. Providing Context for Drafting

When requesting assistance with drafting a new communication, provide the following:

*   **Purpose:** What is the main goal of this communication?
*   **Recipient(s):** Who is the communication for?
*   **Key Points:** What essential information must be conveyed?
*   **Desired Tone:** (e.g., formal, informal, empathetic, direct)
*   **Relevant Background:** Point to any specific documents, previous emails, or meeting notes that provide context (e.g., `"Reference the discussion in clients/MarinBio/04_communication/meeting_summary_20250610.md"`).

**Example Prompt:**
`"Communication Specialist, please draft an email to Jane Doe at MarinBio. Purpose: Provide an update on Phase 1 completion and outline next steps for the white paper series. Key points: Highlight successful knowledge synthesis, new folder structure, and readiness to start white paper 1. Tone: Professional and enthusiastic. Reference: `clients/MarinBio/04_communication/Phase1_Progress_Summary_Draft.md`."`

### 3.3. Providing Context for Review

When requesting a review of an existing draft:

*   Provide the full text of the draft.
*   Specify what aspects you'd like the persona to focus on (e.g., tone, clarity, strategic alignment, specific client concerns).

**Example Prompt:**
`"Communication Specialist, please review this draft email to MarinBio. Focus on whether it clearly conveys the value of the new folder structure and if the tone is appropriate for Dr. Smith.

[Your Draft Email Text]"`

### 3.4. Meeting Preparation

To get help preparing for a client meeting:

*   Specify the client and the meeting's purpose.
*   Point to relevant documents (e.g., agenda, previous meeting notes, current project status).

**Example Prompt:**
`"Communication Specialist, help me prepare for the upcoming MarinBio strategy review meeting. Purpose: Discuss the white paper roadmap and get feedback on initial concepts. Reference: `clients/MarinBio/02_planning_strategy/1_MarinBio_White_Paper_Plan_6Month_20250613.md`."`

## 4. Expected Output

The persona will provide:

*   **Drafted Communications:** Complete drafts ready for your review and sending.
*   **Review Feedback:** Specific suggestions for improving your drafts, with rationale tied to client context or communication best practices.
*   **Briefing Notes:** Summaries and key points to aid in meeting preparation.

## 5. Best Practices

*   **Be Specific:** The more context and specific instructions you provide, the better the persona can assist you.
*   **Iterate:** Use the persona's output as a starting point. Feel free to ask for revisions or explore different approaches.
*   **Provide Feedback:** If the persona's suggestions are particularly good or off-track, noting this can help refine its understanding over time (though its core prompt is static, your interaction patterns can guide its focus).
*   **Client Data Management:** Ensure that all relevant client interaction data (meeting notes, key emails) are stored in the designated `clients/[ClientName]/04_communication/` folder so the persona can access a comprehensive history.
