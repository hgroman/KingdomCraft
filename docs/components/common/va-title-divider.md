## Component: Section Title with Divider (`va-title-divider.mjml`)

**Location:** `templates/components/common/va-title-divider.mjml`

**Brief Description/Purpose:**
Provides a standard way to display a section title followed immediately by a horizontal divider line. This is useful for clearly separating and introducing new sections of content.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#ffffff" padding="35px 25px 0px 25px">
  <mj-column>
    <mj-text align="left" color="#14467b" font-size="28px" font-weight="700" line-height="1.3" padding-bottom="10px" letter-spacing="-0.01em">
      Why Dragon CoPilot?
    </mj-text>
    <mj-divider border-color="#e2e8f0" border-width="1px" padding="0 0 20px 0"/>
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: (Default: `#ffffff`). The padding on this section might often be adjusted based on surrounding content.
    *   `padding`: Section padding (Default: `35px 25px 0px 25px`).
*   **On `<mj-text>` (Title):**
    *   `align`: (Default: `left`).
    *   `color`: (Default: `#14467b`).
    *   `font-size`: (Default: `28px`).
    *   `font-weight`: (Default: `700`).
    *   `line-height`: (Default: `1.3`).
    *   `padding-bottom`: (Default: `10px`).
    *   `letter-spacing`: (Default: `-0.01em`).
    *   *(Content):* The title text itself.
*   **On `<mj-divider>`:**
    *   `border-color`: (Default: `#e2e8f0`).
    *   `border-width`: (Default: `1px`).
    *   `padding`: Padding for the divider (Default: `0 0 20px 0`).

**Basic Usage Example (in a parent MJML template):**
```mjml
<mjml>
  <mj-body>
    <mj-include path="./components/common/va-title-divider.mjml" />
    <!-- Content for this section -->
  </mj-body>
</mjml>
```

**Notes for Content Strategist & Markdown Crafter:**
You would provide the `titleText`. The MJML Developer will use this component to ensure consistent title and divider styling.
