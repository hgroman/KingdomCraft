# Standard Work Order Process

**Version:** 1.0
**Date:** 2025-05-15

## 1. Purpose

This document outlines the standard process for creating, managing, executing, and completing Work Orders (WOs) within the Voice Automated Email Template System project. Adherence to this process ensures clarity, traceability, consistent documentation, and effective collaboration between human and AI team members acting in various personas.

## 2. Overview

A Work Order (WO) is a formal, local file-based directive to perform a specific set of tasks to achieve a defined goal, anchored to an authoritative DART Task. It serves as a central reference point for a significant unit of work. The lifecycle of a WO is tightly integrated with:
- **DART Tasks:** The authoritative source for task initiation, status tracking, and ID generation.
- **DART Documents:** Used for active/interim notes during task execution and for mandatory 'Internal Billing Assessments' by `Joseph, Strategic Assessor` for 'Tetelestai' tasks.
- **Local `journal/` directory and `journal_index.yml`:** For comprehensive, archival Journal Entries (JEs) upon task completion.
- **Local `Handoff/` documents:** For transferring context when one WO's completion leads to new WOs.

## 3. Personas and Responsibilities

Different project personas interact with Work Orders at various stages:

*   **Initiator/Definer (e.g., MJML Component Architect, Project Lead):** Identifies the need for a WO, defines its scope and objectives, and creates the initial WO document.
*   **Executor (e.g., MJML Developer AI, Content Strategist AI):** Assigned the WO, performs the work described, and is responsible for the primary documentation upon completion.
*   **Reviewer (Optional, e.g., MJML Component Architect, User):** May review the deliverables of a WO before it's formally closed.

## 4. Work Order Lifecycle

### 4.1. Work Order Initiation

