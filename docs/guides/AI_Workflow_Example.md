# AI Workflow Example: Creating a "New Feature" Email

This document provides a practical example of the three-persona AI relay in action, from initial request to final MJML template.

**Goal:** Create a responsive email announcing a new product feature.

--- 

### Stage 1: Content Strategist / Markdown Crafter (Persona 1)

**Input:** A simple request: "We need an email to announce our new 'Magic Button' feature. It should have a hero image, a brief intro, three key benefits, and a strong call-to-action."

**Action:** The Content Strategist drafts the email content in a structured Markdown file. This file doesn't contain any styling or layout; it focuses purely on content and references to the desired MJML components.

**Output File (`content/2025-06-11_new-magic-button-email.md`):**

```markdown
---
email_subject: "Introducing the New Magic Button! ✨"
---

{{> components/heroes/hero-image-text 
  image_src="images/magic-button-hero.png" 
  title="It's Here: The Magic Button" 
  text="The feature you've been waiting for is finally live. See how it can transform your workflow."
}}

{{> components/body/two-column-icon-text
  items: [
    {
      icon_src: "icons/icon-speed.png",
      title: "Blazing Fast",
      text: "Perform complex actions in a single click."
    },
    {
      icon_src: "icons/icon-easy.png",
      title: "Simple to Use",
      text: "No learning curve. It's intuitive by design."
    },
    {
      icon_src: "icons/icon-power.png",
      title: "Powerful Results",
      text: "Unlock new capabilities and save hours of work."
    }
  ]
}}

{{> components/ctas/button-primary
  button_text: "Try the Magic Button Now"
  button_url: "https://example.com/magic-button"
}}

```

--- 

### Stage 2: MJML Developer (Persona 2)

**Input:** The structured Markdown file from Persona 1.

**Action:** The MJML Developer interprets the Markdown and assembles a complete MJML template by instantiating the referenced components from the library. This persona handles the layout, structure, and any template-specific logic.

**Output File (`src/mjml-source/templates/2025-06-11_new-feature-magic-button.mjml`):**

```mjml
<mjml>
  <mj-head>
    <mj-title>Introducing the New Magic Button! ✨</mj-title>
  </mj-head>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-include path="../components/heroes/hero-image-text.mjml" />
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-include path="../components/body/two-column-icon-text.mjml" />
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-include path="../components/ctas/button-primary.mjml" />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

--- 

### Stage 3: MJML Component Librarian / Architect (Persona 3)

**Input:** During the development process, the MJML Developer (P2) might realize that a required component (e.g., `two-column-icon-text`) doesn't exist or needs a new variant.

**Action:** The Component Librarian is responsible for creating, documenting, and maintaining the reusable component library. This persona ensures all components are robust, responsive, and well-documented.

**Output Files:**

1.  **New Component (`src/mjml-source/components/body/two-column-icon-text.mjml`):**
    ```mjml
    <!-- MJML for a reusable two-column layout with icons and text -->
    <mj-section>
      <mj-column>
        <mj-image width="50px" src="{{icon_src}}"></mj-image>
        <mj-text font-weight="bold">{{title}}</mj-text>
        <mj-text>{{text}}</mj-text>
      </mj-column>
      <!-- ... more columns ... -->
    </mj-section>
    ```
2.  **Component Documentation (`docs/mjml_component_docs/two-column-icon-text.md`):**
    A document explaining how to use the component, its available attributes (like `icon_src`, `title`, `text`), and any usage notes.

This completes the workflow, resulting in a new, production-ready MJML email template built from a well-managed component library.
