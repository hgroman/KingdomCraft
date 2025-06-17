## Component: Key Feature Item (`va-feature-list-item.mjml`)

**Category:** `content`
**Location:** `templates/components/content/va-feature-list-item.mjml`

**Brief Description/Purpose:**
An item in a list, typically preceded by a checkmark icon, used to enumerate features or benefits. Uses `mj-table` for layout to ensure consistent alignment of the icon and text.

**Core MJML Code Snippet:**
```mjml
<mj-table padding-bottom="10px">
  <tr>
    <td style="vertical-align: top; padding-top: 5px; width: 24px;">
      <img src="https://img.icons8.com/ios-filled/16/14467b/checkmark.png" width="16" height="16" alt="Checkmark" style="display: block;" />
    </td>
    <td style="padding-left: 10px; color: #4a5568; font-size: 16px; line-height: 1.6;">
       <strong style="color: #2d3748; font-weight: 600;">Save time</strong> on documentation with automated note creation and task automation.
    </td>
  </tr>
</mj-table>
```

**Configurable Attributes (when including or adapting):**

*   `iconSrc`: URL for the checkmark/bullet icon (Default: `https://img.icons8.com/ios-filled/16/14467b/checkmark.png`).
*   `iconAlt`: Alt text for the icon (Default: `Checkmark`).
*   `iconWidth`: Width of the icon (Default: `16` - note: applied to `<img>` tag, not `<td>`).
*   `iconHeight`: Height of the icon (Default: `16` - note: applied to `<img>` tag).
*   `itemHtml`: HTML content for the list item text (can include `<strong>`, `<a>`, etc.).
*   `textColor`: Default color for the text (Default: `#4a5568`).
*   `fontSize`: Font size for the text (Default: `16px`).
*   `lineHeight`: Line height for the text (Default: `1.6`).
*   `tablePaddingBottom`: Padding below the table for spacing between items (Default: `10px`).
*   `iconCellWidth`: Width of the table cell containing the icon (Default: `24px`).
*   `iconCellPaddingTop`: Top padding for the icon cell to help with vertical alignment (Default: `5px`).
*   `textCellPaddingLeft`: Left padding for the text cell to create space next to the icon (Default: `10px`).

**Basic Usage Example (within a parent column/section):**

```mjml
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <!-- First feature list item -->
        <mj-include path="./components/content/va-feature-list-item.mjml" />

        <!-- Second feature list item (customize attributes as needed) -->
        <mj-table padding-bottom="10px">
          <tr>
            <td style="vertical-align: top; padding-top: 5px; width: 24px;">
              <img src="CUSTOM_ICON_URL" width="16" height="16" alt="Custom Alt" style="display: block;" />
            </td>
            <td style="padding-left: 10px; color: #4a5568; font-size: 16px; line-height: 1.6;">
               Your custom HTML content here. <a href="#">Learn more</a>.
            </td>
          </tr>
        </mj-table>

        <!-- Add more list items as needed -->

      </mj-column>
    </mj-section>
    <!-- Other email content -->
  </mj-body>
</mjml>
```

**Notes:**
*   This component represents a single list item using an `mj-table` for layout. It is intended to be used multiple times to create a list.
*   The `mj-table` structure is used to achieve better control over the vertical alignment of the icon and text, which can sometimes be tricky with simple multi-column layouts for list items.
*   The parent `<mj-column>` or `<mj-section>` could define a border, background, or overall padding for a group of list items, as suggested in the analysis report (e.g., a `va-feature-list-box.mjml` concept).
*   The example text in the core snippet (`<strong style="color: #2d3748; font-weight: 600;">Save time</strong>...`) should be replaced with the actual `itemHtml` content.