*   **Trigger:**
    *   New project requirements or features.
    *   Phased completion of a larger initiative.
    *   Specific user requests.
    *   Outputs or plans from another persona (e.g., a Content Strategist's email plan requiring new components).
    *   Follow-up actions from a previous Work Order or journal entry.
*   **Responsibility:** Typically an Architect, Lead, or designated planning persona.
*   **Action:**
    1.  Create a new Work Order Markdown file in the `work_orders/active/` directory.
        *   **Filename Convention:** `WO_<DART_TASKID>_<YYYYMMDD>_<3-5-word-label>.md` (e.g., `WO_ildO8Gz1EtoV_20250517_New-Hero-Variants.md`). `<DART_TASKID>` is the authoritative ID from the DART Task, and `<YYYYMMDD>` is the creation date.
    2.  Populate the WO document with all mandatory contents (see Section 5).
    3.  Ensure a corresponding **Task first exists in DART** (see Section 6.1). The WO is created to detail work for an existing DART Task.

### 4.2. Work Order Assignment

*   The `Assigned Persona(s)` field in the WO clearly designates who is responsible for execution.
*   The corresponding **Task in DART** should also reflect this assignment.

### 4.3. Work Order Execution

*   The assigned persona (often an AI assistant guided by the user) takes the WO document as the primary directive.
*   The AI assistant should confirm its understanding of the WO's objectives and scope with the guiding user/persona.
*   Work is performed as detailed in the WO, utilizing specified input documents and aiming for the defined deliverables.

### 4.4. Work Order Completion & Documentation Protocol (CRITICAL)

The completion of a Work Order is not just the creation of its primary deliverables but also the meticulous documentation of the work. **All of the following steps are mandatory for a WO to be considered complete:**

**Preliminary Step (If Applicable): "Tetelestai" & Internal Billing Assessment**
- If the DART Task associated with this WO reaches the "Tetelestai" stage (ready for client-facing finalization) and is billable, `Joseph, Strategic Assessor` **must** be invoked.
- Joseph creates an "Internal Billing Assessment" DART Document, linked to the DART Task. This assessment is a prerequisite for proceeding with the final local Journal Entry for billable work.

1.  **Primary Deliverables Met:** All items listed under "Expected Deliverables/Outputs" in the WO have been produced and are in their correct locations.
2.  **Journal Entry Creation:**
    *   **Responsibility:** Executing Persona.
    *   **Action:** Create a new Markdown journal file in the `journal/` directory.
        *   **Filename:** `JE_<YYYYMMDD_HHMMSS>_<DART_TASKID>_<1-3-word-summary>.md` (e.g., `JE_20250517_103000_ildO8Gz1EtoV_Hero-Done.md`). `<YYYYMMDD_HHMMSS>` is the UTC timestamp, and `<DART_TASKID>` is from the DART Task.
        *   **Content:** Must include:
            *   Timestamp.
            *   Participants (including the executing persona).
            *   **Explicit reference to the `Work Order ID` (e.g., "This entry details the completion of WO_ildO8Gz1EtoV_20250517_New-Hero-Variants.md.").**
            *   If applicable, reference to the "Internal Billing Assessment DART Document ID/Link."
            *   Detailed summary of actions taken, decisions made, problems encountered (and solutions), and a list of all files created, modified, or deleted.
    *   **Index Update:** Add a corresponding entry to `journal_index.yml` as per the project's `README.md` guidelines. This is typically a manual edit to the YAML file, prepending the new entry to maintain reverse chronological order.
3.  **DART Task Update:**
    *   **Responsibility:** Executing Persona.
    *   **Action:** Update the status of the corresponding **DART Task** (identified by `DART Task ID` in the WO) to `done` (or `review` if applicable) using the `update_task` MCP tool.
        *   The DART Task's description or a final comment **must** be updated to include:
            *   A reference to the `Work Order ID` (e.g., "Associated WO: `WO_ildO8Gz1EtoV_...md`").
            *   The filename of the completion **Local Journal Entry** (e.g., "Archival Details: `JE_20250517_..._Hero-Done.md`").
            *   If applicable, a link/reference to the "Internal Billing Assessment DART Document."
4.  **Handoff Document Creation:**
    *   **Responsibility:** Executing Persona.
    *   **Action:** Create a new Markdown handoff file in the `Handoff/` directory.
        *   **Filename:** `HO_<YYYYMMDD_HHMMSS>_<DART_TASKID>_<1-3-word-summary>.md` (e.g., `HO_20250516_103500_ildO8Gz1EtoV_WO-Done.md`). `<YYYYMMDD_HHMMSS>` is the UTC timestamp, and `<DART_TASKID>` is from the DART Task.
        *   **Content:** Must include:
            *   Timestamp.
            *   **Explicit reference to the completed `Work Order ID`.**
            *   **Explicit reference to the detailed `Journal Entry file` created in step 4.4.2.**
            *   A concise summary of the WO's outcome and the current project status.
            *   Clear pointers for the next AI assistant or session (e.g., "Awaiting new Work Order," "Proceed to next planned WO," etc.).
5.  **Work Order Archival (Optional but Recommended):**
    *   Move the completed WO document from `work_orders/active/` to `work_orders/completed/`. This keeps the active WO directory focused.

## 5. Work Order Document: Mandatory Contents

Each Work Order document (`.md` file in `work_orders/active/` or `work_orders/completed/`) **must** contain the following sections/information:

1.  `Work Order ID:` (Unique, e.g., `WO003`)
2.  `Title:` (Clear, concise title)
3.  `Status:` (Local WO status, e.g., `Open`, `In Progress`, `Blocked`, `Review`, `Done` - DART Task is the master status)
4.  `Related DART Task ID:` (The authoritative ID of the corresponding DART Task)
5.  `Input Documents/Prerequisites:` (List of all files or information needed to start, e.g., analysis reports, previous Handoff docs, specific component files)
6.  `Date Created:` (YYYY-MM-DD)
7.  `Created By Persona:` (The persona initiating the WO)
8.  `Assigned Persona(s):` (The persona(s) responsible for execution)
9.  `Priority:` (e.g., `High`, `Medium`, `Low` - Optional)
10. `Due Date:` (YYYY-MM-DD - Optional)
11. `Objective/Goal:` (A clear statement of what the WO aims to achieve)
12. `Background/Context:` (Brief explanation of why this WO is needed)
13. `Scope of Work / Detailed Tasks:` (A breakdown of the specific actions to be performed. Can be a checklist.)
14. `Expected Deliverables/Outputs:` (A clear list of what will be produced, e.g., new files, modified files, specific documentation updates, with expected locations.)
15. `Completion Checklist (Cross-reference to Section 4.4):`
    *   [ ] Internal Billing Assessment DART Doc Created (if applicable) (Doc ID/Link: ____________________)
    *   [ ] Primary Deliverables Met
    *   [ ] Local Journal Entry Created (Filename: ____________________)
    *   [ ] `journal_index.yml` Updated
    *   [ ] DART Task Updated (DART Task ID: _________ set to `done`/`review`, linked to local JE & Billing Doc)
    *   [ ] Handoff Document Created (Filename: ____________________)
    *   [ ] WO Archived (Moved to `work_orders/completed/`)

## 6. Integration with Other Project Management Tools

### 6.1. DART Tasks

*   All work **must** originate as a **Task in DART**. A Work Order is created to provide detailed instructions for a pre-existing DART Task.
*   The **DART Task ID** is authoritative and **must** be included in the WO filename and within its `Related DART Task ID:` field for unambiguous cross-referencing.
*   The status of the **DART Task** is the master record of the WO's progress (e.g., `todo`, `doing`, `review`, `done`). The local WO's `Status` field is secondary.
*   **`tasks.yml` is deprecated.** All task management, ID generation, and status tracking are now handled exclusively in DART.

### 6.2. `journal/` (Local Archival JEs) and `journal_index.yml`

*   While DART Documents can be used for *interim* or active notes during WO execution (linked to the DART Task), a comprehensive **local Journal Entry** (`journal/JE_*.md`) detailing the WO's completion is **mandatory** as per Section 4.4.2. This serves as the permanent, detailed archival record.
*   `journal_index.yml` must be updated for every local JE created.
*   All local JEs related to a WO must reference the `Work Order ID` and the `DART Task ID`.

### 6.3. `Handoff/` (Local Handoff Documents)

*   A local Handoff document (`Handoff/HO_*.md`) is **mandatory** upon WO completion if the completed work directly informs or initiates subsequent WOs/DART Tasks, as per Section 4.4.4.
*   It summarizes the WO outcome, points to the detailed local Journal Entry, and references relevant DART Task IDs.

## 7. Process Adherence

Strict adherence to this Work Order Process, including the hybrid use of DART for active task management and local files for detailed archival, is crucial for maintaining project clarity, ensuring a comprehensive and resilient documentation trail ("popcorn trail"), and facilitating seamless collaboration between all team members, especially when transitioning work between sessions or AI assistants.
