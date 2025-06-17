## Component: Call-to-Action Button (`va-button-cta.mjml`)

**Category:** `common`
**Location:** `templates/components/common/va-button-cta.mjml`

**Brief Description/Purpose:**
A standard, reusable call-to-action (CTA) button. This component provides a consistent style for buttons used throughout various email templates.

**Core MJML Code Snippet:**
```mjml
<mj-button href="https://example.com"
           background-color="#2490eb"
           color="#ffffff"
           border-radius="30px"
           font-weight="700"
           font-size="14px"
           inner-padding="10px 16px"
           letter-spacing="0.5px"
           align="center"
           width="220px">
  ACTION TEXT
</mj-button>
```

**Configurable Attributes (when including or adapting):**

*   `href`: Button link URL (Default: `https://example.com`).
*   `text`: Button display text (Default: `ACTION TEXT`).
*   `background-color`: Button background color (Default: `#2490eb`).
*   `color`: Button text color (Default: `#ffffff`).
*   `border-radius`: Button border radius (Default: `30px`).
*   `font-weight`: Button text font weight (Default: `700`).
*   `font-size`: Button text font size (Default: `14px`).
*   `inner-padding`: Inner padding of the button (Default: `10px 16px`).
*   `letter-spacing`: Text letter spacing (Default: `0.5px`).
*   `align`: Alignment of the button within its column (e.g., "center", "left") (Default: `center`).
*   `width`: Width of the button (Default: `220px`).
*   `padding`: External padding around the button (e.g., `10px 0px`). Not part of the core `<mj-button>` attributes but can be applied to a wrapping `<mj-column>` or if the button is directly in an `<mj-section>`.

**Basic Usage Example:**

```mjml
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-include path="./components/common/va-button-cta.mjml" />
      </mj-column>
    </mj-section>

    <!-- Example with overridden attributes -->
    <mj-section>
      <mj-column>
        <mj-button href="https://voiceautomated.com/contact"
                   background-color="#008000"
                   color="#ffffff"
                   border-radius="5px"
                   font-weight="bold"
                   font-size="16px"
                   inner-padding="12px 20px"
                   width="250px">
          CONTACT US
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

**Notes:**
*   This is a versatile button component. When including, you can override any of the default attributes to customize its appearance and behavior.
*   For consistent spacing, consider wrapping the button in an `<mj-column>` if it's not already, and apply padding to the column or the button itself using the `padding` attribute (which applies outside the button border).
