# Journal Entry: MJML Project Structure Consolidation & Asset Relocation

**Date:** 2025-05-17
**Time:** 11:00:00
**Participants:** User, AI Assistant
**Related Task ID (Conceptual):** TASK_Refactor (MJML Structure Refinement)

## Summary of Work Done:

This journal entry details the actions taken to consolidate and refine the MJML project structure, aligning it with the definitions in `README.md`. This effort followed the legacy system documentation.

Key activities performed:

1.  **Consolidation of MJML Component Library:**
    *   Compared the contents of `templates/`, `src/mjml-source/`, and `src/mjml_components/` against the canonical structure defined in `README.md` (`src/mjml-source/components/` for the library and `src/mjml-source/templates/` for raw templates).
    *   Moved unique and relevant MJML components from `templates/components/` (specifically its `content/` and `structure/` subdirectories) into the canonical `src/mjml-source/components/` under respective `content/` and `structure/` subdirectories.
    *   Deleted redundant or empty scaffold directories:
        *   `templates/mjml-source/`
        *   The now empty `templates/components/` and its parent `templates/` (which only contained `.DS_Store`).
        *   `src/mjml_components/` (the version with the underscore), which was identified as a duplicate/older structure.
    *   **Outcome:** The MJML component library is now consolidated under `src/mjml-source/components/` as per `README.md`.

2.  **Relocation of `mjml_assets/` Files:**
    *   Evaluated files within the `mjml_assets/` directory (`dax-price-redux-former-subscriber.mjml`, `hubspot_can_spam_footer.mjml`, `pilot-template.mjml`, `pilot-template.html`).
    *   Moved these files to their logical locations within the `src/` directory structure, based on `README.md` definitions:
        *   `dax-price-redux-former-subscriber.mjml` -> `src/mjml-source/templates/`
        *   `hubspot_can_spam_footer.mjml` -> `src/mjml-source/components/`
        *   `pilot-template.mjml` -> `src/mjml-source/templates/`
        *   `pilot-template.html` -> `src/mjml-compiled/`
    *   **Outcome:** Files from `mjml_assets/` are now integrated into the standard project structure, making `mjml_assets/` potentially redundant.

## Rationale:

These actions were taken to:
*   Eliminate duplicate or outdated directory structures.
*   Ensure all MJML source code and components reside in the locations specified by the project's `README.md`.
*   Improve clarity and maintainability of the MJML assets.

The project's MJML structure is now more aligned with its guiding documentation.
