## Component: Special Offer / Highlight Box (`va-offer-box.mjml`)

**Category:** `content`
**Location:** `templates/components/content/va-offer-box.mjml`

**Brief Description/Purpose:**
A prominent box, often with a distinct background (defaults to dark blue), used for special offers or important announcements. It typically includes a main title, descriptive text, a list of benefits/features (using an `mj-table` structure for each item), and can optionally include a styled tag or badge at the bottom.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#14467b" border-radius="8px" padding="30px" css-class="special-offer-section">
  <mj-column>
    <mj-text align="center" color="#ffffff" font-size="26px" font-weight="700" letter-spacing="-0.01em" text-transform="uppercase" padding-bottom="15px">
      EXCLUSIVE EARLY ACCESS
    </mj-text>
    <mj-text align="center" color="#ffffff" font-size="16px" line-height="1.6" padding-bottom="12px">
      We're extending exclusive Early Access for clients like you. As an Early Access participant, you'll receive:
    </mj-text>
    <!-- Example bullet point. Repeat this mj-table structure for more bullet points -->
    <mj-table padding-bottom="10px" width="90%">
      <tr>
        <td style="vertical-align: top; padding-top: 5px; width: 24px;">
          <img src="https://img.icons8.com/ios-filled/16/ffffff/checkmark.png" width="16" height="16" alt="Checkmark" style="display: block;" />
        </td>
        <td style="padding-left: 10px; color: #ffffff; font-size: 16px; line-height: 1.6;">
           <strong>Personalized Onboarding</strong> – Customized setup and training tailored to your practice.
        </td>
      </tr>
    </mj-table>
    <!-- Add more bullet points here by repeating the mj-table structure above -->
    <mj-text align="center" padding="15px 0 0 0">
        <span style="background: linear-gradient(135deg, #FFD700, #f8cc00); border-radius: 25px; color: #000000; font-family: sans-serif; font-size: 13px; font-weight: 700; padding: 8px 14px; text-align: center; text-decoration: none; display: inline-block; letter-spacing: 0.5px; box-sizing: border-box; -webkit-text-size-adjust: none; white-space: nowrap;">
            LIMITED SPOTS AVAILABLE
        </span>
    </mj-text>
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: Section background color (Default: `#14467b`).
    *   `border-radius`: Section border radius (Default: `8px`).
    *   `padding`: Section padding (Default: `30px`).
    *   `css-class`: (Default: `special-offer-section`).
*   **On Main Title (`<mj-text>`):**
    *   `text`: The main title text (e.g., "EXCLUSIVE EARLY ACCESS").
    *   `color`: (Default: `#ffffff`).
    *   `font-size`: (Default: `26px`).
    *   `font-weight`: (Default: `700`).
    *   `letter-spacing`: (Default: `-0.01em`).
    *   `text-transform`: (Default: `uppercase`).
    *   `padding-bottom`: (Default: `15px`).
*   **On Description Text (`<mj-text>`):**
    *   `text`: The introductory description.
    *   `color`: (Default: `#ffffff`).
    *   `font-size`: (Default: `16px`).
    *   `line-height`: (Default: `1.6`).
    *   `padding-bottom`: (Default: `12px`).
*   **For Each Bullet Item (`<mj-table>`):**
    *   `itemHtml`: HTML content for the bullet item text (e.g., `<strong>Personalized Onboarding</strong>...`).
    *   `iconSrc`: URL for the bullet icon (Default: `https://img.icons8.com/ios-filled/16/ffffff/checkmark.png`).
    *   `iconAlt`: Alt text for the icon.
    *   `iconWidth`, `iconHeight`.
    *   `itemTextColor`: Color for the bullet item text (Default: `#ffffff`).
    *   `itemFontSize`, `itemLineHeight`.
    *   `tablePaddingBottom`: Spacing below each bullet item.
    *   `tableWidth`: Width of the bullet item table (Default: `90%` - to allow for slight inset).
*   **On Styled Tag/Badge (`<mj-text>` with `<span>`):**
    *   `tagText`: Text for the badge (e.g., "LIMITED SPOTS AVAILABLE").
    *   `tagStyles`: Inline CSS for the `<span>` (background, color, padding, etc.). The default uses a gradient and specific styling.
    *   `tagPadding`: Padding for the `<mj-text>` element wrapping the span (Default: `15px 0 0 0`).

**Basic Usage Example:**

```mjml
<mjml>
  <mj-body>
    <mj-include path="./components/content/va-offer-box.mjml" />
    <!-- To customize, you would typically copy the component code and modify it directly -->
    <!-- or pass variables if this component were adapted to use MJML variables/attributes extensively -->
  </mj-body>
</mjml>
```

**Notes:**
*   The bullet items are structured using `mj-table` elements. To add more bullet points, replicate the entire `<mj-table>...</mj-table>` block from the core snippet and customize its content.
*   The analysis report suggests that `va-feature-list-item.mjml` could potentially be reused for bullet items, but it would require significant style overrides (especially text color) to match this component's dark background design.
*   The styled tag at the bottom uses a `<span>` with inline styles. This can be customized directly or removed if not needed.
*   This is a self-contained section. Ensure it fits well within the overall email flow.
