---

**Work Order: MJML Component Creation & Initial Documentation**

*   **WO ID:** `WO-COMP-CREATE-001`
*   **Date Created:** `2025-05-15`
*   **Created By:** MJML Component Architect (AI)
*   **Assigned To:** MJML Developer Persona (or an AI assistant capable of fulfilling this role)
*   **Status:** `Open`
*   **Related Work Order (Input):** `WO_Initial_MJML_Component_Identification.md` (Provides the analysis)
*   **Input Document:** `work_orders/completed/mjml_component_analysis_report.md`

**1. Objective:**
To create the initial set of reusable MJML component files and their corresponding basic documentation based on the findings and recommendations outlined in the `mjml_component_analysis_report.md`.

**2. Scope of Work:**

*   **Component File Creation:**
    *   For each component identified and detailed in `mjml_component_analysis_report.md`:
        *   Create a new `.mjml` file in the `templates/components/` directory.
        *   Organize components into subdirectories within `templates/components/` based on logical groupings (e.g., `structural/`, `content_blocks/`, `headers/`, `footers/`, `cta/` as suggested in the report or as deemed appropriate). Create these subdirectories if they don't exist.
        *   The MJML code for each component should be clean, well-formatted, and directly implement the "Core MJML Code Snippet" provided in the analysis report.
        *   Incorporate identified parameters/variables into the component structure in a way that makes them configurable (e.g., using MJML attributes or conventions that can be easily targeted for replacement).
*   **Initial Component Documentation Creation:**
    *   For each `.mjml` component created, create a corresponding Markdown documentation file (e.g., `va-header-logo.md`) in a new `docs/components/` directory. Create this directory and appropriate subdirectories mirroring the component structure if they don't exist.
    *   Each component documentation file should include at least:
        *   **Component Name:** (e.g., `va-header-logo.mjml`)
        *   **Brief Description/Purpose:** What the component does and when to use it.
        *   **Core MJML Code Snippet:** The actual MJML code of the component.
        *   **Identified Parameters/Variables:** List the parameters from the analysis report (e.g., `logoSrc`, `logoAlt`, `backgroundColor`) and briefly explain how they are used or can be configured in the component.
        *   **(Optional but Recommended) Basic Usage Example:** A simple example of how the component might be included or referenced in a parent MJML template or by the Content Strategist's Markdown.
*   **Directory Structure:**
    *   Ensure the new component files are located at `templates/components/[category]/component-name.mjml`.
    *   Ensure the new documentation files are located at `docs/components/[category]/component-name.md`.

**3. Deliverables:**

*   A set of `.mjml` component files within the `templates/components/` directory structure.
*   A corresponding set of `.md` documentation files within the `docs/components/` directory structure.
*   Confirmation that all components listed in the `mjml_component_analysis_report.md` (or a clearly defined subset if full completion is not feasible in one pass) have been created and documented.
*   A journal entry summarizing the work performed, challenges encountered (if any), and a list of all created files.

**4. Acceptance Criteria:**

*   All specified component `.mjml` files are created and contain valid MJML based on the analysis report.
*   All specified component `.md` documentation files are created and contain the minimum required information.
*   The directory structure for components and their documentation is logical and as described.
*   The executing AI explicitly confirms completion of all tasks and provides the completed journal entry.

**5. Persona Guidance for Executing AI:**

*   You are acting as an **MJML Developer**. Your primary focus is the accurate implementation of MJML code and clear, concise documentation of that code.
*   Refer *strictly* to `work_orders/completed/mjml_component_analysis_report.md` as the source of truth for component structure, naming, and parameters.
*   Maintain clean, readable, and well-formatted MJML.
*   If any ambiguity is found in the analysis report or this Work Order, seek clarification from the MJML Component Architect before proceeding with the ambiguous item.

---
