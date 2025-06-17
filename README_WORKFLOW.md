# Standardized Workflow Documentation System

> **START HERE FOR THE 'WHY':** This document details the *tactical* workflow. For the overarching *philosophy and strategic context* that governs this workflow, please first read:
> **➡️ [`docs/guides/KINGDOMCRAFT_SYSTEM_PHILOSOPHY.md`](docs/guides/KINGDOMCRAFT_SYSTEM_PHILOSOPHY.md)**

---

> ⚠️ **NON-NEGOTIABLE WORKFLOW RULE** ⚠️
>
> **ALL work MUST begin by creating a new Task in DART using MCP, with the next available Task ID (incrementing from the last entry). When continuing existing work, ensure the Task in DART remains the fountainhead for all related artifacts.**
>
> **NO artifact (journal entry, work order, handoff, etc.) may reference a Task that does not exist in DART.**
>
> **Artifacts referencing a non-existent Task are INVALID and must be corrected immediately.**
>
> **NO EXCEPTIONS. This is the law of the workflow.**

> **Purpose** Build and maintain an AI-assisted, IDE-native workflow for complex projects (e.g., code standardization, content generation, system audits) that require consistent, traceable, and quality-assured outputs.

---

## Guiding Philosophy for AI: The Knowledge Weaver

As an AI assistant contributing to this workflow, particularly in documenting completed tasks, I adopt the persona of the **Knowledge Weaver**. My core mandate is to meticulously and elegantly chronicle the journey of each Task. This involves using DART Documents for active task notes and updates, and then, upon task completion, crafting comprehensive local Journal Entries (`journal/JE_*.md`) as the final, archival record. These local entries, along with other artifacts like Work Orders and Handoffs, transform raw actions and decisions into a rich, interconnected tapestry of project history.

I operate with the precision of a master cartographer, charting the 'what,' 'why,' and 'how' of every documented effort. My commitment extends beyond mere recording; I strive to:

*   **Illuminate the Path:** My documentation serves as a luminous trail, ensuring any future traveler – human or AI – can navigate the project's past with clarity and confidence.
*   **Preserve the Essence:** I capture not just the events, but the *context*, the *rationale*, and the *learnings*. Each entry is a vessel carrying the intellectual capital of the moment it describes.
*   **Weave with Integrity:** My records are complete, accurate, and presented with a formality that respects the significance of the work. I ensure all required fields are diligently populated, and all linked artifacts are correctly referenced according to the `Work_Order_Process.md` guide.
*   **Craft for Posterity:** I write with an awareness that these records are the project's enduring memory. They are crafted to be intelligible, insightful, and invaluable for future audits, onboarding, and knowledge transfer.

In every line I write, in every link I forge, I am building a legacy of understanding. I am the Knowledge Weaver, and my work ensures that no effort is lost, no insight forgotten, and the story of our collective endeavor is told with enduring elegance.

---

## Overview

This system facilitates the execution of complex tasks through a structured process. **The cornerstone of this system is the Task. The Task is the root and historic register of all work. All workflow artifacts (journal entries, work orders, handoff documents) must explicitly reference their parent Task.**

**Hierarchy:**

- The Task is the "anchor" object. Every artifact is a child of a Task.
- Simple tasks may involve interim DART Document notes, but will culminate in a local Journal Entry (`journal/JE_*.md`) upon completion.
- Medium tasks may involve interim DART Document notes and a local Work Order, culminating in a local Journal Entry (`journal/JE_*.md`) upon completion.
- Large or impactful tasks may involve interim DART Document notes, a local Work Order, and a local Handoff document, all culminating in a local Journal Entry (`journal/JE_*.md`) upon completion.
- Upon reaching "Tetelestai" (client-facing completion readiness), an "Internal Billing Assessment" DART Document is also created by `Joseph, Strategic Assessor` (guided by the Claude Truthfulness Protocol) and linked to the Task.
- All artifacts must cross-reference their parent Task for traceability and historic record.

**Artifact Relationships:**

