# Email Development Style Guide & Best Practices

## Overview
This document outlines our standardized approach to creating responsive, cross-client compatible email templates. Every template created in this workspace must adhere to these guidelines to ensure consistency, accessibility, and optimal display across all email clients.

## Table of Contents
1. [Development Workflow](#development-workflow)
2. [Mobile-First Approach](#mobile-first-approach)
3. [Cross-Client Compatibility](#cross-client-compatibility)
4. [HTML Structure](#html-structure)
5. [CSS Standards](#css-standards)
6. [Responsive Design](#responsive-design)
7. [Email Client-Specific Solutions](#email-client-specific-solutions)
8. [Testing Checklist](#testing-checklist)
9. [Performance Optimization](#performance-optimization)
10. [Accessibility Requirements](#accessibility-requirements)

---

## Development Workflow

### Three-Phase Development Process

#### Phase 1: Foundation & Mobile-First
- Create basic HTML structure using tables
- Implement mobile-first CSS
- Define fallback styles for all elements
- Establish responsive breakpoints

#### Phase 2: Enhancement & Client-Specific Fixes
- Add progressive enhancements (animations, gradients)
- Implement client-specific conditional code
- Apply responsive behavior refinements
- Fine-tune padding and spacing

#### Phase 3: Testing & Optimization
- Test across email clients
- Implement final fixes
- Optimize for performance
- Document any special techniques used

---

## Mobile-First Approach

### Core Principles
- Design for smallest screens first (320px width)
- Define base styles that work universally
- Add complexity with progressive enhancement
- Ensure touch targets are at least 44px × 44px

### Required Mobile Optimizations
- Stack all multi-column layouts
- Increase font sizes for readability (min 14px)
- Make buttons full-width
- Simplify or remove decorative elements
- Reduce padding and margins

```css
@media (max-width: 600px) {
    .column {
        width: 100% !important;
        display: block !important;
    }

    .button {
        width: 100% !important;
        padding: 12px !important;
        font-size: 16px !important;
    }
}
```

---

## Cross-Client Compatibility

### Email Client Priority List
1. **Tier 1** (Must be perfect)
   - Gmail (Web, iOS, Android)
   - Apple Mail (iOS, macOS)
   - Outlook (Windows, Mac, Web)
   - Samsung Mail

2. **Tier 2** (Should work well)
   - Yahoo Mail
   - Outlook.com
   - Android Mail

3. **Tier 3** (Basic functionality)
   - Other email clients

### Compatibility Technique Matrix

| Feature | Outlook Desktop | Gmail | Apple Mail | Yahoo | Mobile |
|---------|----------------|-------|------------|-------|--------|
| Flexbox | ❌ | ⚠️ | ✅ | ⚠️ | ✅ |
| Grid | ❌ | ❌ | ✅ | ❌ | ✅ |
| Media Queries | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| Background Images | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| Animated GIFs | ✅ | ✅ | ✅ | ✅ | ✅ |
| Custom Fonts | ⚠️ | ⚠️ | ✅ | ⚠️ | ✅ |
| Web Fonts | ❌ | ⚠️ | ✅ | ⚠️ | ✅ |
| CSS Animation | ❌ | ⚠️ | ✅ | ❌ | ✅ |

✅ = Full Support  ⚠️ = Partial Support  ❌ = No Support

---

## HTML Structure

### Base Template Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Email Title</title>
    <!--[if !mso]><!-->
    <style type="text/css">
        /* Base styles */
    </style>
    <!--<![endif]-->
    <!--[if mso]>
    <style type="text/css">
        /* Outlook-specific styles */
    </style>
    <![endif]-->
</head>
<body>
    <!-- Preview text -->
    <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
        Email preview text goes here (max 90 characters)
    </div>

    <!-- Main container -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
        <!-- Email content here -->
    </table>
</body>
</html>
```

### Table Structure Requirements
- Always use `role="presentation"` on tables
- Set `cellpadding="0" cellspacing="0" border="0"` on all tables
- Define explicit widths for all table cells
- Use table nesting for complex layouts
- Add empty `<tr><td style="line-height:0;font-size:0;height:0;">​</td></tr>` to fix spacing issues in Outlook

### Image Requirements
- Always include `alt` attributes
- Set explicit `width` and `height` attributes
- Use `display: block` to prevent spacing issues
- Include `border="0"` attribute for linked images

```html
<img src="image.jpg" alt="Descriptive text" width="600" height="400" style="display: block; max-width: 100%; height: auto;" border="0">
```

---

## CSS Standards

### Inline CSS Requirements
All critical CSS must be inlined. Use this pattern:

```html
<td style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333333; padding: 20px;">
    Content here
</td>
```

### CSS Property Priorities
1. **Layout** properties (width, display, table-layout)
2. **Box model** properties (margin, padding, border)
3. **Typography** properties (font-family, font-size, line-height)
4. **Visual** properties (color, background-color)
5. **Advanced** properties (gradient, animation)

### !important Flag Usage
Use `!important` for:
- All media query styles
- Overriding client-specific behavior
- Ensuring critical mobile styles take precedence

```css
@media (max-width: 600px) {
    .mobile-stack {
        width: 100% !important;
        display: block !important;
    }
}
```

---

## Responsive Design

### Breakpoint Standards
- **Primary breakpoint**: 600px
- **Secondary breakpoint**: 375px (smaller mobile devices)

```css
/* Primary mobile styles */
@media (max-width: 600px) { }

/* Small mobile styles */
@media (max-width: 375px) { }
```

### Required Responsive Transformations
For mobile view (under 600px):
1. Single column layout (all multi-column content stacked)
2. Increase font sizes (min 14px body text, 20px headings)
3. Full-width buttons with larger touch targets (min 44px height)
4. Reduced padding (typically 15-20px)
5. Simplified or removed decorative elements

For small mobile (under 375px):
1. Further reduce padding (10-15px)
2. Adjust font sizes if needed
3. Simplify complex elements further

---

## Email Client-Specific Solutions

### Outlook (Windows)
Outlook uses Microsoft Word rendering engine and requires special handling:

```html
<!--[if mso]>
<style type="text/css">
    .fallback {
        background-color: #ffffff !important;
        padding: 20px !important;
    }
    /* More Outlook-specific styles */
</style>
<![endif]-->
```

Key Outlook fixes:
- Use `mso-line-height-rule: exactly;` for consistent line height
- Use tables instead of divs for layout
- Use VML for background images:

```html
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:400px;">
    <v:fill type="tile" src="image.jpg" color="#ffffff" />
    <v:textbox inset="0,0,0,0">
<![endif]-->
    <div>Content goes here</div>
<!--[if gte mso 9]>
    </v:textbox>
</v:rect>
<![endif]-->
```

### Gmail
Gmail clips messages larger than 102KB:
- Minimize HTML and CSS
- Remove unnecessary attributes and whitespace
- Avoid base64 encoded images
- Use web-safe fonts

### Apple Mail
While Apple Mail has good support for modern CSS:
- Test Dark Mode appearance
- Use `-webkit-device-pixel-ratio` for high-DPI displays
- Test with iOS Mail and macOS Mail

---

## Testing Checklist

### Pre-Deployment Testing
Every email must be tested for:

#### Visual Testing
- Desktop view (600px+)
- Tablet view (600px)
- Mobile view (375px)
- Dark mode compatibility
- Images disabled view

#### Client-Specific Testing
- Outlook Desktop (2013, 2016, Office 365)
- Outlook.com
- Gmail (Web, iOS, Android)
- Apple Mail (iOS, macOS)
- Samsung Mail
- Yahoo Mail

#### Technical Testing
- Email size under 102KB
- All links working and properly tracked
- Alt text for all images
- Spelling and grammar
- Email preview text

---

## Performance Optimization

### Size Reduction Techniques
- Optimize images (compression, correct dimensions)
- Minimize HTML (remove comments, reduce whitespace)
- Use web-safe fonts (or minimal web fonts)
- Avoid base64 encoded images
- Keep email under 102KB to prevent Gmail clipping

### Image Best Practices
- Compress all images using tools like TinyPNG
- Use appropriate dimensions (don't scale down large images)
- Provide retina versions (@2x) for key visual elements
- Keep total image payload under 1MB
- Host images on a reliable, fast CDN

---

## Accessibility Requirements

### Minimum Requirements
- Semantic HTML structure
- Color contrast ratio of at least 4.5:1 for text
- Meaningful alt text for all images
- Text size minimum of 14px on mobile
- Logical reading order
- Clear link text (avoid "click here")

### WCAG 2.1 AA Compliance
- Include language attribute (`<html lang="en">`)
- Add role attributes to tables (`role="presentation"`)
- Include proper heading structure
- Use accessible link text
- Ensure keyboard navigation works

---

## Implementation Examples

### Responsive Column Structure
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
        <!-- First column -->
        <td class="column" style="width: 50%; padding: 10px;">
            Content
        </td>
        <!-- Second column -->
        <td class="column" style="width: 50%; padding: 10px;">
            Content
        </td>
    </tr>
</table>

<style>
@media (max-width: 600px) {
    .column {
        width: 100% !important;
        display: block !important;
    }
}
</style>
```

### Bulletproof Button
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
    <tr>
        <td class="button" style="background-color: #2490eb; border-radius: 4px; text-align: center;">
            <a href="https://example.com" target="_blank" style="background-color: #2490eb; border: 15px solid #2490eb; color: #ffffff; display: inline-block; font-family: sans-serif; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 4px;">
                Click Me
            </a>
        </td>
    </tr>
</table>

<style>
@media (max-width: 600px) {
    .button {
        width: 100% !important;
    }
    .button a {
        width: 100% !important;
        box-sizing: border-box !important;
    }
}
</style>
```

### Responsive Spacing
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
        <td class="spacing" style="padding: 40px 20px;">
            Content
        </td>
    </tr>
</table>

<style>
@media (max-width: 600px) {
    .spacing {
        padding: 20px 15px !important;
    }
}
@media (max-width: 375px) {
    .spacing {
        padding: 15px 10px !important;
    }
}
</style>
```

---

## Resources

### Tools
- [HTML Email Validator](https://www.htmlemailcheck.com/)
- [CSS Inliner](https://htmlemail.io/inline/)
- [Email on Acid](https://www.emailonacid.com/) (Testing)
- [Litmus](https://www.litmus.com/) (Testing)

### References
- [Email Client Market Share](https://www.litmus.com/email-client-market-share/)
- [Campaign Monitor CSS Guide](https://www.campaignmonitor.com/css/)
- [Can I Email](https://www.caniemail.com/) (Feature support)
