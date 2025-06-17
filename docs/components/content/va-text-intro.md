## Component: Introduction Text Block (`va-text-intro.mjml`)

**Location:** `templates/components/content/va-text-intro.mjml`

**Brief Description/Purpose:**
A standard section for introductory text in an email. Typically includes a main heading followed by one or more paragraphs of content. This component provides a consistent structure for such introductory messages.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#ffffff" padding="40px 25px 0px 25px">
  <mj-column>
    <mj-text color="#14467b" font-size="28px" font-weight="700" line-height="1.3" padding-bottom="25px">
      Reclaim Your Time with AI: Focus on Patients, Not Paperwork
    </mj-text>
    <mj-text color="#4a5568" padding-bottom="20px">
      Hi there,
    </mj-text>
    <mj-text color="#4a5568" padding-bottom="20px">
      Are you tired of spending more time on paperwork than with your patients? At <strong>Voice Automated</strong>, we understand the challenges you face. Clinician burnout due to documentation demands is a critical issue, with providers spending up to two hours on administrative tasks for every hour of direct patient care. That's why we're excited to introduce you to <strong>Dragon Copilot</strong> – your AI assistant for clinical workflow.
    </mj-text>
    <mj-text color="#4a5568" padding-bottom="30px">
      <strong>Voice Automated</strong>, drawing from years of expertise in the medical industry and our longstanding collaboration with Microsoft, has come to understand that there is no solution better designed to tackle the time-consuming administrative tasks burdening healthcare professionals today than Dragon Copilot.
    </mj-text>
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: Background color (Default: `#ffffff`).
    *   `padding`: Section padding (Default: `40px 25px 0px 25px`).
*   **On First `<mj-text>` (Heading):**
    *   `color`: Text color (Default: `#14467b`).
    *   `font-size`: (Default: `28px`).
    *   `font-weight`: (Default: `700`).
    *   `line-height`: (Default: `1.3`).
    *   `padding-bottom`: (Default: `25px`).
    *   *(Content):* The heading text itself.
*   **On Subsequent `<mj-text>` (Paragraphs):**
    *   `color`: Text color (Default: `#4a5568`).
    *   `padding-bottom`: Padding below each paragraph (Default: `20px`, last one `30px`).
    *   *(Content):* The HTML content for each paragraph.

**Basic Usage Example (in a parent MJML template):**
```mjml
<mjml>
  <mj-body>
    <mj-include path="./components/content/va-text-intro.mjml" />
    <!-- Other email content -->
  </mj-body>
</mjml>
```

**Notes for Content Strategist & Markdown Crafter:**
You would provide the `headingText` and the content for each paragraph (`contentHtml`). The MJML developer would take these text blocks and structure them using this component, ensuring consistent styling for introductory sections.
