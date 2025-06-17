# System Persona Testing & Refinement Strategy

## 1. Introduction

This document outlines a general strategy for testing and refining the new system-level AI personas developed for KingdomCraft:

*   Keeper of the Estate
*   Client Communication Specialist
*   Strategic Billing & Value Specialist

The goal of testing is to ensure these personas function as intended, provide valuable assistance, and integrate smoothly into existing workflows.

## 2. Testing Methodology

Testing will be scenario-based and iterative, focusing on practical application of each persona's core directives.

### 2.1. Scenario Development

For each persona, a set of realistic test scenarios will be developed. These scenarios should cover the primary use cases outlined in their respective persona prompts and user guides.

**Examples:**

*   **Keeper of the Estate:**
    *   Scenario 1: Audit a mock client folder with deliberate structural errors. Assess the persona's ability to identify non-compliance and propose correct reorganization steps.
    *   Scenario 2: Request setup of a new client project. Evaluate the accuracy and completeness of the generated folder structure.
*   **Client Communication Specialist:**
    *   Scenario 1: Provide a set of key points and request a draft email to a mock client (e.g., MarinBio) for a specific situation (e.g., project update, addressing a concern). Evaluate clarity, tone, and contextual awareness.
    *   Scenario 2: Submit a pre-written draft email and ask for a review, focusing on specific criteria (e.g., alignment with client's known preferences, strategic messaging).
*   **Strategic Billing & Value Specialist:**
    *   Scenario 1: Provide a sample time log and mock SOW. Request an analysis of value delivered and identification of potential upselling or goodwill opportunities.
    *   Scenario 2: Submit a draft invoice and ask for a review against a mock contract and time log. Evaluate accuracy and clarity of billing descriptions.

### 2.2. Execution & Evaluation

*   **Role-Playing:** USER will interact with each persona, providing inputs based on the test scenarios.
*   **Output Assessment:** The persona's outputs (drafts, analyses, proposed actions) will be evaluated against the following criteria:
    *   **Accuracy:** Is the information correct and fact-based?
    *   **Completeness:** Does the output address all aspects of the request?
    *   **Clarity:** Is the output easy to understand and unambiguous?
    *   **Relevance:** Is the output directly applicable to the scenario and the persona's mandate?
    *   **Alignment:** Does the output align with KingdomCraft's standards, best practices, and strategic goals?
    *   **Usability:** How easy was it to interact with the persona and get the desired outcome?

### 2.3. Feedback Collection

USER will provide qualitative feedback on each interaction, noting:

*   Strengths of the persona's response.
*   Areas for improvement in the persona's prompt or directives.
*   Any unexpected or problematic outputs.
*   Suggestions for enhancing the persona's capabilities or knowledge domains.

## 3. Refinement Process

Based on the feedback collected:

*   **Prompt Adjustments:** The core persona prompt files (`*.md`) will be iteratively refined to improve clarity, add or modify directives, or adjust knowledge domain focus.
*   **Guide Updates:** User guides will be updated to reflect any changes in persona capabilities or interaction models.
*   **Re-testing:** Scenarios that highlighted issues will be re-tested after refinements are made.

## 4. Long-Term Evolution

Persona development is an ongoing process. As KingdomCraft evolves, new client engagements are undertaken, and new tools (like vector databases or MCP integrations) become available, these personas will likely require further refinement and expansion of their capabilities. Regular (e.g., quarterly) reviews of persona effectiveness could be beneficial.

This iterative approach of scenario-based testing, feedback, and refinement will ensure that our system-level personas remain valuable and effective assets for the KingdomCraft project.
