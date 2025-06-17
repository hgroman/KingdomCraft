# KingdomCraft: A Note to Our Future Selves

**Authored By:** KingdomCraft Steward (AI)
**Date:** 2025-06-16
**Purpose:** This document is our Rosetta Stone. It is the definitive guide to the philosophy and mechanics of the KingdomCraft system. If you are returning to this project after a long absence, start here. Read this document in its entirety. It is designed to restore full context and operational capability from a cold start.

---

## Part I: The Core Problem & The Central Dogma

### The Problem This System Solves
This system exists to combat the natural entropy of complex, long-term projects. It was built to solve three core problems:
1.  **Ambiguity of State:** The confusion between what work is *in-progress* versus what is *done and archived*.
2.  **Knowledge Evaporation:** The loss of critical context, rationale, and learnings over time.
3.  **Lack of Discipline:** The human and AI tendency to skip documentation, leading to an un-auditable and opaque project history.

This system imposes a benevolent, productive discipline.

### The Central Dogma: The Two-System Doctrine
To understand anything about how we work, you must first internalize this central concept. We operate two distinct, complementary systems:

**1. The System of Engagement (DART)**
*   **Purpose:** This is the system for the **living and the immediate**. It is where all active work resides.
*   **Function:** It handles task management, status tracking, active discussions, and ephemeral notes.
*   **Analogy:** Think of it as the bustling workshop floor. It's dynamic, sometimes messy, and focused on the "now."
*   **Rule:** If you want to know what we are working on *right now*, DART is the **single source of truth**.

**2. The System of Record (Local Files in Git)**
*   **Purpose:** This is the system for the **ages and the permanent**. It is our project's immutable, long-term memory.
*   **Function:** It holds the detailed, narrative **Journal Entries** of completed work, the formal **Handoffs**, all client knowledge, and the persona definitions that power our AI workforce.
*   **Analogy:** Think of it as the finished goods warehouse and the university library, combined. It is organized, stable, and built for posterity.
*   **Rule:** If you want to know the detailed history of what has been *accomplished*, the local file archive is the **single source of truth**.

The entire KingdomCraft workflow is the disciplined process of moving a piece of work from the System of Engagement to the System of Record, ensuring nothing is lost in translation.

---

## Part II: The Workflow Flywheel (How an Idea Becomes an Artifact)

Every piece of meaningful work follows this precise lifecycle. This is not optional.

1.  **The Spark (A DART Task is Created)**
    *   **What:** All work, no matter how small, begins its life as a DART Task.
    *   **Why:** This gives the work a unique, traceable ID and officially places it into the System of Engagement. It is now "real" and trackable.

2.  **The Blueprint (A Local Work Order is Written)**
    *   **What:** For any non-trivial task, a local markdown file, `work_orders/WO_<DART_TASKID>_...`, is created.
    *   **Why:** This is the detailed brief for the AI persona who will perform the work. It provides context, instructions, and acceptance criteria, ensuring the AI is properly oriented.

3.  **The Execution (A Persona is Invoked)**
    *   **What:** A specialized AI persona is activated to perform the work as described in the Work Order.
    *   **Why:** We use a "team" of specialized AIs, not a single generalist. This ensures focus, quality, and adherence to role-specific protocols (e.g., a developer persona codes, an analyst persona assesses).

4.  **The Chronicle (A Local Journal Entry is Authored)**
    *   **What:** Upon completion, a `journal/JE_<YYYYMMDD_HHMMSS>_<DART_TASKID>_...` file is created.
    *   **Why:** This is the **most critical archival step**. The Journal Entry is the permanent, narrative record of the work. It details what was done, why it was done, what was learned, and links to any created artifacts. It transforms action into lasting intellectual capital.

5.  **The Finalization (DART is Updated, Handoff is Created)**
    *   **What:** The original DART Task is marked "Done" and a link to the local Journal Entry is added to it. If the work needs to be formally passed to another human, a `Handoff/HO_...` document is created.
    *   **Why:** This closes the loop. It removes the task from the active System of Engagement and formally places its history in the System of Record, completing its journey.

---

## Part III: The Persona Architecture (A Disciplined AI Workforce)

We do not use a single, generic AI. We architect, build, and deploy a team of AI specialists defined by their persona files in the `/personas` directory.

*   **The Steward (My Role):** I am the orchestrator, the system governor. My persona file (`1.kingdomcraft_steward_persona.md`) defines my role as the high-level strategist who understands the full system, plans work, and delegates to the specialists.

*   **The Specialists:** These are the "doers," each an expert in a narrow domain. Their persona files are their source code, their constitution, and their ethical framework.
    *   **Prime Example (`joseph_strategic_assessor_persona.md`):** Joseph is our most powerful specialist. He is responsible for billing assessment and is bound by the "Claude Truthfulness Protocol." This demonstrates how we enforce strict rules and operationalize complex business logic through dedicated personas.

---

## Part IV: The Library of Alexandria (How to Find Anything)

This is the map of our System of Record.

*   `/docs/guides/`: Contains the foundational process documents, including this one. The "how-to" manuals of our system.
*   `/personas/`: The "source code" for our AI workforce. Defines who they are, what they do, and their rules of engagement.
*   `/journal/`: The chronological, narrative history of the project. The single most important directory for understanding what has been accomplished.
*   `/work_orders/`: Contains the detailed briefs for tasks. `active/` holds current work; `archive/` holds completed briefs.
*   `/clients/`: All knowledge and artifacts related to specific clients are organized here.
*   `/Handoff/`: Formal communication documents for passing completed work between team members.

---

## Part V: The Re-Onboarding Checklist

If you are reading this after a long break, follow these steps in order.

1.  **Read this document** (`docs/guides/KINGDOMCRAFT_SYSTEM_PHILOSOPHY.md`) in its entirety. Do not skip sections.
2.  **Review `README_WORKFLOW.md`** for a tactical, at-a-glance summary of the process and naming conventions.
3.  **Log into DART** and review the tasks on the main board. This will tell you what is currently active.
4.  **Read the last three (3) entries** in the `/journal` directory to understand the most recently completed work.
5.  **You are now re-oriented.** Welcome back.
