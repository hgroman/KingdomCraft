# Email Style Guide

## Mobile Responsive Design

### Critical Mobile Components

The following components require special mobile handling to ensure consistent display across email clients:

### Feature Card Centering on Mobile

When implementing feature cards that need to be center-aligned on mobile devices, use the following approach:

```css
@media only screen and (max-width: 600px) {
    .feature-card-container {
        width: 100% !important;
        display: block !important;
        text-align: center !important;
    }

    .feature-card {
        margin: 0 auto 20px auto !important;
        width: 100% !important;
        max-width: 280px !important;
        display: inline-block !important;
        text-align: center !important;
    }

    /* This ensures ALL child elements inherit center alignment */
    .feature-card * {
        text-align: center !important;
    }
}
```

**Why this works:**
1. `.feature-card-container` sets the overall container to `text-align: center` and removes padding that can cause misalignment
2. `.feature-card` uses `margin: 0 auto`, `display: block` (not inline-block), and explicit `text-align: center` on the card itself
3. The universal selector `.feature-card *` ensures all nested elements (headings, paragraphs, etc.) inherit center alignment
4. Multiple `!important` flags override any conflicting inline styles
5. Removing horizontal padding in mobile view and setting `float: none` prevents layout shifts

**Important HTML changes required:**
```html
<!-- For each feature card container -->
<td class="feature-card-container" align="center" valign="top" width="50%" style="padding-right: 12px; padding-bottom: 20px; text-align: center;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="feature-card" width="100%" style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(23, 70, 135, 0.05); box-shadow: 0 8px 20px rgba(23, 70, 135, 0.1); background-color: #ffffff; max-width: 260px; margin: 0 auto; display: block;">
        <!-- Card content -->
    </table>
</td>
```

**Common pitfalls to avoid:**
- Using `display: inline-block` instead of `display: block` for feature cards on mobile
- Forgetting to add `margin: 0 auto` to the feature card table
- Relying only on container-level centering without also centering the card itself
- Not adding `!important` flags where needed for mobile overrides
- Using only margin centering without also setting text alignment
- Not removing left/right padding that can cause cards to shift left/right

## Feature Card Grid Layout

### Equal Height Feature Cards

To ensure feature cards maintain equal heights within rows (especially important when content lengths vary):

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" class="feature-card" width="100%" style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(23, 70, 135, 0.05); box-shadow: 0 8px 20px rgba(23, 70, 135, 0.1); background-color: #ffffff; max-width: 260px; margin: 0 auto; display: block; height: 100%;">
    <!-- Card content -->
</table>
```

**Key attributes:**
- Add `height: 100%` to the feature card table style
- Ensure all cards in the same row have consistent styling
- For multi-row layouts, each row should be in its own container table

## Button Design Best Practices

### CTA Button Styling

For maximum impact and compatibility across email clients:

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px;">
    <tr>
        <td align="center" bgcolor="#2490eb" style="background: linear-gradient(135deg, #14467b, #2490eb); border-radius: 30px; padding: 0; box-shadow: 0 10px 20px rgba(20, 70, 123, 0.2);">
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://example.com" style="height:40px;v-text-anchor:middle;width:220px;" arcsize="60%" stroke="f" fillcolor="#2490eb">
                <w:anchorlock/>
                <center style="color:#ffffff;font-family:sans-serif;font-size:14px;font-weight:700;">SCHEDULE YOUR DEMO</center>
            </v:roundrect>
            <![endif]-->
            <a href="https://example.com" target="_blank" class="mobile-button" style="background: linear-gradient(135deg, #14467b, #2490eb); border-radius: 30px; color: #ffffff; display: inline-block; font-family: sans-serif; font-size: 14px; font-weight: 700; padding: 10px 16px; text-align: center; text-decoration: none; width: auto; letter-spacing: 0.5px; box-sizing: border-box; -webkit-text-size-adjust: none; white-space: nowrap;">
                SCHEDULE YOUR DEMO
            </a>
        </td>
    </tr>
</table>
```

