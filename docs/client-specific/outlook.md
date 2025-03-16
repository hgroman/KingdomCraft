# Outlook Email Client Compatibility Guide

## Understanding Outlook's Rendering Engine

Outlook for Windows (2007-2019, Office 365) uses Microsoft Word's rendering engine to display emails, not a standard browser engine. This creates significant rendering challenges:

- Limited CSS support
- No support for many modern features
- Requires special handling for basic layout

## Critical Outlook Fixes

### 1. VML for Backgrounds and Rounded Corners

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

### 2. Rounded Buttons Using VML

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

### 3. Table-Based Layouts

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

### 4. MSO Line-Height Fix

Outlook has inconsistent line-height rendering. Use this special property:

```html
<p style="line-height:20px; mso-line-height-rule:exactly;">
    This text will have consistent line height in Outlook.
</p>
```

### 5. Image Rendering Fixes

Outlook can resize images incorrectly. Use explicit dimensions and alt text:

```html
<img src="image.jpg" width="600" height="300" alt="Description" style="display: block; width: 100%; max-width: 600px; height: auto;" border="0">
```

### 6. "Ghost" Table Fix for Spacing

Outlook ignores many margin/padding settings. Use empty cells for spacing:

```html
<!-- Add vertical spacing -->
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td height="20" style="font-size:0; line-height:0;">&nbsp;</td>
    </tr>
</table>
```

## Common Outlook Issues and Solutions

### 1. Outlook Ignores Max-Width

Solution: Use a container table with fixed width

```html
<!-- Wrapper table for Outlook -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center">
    <tr>
        <td>
            <!-- Fluid content for other clients -->
            <div style="max-width: 600px; margin: 0 auto;">
                <!-- Email content -->
            </div>
        </td>
    </tr>
</table>
```

### 2. Outlook Shows Empty Lines in Tables

Solution: Add style to TDs

```html
<td style="line-height: 0; font-size: 0;">
    <img src="image.jpg" width="600" height="300" alt="Description" style="display: block;" border="0">
</td>
```

### 3. Unwanted Spacing Around Images

Solution: Use display:block and proper nesting in tables

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td style="font-size: 0; line-height: 0;">
            <img src="image.jpg" width="600" height="300" alt="Description" style="display: block;" border="0">
        </td>
    </tr>
</table>
```

### 4. Outlook Adds Padding to Tables

Solution: Set specific cell padding

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
    <!-- Table content -->
</table>
```

### 5. Blue Links and Text Box Issues

Solution: Define color and remove auto-formatting

```html
<style>
    <!--[if mso]>
    <style type="text/css">
        .body-text a {
            color: #2490eb;
            text-decoration: underline;
            font-weight: bold;
        }
    </style>
    <![endif]-->
</style>
```

## Outlook-Specific Stylesheets

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

## Targeting Specific Outlook Versions

```html
<!--[if mso 12]>
    <style> /* Outlook 2007 specific styles */ </style>
<![endif]-->

<!--[if mso 14]>
    <style> /* Outlook 2010 specific styles */ </style>
<![endif]-->

<!--[if mso 15]>
    <style> /* Outlook 2013 specific styles */ </style>
<![endif]-->

<!--[if mso 16]>
    <style> /* Outlook 2016+ specific styles */ </style>
<![endif]-->
```

## Testing for Outlook

Always test your emails in:
1. Outlook 2013/2016 Desktop
2. Outlook 365 Desktop
3. Outlook.com (web version)
4. Outlook Mobile apps

## Outlook Compatibility Checklist

✅ Use tables for layout structure  
✅ Add VML for backgrounds and rounded elements  
✅ Use MSO-specific line height rules  
✅ Test all buttons with VML fallbacks  
✅ Fix image rendering with explicit dimensions  
✅ Implement ghost tables for spacing  
✅ Add Outlook-specific CSS overrides  
✅ Test all interactive elements