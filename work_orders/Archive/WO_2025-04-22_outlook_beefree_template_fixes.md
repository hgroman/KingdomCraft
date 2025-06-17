# Outlook/Beefree Template Debugging Notes & Fixes

**Project Direction Note (April 2025):** While this document details specific manual fixes applied to an HTML template (likely originating from Beefree) to improve Outlook compatibility, the project's forward direction is to adopt the **MJML framework** (<https://mjml.io>). MJML aims to abstract away many of these complexities by compiling simpler markup into robust, cross-client compatible HTML, including necessary VML for Outlook. These notes remain valuable for understanding *why* certain techniques are needed and for debugging potential issues not fully handled by frameworks or specific post-export scenarios.

**Regarding Paid Tools:** Recommendations involving paid services like comprehensive **Litmus testing** or **Outlook add-ins for distribution** (e.g., Shared Email Templates) are currently **postponed** due to budget considerations. Litmus offers a limited **7-day free trial** for previews, but ongoing use requires a subscription. Free alternatives or manual processes will be prioritized for testing and distribution in the interim.

---

*(Original debugging notes follow)*

Below are the **things that will stop this message from behaving in Outlook (for Windows) and, second‑hand, in BeeFree's editor**. None of them is fatal on its own, but together they break the fragile HTML‑email "house‑of‑cards".

---

### 1. Background images set with plain CSS
Outlook's Word‐based rendering engine ignores `background-image` on anything except the `<body>` tag. Your hero section and two other rows rely on it:

```html
<div class="r ey ys"
     style="background-image:url(...SoMtB-1.jpg); background-size:cover;">
```

**Fix (bullet‑proof background):**

```html
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"
        style="width:540px;height:430px;">
  <v:fill type="frame" src="https://.../SoMtB-1.jpg" color="#335FAC"/>
  <v:textbox inset="0,0,0,0">
<![endif]-->
<table role="presentation" ...> ...content... </table>
<!--[if gte mso 9]></v:textbox></v:rect><![endif]-->
```

BeeFree adds this VML wrapper automatically when you create the row in the designer, but the raw code above does **not** include it, so Outlook shows a solid blue/grey block instead of the photo.

---

### 2. `display:grid`, margins and percentage widths on `<div>` "columns"
The pattern BeeFree uses—

```html
<td style="font-size:0;">
  <div style="display:inline-block;width:65%;vertical-align:middle;">…</div>
  <div style="display:inline-block;width:25%;margin-left:10%;">…</div>
</td>
```

—works in most modern clients, **but Outlook treats every `<div>` as `display:block` and completely ignores margin‑left/right**.
Result: the two "columns" stack, large gaps appear, or images float off‑centre.

**Fixes**

* Replace each `<div>` "column" with a nested `<table>` that has an explicit `width="65%"` / `150"` etc.
* Swap `margin-left:10%` for extra empty table cells:

```html
<tr>
  <td width="10">&nbsp;</td><!-- spacer instead of margin -->
  <td width="120">…image…</td>
</tr>
```

---

### 3. Web‑fonts & font‑fallback
Outlook can't fetch Google Fonts. In your `<style>` block the headings shrink nicely on mobile, **but Outlook always falls back to Times New Roman because the font isn't available**.
Keep the `<link>` for Gmail / Apple Mail, but add a stronger fallback in the live styles:

```css
font-family: 'Lato', Arial, Helvetica, sans-serif !important;
```

(You already do this for the MSO conditional block—good—just be sure every in‑line span includes it.)

---

### 4. Unsupported CSS in in‑line styles
* `display:grid` (three places) – drop it.
* `justify-content`, `letter-spacing:-1px`, `margin:auto` on `<img>` inside Outlook may be ignored; use `align="center"` and `hspace` where possible.
* `%` padding on `<td>` – Outlook only honours pixel units.

---

### 5. Hidden preview text: stray NBSP
After `</div>` you have an actual "non‑breaking‑space" character (` `). Some clients try to render it, pushing the whole email 1 px right. Remove it or wrap in a comment.

---

### 6. Template tokens inside `<body>`
`{{ email_body }}` sitting between two blocks can confuse BeeFree's internal parser and end up as an empty rogue paragraph in the final HTML. Move all substitution tokens **outside** the main 600 px container or wrap them in a comment.

---

### 7. General Outlook "safe table" checklist (apply throughout)

| Rule | Why it matters |
|------|----------------|
| Parent container must be a `<table width="100%" role="presentation">` — no outer `<div>` | Outlook sometimes drops margin/padding on a naked `<div>`. |
| All images: `display:block;width:100%;max-width:…px;height:auto;` + explicit `width` attribute | Prevents random stretching. |
| Never rely on `<ul>` bullets; build them with a two‑cell table (`✓` icon + text) | Outlook strips list‑style. |
| Use `mso-padding-alt:` for buttons and set border‐radius to `0` for Outlook if the soft corners are not critical | Rounded corners appear square otherwise. |

---

## A quick "first‑aid" patch

If you don't have time to refactor every row:

1. **Remove** every `margin-left:10%`, `display:grid`, and `justify-content`.
2. **Change** each problematic inline column wrapper to pixels instead of `%`:

```html
<div style="display:inline-block;width:390px;vertical-align:top;"> … </div>
<div style="display:inline-block;width:120px;vertical-align:top;"> … </div>
```

   (600 px template width – 30 px padding = 570 px usable; 390 + 120 = 510 px leaves 60 px of gutter that Outlook can ignore.)

3. Add the VML background wrapper to the hero and the two later rows that use the blue gradient background.

That alone will make the message look 95 % right in all modern Outlook versions and won't hurt Gmail/Apple Mail.

---

### Useful references

* **"Bulletproof Email Backgrounds"** by Campaign Monitor – copy‑paste VML snippets.
* **"The Outlook Guide"** (Litmus) – exhaustive list of supported/unsupported CSS. *(Note: Accessing the full, up-to-date Litmus guides typically requires a paid subscription, which is currently postponed. A limited 7-day free trial may be available.)*
* **BeeFree render test** – after each change paste your HTML into <https://beefree.io/rewind/> to verify before importing the template into Outlook.

---

Feel free to paste a trimmed section back here once you've tweaked it; I can give it a final lint and generate a lite, copy‑paste‑ready snippet if that helps!