**Button text guidelines:**
- Keep button text concise (3-5 words ideal)
- Use action verbs to drive engagement
- Avoid words like "FREE" that can trigger spam filters
- Use all caps for buttons to create visual hierarchy
- Maintain consistent button text throughout the email

## Dark Mode Compatibility

### Ensuring Dark Mode Readability

The following CSS ensures proper dark mode display:

```css
/* Apple Mail Dark Mode Overrides */
[data-ogsc] .highlight-section,
[data-ogsc] td[bgcolor="#e7f0fb"],
[data-ogsc] td[style*="background: linear-gradient(135deg, #e7f0fb 0%, #ffffff 50%, #e7f0fb 100%)"] {
    background: #2a2a2a !important;
    background-image: none !important;
    background-color: #2a2a2a !important;
}

[data-ogsc] .highlight-section p,
[data-ogsc] td[bgcolor="#e7f0fb"] p {
    color: #ffffff !important;
}

/* DISABLE DARK MODE COMPLETELY */
@media (prefers-color-scheme: dark) {
    body, .main-container, .body-container {
        background-color: #1e1e1e !important;
        color: #ffffff !important;
    }

    /* Fix highlight section - EXACT TARGETING */
    .highlight-section,
    td[bgcolor="#e7f0fb"],
    td[style*="border-left: 4px solid #2490eb"],
    td[style*="background-color: #e7f0fb"],
    td[style*="background: linear-gradient(135deg, #e7f0fb 0%, #ffffff 50%, #e7f0fb 100%)"],
    td[style*="background: linear-gradient(to right, rgba(23, 70, 135, 0.05), rgba(255, 255, 255, 0.8))"] {
        background: #2a2a2a !important;
        background-image: none !important;
        background-color: #2a2a2a !important;
        border-color: #2490eb !important;
        color: #ffffff !important;
    }

    /* Force all text to be visible in dark mode */
    p, h1, h2, h3, h4, span, div, a, strong, em, li {
        color: #ffffff !important;
    }

    /* Fix icons in dark mode */
    .icon-dark-mode {
        display: inline-block !important;
    }

    .icon-light-mode {
        display: none !important;
    }
}
```

**Icon handling for dark mode:**
```html
<img src="https://img.icons8.com/ios/50/14467b/mac-os.png" alt="macOS Icon" width="35" height="35" style="vertical-align: middle; display: inline-block;" class="icon-light-mode">
<img src="https://img.icons8.com/ios/50/ffffff/mac-os.png" alt="macOS Icon" width="35" height="35" style="vertical-align: middle; display: none;" class="icon-dark-mode">
```

## Gradient Backgrounds

### Animated Gradient Headers

For eye-catching headers with subtle animation:

```html
<td align="center" bgcolor="#14467b" style="background: linear-gradient(to right, #14467b, #2a6cb3, #14467b); background-size: 300% 300%; animation: gradient-shift 15s ease infinite; padding: 40px 30px; position: relative; border-radius: 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <!-- Header content -->
</td>
```

With corresponding CSS animation:

```css
@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
```

**Outlook fallback:**
```html
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">
    <v:fill type="gradient" color="#14467b" color2="#2a6cb3" angle="90" />
    <v:textbox style="mso-fit-shape-to-text:true" inset="30px,40px,30px,40px">
<![endif]-->

<!-- Content here -->

<!--[if gte mso 9]>
    </v:textbox>
</v:rect>
<![endif]-->
```

## Email Copy Guidelines

### Button Text Optimization

- **Keep it concise**: 2-4 words is ideal for button text
- **Use action verbs**: Start with verbs like "Schedule," "Get," "Download," etc.
- **Avoid spam triggers**: Words like "FREE" (especially in all caps) can trigger spam filters
- **Maintain consistency**: Use the same button text for similar actions throughout the email
- **Mobile-friendly**: Shorter text displays better on small screens
