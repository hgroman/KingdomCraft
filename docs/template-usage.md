# Template Usage Guide

## Base Template

The base template (`templates/base/base-template.html`) provides the foundation for all email templates. It includes:

- Responsive layout
- Common styles
- Header and footer sections
- Email client compatibility

### Template Blocks

1. `title`: Page title
2. `styles`: Template-specific styles
3. `header`: Header content
4. `content`: Main content
5. `footer`: Footer content

## Creating a New Template

1. Create a new HTML file in the appropriate directory:
   - Promotional emails: `templates/promotional/`
   - Transactional emails: `templates/transactional/`

2. Extend the base template:
   ```html
   {% extends "../base/base-template.html" %}
   ```

3. Override necessary blocks:
   ```html
   {% block content %}
   <!-- Your content here -->
   {% endblock %}
   ```

## Style Guidelines

1. Use the shared styles from `styles/main.css`
2. Add template-specific styles in the `styles` block
3. Use table-based layouts for email compatibility
4. Keep images under 600px width

## Testing

1. Browser Testing:
   - Chrome
   - Firefox
   - Safari

2. Email Client Testing:
   - Outlook
   - Gmail
   - Apple Mail

## Deployment

1. Inline CSS styles
2. Replace template tags
3. Test final version
4. Deploy to email marketing platform

## Best Practices

1. Mobile-First Design
   - Use responsive breakpoints
   - Test on various screen sizes

2. Accessibility
   - Include alt text for images
   - Use semantic HTML
   - Maintain good contrast ratios

3. Performance
   - Optimize images
   - Minimize CSS
   - Keep file sizes small

4. Email Client Compatibility
   - Use tables for layout
   - Include fallback fonts
   - Test across clients
