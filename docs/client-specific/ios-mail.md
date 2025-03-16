# iOS Mail Compatibility Guide

## iOS Mail Specifics

Apple Mail on iOS is one of the better email clients but still has its quirks:

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

## Critical iOS Mail Fixes

### 1. Background Color Fix

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

### 2. Dark Mode Handling

#### A. Prevent Dark Mode Completely

Use meta tags to prevent dark mode adjustments (simpler but not always reliable):

```html
<!-- Prevent iOS dark mode color adjustments -->
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
```

#### B. Comprehensive Dark Mode Fixes (Recommended)

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
    
    /* Feature cards */
    table.feature-card, .feature-card {
        background-color: #ffffff !important;
        border: 1px solid rgba(0,0,0,0.1) !important;
    }
    
    /* Feature card headers - just solid color instead of gradient */
    .feature-card tr:first-child td, 
    table[style*="border-radius: 12px"] tr:first-child td {
        background: #14467b !important;
        background-image: none !important;
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
    
    /* Force text in gradient sections to be visible */
    [bgcolor="#14467b"] h1, [bgcolor="#14467b"] h2, [bgcolor="#14467b"] p, [bgcolor="#14467b"] a {
        color: #ffffff !important;
        text-shadow: none !important;
    }
  }
</style>
```

**Important**: Add container classes to your main table structure:

```html
<!-- Email container -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="body-container">
    <tr>
        <td align="center" bgcolor="#f7f9fc" style="padding: 20px 0;">
            <!-- Main content container -->
            <table role="presentation" class="responsive-table main-container" cellpadding="0" cellspacing="0" border="0" width="600">
                <!-- Email content here -->
            </table>
        </td>
    </tr>
</table>
```

### 3. Image Scaling for High-DPI Displays

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

### 4. Automatic Link Detection Fix

iOS Mail automatically detects phone numbers, addresses, and dates. Prevent with:

```html
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
```

## Common iOS Mail Issues and Solutions

### 1. Dark Mode Text Contrast

Solution: Add specific styles for dark mode

```html
<style>
  /* Force dark mode text to be readable */
  @media (prefers-color-scheme: dark) {
    .body-text {
      color: #333333 !important;
    }
    .dark-bg-section {
      background-color: #f7f9fc !important;
    }
  }
</style>

<table class="dark-bg-section" bgcolor="#ffffff" style="background-color: #ffffff;">
  <tr>
    <td>
      <p class="body-text" style="color: #333333;">This text will remain readable in dark mode</p>
    </td>
  </tr>
</table>
```

### 2. Small Font Scaling

Solution: Use proper minimum font sizes

```html
<!-- iOS might scale up text smaller than 13px -->
<p style="font-size: 16px; line-height: 1.5; color: #333333;">
  This text will display at the intended size
</p>
```

### 3. Auto-Scaling Viewport

Solution: Add viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 4. Link Styling for iOS

Solution: Make tap targets larger

```html
<a href="https://example.com" style="display: inline-block; padding: 5px; font-size: 16px; color: #2490eb; text-decoration: none;">
  This link has a larger tap target
</a>
```

## iOS Dark Mode

iOS 13+ dark mode significantly affects emails. Here are detailed solutions:

### 1. Transparent Background Problem

When backgrounds are transparent, iOS dark mode sets them to black:

```html
<!-- Fix: Always set explicit background colors -->
<table bgcolor="#ffffff" style="background-color: #ffffff;">
  <tr>
    <td bgcolor="#ffffff" style="background-color: #ffffff;">
      Content here
    </td>
  </tr>
</table>
```

### 2. Gradient Sections & Highlight Blocks

For gradient backgrounds and highlight sections, use attribute selectors to target them specifically:

```css
@media (prefers-color-scheme: dark) {
    /* Gradient sections */
    td[bgcolor="#14467b"], td[style*="background: linear-gradient"] {
        background-color: #14467b !important;
        background-image: none !important;  /* Removes gradient */
    }
    
    /* INCORRECT APPROACH - DON'T USE LIGHT BACKGROUNDS IN DARK MODE */
    /* This will look washed out with poor contrast: 
    td[bgcolor="#e7f0fb"], td[style*="background: linear-gradient(135deg, #e7f0fb"] {
        background-color: #e7f0fb !important;
        background-image: none !important;
        border-left: 4px solid #2490eb !important;
    }
    
    td[bgcolor="#e7f0fb"] p, td[style*="background: linear-gradient(135deg, #e7f0fb"] p {
        color: #14467b !important;
    }
    */
    
    /* CORRECT APPROACH - Use darker colors with better contrast for dark mode */
    td[bgcolor="#e7f0fb"], .secondary-bg, td[style*="background: linear-gradient(135deg, #e7f0fb"], .highlight-section {
        background-color: #213A5C !important;
        background-image: linear-gradient(135deg, #213A5C 0%, #2A4A7A 100%) !important;
        border-left: 4px solid #3498db !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
    }
    
    /* Light text on dark background for better visibility */
    td[bgcolor="#e7f0fb"] p, td[style*="background: linear-gradient(135deg, #e7f0fb"] p, .highlight-section p {
        color: #ffffff !important;
        text-shadow: none !important;
    }
    
    /* Highlight important text with a brighter color */
    .highlight-section p strong, td[bgcolor="#e7f0fb"] p strong {
        color: #8bbcff !important;
        font-weight: bold !important;
    }
}
```

### 2. Image Colors in Dark Mode

Light-colored images can look bad on dark backgrounds:

```html
<!-- Fix: Add white backing to images -->
<div bgcolor="#ffffff" style="background-color: #ffffff; padding: 1px;">
  <img src="light-logo.png" width="200" height="100" alt="Logo" style="display: block;">
</div>
```

### 3. Custom Dark Mode CSS

```html
<style>
  :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }
  
  @media (prefers-color-scheme: dark) {
    body, table, td {
      background-color: #2d2d2d !important;
      color: #ffffff !important;
    }
    
    .dark-mode-reverse {
      background-color: #ffffff !important;
      color: #2d2d2d !important;
    }
    
    img {
      filter: brightness(0.8);
    }
  }
</style>
```

## Testing for iOS Mail

Always test your emails in:
1. iOS Mail on iPhone (latest iOS version)
2. iOS Mail on iPad (latest iOS version)
3. macOS Mail app
4. Both dark and light modes

## iOS Mail Compatibility Checklist

✅ Use both `bgcolor` and `background-color`  
✅ Add dark mode handling  
✅ Add viewport meta tags  
✅ Set minimum text size to 16px  
✅ Make touch targets at least 44×44px  
✅ Test in both dark and light modes  
✅ Provide high-resolution images for Retina displays  
✅ Control automatic data detection with meta tags