## Component: Dual CTA Button Section (`va-cta-dual-button.mjml`)

**Category:** `content`
**Location:** `templates/components/content/va-cta-dual-button.mjml`

**Brief Description/Purpose:**
A section designed to display two call-to-action (CTA) buttons side-by-side. This is useful for offering users a primary and a secondary action, or two distinct choices.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#ffffff" padding="15px 0 35px 0">
  <mj-column>
    <!-- Instance of va-button-cta.mjml -->
    <!-- You would typically <mj-include path="../common/va-button-cta.mjml" /> here and override attributes -->
    <!-- For this standalone component, the button is defined directly but based on va-button-cta defaults -->
    <mj-button href="https://app.acuityscheduling.com/schedule/d5db8e26/appointment/75878022/calendar/any?appointmentTypeIds%5B%5D=75878022"
               background-color="#2490eb"
               color="#ffffff"
               border-radius="30px"
               font-weight="700"
               font-size="14px"
               inner-padding="10px 16px"
               letter-spacing="0.5px"
               align="center"
               width="220px">
      SCHEDULE A DEMO
    </mj-button>
  </mj-column>
  <mj-column>
    <!-- Instance of va-button-cta.mjml -->
    <mj-button href="https://voiceautomated.com/dragon-copilot-your-ai-assistant-for-clinical-workflow/"
               background-color="#2490eb"
               color="#ffffff"
               border-radius="30px"
               font-weight="700"
               font-size="14px"
               inner-padding="10px 16px"
               letter-spacing="0.5px"
               align="center"
               width="220px">
      LEARN MORE
    </mj-button>
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: Section background color (Default: `#ffffff`).
    *   `padding`: Section padding (Default: `15px 0 35px 0`).
*   **For each Button (Button 1 & Button 2):**
    *   These would ideally be instances of `va-button-cta.mjml`. The attributes are the same as those defined for `va-button-cta.mjml` (e.g., `href`, `text`, `background-color`, `width`, etc.).
    *   `button1Params`: An object to hold parameters for the first button if this component were to use includes with variable passing.
    *   `button2Params`: An object for the second button's parameters.

**Basic Usage Example:**

```mjml
<mjml>
  <mj-body>
    <mj-include path="./components/content/va-cta-dual-button.mjml" />

    <!-- Example of creating a similar structure with customized buttons using va-button-cta.mjml -->
    <mj-section background-color="#f0f0f0" padding="20px">
      <mj-column>
        <mj-button href="#primaryAction"
                   background-color="#ff6600"
                   width="100%">
          Primary Action
        </mj-button>
      </mj-column>
      <mj-column>
        <mj-button href="#secondaryAction"
                   background-color="#cccccc"
                   color="#333333"
                   width="100%">
          Secondary Action
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

**Notes:**
*   The core component snippet defines the buttons directly with specific example values. Ideally, for maximum reusability, this component would use `<mj-include path="../common/va-button-cta.mjml" />` for each button, and you would pass parameters to customize each button instance.
*   The current version has fixed `width="220px"` for both buttons. For responsive behavior where buttons might stack on smaller screens, ensure the sum of column widths (implicitly 50% each here) and paddings are considered.
*   You can adjust the `padding` on the `<mj-section>` or on individual `<mj-column>` elements to control spacing around and between the buttons.
