## Component: Feature Card (`va-feature-card.mjml`)

**Category:** `content`
**Location:** `templates/components/content/va-feature-card.mjml`

**Brief Description/Purpose:**
A card layout, typically used in a 2-column (or more) row, to display a feature with an icon, title, and description. This component represents one card/column. A parent section would manage the row and spacing between multiple cards.

**Core MJML Code Snippet (for one card/column):**
```mjml
<mj-column width="48%" background-color="#ffffff" border="1px solid #e2e8f0" border-radius="12px" padding="0px" vertical-align="top">
  <mj-image src="https://img.icons8.com/ios/50/14467b/medical-doctor.png" alt="Experience Icon" width="35px" padding="25px 0" />
  <mj-text align="center" color="#14467b" font-size="18px" font-weight="600" line-height="1.3" padding="0 20px 15px 20px">
    Experience and Expertise
  </mj-text>
  <mj-text align="center" color="#4a5568" font-size="14px" line-height="1.6" padding="0 20px 25px 20px">
    20+ years delivering award-winning medical speech recognition technology and more than 600,000 clinicians using Dragon.
  </mj-text>
</mj-column>
```

**Configurable Attributes (when including or adapting):**

*   `columnWidth`: Width of the column (e.g., "48%").
*   `backgroundColor`: Card background color (Default: `#ffffff`).
*   `border`: Card border style (Default: `1px solid #e2e8f0`).
*   `borderRadius`: Card border radius (Default: `12px`).
*   `iconSrc`: URL for the icon image.
*   `iconAlt`: Alt text for the icon.
*   `iconWidth`: Width of the icon (Default: `35px`).
*   `iconPadding`: Padding around the icon (Default: `25px 0`).
*   `titleText`: Card title.
*   `titleColor`: Title text color (Default: `#14467b`).
*   `titleFontSize`: Title font size (Default: `18px`).
*   `titleFontWeight`: Title font weight (Default: `600`).
*   `descriptionText`: Card description.
*   `descriptionColor`: Description text color (Default: `#4a5568`).
*   `descriptionFontSize`: Description font size (Default: `14px`).
*   `padding`: Overall padding for the `<mj-column>` (Default: `0px`). Padding for text elements is specified on the `<mj-text>` and `<mj-image>` tags themselves.
*   `verticalAlign`: Vertical alignment for the column content (Default: `top`).

**Basic Usage Example (within a parent section for a row):**

```mjml
<mjml>
  <mj-body>
    <mj-section padding="20px 0">
      <!-- First Feature Card -->
      <mj-include path="./components/content/va-feature-card.mjml" />

      <!-- Spacer Column (Optional, for spacing between cards) -->
      <mj-column width="4%">
        <mj-spacer height="1px" />
      </mj-column>

      <!-- Second Feature Card (customize attributes as needed) -->
      <mj-column width="48%" background-color="#ffffff" border="1px solid #e2e8f0" border-radius="12px" padding="0px" vertical-align="top">
        <mj-image src="ICON_URL_2" alt="ICON_ALT_2" width="35px" padding="25px 0" />
        <mj-text align="center" color="#14467b" font-size="18px" font-weight="600" line-height="1.3" padding="0 20px 15px 20px">
          TITLE_TEXT_2
        </mj-text>
        <mj-text align="center" color="#4a5568" font-size="14px" line-height="1.6" padding="0 20px 25px 20px">
          DESCRIPTION_TEXT_2
        </mj-text>
      </mj-column>
    </mj-section>
    <!-- Other email content -->
  </mj-body>
</mjml>
```

**Notes:**
*   This component is designed to be a single card. For a row of cards, you would typically wrap multiple instances (or `<mj-include>`s) of this component within an `<mj-section>`.
*   The `width` attribute (e.g., `48%`) on `<mj-column>` is crucial for creating multi-column layouts. Adjust as needed, ensuring the total width of columns and any spacer columns in a section does not exceed 100% (or is handled appropriately by MJML's responsive behavior).
*   The example values for `iconSrc`, `titleText`, and `descriptionText` in the core snippet are placeholders and should be replaced with actual content when using the component.
