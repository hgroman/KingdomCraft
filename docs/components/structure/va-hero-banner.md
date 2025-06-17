## Component: Hero Banner (`va-hero-banner.mjml`)

**Location:** `templates/components/structure/va-hero-banner.mjml`

**Brief Description/Purpose:**
A prominent banner section, typically used near the top of an email, featuring a main title and a subtitle. It often has a distinct background color or image to draw attention.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#14467b" padding="40px 30px">
  <mj-column>
    <mj-text align="center" color="#ffffff" font-size="42px" font-weight="900" letter-spacing="-0.02em" line-height="1.2" text-transform="uppercase" padding-bottom="12px">
      DRAGON COPILOT
    </mj-text>
    <mj-text align="center" color="#ffffff" font-size="22px" font-weight="400">
      Your AI Assistant for Clinical Workflow
    </mj-text>
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: Background color of the section (Default: `#14467b`).
    *   `padding`: Section padding (Default: `40px 30px`).
    *   Other attributes like `background-url`, `background-size`, `background-repeat` can also be used for image backgrounds.
*   **On First `<mj-text>` (Title):**
    *   `align`: Text alignment (Default: `center`).
    *   `color`: Text color (Default: `#ffffff`).
    *   `font-size`: Font size (Default: `42px`).
    *   `font-weight`: Font weight (Default: `900`).
    *   `letter-spacing`: (Default: `-0.02em`).
    *   `line-height`: (Default: `1.2`).
    *   `text-transform`: (Default: `uppercase`).
    *   `padding-bottom`: Padding below title (Default: `12px`).
    *   *(Content):* The actual title text (Default: `DRAGON COPILOT`).
*   **On Second `<mj-text>` (Subtitle):**
    *   `align`: Text alignment (Default: `center`).
    *   `color`: Text color (Default: `#ffffff`).
    *   `font-size`: Font size (Default: `22px`).
    *   `font-weight`: Font weight (Default: `400`).
    *   *(Content):* The actual subtitle text (Default: `Your AI Assistant for Clinical Workflow`).

**Basic Usage Example (in a parent MJML template):**
```mjml
<mjml>
  <mj-body>
    <mj-include path="./components/structure/va-hero-banner.mjml" />
    <!-- Other email content -->
  </mj-body>
</mjml>
```

**Notes for Content Strategist & Markdown Crafter:**
You would typically specify the `titleText` and `subtitleText` for a hero banner. If specific styling (colors, fonts, background) different from a standard hero is needed, these requirements should be detailed for the MJML Developer.
