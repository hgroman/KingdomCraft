# Email Client Compatibility Guide

This comprehensive guide provides solutions for common rendering issues across the major email clients. Use this as your central reference for resolving client-specific compatibility problems.

## Table of Contents

1. [Overview and Common Issues](#overview-and-common-issues)
2. [iOS Mail](#ios-mail)
3. [Gmail](#gmail)
4. [Outlook](#outlook)
5. [Universal Best Practices](#universal-best-practices)
6. [Compatibility Testing Checklist](#compatibility-testing-checklist)

## Overview and Common Issues

Email clients render HTML/CSS differently, requiring specific techniques to ensure consistent display. The most common issues across clients include:

- **Layout Rendering**: Table-based layouts are still required for reliable rendering
- **CSS Support**: Inline styles are most reliable, with varying support for embedded CSS
- **Responsive Design**: Media query support varies significantly by client
- **Image Handling**: Proper image attributes are essential for consistent display
- **Dark Mode**: Different handling across modern clients requires specific techniques

## iOS Mail

### Key Characteristics

Apple Mail on iOS is one of the better email clients but still has important quirks:

1. **Background Color Requirements**:
   - Requires `bgcolor` HTML attribute on tables, not just CSS
   - Will ignore `background-color` CSS without the HTML attribute

2. **Dark Mode Issues**:
   - iOS 13+ automatically applies dark mode to emails
   - Can invert colors unexpectedly
   - Requires special handling to maintain design

3. **Client Variations**:
   - iOS Mail app (multiple iOS versions)
   - macOS Mail app
   - Apple Watch Mail

### Critical iOS Mail Fixes

#### Background Color Fix

Always use the `bgcolor` attribute in addition to CSS background-color:

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
       bgcolor="#f7f9fc" style="background-color: #f7f9fc;">
  <tr>
    <td>
      Content here
    </td>
  </tr>
</table>
```

#### Dark Mode Handling

##### A. Prevent Dark Mode Completely

Use meta tags to prevent dark mode adjustments (simpler but not always reliable):

```html
<!-- Prevent iOS dark mode color adjustments -->
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
```

##### B. Comprehensive Dark Mode Fixes (Recommended)

For a more reliable approach, add attribute selectors and specific overrides:

```html
<style>
  @media (prefers-color-scheme: dark) {
    /* Force everything to stay in light mode */
    .body-container, .main-container, body, table, td, p, a, li, blockquote, h1, h2, h3, h4, h5, h6 {
        color: #000000 !important;
        background-color: #ffffff !important;
    }

    /* Target specific components that would look bad in dark mode */
    table[role="presentation"] {
        background-color: #ffffff !important;
    }

    /* Header area with gradient */
    td[bgcolor="#14467b"], td[background*="header-bg"] {
        background-color: #14467b !important;
        background-image: none !important;
    }

    /* Header text */
    h1, .header-title, .header-subtitle {
        color: #ffffff !important;
        background-color: transparent !important;
    }

    /* Force all images to be visible */
    img {
        opacity: 1 !important;
        filter: none !important;
    }

    /* Force links to maintain visibility */
    a {
        color: #2490eb !important;
    }
  }
</style>
```

#### Image Scaling for High-DPI Displays

iOS devices often have high-DPI displays. Provide properly sized images:

```html
<picture>
  <!--[if !mso]><!-->
  <source srcset="image-2x.jpg" media="(-webkit-min-device-pixel-ratio: 2)">
  <!--<![endif]-->
  <img src="image.jpg" width="600" height="300" alt="Description"
       style="width: 100%; max-width: 600px; height: auto;" border="0">
</picture>
```

#### Automatic Link Detection Fix

iOS Mail automatically detects phone numbers, addresses, and dates. Prevent with:

```html
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
```

### Common iOS Mail Issues and Solutions

1. **Dark Mode Text Contrast**: Add specific styles for dark mode
2. **Small Font Scaling**: Use proper minimum font sizes (at least 13px)
3. **Auto-Scaling Viewport**: Add viewport meta tag
4. **Link Styling**: Make tap targets larger (at least 44px)

## Gmail

### Key Characteristics

Gmail is widely used but has some important limitations:

1. **Size Limitations**:
   - Gmail clips messages larger than 102KB
   - Clipped messages show "Message clipped. Click here to view entire message"
   - Any content after clipping won't track opens and clicks properly

2. **CSS Support**:
   - Gmail strips `<style>` tags in the `<head>`
   - Gmail Web supports embedded CSS, but only within the body
   - Gmail apps have inconsistent CSS support
   - Media queries may not work in all Gmail versions

3. **Client Variations**:
   - Gmail Web (browser)
   - Gmail iOS app
   - Gmail Android app
   - Gmail in native mail apps (IMAP)

### Critical Gmail Fixes

#### Size Optimization

Reduce email size to avoid the 102KB limit:

```html
<!-- Minify HTML -->
<table><tr><td>Compact HTML without unnecessary whitespace</td></tr></table>

<!-- Avoid base64 images, use hosted images instead -->
<img src="https://yourhost.com/images/logo.png" alt="Logo" width="200" height="100">

<!-- Skip unnecessary HTML comments -->
```

#### Inline All Critical CSS

```html
<!-- Don't rely on style tags for Gmail -->
<p style="color: #333333; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
    This text will display correctly in Gmail.
</p>
```

#### Mobile Responsiveness

Gmail mobile apps may not support media queries. Use these techniques:

```html
<!-- Hybrid approach -->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
        <td>
            <!-- Column 1 -->
            <table role="presentation" width="280" cellspacing="0" cellpadding="0" border="0" align="left" style="max-width: 100%;">
                <tr>
                    <td>Column 1 content</td>
                </tr>
            </table>
            <!-- Column 2 -->
            <table role="presentation" width="280" cellspacing="0" cellpadding="0" border="0" align="right" style="max-width: 100%;">
                <tr>
                    <td>Column 2 content</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
```

#### Images in Gmail

Gmail caches images, so use these best practices:

```html
<!-- Always include dimensions -->
<img src="image.jpg" alt="Description" width="600" height="300" style="display: block; width: 100%; max-width: 600px; height: auto;" border="0">
```

### Common Gmail Issues and Solutions

1. **Gmail Clipping**: Keep HTML under 102KB
2. **CSS Being Stripped**: Use inline styles for all critical CSS
3. **Media Queries Not Working**: Use hybrid approach for columns
4. **Button Alignment Issues**: Use tables for buttons
5. **Gmail Converting URLs to Links**: Break up URLs in text

#### Button Implementation for Gmail

```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
    <tr>
        <td align="center" bgcolor="#2490eb" style="border-radius: 4px;">
            <a href="https://example.com" target="_blank" style="display: inline-block; padding: 12px 24px; font-family: Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 4px;">
                Click Here
            </a>
        </td>
    </tr>
</table>
```

## Outlook

### Key Characteristics

Outlook for Windows (2007-2019, Office 365) uses Microsoft Word's rendering engine to display emails, creating significant challenges:

- Limited CSS support
- No support for many modern features
- Requires special handling for basic layout

**Note:** When using visual editors (like Beefree) to generate Outlook templates, the export process may strip or alter crucial Outlook-specific code (VML, MSO conditionals). Refer to the `docs/POST_EXPORT_OUTLOOK_FIXING_GUIDE.md` for a detailed workflow on inspecting and manually fixing these exported templates for direct Outlook sending.

### Critical Outlook Fixes

#### VML for Backgrounds and Rounded Corners

Outlook doesn't support background gradients or border-radius. Use Vector Markup Language (VML) instead:

```html
<!-- Gradient Background with Rounded Corners -->
<td style="background: linear-gradient(135deg, #14467b 0%, #1a5ca3 50%, #14467b 100%); padding: 40px 20px; border-radius: 8px;">
    <!--[if gte mso 9]>
    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">
        <v:fill type="gradient" color="#14467b" color2="#1a5ca3" angle="90" />
        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
    <![endif]-->

    <!-- Your content here -->

    <!--[if gte mso 9]>
        </v:textbox>
    </v:rect>
    <![endif]-->
</td>
```

#### Rounded Buttons Using VML

```html
<div>
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://example.com" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="60%" stroke="f" fillcolor="#2490eb">
        <w:anchorlock/>
        <center>
    <![endif]-->
    <a href="https://example.com"
       style="background-color:#2490eb;border-radius:25px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;">Button Text</a>
    <!--[if mso]>
        </center>
    </v:roundrect>
    <![endif]-->
</div>
```

#### Table-Based Layouts

Always use tables for layout in Outlook:

```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr>
        <td width="50%" align="center" valign="top">
            <!-- Column 1 content -->
        </td>
        <td width="50%" align="center" valign="top">
            <!-- Column 2 content -->
        </td>
    </tr>
</table>
```

#### MSO Line-Height Fix

Outlook has inconsistent line-height rendering. Use this special property:

```html
<p style="line-height:20px; mso-line-height-rule:exactly;">
    This text will have consistent line height in Outlook.
</p>
```

#### "Ghost" Table Fix for Spacing

Outlook ignores many margin/padding settings. Use empty cells for spacing:

```html
<!-- Add vertical spacing -->
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td height="20" style="font-size:0; line-height:0;">&nbsp;</td>
    </tr>
</table>
```

### Common Outlook Issues and Solutions

1. **Outlook Ignores Max-Width**: Use a container table with fixed width
2. **Outlook Shows Empty Lines in Tables**: Add style to TDs
3. **Unwanted Spacing Around Images**: Use display:block and proper nesting in tables
4. **Outlook Adds Padding to Tables**: Set specific cell padding
5. **Blue Links and Text Box Issues**: Define color and remove auto-formatting

#### Outlook-Specific Stylesheets

You can target Outlook with conditional comments in the head:

```html
<!--[if mso]>
<style type="text/css">
    /* Outlook-specific styles */
    .outlook-only {
        font-family: Arial, sans-serif !important;
        background-color: #ffffff !important;
    }
    .hide-in-outlook {
        display: none !important;
        mso-hide: all !important;
    }
</style>
<![endif]-->
```

## Universal Best Practices

These techniques work well across all email clients:

### HTML Structure

1. **Always use tables for layout**: `<table role="presentation">`
2. **Use both HTML attributes and CSS properties**:
   ```html
   <table bgcolor="#ffffff" style="background-color: #ffffff;">
   ```
3. **Include proper doctype**:
   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

### Typography

1. **Use web-safe fonts with fallbacks**:
   ```css
   font-family: Arial, Helvetica, sans-serif;
   ```
2. **Minimum font size of 14px** for body text
3. **Define both line-height and mso-line-height-rule**

### Images

1. **Always include dimensions**: width/height attributes
2. **Always include alt text**: for accessibility
3. **Use display: block**: to prevent spacing issues
4. **Use border="0"**: to prevent unexpected borders

### Responsive Design

1. **Use hybrid approach**: Fixed table widths with max-width
2. **Mobile first**: Design for small screens, then enhance for larger ones
3. **Touch-friendly targets**: Minimum 44px height for buttons

## Compatibility Testing Checklist

### Before Sending

✅ **General Structure**
- [ ] HTML under 102KB for Gmail
- [ ] Tables used for all layout elements
- [ ] All styles inlined for critical elements
- [ ] Proper doctype and character encoding

✅ **iOS Mail**
- [ ] Background colors use both HTML attributes and CSS
- [ ] Dark mode tested and fixed
- [ ] All images have proper dimensions and alt text
- [ ] Viewport meta tag included

✅ **Gmail**
- [ ] No critical content after potential clip point
- [ ] Media queries have fallbacks for Gmail apps
- [ ] All images properly hosted (not base64)
- [ ] Buttons tested in Gmail mobile apps

✅ **Outlook**
- [ ] VML used for backgrounds and rounded elements
- [ ] MSO conditional comments for Outlook-specific fixes
- [ ] Line height fixed with mso-line-height-rule
- [ ] All buttons have VML fallbacks

### Testing Sequence

Always test in this order of priority:
1. iOS Mail (iPhone) first
2. Gmail App (iOS) second
3. Outlook Mobile (iOS) third
4. Desktop clients last

## Conclusion

Email client compatibility requires client-specific techniques. By implementing the solutions in this guide, you can ensure consistent display across the major email clients while maintaining a responsive, accessible design.

For specific component implementations, see the component documentation in the `/docs/components/` directory.
