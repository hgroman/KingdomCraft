# Email Template System Master Documentation

This document serves as the central reference point for all documentation related to our email template system. It provides an overview of the system architecture and links to detailed documentation on specific topics. **Note:** For the most current operational procedures, AI onboarding, and the definitive project structure, always refer to the main `README.md` file at the project root.

## System Overview

Our email template system is **built primarily using the MJML framework (<https://mjml.io>)**. This framework allows us to write semantic, component-based markup that compiles into responsive, cross-client compatible HTML, including necessary workarounds for clients like Outlook. The core principles are now largely implemented *through* MJML:

1.  **MJML Framework**: Core template structures are defined in `.mjml` files.
2.  **Component-Based Architecture**: Utilizing MJML's standard components and a project-specific library of reusable MJML components (to be developed and documented, see main `README.md` and `work_orders/` for details).
3.  **Mobile-First Responsive Design**: Handled automatically by MJML's responsive components and grid system.
4.  **Cross-Client Compatibility**: MJML generates the complex table structures and VML needed for reliability.
5.  **Dark Mode Support**: Styles managed within MJML files via `<mj-style>` or attributes.

## Documentation Index

### Core Guides & References

- [**Project README.md**](../../README.md) - **PRIMARY ENTRY POINT.** Contains AI onboarding, current project structure, project management workflows, and core operational details.
- [**MJML Official Documentation**](https://documentation.mjml.io/) - **Primary reference** for MJML syntax, standard components, and attributes.
- [**Project Implementation Guide**](../../templates/IMPLEMENTATION_GUIDE.md) - *(To Be Updated)* How to use MJML *within this project*, including structure, compile process, and integration with the project's reusable component library and data.
- [**Email Development Fundamentals**](../reference/EmailFundamentals.md) - Essential principles for email development; useful for understanding *why* MJML generates the code it does.
- [**Email Style Guide**](./EmailStyleGuide.md) - Design standards and styling guidelines, applicable to MJML attributes and custom CSS for components.
- [**Responsive Design Guide**](./ResponsiveDesignGuide.md) - Describes general principles, now largely implemented via MJML components.
- [**Email Client Compatibility Guide**](../reference/EmailClientCompatibilityGuide.md) - Details client quirks; helpful for troubleshooting issues MJML might not perfectly address or for understanding generated code.
- [**Post-Export Outlook Fixing Guide**](./PostExportOutlookFixingGuide.md) - Relevant for manual fixes if *not* using MJML or if needing to debug specific Outlook issues post-compilation or after processing by other tools.

### Legacy Asset Archive (Historical Reference Only)
*(Note: All assets from the previous HTML-based system have been archived. They are NOT part of the current MJML workflow and are retained for historical context only. The entire legacy project, including components, templates, and documentation, can be found in the `Archive-Legacy_ARCHIVED_20250611/` directory at the project root.)*

This archive contains:
- The Handlebars.js build system.
- Legacy HTML components and templates.
- Final compiled emails.
- Pre-MJML project documentation.

For a detailed breakdown of the archived contents, please refer to the **Legacy Asset Audit Report** located at `docs/legacy_asset_audit_report.md`.

## Project Structure Overview

For the definitive and current project structure, please refer to the **`Project Structure`** section in the main [Project README.md](../../README.md). That document provides the most up-to-date layout of directories and key project management files.

(The detailed structure previously listed here has been removed to ensure the main `README.md` is the single source of truth for project organization.)

## Development Workflow (MJML-Based)

Refer to the **`Getting Started (MJML Workflow)`** and **`Standard Workflow for New Initiatives`** sections in the main [Project README.md](../../README.md) for the current development workflow. The core steps involve:

1.  **Setup**: Ensure Node.js/npm and MJML are set up.
2.  **Design/Structure**: Create or modify semantic `.mjml` files in `templates/mjml-source/`, utilizing the project's reusable MJML component library and standard MJML components.
3.  **Styling**: Apply styles using MJML attributes or `<mj-style>` within `.mjml` files, referencing the [Email Style Guide](./EmailStyleGuide.md).
4.  **Compile**: Generate HTML using `npx mjml <input.mjml> -o <output.html>`.
5.  **Populate**: (If applicable) Use established data injection workflows for the compiled HTML.
6.  **Test**: Rigorously test the compiled HTML.
7.  **Iterate**: Refine `.mjml` source and re-compile as needed.

## Testing Requirements

All templates must be tested in this order:

1. **iPhone Mail (iOS)** - Primary testing platform
2. **Gmail App (iOS)** - Secondary testing platform
3. **Outlook Mobile (iOS)** - Tertiary testing platform
4. **Desktop clients** - After mobile testing is complete

## Best Practices

*(MJML inherently supports or simplifies many of these)*

- **Table-Based Layout**: Handled automatically by MJML compilation.
- **Inline Styles**: MJML handles inlining where necessary, though `<mj-style>` is preferred for cleaner source.
- **HTML Attributes**: MJML attributes often map to necessary HTML attributes.
- **Mobile Optimization**: Core feature of MJML components.
- **Image Optimization**: Standard practice; use MJML attributes for `src`, `width`, `alt`.
- **Dark Mode Support**: Implement using MJML attributes and `<mj-style>` overrides.
- **Accessibility**: Use semantic MJML tags where possible, ensure `alt` text on images (`mj-image`).

## Production Email Guidelines

When finalizing templates:

1. **Final Testing**: Perform a complete test cycle on all target platforms
2. **Image Hosting**: Ensure all images are hosted on a reliable CDN
3. **Backup**: Always maintain a copy of the final template
4. **Documentation**: Update the changelog with details about new templates

## Changelog

For a complete history of changes to the template system, see the [CHANGELOG.md](../../CHANGELOG.md) file.
