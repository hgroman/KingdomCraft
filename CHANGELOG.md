# Changelog

All notable changes to the email template system will be documented in this file.

## [1.0.3] - 2025-03-16

### Changed
- Removed platforms directory to eliminate duplicate email templates
- Simplified project structure by consolidating all email templates in the campaigns directory

## [1.0.2] - 2025-03-16

### Changed
- Consolidated multiple Dragon Copilot email files into a single Dragon-Copilot-Mac.html
- Removed redundant files (Dragon-Copilot.html and duplicate versions)
- Kept the fixed version without template tags as the canonical version

## [1.0.1] - 2025-03-16

### Changed
- Removed dedicated mac-compatibility folders since all emails should be Mac compatible by default
- Moved Dragon-Copilot.html from mac-compatibility folders to parent directories
- Renamed to Dragon-Copilot-Mac.html for clarity
- Updated README.md to reflect new file structure

## [1.0.0] - 2025-03-14

### Added
- Created new documentation structure with clear separation of concerns
- Comprehensive email-fundamentals.md with best practices
- Component-specific documentation for header, buttons, and feature cards
- Client-specific guides for Outlook, Gmail, and iOS Mail

### Changed
- Reorganized all documentation for better clarity and usability
- Moved old documentation to docs/archive/ folder
- Updated README.md with new project structure and quick start information

### Fixed
- Clarified iOS Mail background color requirements
- Provided proper table-based implementations for all components
- Added explicit VML code for Outlook compatibility

## [0.2.0] - 2025-03-13

### Added
- Enhanced header component with gradient background
- Animated feature highlight cards
- Special promotional badge element
- Interactive button styles with hover effects

### Changed
- Updated color scheme to use CSS variables
- Improved responsive behavior on mobile devices
- Enhanced typography with better hierarchy

### Fixed
- Spacing issues in Gmail rendering
- Background color display on iOS devices
- Button alignment in Outlook

## [0.1.0] - 2025-03-10

### Added
- Initial template structure
- Basic responsive design
- Foundational styles and components
