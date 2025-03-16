# Email Template Documentation

## Base Structure Components

### 1. Header Section
- Meta tags and viewport settings
- Core styling with responsive breakpoints
- Font definitions (Inter, Loto)

### 2. Core CSS Components
```css
/* These are the reusable style blocks */

.container {
    width: 100%;
    max-width: 600px;  /* Email-safe width */
    margin: 0 auto;
}

.section-base {
    /* Common section styling */
    padding: 25px 0px;
    background-color: #ffffff;
}

.btn-primary {
    /* Standard button styling */
    padding: 10px 30px;
    background-color: #2490eb;
    color: #fff;
}
```

### 3. Modular Sections

#### Logo Section (section-1)
- Purpose: Company branding
- Table-based layout for email client compatibility
- Responsive image handling

#### Content Sections (section-2, section-3)
- Curved top border radius option
- Background color variations
- Responsive text sizing
- Stackable columns for mobile

#### Call-to-Action Section
- Button styling
- Mobile-responsive padding
- Background color options

#### Footer Section
- Company information
- Contact details
- Social links (optional)

## Responsive Breakpoints

### Mobile (<576px)
- Font size adjustments
- Stack columns
- Adjusted padding
- Full-width buttons

### Small Tablets (<768px)
- Modified spacing
- Adjusted image sizes

### Desktop (>992px)
- Maximum content width
- Optimal spacing

## Email Client Compatibility

### Microsoft Outlook
```html
<!--[if mso]>
    /* Special handling for Outlook */
<![endif]-->
```

### Best Practices
1. Always use table-based layouts
2. Keep images under 600px width
3. Use inline styles for critical elements
4. Include fallback fonts
5. Test across multiple email clients

## Usage Instructions

1. Start with the base template
2. Choose needed modular sections
3. Customize colors and branding
4. Add content
5. Test responsiveness
6. Validate email client compatibility
