## Component: Highlight Callout (`va-callout-highlight.mjml`)

**Location:** `templates/components/content/va-callout-highlight.mjml`

**Brief Description/Purpose:**
A visually distinct section designed to highlight key information or a primary message. It typically uses a contrasting background color and often includes a call-to-action button to encourage user engagement with the highlighted content.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#14467b" border-radius="8px" padding="30px" css-class="highlight-section">
  <mj-column>
    <mj-text color="#ffffff" font-weight="500" padding-bottom="25px">
      <strong>Dragon Copilot</strong> isn't just another dictation tool. It's a unified AI experience that combines trusted voice dictation with ambient listening and generative AI, all seamlessly integrated into your EHR. It helps you <strong>save time</strong> on documentation with automated note creation and task automation, <strong>access critical patient information</strong> instantly without interrupting your workflow, and <strong>reduce burnout</strong> by focusing on patient care, not paperwork.
    </mj-text>
    <mj-button href="https://voiceautomated.com/dragon-copilot-your-ai-assistant-for-clinical-workflow/"
               background-color="#2490eb"
               color="#ffffff"
               border-radius="30px"
               font-weight="700"
               font-size="14px"
               padding-top="0px"
               padding-bottom="0px"
               inner-padding="10px 16px"
               letter-spacing="0.5px"
               align="center"
               width="240px">
      DISCOVER DRAGON COPILOT
    </mj-button>
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: (Default: `#14467b`).
    *   `border-radius`: (Default: `8px`).
    *   `padding`: (Default: `30px`).
    *   `css-class`: (Default: `highlight-section`) for potential additional styling.
*   **On `<mj-text>`:**
    *   `color`: (Default: `#ffffff`).
    *   `font-weight`: (Default: `500`).
    *   `padding-bottom`: (Default: `25px`).
    *   *(Content):* The HTML content for the callout text.
*   **On `<mj-button>`:**
    *   `href`: Button link URL.
    *   `background-color`: (Default: `#2490eb`).
    *   `color`: Button text color (Default: `#ffffff`).
    *   `border-radius`: (Default: `30px`).
    *   `font-weight`: (Default: `700`).
    *   `font-size`: (Default: `14px`).
    *   `padding-top`, `padding-bottom`: External padding for button (Defaults: `0px`).
    *   `inner-padding`: (Default: `10px 16px`).
    *   `letter-spacing`: (Default: `0.5px`).
    *   `align`: (Default: `center`).
    *   `width`: (Default: `240px`).
    *   *(Content):* The button text (Default: `DISCOVER DRAGON COPILOT`).

**Basic Usage Example (in a parent MJML template):**
```mjml
<mjml>
  <mj-body>
    <mj-include path="./components/content/va-callout-highlight.mjml" />
    <!-- Other email content -->
  </mj-body>
</mjml>
```

**Notes for Content Strategist & Markdown Crafter:**
You would provide the main `textHtml` for the callout and the `buttonText` and `buttonHref`. Specific styling variations would be noted for the MJML Developer.
