# Voice Automated Email Template System

## Quick Start Guide

1. **Production Email Templates**:
   - **Campaign Emails**:
     - `production/emails/campaigns/Black-Friday-DMO-HubSpot.html` - Black Friday promotion for HubSpot
     - `production/emails/campaigns/Black-Friday-DMO-Brevo.html` - Black Friday promotion for Brevo
     - `production/emails/campaigns/DMO-5Plus-Promo.html` - 5+ DMO accounts promotion
     - `production/emails/campaigns/Dragon-Copilot-Mac.html` - Dragon Copilot for Mac
   - **General Emails**:
     - `production/emails/Helium-Dragon-Production.html` - Production-ready Dragon email

2. **Sample Templates**:
   - **Campaign Templates**:
     - `templates/campaigns/sample-product-announcement.html` - Sample product announcement
     - `templates/campaigns/seasonal/Black-Friday-DMO.html` - Black Friday template
     - `templates/campaigns/promotional/DMO-5Plus-Promo.html` - 5+ DMO promotion template
     - `templates/campaigns/Dragon-Copilot-Mac.html` - Dragon Copilot for Mac template
   - **Starter Templates**:
     - `templates/starters/EMAIL_TEMPLATE_STARTER.html` - Basic starter template

3. **Documentation**: Find comprehensive documentation in the `/docs` folder:
   - [Master Documentation](./docs/MASTER_DOCUMENTATION.md) - Central reference for all documentation
   - [Mobile-First Responsive Design Guide](./docs/RESPONSIVE_DESIGN_GUIDE.md) - Our mobile-first approach
   - [Email Style Guide](./docs/EMAIL_STYLE_GUIDE.md) - Design standards

4. **Making Changes**: Always create a backup before modifying templates

5. **Testing**: Test thoroughly on mobile devices first, then desktop clients

## Project Structure

```
/
├── production/                         # Production-ready emails
│   └── emails/                         # Final email templates
│       ├── campaigns/                  # Campaign-specific emails
│       │   ├── Black-Friday-DMO-HubSpot.html  # Black Friday for HubSpot
│       │   ├── Black-Friday-DMO-Brevo.html    # Black Friday for Brevo
│       │   ├── DMO-5Plus-Promo.html           # 5+ DMO promotion
│       │   └── Dragon-Copilot-Mac.html        # Dragon Copilot for Mac
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
│   │   ├── promotional/                # Promotional campaigns
│   │   │   └── DMO-5Plus-Promo.html    # 5+ DMO promotion template
│   │   └── Dragon-Copilot-Mac.html     # Dragon Copilot for Mac template
│   └── starters/                       # Starter templates
│       └── EMAIL_TEMPLATE_STARTER.html # Basic starter template
├── docs/                               # Documentation
│   ├── MASTER_DOCUMENTATION.md         # Central documentation reference
│   ├── RESPONSIVE_DESIGN_GUIDE.md      # Mobile-first design guide
│   ├── EMAIL_STYLE_GUIDE.md            # Style standards
│   ├── email-fundamentals.md           # Core principles
│   ├── components/                     # Component docs
│   ├── client-specific/                # Email client docs
│   ├── content/                        # Content documentation
│   └── data/                           # Data files
├── assets/                             # Image assets
│   └── email-images/                   # Email-specific images
└── CHANGELOG.md                        # Record of changes
```

## Core Development Principles

### Mobile-First Responsive Design

All templates are built with a mobile-first approach:

1. **Start with Mobile**: Design for 320px width first
2. **Table-Based Structure**: Use nested tables for layout
3. **Responsive Breakpoints**: Primary breakpoint at 600px, secondary at 375px
4. **Equal Height Components**: Feature cards maintain equal heights within rows
5. **Dark Mode Support**: All templates include dark mode styles

### Email Client Compatibility

Our templates are tested and optimized for:

- **iOS Mail** (primary testing platform)
- **Gmail** (web and mobile apps)
- **Outlook** (desktop and mobile)
- Other major email clients

## Working with Templates

### Creating New Emails

1. Start with a base template from `templates/layouts/` or `templates/starters/`
2. Add components from `templates/components/`
3. Customize content and styling as needed
4. Test thoroughly on mobile devices first
5. When finalized, move to appropriate folder in `production/emails/` folder:
   - Campaign emails go in `production/emails/campaigns/`
   - General emails go in `production/emails/`

### Testing Process

1. Test on iPhone Mail (iOS) first
2. Test on Gmail App (iOS)
3. Test on Outlook Mobile (iOS)
4. Test on desktop clients

## Documentation

For detailed information, see the following guides:

- [**Master Documentation**](./docs/MASTER_DOCUMENTATION.md) - Central reference for all documentation
- [**Mobile-First Responsive Design Guide**](./docs/RESPONSIVE_DESIGN_GUIDE.md) - Our mobile-first approach
- [**Email Development Fundamentals**](./docs/email-fundamentals.md) - Essential principles
- [**Email Style Guide**](./docs/EMAIL_STYLE_GUIDE.md) - Design standards
- [**Component Documentation**](./docs/components/) - Component-specific guides
- [**Email Client Guides**](./docs/client-specific/) - Client-specific optimizations
- [**External References**](./docs/EXTERNAL_REFERENCES.md) - Information about external email frameworks

## External References

This project includes references to other email frameworks for inspiration and best practices. These references are stored in the `references/` directory but are not tracked in Git.

To set up these references, see the instructions in [External References](./docs/EXTERNAL_REFERENCES.md).

Key reference frameworks include:
- **Cerberus** - Responsive email patterns with minimal code
- **Email Framework** - A modular email system
- **Simple Responsive Template** - A clean, simple responsive template
- **Mailwind** - Tailwind CSS for emails

## License

All rights reserved. For internal use only.
