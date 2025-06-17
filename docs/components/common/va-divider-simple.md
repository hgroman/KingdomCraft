## Component: Simple Divider (`va-divider-simple.mjml`)

**Category:** `common`
**Location:** `templates/components/common/va-divider-simple.mjml`

**Brief Description/Purpose:**
A basic horizontal divider line, typically used to visually separate sections of content. It is wrapped in an `<mj-section>` to control its background and horizontal padding.

**Core MJML Code Snippet:**
```mjml
<mj-section background-color="#ffffff" padding="0 25px 0 25px">
  <mj-column>
    <mj-divider border-width="1px" border-style="solid" border-color="#e2e8f0" padding="0 0 0 0" />
  </mj-column>
</mj-section>
```

**Configurable Attributes (when including or adapting):**

*   **On `<mj-section>`:**
    *   `background-color`: Background color for the section containing the divider (Default: `#ffffff`). Often set to transparent or to match the surrounding content area.
    *   `padding` (on `<mj-section>`): Controls the spacing above and below the divider, and its inset from the sides (Default: `0 25px 0 25px`).
*   **On `<mj-divider>`:**
    *   `border-color`: Color of the divider line (Default: `#e2e8f0`).
    *   `border-width`: Thickness of the line (Default: `1px`).
    *   `border-style`: Style of the line (e.g., "solid", "dashed") (Default: `solid`).
    *   `padding` (on `<mj-divider>`): Padding specifically for the `mj-divider` element itself, within the column (Default: `0 0 0 0`). Typically used if more fine-grained control over vertical spacing around the line itself is needed, independent of the section padding.
    *   `width`: The width of the divider, can be percentage or pixels (Default: `100%` of its parent column).

**Basic Usage Example:**

```mjml
<mjml>
  <mj-body>
    <!-- ... other content ... -->

    <mj-include path="./components/common/va-divider-simple.mjml" />

    <!-- Example with customized section padding and divider color -->
    <mj-section background-color="#f0f0f0" padding="20px 10px">
      <mj-column>
        <mj-divider border-color="#cccccc" border-width="2px" />
      </mj-column>
    </mj-section>

    <!-- ... other content ... -->
  </mj-body>
</mjml>
```

**Notes:**
*   This component provides a full-width divider within its parent column, controlled by the `<mj-section>` padding for horizontal spacing.
*   Adjust the `padding` on the `<mj-section>` to control the space above/below the divider and how much it is inset from the edges of the email body.
*   The `background-color` of the section can be important if the divider is used over non-white backgrounds to ensure the spacing around it looks correct.
