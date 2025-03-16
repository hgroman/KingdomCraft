# Quick Start Guide 🚀

## Opening in Windsurf

1. **Open the Workspace**:
   - Open Windsurf
   - File > Open Workspace from File...
   - Select `voice-automated-email.windsurf-workspace`

2. **Workspace Features**:
   - Optimized dark theme for email template editing
   - Pre-configured HTML/CSS formatting
   - Automatic file associations
   - Quick access to common files

## Common Scenarios

### 1. "I need to modify the DMO promotion email"
```bash
1. Open: templates/promotional/dmo-promo.html
2. Make your changes
3. Test in browser before sending
```

### 2. "I need to create a new email template"
```bash
1. Copy templates/base/base-template.html to your new location
2. Modify the content blocks as needed
3. Add any custom styles
```

### 3. "I need to update shared styles"
```bash
1. Open: styles/main.css
2. Add or modify styles
3. Test across all templates
```

## File Locations Quick Reference

### Templates
- Base Template: `templates/base/base-template.html`
- DMO Promo: `templates/promotional/dmo-promo.html`
- New Templates: Create in `templates/promotional/` or `templates/transactional/`

### Styles
- Main CSS: `styles/main.css`
- Template-specific styles: Add within template files

### Documentation
- Usage Guide: `docs/template-usage.md`
- Project Overview: `README.md`

## Need More Help?

1. Check `docs/template-usage.md` for detailed instructions
2. Review the example templates in `examples/`
3. Contact Henry@voiceautomated.com

## Remember!
- Always test emails in multiple clients
- Keep mobile responsiveness in mind
- Don't modify the base template directly
