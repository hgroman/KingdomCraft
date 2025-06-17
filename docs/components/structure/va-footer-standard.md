## Component: Standard Email Footer (`va-footer-standard.mjml`)

**Category:** `structure`
**Location:** `templates/components/structure/va-footer-standard.mjml`

**Brief Description/Purpose:**
The standard footer section for emails. It includes company contact information (name, phone, email), social media links, a disclaimer/legal text, and the company's physical address. It typically has a distinct background color and rounds the bottom corners if the email body has a border radius.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#14467b" padding="40px 25px" border-radius="0 0 8px 8px">
  <mj-column>
    <mj-text align="center" color="#ffffff" font-size="18px" font-weight="700" padding-bottom="8px">
      Voice Automated
    </mj-text>
    <mj-text align="center" color="#ffffff" font-size="15px" padding-bottom="8px">
      800-597-6600
    </mj-text>
    <mj-text align="center" font-size="15px" padding-bottom="25px">
      <a href="mailto:support@voiceautomated.com" style="color: #ffffff; text-decoration: underline;">support@voiceautomated.com</a>
    </mj-text>
    <mj-divider border-width="1px" border-color="rgba(255, 255, 255, 0.2)" padding="0 0 30px 0" />
    <mj-social color="#ffffff" font-size="15px" icon-size="22px" mode="horizontal" padding="0 0 30px 0" align="center">
      <mj-social-element name="linkedin" href="https://www.linkedin.com/company/741789/" background-color="rgba(255, 255, 255, 0.15)" padding="11px">
      </mj-social-element>
      <!-- Add other social elements as parameters -->
    </mj-social>
    <mj-text align="center" color="rgba(255, 255, 255, 0.8)" font-size="13px" line-height="1.5" font-style="italic" padding="0 0 25px 0">
      Dragon CoPilot requires compatible EHR systems. Contact us for detailed system requirements and compatibility information. Microsoft Cloud for Healthcare integration provides HIPAA compliance and healthcare-specific safeguards.
    </mj-text>
    <mj-divider border-width="1px" border-color="rgba(255, 255, 255, 0.2)" padding="0 0 25px 0" />
    <mj-text align="center" color="#ffffff" font-size="14px" line-height="1.5" font-weight="500" padding="0">
      Voice Automated | 30211 Avenida De Las Banderas Suite 200 | Rancho Santa Margarita CA 92688 USA
    </mj-text>
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: Footer background color (Default: `#14467b`).
    *   `padding`: Footer section padding (Default: `40px 25px`).
    *   `border-radius`: To round bottom corners (Default: `0 0 8px 8px`).
*   **Company Info (`<mj-text>` elements):**
    *   `companyName`: (e.g., "Voice Automated").
    *   `phoneNumber`: (e.g., "800-597-6600").
    *   `emailAddress`: (e.g., "support@voiceautomated.com").
    *   `emailLinkColor`: (Default: `#ffffff`).
*   **Social Media (`<mj-social>` and `<mj-social-element>`):**
    *   `socialIcons`: Array of objects for social media links. Each object for `<mj-social-element>` would include:
        *   `name`: (e.g., "linkedin", "twitter", "facebook").
        *   `href`: URL to the social media page.
        *   `background-color`: Icon background (Default example: `rgba(255, 255, 255, 0.15)`).
        *   `padding`: Padding around the icon.
    *   Global `<mj-social>` attributes: `color` (icon color), `font-size` (text if any), `icon-size`, `mode`, `align`.
*   **Disclaimer Text (`<mj-text>`):**
    *   `disclaimerText`: The legal or informational disclaimer content.
    *   `disclaimerColor`: (Default: `rgba(255, 255, 255, 0.8)`).
    *   `disclaimerFontSize`: (Default: `13px`).
*   **Address Text (`<mj-text>`):**
    *   `addressText`: Company physical address.
    *   `addressColor`: (Default: `#ffffff`).
    *   `addressFontSize`: (Default: `14px`).
*   **Dividers (`<mj-divider>`):**
    *   `dividerBorderColor`: (Default: `rgba(255, 255, 255, 0.2)`).

**Basic Usage Example:**
```mjml
<mjml>
  <mj-body>
    <!-- ... all email content above ... -->
    <mj-include path="./components/structure/va-footer-standard.mjml" />
  </mj-body>
</mjml>
```

**Notes:**
*   This is a comprehensive footer. Many attributes can be customized, from text content to colors and social media links.
*   The `<!-- Add other social elements as parameters -->` comment indicates that to add more social icons, you would replicate the `<mj-social-element>` tag with the appropriate `name` and `href` attributes.
*   The `border-radius` on the `<mj-section>` is intended to match an overall email body style that might also have rounded corners.
