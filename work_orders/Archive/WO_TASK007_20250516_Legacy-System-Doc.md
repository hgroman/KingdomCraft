# Work Order: Document Legacy Email System

**WO_ID:** WO_Legacy_System_Doc_001
**Date Created:** {{YYYY-MM-DD}} <!-- To be filled by executing AI -->
**Assigned To:** Legacy System Analyst & Documenter
**Status:** Open
**Priority:** Medium

## 1. Background

The project has transitioned to an MJML-based email development workflow. Prior to this, a non-MJML (HTML-based) modular email template system was in use. To preserve knowledge and provide historical context for past design choices or functionalities, this legacy system needs to be clearly documented and archived.

## 2. Objective

To create a comprehensive guide within the `archive/` directory that clearly explains the structure, components, usage, and overall workflow of the legacy HTML email template system. This documentation will serve as a reference only.

## 3. Scope & Deliverables

1.  **Analysis of Legacy Assets:**
    *   Thoroughly review the `archive/legacy_assets_20250516/IMPLEMENTATION_GUIDE.md` document.
    *   Examine the directory structure and any component files within `archive/legacy_assets_20250516/` (e.g., `components/`, `layouts/`).
    *   Analyze any other legacy source materials specified by the project lead.

2.  **Documentation Creation:**
    *   Create a new directory: `archive/legacy_system_documentation/`.
    *   Within this new directory, create a primary markdown file named `README.md`.
    *   This `README.md` must cover the following aspects of the legacy system:
        *   **Overview:** A brief introduction to the legacy system, its original purpose, and a clear statement that it is archived and superseded by the MJML system.
        *   **Directory Structure:** An explanation of the legacy system's file and folder organization (as detailed in `IMPLEMENTATION_GUIDE.md` or observed in the assets).
        *   **Core Components:** A detailed breakdown of each type of component (e.g., headers, content blocks, feature cards, CTA buttons, footers).
            *   For each component type, describe its purpose and general use cases.
            *   If possible, include or reference example HTML snippets from the legacy assets (e.g., `logo-header.html`, `text-section.html`).
            *   Note any customization or variables mentioned in the `IMPLEMENTATION_GUIDE.md`.
        *   **Email Assembly Process:** Describe the step-by-step process of how an email was built using the base template and these components, as outlined in `IMPLEMENTATION_GUIDE.md`.
        *   **Usage with Platforms:** Briefly mention any platform-specific adaptations (e.g., for HubSpot, Brevo) if detailed in the source materials.
        *   **Sample Campaigns:** Refer to any sample campaign files (e.g., `sample-product-announcement.html`) and explain their illustrative purpose.

3.  **Journal Entry:**
    *   Upon successful completion of the documentation, create a new journal entry.
    *   The journal entry should summarize the work done, state the location of the new legacy documentation (`archive/legacy_system_documentation/README.md`), and be added to the `journal_index.yml`.

## 4. Source Materials

*   Primary: `archive/legacy_assets_20250516/IMPLEMENTATION_GUIDE.md`
*   Primary: Contents of the `archive/legacy_assets_20250516/` directory.
*   Secondary: Any additional files or information provided by the project lead.

## 5. Acceptance Criteria

*   The `archive/legacy_system_documentation/README.md` file is created and comprehensively documents the legacy system as per the scope and deliverables.
*   The documentation is clear, accurate, well-organized, and easy to understand.
*   The documentation explicitly marks the legacy system as archived and for reference only.
*   All source materials have been appropriately analyzed and referenced.
*   A journal entry confirming completion and linking to the new documentation is created and correctly indexed in `journal_index.yml`.
