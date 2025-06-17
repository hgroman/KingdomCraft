## Component: Standard Header Logo (`va-header-logo.mjml`)

**Location:** `templates/components/structure/va-header-logo.mjml`

**Brief Description/Purpose:**
Displays the company logo, typically at the top of the email. This component ensures consistent logo presentation.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#ffffff" padding="25px 20px">
  <mj-column>
    <mj-image src="https://imagedelivery.net/ODv7Bg6gbHLlA8HV9NfaJA/94dbfb56-924c-4119-674f-7908dc707b00/public" alt="Voice Automated Logo" width="160px" align="center" padding="0px" />
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):
**
*   **On `<mj-section>`:**
    *   `background-color`: Background color of the section (Default: `#ffffff`).
    *   `padding`: Section padding (Default: `25px 20px`).
*   **On `<mj-image>`:**
    *   `src`: URL for the logo image (Default: `https://imagedelivery.net/ODv7Bg6gbHLlA8HV9NfaJA/94dbfb56-924c-4119-674f-7908dc707b00/public`).
    *   `alt`: Alt text for the logo image (Default: `Voice Automated Logo`).
    *   `width`: Width of the logo image (Default: `160px`).
    *   `align`: Alignment of the logo within the column (Default: `center`).
    *   `padding`: Padding for the image itself (Default: `0px`).

**Basic Usage Example (in a parent MJML template):**
```mjml
<mjml>
  <mj-body>
    <mj-include path="./components/structure/va-header-logo.mjml" />
    <!-- Other email content -->
  </mj-body>
</mjml>
```

**Notes for Content Strategist & Markdown Crafter:**
While you won't directly write this MJML, you might specify the need for a "Standard Header Logo" at the beginning of an email. If specific variations are ever needed (e.g., a different background for a special campaign), you would note that requirement, and the MJML Developer would adapt or create a variant of this component.
