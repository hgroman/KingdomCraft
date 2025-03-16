# Email Development Checklist

This checklist should be used at each stage of email development to ensure cross-client compatibility and responsive design best practices.

## Initial Setup

- [ ] Started with table-based layout using proper attributes (`role="presentation"`, `cellpadding="0"`, `cellspacing="0"`, `border="0"`)
- [ ] Added viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)
- [ ] Set up basic structure with MSO conditional comments for Outlook
- [ ] Created hidden preview text (first 90 characters)
- [ ] Defined base font styles with fallbacks
- [ ] Established max-width container (600px)

## HTML Development

- [ ] All tables include proper attributes (`role="presentation"`, `cellpadding="0"`, `cellspacing="0"`, `border="0"`)
- [ ] All HTML elements have explicit width attributes
- [ ] All images have:
  - [ ] Alt text
  - [ ] Width and height attributes
  - [ ] `display: block` style
  - [ ] `border="0"` if linked
- [ ] All links have:
  - [ ] Tracking parameters if needed
  - [ ] Target attributes
  - [ ] Meaningful text (not "click here")
- [ ] No HTML deprecated elements or attributes
- [ ] All font sizes specified in px (not em, rem, or %)

## CSS Implementation

- [ ] All critical styles are inlined
- [ ] Media queries are properly nested in `<style>` tags
- [ ] All media query styles include `!important` flag
- [ ] Mobile styles account for 600px and 375px breakpoints
- [ ] No CSS shorthand properties for Outlook compatibility
- [ ] No unsupported CSS (flexbox, grid, etc.) without fallbacks
- [ ] Box model properties (margin, padding) applied consistently

## Responsive Design

- [ ] Multiple columns stack on mobile
- [ ] Fonts increase appropriately on mobile
- [ ] Buttons expand to full width on mobile
- [ ] Touch targets are at least 44×44px on mobile
- [ ] Padding reduces appropriately on smaller screens
- [ ] Images scale properly with `max-width: 100%`
- [ ] Spacing adjusts appropriately between elements
- [ ] Feature cards are properly centered on mobile devices:
  - [ ] Using `display: block` (not inline-block)
  - [ ] With `margin: 0 auto` AND `text-align: center`
  - [ ] Applying universal selector (`.feature-card *`) for child elements
  - [ ] Removing left/right padding in mobile view
  - [ ] Adding `float: none` for Outlook compatibility

## Outlook-Specific Fixes

- [ ] MSO conditional comments for Outlook-specific styles
- [ ] Table-based layouts for complex structures
- [ ] VML for background images if used
- [ ] Line height specified with `mso-line-height-rule: exactly;`
- [ ] Spacing issues fixed with ghost tables or cells
- [ ] No margin on paragraph elements (use padding on container)

## Gmail Compatibility

- [ ] Email size under 102KB to prevent clipping
- [ ] No heavy use of embedded CSS
- [ ] No base64 encoded images
- [ ] Web-safe fonts with appropriate fallbacks
- [ ] No reliance on CSS that Gmail might strip

## Apple Mail/iOS Compatibility

- [ ] Dark mode tested and properly fixed:
  - [ ] Comprehensive dark mode media query implemented
  - [ ] Attribute selectors used to target specific elements
  - [ ] Container classes added to main table structure
  - [ ] Gradient backgrounds have solid color fallbacks
  - [ ] Text remains visible on all background colors
- [ ] High-resolution images for retina displays
- [ ] Proper text contrast in all color schemes

## Content Quality

- [ ] Spell-checked all content
- [ ] Grammar reviewed
- [ ] All links tested and working
- [ ] Preview text optimized (90 characters)
- [ ] Alt text for all images is meaningful and descriptive

## Accessibility

- [ ] Color contrast meets WCAG 2.1 AA standards (4.5:1)
- [ ] Text size minimum 14px on mobile devices
- [ ] Proper heading structure
- [ ] All images have meaningful alt text
- [ ] Tables use appropriate role attributes
- [ ] Link text is descriptive

## Performance

- [ ] Images optimized and compressed
- [ ] Total email size under 102KB
- [ ] Total image payload under 1MB
- [ ] No unnecessary code or comments
- [ ] Minimal use of web fonts

## Testing Plan

- [ ] Outlook Desktop (2013, 2016, Office 365)
- [ ] Outlook.com
- [ ] Gmail (Web)
- [ ] Gmail (iOS)
- [ ] Gmail (Android)
- [ ] Apple Mail (iOS)
- [ ] Apple Mail (macOS)
- [ ] Samsung Mail
- [ ] Yahoo Mail
- [ ] Mobile view at 320px width
- [ ] Desktop view at 600px+ width
- [ ] Images disabled view

## Final Verification

- [ ] All links work and have tracking parameters if needed
- [ ] All images load properly
- [ ] Email renders correctly in all test clients
- [ ] Email displays properly with images disabled
- [ ] All content is legible and accessible
- [ ] Call to action is clear and prominent
- [ ] Email size is under 102KB

---

## Client-Specific Quirks Reference

### Outlook (Windows)
- Uses Microsoft Word rendering engine
- Poor support for background images (use VML)
- No support for CSS Grid or Flexbox
- Limited support for CSS float
- Requires tables for layout

### Gmail
- Clips messages larger than 102KB
- Strips some CSS (particularly in `<head>`)
- Limited support for embedded styles
- Converts some CSS to inline styles
- Removes some HTML attributes

### Yahoo Mail
- Similar to Gmail, strips some CSS
- Inconsistent support for media queries
- May add its own padding to elements

### Outlook.com
- Better than desktop Outlook, but still problematic
- Inconsistent CSS support
- Strips some CSS properties

### Apple Mail
- Best CSS support of all clients
- Supports most modern CSS
- Dark mode can cause issues with colors

### Mobile Clients
- Vary widely in CSS support
- Often have width constraints
- Touch targets need to be larger