- **Task** (root - managed in DART, the anchor for all work)
  - **DART Document Notes** (optional child, linked to task for in-progress notes, discussions, or very simple interim updates)
  - **Local Journal Entry (`journal/JE_*.md`)** (mandatory child upon completion, the definitive archival record of the task, cross-referenced in the final DART task update)
  - **Work Order** (child, created when task complexity justifies formal work directive per Work_Order_Process.md)
  - **Handoff Document** (child, created when completed Work Orders lead to subsequent work, references both Task and Work Order)
  - **Internal Billing Assessment DART Document** (child, created at the "Tetelestai" stage by `Joseph, Strategic Assessor`. This document, guided by the Claude Truthfulness Protocol, provides an unfiltered internal assessment of value delivered and effort expended. It is linked to the parent Task and is a prerequisite for finalizing any client-facing billing summaries or invoices.)

---

## Project Structure

**DART-Managed Components (System of Engagement - Active Work):**
- **Tasks**: All tasks managed in DART with authoritative IDs and current status.
- **Active Task Notes/Discussions**: DART Documents can be linked to tasks for ongoing discussions or interim notes.
- **Internal Billing Assessments**: DART Documents created by `Joseph, Strategic Assessor` for 'Tetelestai' tasks.

**Local File-Based Components (System of Record - Archival):**
- **Journal Entries**: `journal/` (Detailed, final records of completed tasks)
- **Journal Index**: `journal_index.yml` (Index for local Journal Entries)
- **Work Orders**: `workflow/Work_Orders/` (Detailed briefs for complex tasks)
- **Handoff Documents**: `workflow/Handoff/` (Context transfer for sequential tasks)
- **Process Guides**: `workflow/Guides/`
- **AI Personas**: `workflow/Personas/`

---

## Naming Conventions

| Artifact                       | Pattern                                         | Example                                      |
| ------------------------------ | ----------------------------------------------- | -------------------------------------------- |
| **DART Task ID**               | Authoritative alphanumeric ID from DART        | `ildO8Gz1EtoV`                              |
| **DART Document (for notes)**  | Human-friendly title linked to task            | `"Email Scanner Auth Fix - Notes"`            |
| **Local Journal Entry (JE)**   | `JE_<YYYYMMDD_HHMMSS>_<DART_TASKID>_<summary>.md` | `JE_20250615_103000_ildO8Gz1EtoV_AuthFix.md` |
| **Work Order (WO)**            | `WO_<DART_TASKID>_<YYYYMMDD>_<label>.md`       | `WO_ildO8Gz1EtoV_20250522_Email-Scanner.md` |
| **Handoff Document (HO)**      | `HO_<YYYYMMDD_HHMMSS>_<DART_TASKID>_<summary>.md` | `HO_20250522_170000_ildO8Gz1EtoV_Security-Done.md` |

### Workspace Selection in DART

**Available Workspaces:**
- **ScraperSky/Tasks** - Primary workspace for ScraperSky project tasks
- **General/Tasks** - General workspace (avoid using for ScraperSky work)

**Important Notes:**
- When creating tasks or documents, verify you're in the correct workspace
- Use `dartboard` parameter with exact workspace name (e.g., `ScraperSky/Tasks`)
- Workspace IDs (like `98qCXyZtX35A`) are not valid for the `dartboard` parameter
- To move tasks between workspaces, use `update_task` with the correct `dartboard` value

### DART Documents for Active Notes & Linking Final Local Archives

**Using DART Documents for In-Progress Notes (Optional):**
- DART Documents can be used for quick notes, discussions, or logging interim steps *during* a task's execution.
- If used, they should be titled clearly (e.g., "Notes for Task [DART_TASKID] - Issue X") and linked to the DART task.

**Final Archival Journaling (Mandatory Local Files):**
- Upon task completion, a comprehensive **local Journal Entry** (`journal/JE_<YYYYMMDD_HHMMSS>_<DART_TASKID>_<summary>.md`) is **mandatory**.
- This local JE is the definitive, detailed record of the completed work.
- The `journal_index.yml` file must be updated with an entry for this new local JE.
- The DART Task is then given a final update, referencing this local JE (e.g., "Task complete. See local Journal Entry: `JE_20250615_..._AuthFix.md` for full details.") before being closed in DART.



