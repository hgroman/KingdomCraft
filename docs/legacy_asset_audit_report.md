# Legacy Asset Audit Report

**Work Order:** WO002
**Date:** 2025-06-11

## 1. Summary

This report documents the findings of the legacy asset audit initiated by `WO_TASK002_20250611_Legacy-Asset-Audit.md`. The primary location for legacy assets has been identified as the `Archive-Legacy_ARCHIVED_20250611/` directory at the project root.

## 2. Initial Findings: `Archive-Legacy_ARCHIVED_20250611/` Directory

The following is a top-level overview of the contents within the `Archive-Legacy_ARCHIVED_20250611/` directory. Each item will be assessed for its historical value and a recommendation for its final disposition (Archive or Delete) will be made.

### 2.1. Documentation

- **`Docs-Pre-MJML-Review-Me/`**: Directory containing pre-MJML documentation.
- **`Legacy-README.md`**: A README file from the previous system.
- **`Legacy_IMPLEMENTATION_GUIDE.md`**: An implementation guide for the legacy system.
- **`README.md`**: Another README, potentially a duplicate or variant.

### 2.2. Legacy Templates & Components

- **`Legacy-HTML-Creations/`**: Directory likely containing raw HTML email files.
- **`Legacy-templates/`**: Directory containing legacy template sources (e.g., Handlebars).

### 2.3. Legacy Build System

- **`build_handlebars_templates.js`**: Script for building Handlebars templates.
- **`populate_html_from_json.js`**: Script for data injection.
- **`update-additional-features.js`**: Another build-related script.
- **`input/`**: Likely contains data files (e.g., JSON) for populating templates.
- **`output/`**: Likely contains compiled HTML from the legacy build process.
- **`production/`**: Likely contains production-ready assets from the legacy system.

### 2.4. Other

- **`mjml_component_architect_persona.md`**: A persona document that may be outdated or superseded.

## 3. Detailed Asset Analysis

*(This section will be populated as the audit continues.)*

### 3.1. `Archive-Legacy_ARCHIVED_20250611/Legacy-templates/components/`

This directory contains the building blocks of the legacy templating system. It includes both documentation for these components (Markdown files) and the components themselves, organized into subdirectories.

- **Legacy Component Documentation (Markdown):**
  - `buttons.md`: Documentation for legacy button components.
  - `feature-cards.md`: Documentation for legacy feature card components.
  - `header.md`: Documentation for legacy header components.

- **Legacy Component Subdirectories:** These directories contain the `.html` snippet files for the legacy components. This confirms the old system was based on HTML partials, likely assembled by the Handlebars build script (`build_handlebars_templates.js`) also found in the `Archive-Legacy` directory.
  - `content-blocks/`: Contains various content block structures.
  - `cta-buttons/`: Contains call-to-action button components.
  - `feature-cards/`: Contains feature card components (e.g., `feature-card-row.html`).
  - `footers/`: Contains footer components.
  - `headers/`: Contains header components.

### 3.2. `Archive-Legacy_ARCHIVED_20250611/Legacy-HTML-Creations/`

This directory contains a large number of files that appear to be final, compiled HTML emails and various supporting markdown documents.

- **Naming Convention:** Files are prefixed with a `YYYY-MM-DD_HH-MM-SS` timestamp, indicating when they were created or saved.
- **Content:**
    - **Compiled HTML Emails:** A mix of promotional emails, product announcements, and landing pages (e.g., `2025-03-15_19-22-43_Black-Friday-DMO-HubSpot.html`, `2025-04-01_05-18-34_EHR-ZORIKA-75k.html`). Many files have suffixes like "Brevo" or "copy", suggesting different versions or exports for specific platforms.
    - **Legacy Documentation:** A collection of markdown files that seem to be project documentation from the legacy era (e.g., `2025-03-17_10-25-00_EMAIL_CHECKLIST.md`, `2025-03-17_10-25-00_dragon_email_design_system.md`).
    - **CSS:** At least one `main.css` file, likely used by the compiled HTML emails.

**Assessment:** This directory appears to be a historical archive of final deliverables from the old system. The value is purely for reference to past campaigns. The documentation within it is likely superseded by the current `docs/` structure.

### 3.3. `Archive-Legacy_ARCHIVED_20250611/Docs-Pre-MJML-Review-Me/`

This directory contains documentation and content from the pre-MJML era.

- **Content:**
    - `ExternalReferences.md`: A list of external links and resources.
    - `GptDeepResearchStrategy.md`: A document outlining a research strategy, likely related to content generation or development.
    - `Helium-Email-Content-for-Convertsion-to-html.md`: Raw text content for an email, intended for conversion into HTML.

**Assessment:** These files provide insight into the research and content gathering processes of the legacy system. They are likely superseded by current workflows but may have some historical value.

### 3.4. Legacy Build System (`Archive-Legacy_ARCHIVED_20250611/`)

The `Archive-Legacy` directory contains a complete, self-contained legacy build system based on Node.js and Handlebars.js.

- **Core Script:** `build_handlebars_templates.js` is the main script. It compiles `.html` templates/partials using Handlebars, injects data from client-specific JSON configuration files, and outputs final HTML files.
- **Key Directories Used by Script:**
    - `templates/` (within `Archive-Legacy_ARCHIVED_20250611/Legacy-templates/`): Contains the source partials and components.
    - `config/`: Would have contained client-specific `.json` configuration files.
    - `output/`: The destination for compiled HTML files.
- **Supporting Scripts:**
    - `populate_html_from_json.js`: Likely a helper script for data injection.
    - `update-additional-features.js`: Another helper script, purpose unclear without further analysis.

**Assessment:** This entire build system is obsolete, having been replaced by the MJML workflow. The scripts and associated directories (`input/`, `output/`, `production/`) are only valuable for understanding how legacy emails were constructed. They have no forward-looking value.
