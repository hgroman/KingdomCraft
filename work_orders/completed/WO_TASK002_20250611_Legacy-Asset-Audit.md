# Work Order: Legacy Non-MJML Asset Audit and Archival

- **Work Order ID:** WO002
- **Title:** Execute Legacy Non-MJML Asset Audit and Archival
- **Status:** Open
- **Related Task ID in tasks.yml:** TASK002
- **Input Documents/Prerequisites:**
  - `docs/guides/Work_Order_Process.md`
  - `tasks.yml` (for TASK002 details)
  - `docs/legacy/` directory and its contents
- **Date Created:** 2025-06-11
- **Created By Persona:** AI Assistant (Cascade)
- **Assigned Persona(s):**
  - Primary Executor: AI Assistant (Cascade)
  - Guide/Reviewer: MJML Component Architect (User)
- **Priority:** Medium
- **Due Date:**
- **Objective/Goal:** To perform a comprehensive audit of all legacy, non-MJML assets, document them, and decide on their final disposition (archive or delete) to clean up the project repository.
- **Background/Context:** The project has fully transitioned to an MJML-first workflow. Legacy assets from a previous HTML-based system exist for historical context but are not part of the forward-looking development process. `TASK002` was created to formally address these assets. This Work Order initiates that task.
- **Scope of Work / Detailed Tasks:**
  - [ ] **Discovery:** Systematically scan the entire repository, starting with `docs/legacy/`, to identify all files and directories that are part of the old, non-MJML system.
  - [ ] **Assessment:** For each identified asset, assess its purpose and potential value for historical reference.
  - [ ] **Documentation:** Create a master list of all legacy assets, their locations, and a recommendation for each (e.g., "Archive", "Delete"). This list should be a primary deliverable.
  - [ ] **Execution:** Based on user/guide approval of the master list, execute the archival or deletion of the assets.
- **Expected Deliverables/Outputs:**
  - A new Markdown file in `docs/` named `legacy_asset_audit_report.md` containing the master list and recommendations.
  - (After approval) Removal or relocation of legacy assets from the main project tree.
  - A comprehensive Journal Entry and Handoff document upon completion.
- **Completion Checklist (Cross-reference to Section 4.4):**
  - [ ] Primary Deliverables Met
  - [ ] Journal Entry Created (Filename: ____________________)
  - [ ] `tasks.yml` Updated (Task ID: TASK002 set to `done`/`review`)
  - [ ] Handoff Document Created (Filename: ____________________)
  - [ ] WO Archived (Moved to `work_orders/completed/`)
