# KingdomCraft Billing Finalization Protocol

## 1. Purpose

This protocol, facilitated by AI assistants including specialized personas, ensures that all billable work undertaken within the KingdomCraft project is systematically and promptly documented, prepared for client communication, and readied for invoicing. It leverages DART Tasks for active management and status tracking (including the crucial 'Tetelestai' status), DART Documents for internal assessments, and local file archives for enduring records. Its aim is to eliminate end-of-project administrative burden, reduce anxiety related to retrospective documentation, and ensure timely and accurate billing.

This protocol is initiated when a task or a significant phase of work reaches a state of full completion, termed "Tetelestai."

## 2. Trigger: "Tetelestai" (τετέλεσται)

The term "Tetelestai," meaning "It is finished" or "Paid in full," signifies that a task's objectives have been fully met and the work is ready for administrative wrap-up and billing. This includes:

*   All primary deliverables of the task are finalized and have met the project lead's (Hank Groman's) standards for quality and accuracy.
*   Client-facing communication regarding completion (if applicable for this task) is drafted or ready to be drafted.
*   Internal notes on value delivered, key outcomes, and effort expended (e.g., `TimeLog.md`) are accurate and ready to be summarized for billing.

## 3. The Protocol Steps (AI-Assisted)

Upon a DART Task reaching "Tetelestai," the AI pairing partner (Cascade) will immediately initiate and facilitate the following steps. No new substantive work on that DART Task or its direct follow-ons should begin until this protocol is complete.

1.  **Declare/Confirm "Tetelestai" Status:**
    *   The User (Hank) may declare: "Cascade, DART Task [DART Task ID / Name] is Tetelestai."
    *   Alternatively, Cascade may infer completion and ask: "Hank, it appears DART Task [DART Task ID / Name] has reached Tetelestai. Is that correct?"

2.  **Initiate Billing Finalization Protocol:**
    *   Cascade will respond: "Understood. Now that DART Task [DART Task ID / Name] is Tetelestai, let's initiate the Billing Finalization Protocol. Your future self will thank you for the clarity and lack of anxiety this brings when it's time to invoice."

3.  **Finalize Client Communication (if applicable):**
    *   Cascade will prompt: "Let's ensure the client communication for this is drafted/finalized. Shall we work on `[Relevant_Communication_Document_Name]` (e.g., `Phase1_Completion_Report.md`)?"
    *   This step involves reviewing, refining, and saving the relevant client-facing document.

4.  **Invoke Joseph, Strategic Assessor for Internal Billing Assessment & Verify Time Log:**
    *   Cascade will state: "Now, to ensure full compliance with the Claude Truthfulness Protocol and to generate the necessary internal billing documentation, I will invoke `Joseph, Strategic Assessor`."
    *   Cascade will then invoke `Joseph, Strategic Assessor` with a directive such as: "Joseph, DART Task [DART Task ID / Name] is Tetelestai. Please review the `clients/[ClientName]/admin/[ClientName]_TimeLog.md` (verifying its accuracy with Hank), analyze the value delivered, and create the 'Internal Billing Assessment' DART Document. This DART Document must be linked to the parent DART Task ([DART Task ID]) and adhere strictly to the Claude Truthfulness Protocol."
    *   **Action for Joseph (facilitated by Cascade/Hank):**
        *   Verify the `clients/[ClientName]/admin/[ClientName]_TimeLog.md` for accuracy and completeness for the Tetelestai DART Task.
        *   Create a new DART Document titled "Internal Billing Assessment: DART Task [DART Task ID / Name]". Ensure this DART Document is correctly linked to the parent DART Task within the DART system.
        *   This document will summarize:
            *   The work performed.
            *   The value delivered to the client, framed according to the Bezalel Framework and Claude Truthfulness Protocol.
            *   Effort expended (cross-referencing the Time Log).
            *   Any relevant notes for final invoicing.
        *   Confirm this DART Document is linked to the primary DART Task ([DART Task ID]) within the DART system.
    *   This step ensures a formal, protocol-adherent assessment is created before any client-facing billing summaries are finalized.

5.  **Update DART Task to 'Tetelestai' & Link Documentation:**
    *   Cascade will prompt: "Great. The 'Internal Billing Assessment' DART Document is created and linked. Now let's formally update the original DART Task ([DART Task ID / Name]) to 'Tetelestai' status."
    *   Cascade will assist in setting the DART Task status to **'Tetelestai'**.
    *   The DART Task's description or a final comment will be updated to include:
        *   A summary of completion.
        *   A link/reference to the 'Internal Billing Assessment' DART Document.
        *   A reference to the forthcoming final local Journal Entry (e.g., "Final archival details will be in local Journal Entry: `JE_...md`, to be created post-protocol completion.").
    *   (Note: The creation of the final local Journal Entry for the original DART Task, which details its overall completion and references this billing assessment, occurs as per the `Work_Order_Process.md` *after* this Billing Finalization Protocol is complete for the assessment part.)

6.  **Confirmation of Protocol Completion:**
    *   Cascade will confirm: "Excellent, Hank. The Billing Finalization Protocol for DART Task [DART Task ID / Name] is complete. The internal assessment is done, the DART Task is marked 'Tetelestai', and it's linked to the 'Internal Billing Assessment' DART Document. You've set your future self up for success. The final step, as per the Work Order Process, will be to create the local Journal Entry for this DART Task, referencing this assessment. Now, what would you like to focus on next?"

## 4. AI Interaction Style

*   **Facilitation:** Cascade's role is to guide the User (Hank) through this protocol, including invoking specialized personas like `Joseph, Strategic Assessor` for specific steps.
*   **Immediacy:** The protocol is initiated immediately upon a DART Task reaching Tetelestai and must be completed before new substantive work on that DART Task or its direct follow-ons begins.
*   **Persistence:** If the protocol is started but interrupted, Cascade will gently but firmly remind the User to complete the remaining steps at the earliest opportunity, preferably within the same work session.
*   **Tone:** Supportive and therapeutic, emphasizing the long-term benefits of contemporaneous documentation (e.g., "Hank, your future self will thank you...").

## 5. Dart Integration for "Billable" Status

The agreed-upon method for marking a task as billable and ready for invoicing within the Dart application (app.itsdart.com) for the `MBL-WP-CLI (MARINBIO)/Tasks` dartboard (and similar boards) is to set the task's status to **"Tetelestai"**.

This custom status resides under the "Finished" workflow stage and signifies that the task has successfully passed through the KingdomCraft Billing Finalization Protocol.
