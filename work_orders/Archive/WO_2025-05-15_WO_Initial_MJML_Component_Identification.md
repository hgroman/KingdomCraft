# Work Order: Initial MJML Component Identification from Pilot Template

**Date:** 2024-05-16 (AI should use actual date)
**Created By:** MJML Component Architect (AI Persona)
**Project:** Voice Automated Email Template System (EmailForge)
**Associated Handoff:** (Link to or reference relevant handoff doc, if any, upon starting work)

## 1. Goal

To analyze the successfully created `pilot-template.mjml` (from the "MJML Framework Integration Pilot") and identify a foundational set of reusable MJML components. This task is the first step in building the project's official MJML Component Library.

## 2. Background & Rationale

The EmailForge project is transitioning to a robust, MJML-first workflow that leverages a library of reusable MJML components. A previous pilot project successfully converted an existing HTML email to MJML (`templates/mjml-source/pilot-template.mjml`), validating the MJML approach.

This work order initiates the formal creation of the component library by deconstructing this proven pilot template. The identified components will serve as the initial building blocks for future email template development, enabling a more efficient and consistent process, especially within the planned multi-persona AI workflow (Content Strategist -> MJML Developer).

## 3. Scope & Tasks

**Input File:** `templates/mjml-source/pilot-template.mjml` (Verify this path; it was the target in the original pilot WO).

**Tasks:**

1.  **Thoroughly Review `pilot-template.mjml`:**
    *   Understand its overall structure, layout, and the different visual/functional sections it contains.
    *   Pay attention to how MJML elements (`mj-section`, `mj-column`, `mj-image`, `mj-text`, `mj-button`, `mj-spacer`, `mj-divider`, etc.) are used to achieve the design.
2.  **Identify Potential Reusable Components:**
    *   Look for distinct, self-contained sections or elements that are likely to be reused across multiple email templates. Examples include (but are not limited to):
        *   Email Header (e.g., logo area)
        *   Hero Section (if applicable in the pilot)
        *   Standard Text Blocks (e.g., a paragraph or a heading + paragraph)
        *   Image Blocks (e.g., full-width image, image with caption)
        *   Text-Image Combination Blocks (e.g., image on left, text on right, or vice-versa)
        *   Call-to-Action (CTA) Button/Section
        *   Feature Cards/Columns (if the pilot used such a layout)
        *   Dividers/Spacers used consistently for specific layout purposes
        *   Email Footer (e.g., copyright, address, social links)
3.  **For Each Identified Potential Component:**
    *   **Define its Purpose:** What is the role of this component?
    *   **Isolate its MJML Code:** Extract the core MJML markup that constitutes this component.
    *   **Identify Key Parameters/Variables:** What parts of this component would need to change for different emails? (e.g., image URLs, text content, button links, colors, padding values that might vary per instance). These will inform how the component should be designed to accept inputs.
    *   **Suggest a Component Name:** Propose a clear, descriptive name (e.g., `va-header-standard.mjml`, `va-text-block-body.mjml`, `va-cta-button-primary.mjml`). Consider a naming prefix like `va-` (for Voice Automated) or similar for namespacing.
4.  **Propose Initial Component File Structure:**
    *   Suggest how these individual component MJML files should be saved (e.g., within `templates/mjml-source/components/[category]/component-name.mjml`).

## 4. Deliverables

A **Markdown document** summarizing the findings, which includes:

1.  **List of Identified Reusable Components:**
    *   For each component:
        *   Proposed Name
        *   Brief Description/Purpose
        *   Core MJML Code Snippet (the isolated code for the component)
        *   List of identified parameters/variables (e.g., `imageUrl`, `altText`, `buttonText`, `href`, `contentHtml`)
2.  **Proposed Directory Structure** for storing these component `.mjml` files within `templates/mjml-source/components/`.
3.  **Any Observations or Challenges** encountered during the analysis of `pilot-template.mjml` that might be relevant to component design (e.g., complex nested structures that might be hard to generalize, heavy reliance on specific inline styles vs. attributes).
4.  **A Draft Journal Entry (in Markdown format):** This entry is for review and finalization by the MJML Component Architect. It should:
    *   Briefly summarize the work performed under this Work Order.
    *   Explicitly state that all tasks outlined in this Work Order ("WO_Initial_MJML_Component_Identification.md") have been completed.
    *   Reference the main deliverable (the Markdown document summarizing findings).

## 5. Acceptance Criteria

*   The input `pilot-template.mjml` has been thoroughly analyzed.
*   A clear list of potential reusable components, with their proposed names, MJML snippets, and parameters, is provided.
*   A logical directory structure for the components is proposed.
*   The deliverable (Markdown document summarizing findings) is clear, well-organized, and provides actionable information for the MJML Component Architect.
*   The draft journal entry (as specified in Deliverables) is provided and confirms completion of all tasks in this Work Order.

## 6. Notes for the AI Performing This Work Order

*   You are acting as an analytical assistant to the MJML Component Architect.
*   Your focus is on *identification and definition*, not necessarily the final perfect implementation of the components themselves in this step (though well-isolated code is key).
*   Refer to MJML documentation if unsure about specific tags or attributes encountered in the pilot template.
*   The output of this work order will be reviewed by the MJML Component Architect, who will then make final decisions on component design and implementation.
*   **Crucially: Upon completion of all tasks, as part of your deliverables, you must prepare the draft journal entry described in Section 4 (Deliverables). This journal entry serves as your confirmation that every item in this Work Order has been addressed.**

---
