# KingdomCraft – AI-Assisted MJML Template System

> **Purpose**  Build and maintain an AI‑assisted, IDE‑native workflow that turns business copy into production‑ready MJML email templates—fast, consistent, and client‑safe.

---

## 📑 Table of Contents

1. [Overview](#overview)
2. [AI Personas](#ai-personas)
3. [Project Structure](#project-structure)
4. [Naming Conventions](#naming-conventions)
5. [Getting Started](#getting-started)
6. [AI Onboarding Checklist](#ai-onboarding-checklist)
7. [Workflow Guides](#workflow-guides)
8. [Lessons Learned](#lessons-learned)

---

## 🚀 Guiding Philosophy: Start Here!

Before diving into the tactical details, it is **essential** to understand the core philosophy and operational mechanics of the KingdomCraft system. This is documented in:

➡️ **[`docs/guides/KINGDOMCRAFT_SYSTEM_PHILOSOPHY.md`](docs/guides/KINGDOMCRAFT_SYSTEM_PHILOSOPHY.md)**

Reading this guide first will provide the necessary context for all other documentation and processes within this project.

---

## Overview

KingdomCraft converts structured Markdown into polished MJML emails through a three‑persona AI relay:

1. **Content Strategist / Markdown Crafter** → captures copy & intent.
2. **MJML Developer** → instantiates components & assembles the template.
3. **MJML Component Librarian / Architect** → owns the reusable component catalog.

---

## AI Personas

| ID | Role                                  | Core Output                                |
| -- | ------------------------------------- | ------------------------------------------ |
| P1 | Content Strategist · Markdown Crafter | `*.md` content file referencing components |
| P2 | MJML Developer                        | `*.mjml` template built from the library   |
| P3 | MJML Component Librarian / Architect  | component `*.mjml` + docs                  |

Persona prompts live in `persona_prompts/`.

---

## Project Structure

```text
src/
  mjml-source/
    components/          # P3 component library (.mjml)
    templates/           # raw template files (.mjml)
  mjml-compiled/         # HTML output (CI‑generated)

work_orders/
  active/
  completed/
Handoff/
journal/
docs/
  guides/
  mjml_component_docs/   # per‑component docs
```

---

## Naming Conventions *(authoritative) – full spec in **docs/guides/Work\_Order\_Process.md***

| Artifact              | Pattern                                      | Example                                         |
| --------------------- | -------------------------------------------- | ----------------------------------------------- |
| **Task (master key)** | entry in `tasks.yml` → `TASK005`             | —                                               |
| **Work Order**        | `WO_<TASKID>_<YYYYMMDD>_<label>.md`          | `WO_TASK005_20250517_MJML-Cleanup.md`           |
| **Journal Entry**     | `JE_<YYYYMMDD_HHMMSS>_<TASKID>_<summary>.md` | `JE_20250517_083012_TASK005_Cleanup-Done.md`    |
| **Handoff**           | `HO_<YYYYMMDD_HHMMSS>_<TASKID>_<summary>.md` | `HO_20250517_083112_TASK005_Cleanup-Handoff.md` |

> **Rule of thumb:** Task first → optional Work Order(s) → any number of Journals → Handoff on completion.

---

## Getting Started

1. Clone repository & open in Cursor/VS Code.
2. Run `npm install` (for MJML CLI) and any project bootstrap scripts.
3. Follow **AI Onboarding** below before issuing commands.

---

## AI Onboarding Checklist

1. Read this README top‑to‑bottom.
2. Open `docs/guides/Work_Order_Process.md`; memorise §4 (lifecycle) & naming table.
3. Skim `journal_index.yml` for recent context.
4. Review open items in `tasks.yml` and the latest file in `Handoff/`.
5. Confirm available IDE tools (see `docs/Tools.md`).
6. State readiness or request clarifications.

---

## Workflow Guides

* **Work Order Process** – `docs/guides/Work_Order_Process.md`
* **Component Authoring Guide** – `docs/guides/MJML_Component_Guide.md` *(TBD)*

---

## Lessons Learned

* *run\_terminal\_cmd* output is available—always validate a fix before reporting success.
* Filename drift kills automation → canonical patterns now enforced for **WO / JE / HO**.

---

© 2025 Voice Automated LLC – All rights reserved.
