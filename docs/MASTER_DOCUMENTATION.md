# Email Template System Master Documentation

This document serves as the central reference point for all documentation related to our email template system. It provides an overview of the system architecture and links to detailed documentation on specific topics.

## System Overview

Our email template system is built on these core principles:

1. **Mobile-First Responsive Design**: All templates are designed for mobile devices first, then enhanced for larger screens
2. **Table-Based Structure**: All layouts use nested tables for maximum email client compatibility
3. **Component-Based Architecture**: Reusable components for consistent design and easier maintenance
4. **Cross-Client Compatibility**: Tested and optimized for all major email clients
5. **Dark Mode Support**: All templates include dark mode styles for better user experience

## Documentation Index

### Core Guides

- [**Mobile-First Responsive Design Guide**](./RESPONSIVE_DESIGN_GUIDE.md) - Comprehensive guide to our mobile-first approach
- [**Email Development Fundamentals**](./email-fundamentals.md) - Essential principles for email development
- [**Email Style Guide**](./EMAIL_STYLE_GUIDE.md) - Design standards and styling guidelines
- [**Template Usage Guide**](./template-usage.md) - How to use and customize templates

### Component Documentation

- [**Feature Cards**](./components/feature-cards.md) - Implementation of feature card components
- [**Buttons**](./components/buttons.md) - Button styles and implementation
- [**Headers**](./components/header.md) - Header components and variations

### Email Client Specific Guides

- [**iOS Mail**](./client-specific/ios-mail.md) - Optimizations for Apple Mail on iOS
- [**Gmail**](./client-specific/gmail.md) - Gmail-specific considerations
- [**Outlook**](./client-specific/outlook.md) - Outlook compatibility fixes

### Content and Data

- [**Landing Page Content**](./content/Helium-Landing-Page-Content.md) - Content for landing pages
- [**Email Content**](./content/Helium-Email-Content-for-Convertsion-to-html.md) - Content for email templates
- [**Image Mapping**](./data/index%20images%20local%20to%20hubspot.csv) - Mapping of local images to HubSpot

## Project Structure

```
/
├── production/                         # Production-ready emails
│   └── emails/                         # Final email templates
│       ├── campaigns/                  # Campaign-specific emails
│       │   ├── Black-Friday-DMO-HubSpot.html  # Black Friday for HubSpot
│       │   ├── Black-Friday-DMO-Brevo.html    # Black Friday for Brevo
│       │   └── DMO-5Plus-Promo.html           # 5+ DMO promotion
│       ├── platforms/                  # Platform-specific emails
│       │   ├── Voice-Automated-HubSpot.html
│       │   └── Voice-Automated-Brevo.html
│       └── Helium-Dragon-Production.html  # Main production email
├── templates/                          # Email templates
│   ├── layouts/                        # Base layouts
│   ├── components/                     # Reusable components
│   │   ├── headers/                    # Header components
│   │   ├── content-blocks/             # Content section components
│   │   ├── feature-cards/              # Feature card components
│   │   ├── cta-buttons/                # Call-to-action button components
│   │   └── footers/                    # Footer components
│   ├── campaigns/                      # Complete email campaigns
│   │   ├── sample-product-announcement.html # Sample campaign
│   │   ├── seasonal/                   # Seasonal campaigns
│   │   │   └── Black-Friday-DMO.html   # Black Friday template
│   │   └── promotional/                # Promotional campaigns
│   │       └── DMO-5Plus-Promo.html    # 5+ DMO promotion template
│   └── starters/                       # Starter templates
│       └── EMAIL_TEMPLATE_STARTER.html # Basic starter template
├── docs/                               # Documentation
│   ├── MASTER_DOCUMENTATION.md         # This file
│   ├── RESPONSIVE_DESIGN_GUIDE.md      # Mobile-first design guide
│   ├── EMAIL_STYLE_GUIDE.md            # Style standards
│   ├── email-fundamentals.md           # Core principles
│   ├── template-usage.md               # Usage instructions
│   ├── components/                     # Component docs
│   ├── client-specific/                # Email client docs
│   ├── content/                        # Content documentation
│   └── data/                           # Data files
├── assets/                             # Image assets
│   └── email-images/                   # Email-specific images
└── CHANGELOG.md                        # Record of changes
```

## Email Types and Categories

### Campaign Emails

Campaign emails are time-sensitive promotional emails designed for specific marketing campaigns:

1. **Seasonal Campaigns**:
   - Black Friday promotions
   - Holiday specials
   - End-of-year offers

2. **Promotional Campaigns**:
   - Product promotions (e.g., DMO 5+ user promotion)
   - Limited-time offers
   - Special discounts

### Platform-Specific Emails

These emails are optimized for specific email marketing platforms:

1. **HubSpot Emails**:
   - Use HubSpot-specific variables (e.g., `{{ contact.firstname }}`)
   - Implement HubSpot-specific unsubscribe links
   - Use HubSpot's image hosting

2. **Brevo Emails**:
   - Use Brevo-specific variables (e.g., `{{ contact.FIRSTNAME }}`)
   - Implement Brevo-specific unsubscribe mechanisms
   - Use Brevo's personalization tokens

## Development Workflow

1. **Start with Mobile Design**: Begin by designing for 320px width (iPhone SE)
2. **Use Base Templates**: Start with existing templates in `templates/layouts/` or `templates/starters/`
3. **Add Components**: Insert components from `templates/components/`
4. **Customize Content**: Replace placeholder content with actual content
5. **Test Thoroughly**: Test on mobile devices first, then desktop clients
6. **Production Deployment**: When finalized, move to appropriate folder in `production/emails/` folder:
   - Campaign emails go in `production/emails/campaigns/`
   - Platform-specific emails go in `production/emails/platforms/`
   - General emails go in `production/emails/`

## Testing Requirements

All templates must be tested in this order:

1. **iPhone Mail (iOS)** - Primary testing platform
2. **Gmail App (iOS)** - Secondary testing platform
3. **Outlook Mobile (iOS)** - Tertiary testing platform
4. **Desktop clients** - After mobile testing is complete

## Best Practices

- **Table-Based Layout**: Always use tables for structure
- **Inline Styles**: Use inline styles for critical CSS
- **HTML Attributes**: Include HTML attributes like `width`, `bgcolor`, and `align`
- **Mobile Optimization**: Ensure all templates are fully responsive
- **Image Optimization**: Keep images under 200KB and include alt text
- **Dark Mode Support**: Include dark mode styles for all templates
- **Accessibility**: Maintain good contrast and include alt text for images

## Production Email Guidelines

When moving templates to production:

1. **Final Testing**: Perform a complete test cycle on all target platforms
2. **Image Hosting**: Ensure all images are hosted on a reliable CDN
3. **Platform Adaptations**: Make necessary adjustments for specific email platforms:
   - HubSpot: Use HubSpot-specific variables and image hosting
   - Brevo: Use Brevo-specific variables and personalization tokens
4. **Backup**: Always maintain a copy of the final production email in the repository
5. **Documentation**: Update the changelog with details about the production release
6. **Naming Convention**: Use clear, descriptive names for production emails:
   - `[Campaign-Type]-[Platform].html` (e.g., `Black-Friday-DMO-HubSpot.html`)
   - `[Promotion-Type]-[Feature].html` (e.g., `DMO-5Plus-Promo.html`)

## Changelog

For a complete history of changes to the template system, see the [CHANGELOG.md](../CHANGELOG.md) file.

## Support and Maintenance

For questions or issues with the template system, contact the development team at [email@example.com](mailto:email@example.com).
