# Mobile-First Responsive Email Design Guide

## Core Principles

### 1. Table-Based Mobile-First Structure

All layout elements **MUST** use nested tables for maximum compatibility. Our approach is:

1. Start with mobile design (320px width)
2. Add responsive breakpoints for larger screens
3. Use conditional code for Outlook and other problematic clients

```html
<!-- Mobile-first responsive table structure -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="responsive-table">
  <tr>
    <td align="center" style="padding: 20px 15px;">
      <!-- Content container with max-width -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
        <tr>
          <td>
            <!-- Content here -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 2. Responsive Breakpoints

Our standard breakpoints are:

- **600px**: Primary breakpoint for switching from desktop to mobile layout
- **375px**: Secondary breakpoint for smaller mobile devices

```css
/* Primary mobile breakpoint */
@media only screen and (max-width: 600px) {
  .responsive-table {
    width: 100% !important;
  }
  .mobile-stack {
    display: block !important;
    width: 100% !important;
  }
  /* Additional mobile styles */
}

/* Small mobile devices */
@media only screen and (max-width: 375px) {
  .small-mobile-font {
    font-size: 14px !important;
  }
  /* Additional small device styles */
}
```

### 3. Mobile-Specific Classes

Always include these essential mobile classes:

```css
@media only screen and (max-width: 600px) {
  /* Convert multi-column to single column */
  .mobile-stack {
    display: block !important;
    width: 100% !important;
  }

  /* Center content on mobile */
  .mobile-center {
    text-align: center !important;
  }

  /* Adjust padding for mobile */
  .mobile-padding {
    padding: 15px !important;
  }

  /* Hide elements on mobile */
  .mobile-hide {
    display: none !important;
  }

  /* Show mobile-only elements */
  .mobile-show {
    display: block !important;
    width: auto !important;
    max-height: inherit !important;
    overflow: visible !important;
    visibility: visible !important;
  }

  /* Full-width images on mobile */
  .mobile-image {
    width: 100% !important;
    height: auto !important;
  }
}
```

## Implementation Requirements

### 1. Feature Card Grid Layout

Feature cards must be implemented using this exact structure to ensure proper mobile stacking and equal heights:

```html
<!-- Feature card row container -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <!-- First card container cell -->
    <td class="mobile-stack" align="center" valign="top" width="50%" style="padding-right: 10px; padding-bottom: 20px;">
      <!-- Individual card table with height: 100% -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="feature-card" style="border-radius: 8px; border: 1px solid #e1e1e1; height: 100%;">
        <tr>
          <td style="padding: 20px;">
            <!-- Card content -->
          </td>
        </tr>
      </table>
    </td>

    <!-- Second card container cell -->
    <td class="mobile-stack" align="center" valign="top" width="50%" style="padding-left: 10px; padding-bottom: 20px;">
      <!-- Individual card table with height: 100% -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="feature-card" style="border-radius: 8px; border: 1px solid #e1e1e1; height: 100%;">
        <tr>
          <td style="padding: 20px;">
            <!-- Card content -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

**Critical mobile styles:**
```css
@media only screen and (max-width: 600px) {
  .mobile-stack {
    display: block !important;
    width: 100% !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .feature-card {
    margin: 0 auto 20px auto !important;
    width: 100% !important;
    max-width: 280px !important;
  }
}
```

### 2. Button Implementation

All buttons must use this structure for maximum compatibility:

```html
<!-- Button container -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" class="mobile-button-container" style="margin: 25px 0;">
  <tr>
    <td align="center">
      <!-- Button background with VML fallback for Outlook -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="mobile-button" style="border-radius: 25px; background: linear-gradient(135deg, #14467b, #2490eb);">
        <tr>
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://example.com" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="60%" stroke="f" fillcolor="#2490eb">
            <w:anchorlock/>
            <center style="color:#ffffff;font-family:sans-serif;font-size:14px;font-weight:bold;">SCHEDULE YOUR DEMO</center>
          </v:roundrect>
          <![endif]-->
          <!--[if !mso]><!-->
          <td align="center" style="padding: 12px 25px;">
            <a href="https://example.com" target="_blank" style="font-size: 14px; font-family: sans-serif; color: #ffffff; font-weight: bold; text-decoration: none; display: inline-block;">SCHEDULE YOUR DEMO</a>
          </td>
          <!--<![endif]-->
        </tr>
      </table>
    </td>
  </tr>
</table>
```

**Mobile button styles:**
```css
@media only screen and (max-width: 600px) {
  .mobile-button-container {
    width: 100% !important;
    margin: 20px 0 !important;
  }

  .mobile-button {
    width: 80% !important;
    max-width: 280px !important;
  }
}
```

### 3. Dark Mode Support

All templates must include these dark mode overrides:

```css
@media (prefers-color-scheme: dark) {
  /* Base dark mode styles */
  body, .body-container, .main-container {
    background-color: #1e1e1e !important;
  }

  /* Text colors */
  p, h1, h2, h3, h4, span, div, a:not([class="button"]), li {
    color: #f1f1f1 !important;
  }

  /* Card backgrounds */
  .feature-card, .content-card, td[bgcolor="#ffffff"] {
    background-color: #2a2a2a !important;
    border-color: #444444 !important;
  }

  /* Light sections in dark mode */
  td[bgcolor="#f7f9fc"], td[bgcolor="#e7f0fb"] {
    background-color: #2a2a2a !important;
  }

  /* Dark mode image swapping */
  .dark-mode-img {
    display: inline-block !important;
  }

  .light-mode-img {
    display: none !important;
  }
}
```

## Testing Requirements

### 1. Mobile-First Testing Sequence

Always test in this exact order:

1. **iPhone Mail (iOS)** - Primary testing platform
2. **Gmail App (iOS)** - Secondary testing platform
3. **Outlook Mobile (iOS)** - Tertiary testing platform
4. **Desktop clients** - After mobile testing is complete

### 2. Critical Mobile Test Cases

Verify these specific mobile scenarios:

- **320px width** - Ensure no horizontal scrolling
- **Feature card stacking** - Cards should stack properly with equal widths
- **Button display** - Buttons should be centered with appropriate width
- **Text readability** - Font sizes should be minimum 14px on mobile
- **Image scaling** - Images should scale proportionally
- **Dark mode display** - Test with dark mode enabled

## Implementation Checklist

✅ All layouts use nested tables
✅ Mobile breakpoints at 600px and 375px
✅ Feature cards have `height: 100%` for equal heights
✅ Buttons use VML fallbacks for Outlook
✅ Dark mode styles included
✅ All images have proper alt text
✅ Mobile-specific classes implemented
✅ Tested on iPhone first
✅ No horizontal scrolling at 320px width

## Common Mobile Issues and Solutions

| Issue | Solution |
|-------|----------|
| Uneven feature cards | Add `height: 100%` to card tables |
| Horizontal scrolling | Set `width: 100% !important` on mobile |
| Text too small | Use minimum 16px for body, 14px for secondary text |
| Images too large | Add `width: 100% !important; height: auto !important` |
| Buttons too small | Set minimum 44px height for touch targets |
| Padding issues | Use `.mobile-padding` class to adjust spacing |
| Outlook rendering | Add MSO conditional code for Outlook |
