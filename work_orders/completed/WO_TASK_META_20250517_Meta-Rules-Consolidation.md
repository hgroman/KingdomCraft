**Here’s the unambiguous convention + the one‑time cleanup plan you can hand straight to your local AI.  No follow‑up questions required.**

---

## 0.  Naming & folder rules (authoritative)

| Artifact                 | File‑name pattern                                     | Folder                                                             | Notes                                                                                                                       |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| **Task (master record)** | entry in `tasks.yml` (`id:` = `TASK###`)              | root                                                               | Always create **first**                                                                                                     |
| **Work Order**           | `WO_<TASKID>_<YYYYMMDD>_<3‑5‑word‑label>.md`          | `work_orders/active/` → move to `work_orders/completed/` when done | One active WO per task; filename embeds the governing TASKID                                                                |
| **Journal Entry**        | `JE_<YYYYMMDD_HHMMSS>_<TASKID>_<1‑3‑word‑summary>.md` | `journal/`                                                         | You **may** make *any number* while a task is in‑progress; at least one final JE is **mandatory** when the task hits `done` |

Additional:

* Update `journal_index.yml` every time you add a JE.
* Interim JEs follow the same naming rule; just capture the current state.
* Use UTC timestamps for filenames.

---

## 1.  Immediate cleanup / alignment Work Order (give this to the AI)

```
Work Order ID: WO_TASK_META_CONSOLIDATION_20250517

Title: Conform existing files & docs to new TASK‑centric naming rules

Related Task ID in tasks.yml: TASK_META (create if absent)

Objective/Goal:
1. Rename any old Work Orders and Journal files to the patterns in §0.
2. Update Work_Order_Process.md and README.md examples to match §0.
3. Verify tasks.yml cross‑links (each task → its WO & JEs).

Scope / Detailed Tasks:
A. Scan work_orders/active/ and work_orders/completed/
   • For each file whose name ≠ pattern, rename to `WO_<TASKID>_<YYYYMMDD>_<label>.md`.

B. Scan journal/
   • For each entry whose name ≠ pattern, rename to `JE_<YYYYMMDD_HHMMSS>_<TASKID>_<summary>.md`.
   • Update journal_index.yml paths accordingly.

C. Docs update
   • In docs/guides/Work_Order_Process.md: replace §4.1 filename example and §4.4.2 JE example with the new patterns.
   • In README.md “Project Structure” & any filename examples: update to new patterns.
   • Apply recommendations from Readme‑improvement‑recommendations.md only where they do **not** conflict with the new naming spec.

D. Create a Journal Entry (filename per §0) summarizing all renames & doc edits.

E. Update tasks.yml
   • Add TASK_META (if not present) with status `done`.
   • Ensure every other task lists its current WO and latest JE.

F. Create a Handoff file summarising the new canonical convention.

Expected Deliverables/Outputs:
• All filenames now match §0.
• Work_Order_Process.md & README.md reflect the convention.
• journal_index.yml accurate.
• TASK_META marked done; Handoff created.

Completion Checklist (per doc):
[ ] Files renamed
[ ] Docs updated
[ ] JE written
[ ] tasks.yml updated
[ ] Handoff file created
[ ] WO archived
```

---

## 2.  Quick rationale (for the AI, not for Hank)

* **TASK is master key** → easy one‑line grep across repo.
* Embedding TASKID in every WO/JE filename gives instant linkage.
* Allowing unlimited interim JEs keeps real‑time breadcrumb while still guaranteeing a final “done” entry.

**Done.  Execute exactly as written—no extra clarification pings.**
