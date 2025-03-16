# Email Template System

This directory contains a modular email template system for creating consistent, responsive email campaigns. The system is designed to be flexible, reusable, and compatible with major email clients.

## Directory Structure

```
templates/
├── layouts/
│   └── base-template.html       # Base HTML structure for all emails
├── components/
│   ├── headers/                 # Header components
│   │   ├── logo-header.html     # Simple logo header
│   │   └── gradient-banner.html # Animated gradient banner header
│   ├── content-blocks/          # Content section components
│   │   ├── text-section.html    # Basic text section with title and paragraphs
│   │   └── highlight-section.html # Gradient background section for important content
│   ├── feature-cards/           # Feature display components
│   │   └── feature-card-row.html # Two feature cards side by side
│   ├── cta-buttons/             # Call-to-action button components
│   │   ├── primary-button.html  # Primary blue gradient button
│   │   └── secondary-button.html # Secondary gold gradient button
│   └── footers/                 # Footer components
│       └── standard-footer.html # Standard footer with contact info and social links
├── campaigns/                   # Complete email campaigns
│   └── sample-product-announcement.html # Sample product announcement email
└── README.md                    # This documentation file
```

## How to Use

1. **Start with the Base Template**: Copy the base template from `layouts/base-template.html` as your starting point.

2. **Add Components**: Insert the components you need by copying their HTML into the appropriate sections of the base template.

3. **Customize Variables**: Replace placeholder variables (marked with HTML comments like `<!-- COMPANY_NAME -->`) with your actual content.

4. **Platform-Specific Adaptations**:
   - For HubSpot: Replace placeholder variables with HubSpot variables (e.g., `{{ contact.firstname }}`)
   - For Brevo: Replace placeholder variables with Brevo variables (e.g., `{{ contact.FIRSTNAME }}`)

5. **Test Thoroughly**: Always test your email in multiple email clients and devices before sending.

## Sample Campaign

The `campaigns/sample-product-announcement.html` file demonstrates how to combine various components into a complete email:

- Uses the logo header and gradient banner for branding
- Includes a text section for the main message
- Features a highlight section with a call-to-action
- Displays feature cards to showcase product benefits
- Ends with the standard footer for contact information

This sample serves as a practical example of how to structure your own campaigns using the component system.

## Component Reference

### Headers
- **Logo Header**: Simple centered logo with optional alt text
- **Gradient Banner**: Animated gradient background with title and subtitle

### Content Blocks
- **Text Section**: Basic content section with optional title and paragraphs
- **Highlight Section**: Gradient background section for important content with optional CTA button

### Feature Cards
- **Feature Card Row**: Two cards side by side, each with icon, title, and description

### CTA Buttons
- **Primary Button**: Blue gradient button for primary actions
- **Secondary Button**: Gold gradient button for secondary actions

### Footers
- **Standard Footer**: Complete footer with contact info, social links, and company details

## Best Practices

1. **Mobile-First Testing**: Always test your emails on mobile devices first
2. **Optimize Images**: Keep image file sizes small and include alt text
3. **Support Dark Mode**: Use the included dark mode styles for better user experience
4. **Keep Button Text Concise**: Avoid long button text that might wrap on mobile
5. **Avoid Spam Triggers**: Don't use words like "FREE" that might trigger spam filters