> **Hybrid Workflow: Rule of Thumb**
>
> 1.  **DART Task Initiation (System of Engagement):** All work **must** begin as a defined task in **DART using MCP**. This DART Task receives an authoritative DART Task ID and its status is actively maintained in DART throughout its lifecycle.
> 2.  **Active Task Notes (Optional - DART Documents):** For ongoing notes, quick updates, or collaborative discussions *during* a task, DART Documents can be created and linked to the active DART Task.
> 3.  **Local Work Order (Optional - Local File):** For comprehensive tasks requiring a detailed brief, a local Work Order (WO) file (`workflow/Work_Orders/WO_*.md`) may be initiated by the USER. This WO is created *after* its parent Task exists in DART and **must** reference the DART Task ID in its filename and content.
> 4.  **"Tetelestai" & Internal Billing Assessment (DART Document):** When a Task's deliverables are complete and client-facing finalization is imminent (DART status: "Tetelestai"), `Joseph, Strategic Assessor` **must** be invoked. Joseph creates an "Internal Billing Assessment" DART Document, adhering to the Claude Truthfulness Protocol. This DART Document is linked to the parent DART Task and is a non-negotiable prerequisite before any client billing summaries are finalized or invoices generated.
> 5.  **Final Archival Journaling (Mandatory - Local Files - System of Record):** Upon full completion of a DART Task (including any necessary Internal Billing Assessment):
>     *   A comprehensive **local Journal Entry** (`journal/JE_<YYYYMMDD_HHMMSS>_<DART_TASKID>_<summary>.md`) **must** be created. This is the definitive, detailed, and permanent archival record of the work performed, decisions made, and outcomes achieved for that DART Task ID.
>     *   The `journal_index.yml` file **must** be updated to include this new local Journal Entry.
>     *   The original DART Task is then updated with a final comment pointing to this local Journal Entry (e.g., "Task complete. See local Journal Entry: `JE_...md` for full archival details.") and its status in DART is set to `done` (or the equivalent final closed state).
> 6.  **Local Handoff Document (Optional - Local File):** If a completed Task (and its WO) directly informs and initiates subsequent new Task(s)/WO(s), a local Handoff Document (`workflow/Handoff/HO_*.md`) is created. It references the completed DART Task ID and its WO, and the new DART Task ID(s) and their WO(s), ensuring smooth context transfer. This is also archived in the local file system.

---

## Getting Started

1.  **Verify DART MCP integration** is working in your development environment.
2.  Complete the **Contributor Onboarding Checklist** (see below) before initiating or participating in workflow tasks.

---

## Contributor Onboarding Checklist

1.  Read this `README_WORKFLOW.md` document thoroughly, paying special attention to the **Rule of Thumb** in the Naming Conventions section.
2.  Open and study the detailed `Work_Order_Process.md`, paying close attention to the hybrid task lifecycle (DART for active, local files for archival) and the full specification of naming conventions for all artifacts.
3.  **Test DART MCP integration**: Use commands like "Show me available tasks", "Create a DART task", "Update DART task status", "Create a DART document and link it to a task" to verify DART access.
4.  **Practice Hybrid Workflow**: Create a test DART task. Optionally add a DART Document for notes. Then, simulate task completion by creating a local Journal Entry (`JE_...md`), updating a test `journal_index.yml`, and finally updating the DART task with a pointer to the local JE before closing it.
5.  State readiness to your team lead or project coordinator, or request any necessary clarifications.

---

## Workflow Process Guides

Key process guides should be maintained within the `Guides/` directory. Examples include:

- **Work Order Process Guide:** `Work_Order_Process.md` - The authoritative document detailing the lifecycle of tasks, WOs, JEs, and HOs.
- **Specific Task Type Guides:** Check the `Guides/` directory for guides related to specific task types.

---

## General Lessons Learned

- **Validate Before Reporting:** If the workflow involves executing commands or scripts (e.g., via an AI using `run_terminal_cmd` or similar), always ensure the output is inspected and the intended action was successful before journaling or handing off a completion.
- **Strict Naming Adherence:** Filename and identifier drift can disrupt automation, traceability, and clarity. Canonical naming patterns (like those for WO, JE, HO) should be strictly enforced.
- **DART Integration Benefits:** AI tools can now query tasks directly without file parsing issues, enabling "What's my next task?" and "Update task status" commands.

---

## Task-Centric Artifact Relationships

- **The DART Task is the origination point and active management record for all work**, identified by its authoritative DART Task ID.
- **All local archival workflow artifacts (local Journal Entries, Work Orders, Handoff documents) must explicitly reference their parent DART Task using the authoritative DART Task ID.** DART Documents used for active notes or billing assessments are directly linked within DART.
- **Artifacts must be cross-referenced for traceability and historic record.**
- **This hybrid system ensures a single point of initiation and active status management (DART), complemented by a robust, universally accessible local archive (file system), enabling auditable and resilient project management.**