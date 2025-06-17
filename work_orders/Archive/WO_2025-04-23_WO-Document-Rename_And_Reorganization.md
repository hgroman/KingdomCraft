# Work Order: Documentation Directory Reorganization and Renaming

**Date:** April 2025

**Goal:** Reorganize the `docs/` directory into subdirectories and rename key Markdown files to PascalCase for improved clarity and consistency.

**Rationale:** The current `docs/` directory is becoming cluttered. A structured approach with subdirectories and consistent naming will make documentation easier to navigate and maintain.

**Prerequisites:** Access to the project workspace terminal/shell.

---

## Tasks

**1. Create New Directory Structure:**
    *   Execute the following command from the workspace root:
        ```bash
        mkdir -p docs/guides docs/reference docs/strategy docs/learning docs/legacy
        ```
    *   **Verification:** Confirm the new directories exist within `docs/`.

**2. Move Legacy Directories:**
    *   Execute the following command (checks for existence before moving):
        ```bash
        if [ -d "docs/components" ]; then mv docs/components docs/legacy/; echo 'Moved docs/components'; else echo 'docs/components not found'; fi
        ```
    *   Execute the following command (checks for existence before moving):
        ```bash
        if [ -d "docs/client-specific" ]; then mv docs/client-specific docs/legacy/; echo 'Moved docs/client-specific'; else echo 'docs/client-specific not found'; fi
        ```
    *   **Verification:** Confirm `docs/legacy/components` exists (if `docs/components` existed previously). Confirm `docs/client-specific` no longer exists at the root.

**3. Move and Rename Markdown Files:**
    *   Execute the following `mv` commands one by one from the workspace root:
        ```bash
        mv docs/MASTER_DOCUMENTATION.md docs/guides/MasterDocumentation.md
        mv docs/EMAIL_STYLE_GUIDE.md docs/guides/EmailStyleGuide.md
        mv docs/RESPONSIVE_DESIGN_GUIDE.md docs/guides/ResponsiveDesignGuide.md
        mv docs/POST_EXPORT_OUTLOOK_FIXING_GUIDE.md docs/guides/PostExportOutlookFixingGuide.md
        mv docs/email-fundamentals.md docs/reference/EmailFundamentals.md
        mv docs/EMAIL_CLIENT_COMPATIBILITY_GUIDE.md docs/reference/EmailClientCompatibilityGuide.md
        mv docs/EXTERNAL_REFERENCES.md docs/reference/ExternalReferences.md
        mv docs/GPT-Deep-Research-Strategy.md docs/strategy/GptDeepResearchStrategy.md
        mv docs/30-Day-MJML-Learning-Path.md docs/learning/ThirtyDayMjmlLearningPath.md
        ```
    *   **Verification:** Confirm that the original files no longer exist in `docs/` and that the newly named PascalCase files exist in their respective target directories (`docs/guides/`, `docs/reference/`, etc.).

**4. Update Internal Links (Requires Separate Interaction/Tooling):**
    *   **Action:** The following files **must** have their internal Markdown links updated to reflect the new directory structure and PascalCase filenames. This likely requires reading each file and applying targeted edits.
        *   `docs/guides/MasterDocumentation.md` (Primary index, most critical)
        *   `docs/guides/PostExportOutlookFixingGuide.md`
        *   `docs/reference/EmailClientCompatibilityGuide.md`
        *   `docs/reference/EmailFundamentals.md`
        *   `docs/strategy/GptDeepResearchStrategy.md` (Less likely, but check)
    *   **Details:** Links using relative paths (`./`, `../`) need to be adjusted. For example, in `MasterDocumentation.md`, a link like `[Email Style Guide](./EMAIL_STYLE_GUIDE.md)` needs to become `[Email Style Guide](./EmailStyleGuide.md)`. A link like `[Implementation Guide](../templates/IMPLEMENTATION_GUIDE.md)` might remain correct depending on the target, but should be verified.
    *   **Note:** This step is listed for completeness but should be performed interactively after the file moves are confirmed successful.

---

**Completion Criteria:** All specified directories created, legacy directories moved, Markdown files moved and renamed, and verification checks passed (excluding Step 4 which requires follow-up).

---

## Status (As of [Current Date/Time])

*   **Task 1 (Create New Directory Structure):** COMPLETED. Directories `docs/guides`, `docs/reference`, `docs/strategy`, `docs/learning`, `docs/legacy` created successfully.
*   **Task 2 (Move Legacy Directories):** COMPLETED (No action taken). Directories `docs/components` and `docs/client-specific` were not found at the root of `docs/`.
*   **Task 3 (Move and Rename Markdown Files):** COMPLETED (Partial).
    *   `docs/MASTER_DOCUMENTATION.md` -> `docs/guides/MasterDocumentation.md`: **FAILED (Source not found)**
    *   `docs/EMAIL_STYLE_GUIDE.md` -> `docs/guides/EmailStyleGuide.md`: **FAILED (Source not found)**
    *   `docs/RESPONSIVE_DESIGN_GUIDE.md` -> `docs/guides/ResponsiveDesignGuide.md`: **SUCCESS**
    *   `docs/POST_EXPORT_OUTLOOK_FIXING_GUIDE.md` -> `docs/guides/PostExportOutlookFixingGuide.md`: **SUCCESS**
    *   `docs/email-fundamentals.md` -> `docs/reference/EmailFundamentals.md`: **SUCCESS**
    *   `docs/EMAIL_CLIENT_COMPATIBILITY_GUIDE.md` -> `docs/reference/EmailClientCompatibilityGuide.md`: **SUCCESS**
    *   `docs/EXTERNAL_REFERENCES.md` -> `docs/reference/ExternalReferences.md`: **SUCCESS**
    *   `docs/GPT-Deep-Research-Strategy.md` -> `docs/strategy/GptDeepResearchStrategy.md`: **SUCCESS**
    *   `docs/30-Day-MJML-Learning-Path.md` -> `docs/learning/ThirtyDayMjmlLearningPath.md`: **SUCCESS**
*   **Task 4 (Update Internal Links):** PENDING. Requires separate interactive step as noted in the work order.
👍