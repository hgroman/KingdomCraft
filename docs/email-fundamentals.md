# Email Development Fundamentals

## Core Principles

### 1. Tables Are Essential

**ALWAYS use tables for layout, not divs**. Email clients have inconsistent support for modern CSS layout techniques.

```html
<!-- CORRECT -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td width="50%" align="center" bgcolor="#f7f9fc" style="background-color: #f7f9fc;">
      Content here
    </td>
  </tr>
</table>

<!-- WRONG - Will break in many email clients -->
<div style="width: 100%; background-color: #f7f9fc; text-align: center;">
  Content here
</div>
```

### 2. Use HTML Attributes AND CSS Properties

Many email clients (especially iOS Mail) require HTML attributes to display correctly:

```html
<!-- CORRECT - Uses both -->
<table width="100%" bgcolor="#f7f9fc" style="background-color: #f7f9fc;">

<!-- WRONG - Will break in iOS Mail -->
<table style="width: 100%; background-color: #f7f9fc;">
```

Important attributes to always include:
- `width` and `height` on tables, cells, and images
- `bgcolor` on table cells
- `border`, `cellpadding`, and `cellspacing` on tables
- `align` on table cells

### 3. Inline CSS is Critical

While you can use a `<style>` section for development, all critical CSS must be inlined before sending:

```html
<!-- CORRECT -->
<p style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333333;">
  This text will display correctly.
</p>

<!-- WRONG - May lose styling in Gmail -->
<p class="body-text">This text may lose styling.</p>
```

### 4. Email Client Conditional Code

Use conditional comments for Outlook-specific fixes:

```html
<!--[if mso]>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td align="center">
<![endif]-->
  
  <!-- Content for all clients -->
  
<!--[if mso]>
    </td>
  </tr>
</table>
<![endif]-->
```

### 5. Graceful Degradation

Start with basic, widely-supported HTML/CSS, then enhance with modern features that gracefully fall back.

## Essential Structural Requirements

### Email Container Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Email Title</title>
  <style>
    /* Styles here */
  </style>
</head>
<body style="margin: 0; padding: 0;">
  <!-- Hidden preview text -->
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    Preview text here (max 90 characters)
  </div>
  
  <!-- Email container -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td align="center">
        <!-- Main content container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px;">
          <!-- Email content here -->
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

### Images Requirements

All images MUST include:
- Explicit `width` and `height` attributes
- Descriptive `alt` text
- `border="0"` attribute (especially for linked images)
- `display: block` style to prevent unwanted spacing

```html
<img src="image.jpg" alt="Descriptive text" width="600" height="400" 
     style="display: block; max-width: 100%; height: auto;" border="0">
```

## Common Email Client Issues

### 1. iOS/Apple Mail
- Requires `bgcolor` attribute on tables
- Doesn't show background colors properly without it
- Dark mode requires special handling

### 2. Outlook (Windows)
- Uses Word rendering engine, not a browser
- Requires table-based layouts
- Doesn't support many CSS properties
- Needs MSO conditional comments

### 3. Gmail
- Clips messages larger than 102KB
- Can strip some CSS
- Web version has better support than mobile apps

### 4. General Mobile Responsiveness
- Use responsive tables that stack on mobile
- Set images to `max-width: 100%`
- Use larger touch targets on mobile
- Test at 320px width (smallest common screen)

### 5. Feature Card Mobile Centering
Feature cards require special handling for proper centering on mobile:

```css
@media only screen and (max-width: 600px) {
    .feature-card-container {
        width: 100% !important;
        display: block !important;
        text-align: center !important;
        padding-left: 0 !important; /* Remove side padding */
        padding-right: 0 !important;
        float: none !important;
    }

    .feature-card {
        margin: 0 auto 20px auto !important;
        width: 100% !important;
        max-width: 280px !important;
        display: block !important; /* Not inline-block */
        text-align: center !important;
        float: none !important;
    }
    
    /* Universal selector for child elements */
    .feature-card * {
        text-align: center !important;
    }
}
```

Key principles for reliable feature card centering:
- Remove all horizontal padding in mobile view
- Use `display: block` not `inline-block`
- Apply both `margin: 0 auto` AND `text-align: center`
- Use universal selector for child elements
- Apply `!important` flags to override inline styles
- Include `float: none` for Outlook compatibility

## Best Practices Checklist

✅ Tables for layout with proper attributes  
✅ Inline critical CSS  
✅ Max email width of 600px  
✅ Images with proper attributes  
✅ Email client conditional code  
✅ Mobile responsiveness  
✅ Dark mode considerations  
✅ Testing across multiple clients

## Common Mistakes to Avoid

❌ Using modern CSS (flexbox, grid, etc.) without fallbacks  
❌ Relying on CSS-only solutions for backgrounds  
❌ Omitting HTML attributes (width, bgcolor, etc.)  
❌ Complex CSS selectors or specificity issues  
❌ Large image assets without compression  
❌ Excessive code that increases file size  
❌ Single-pixel images for spacing (use padding/margin)  
❌ Using web fonts without fallbacks