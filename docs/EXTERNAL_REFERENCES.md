# External Email Framework References

This document provides information about external email frameworks and templates that can be used as references for our project.

## Setting Up References

To set up the reference repositories locally:

```bash
# Clone Cerberus
git clone https://github.com/TedGoas/Cerberus.git references/cerberus

# Clone Email Framework
git clone https://github.com/g13nn/Email-Framework.git references/email-framework

# Clone Simple Responsive Template
git clone https://github.com/leemunroe/responsive-html-email-template.git references/simple-responsive

# Clone Mailwind
git clone https://github.com/soheilpro/mailwind.git references/mailwind
```

## Reference Frameworks

### 1. Cerberus

**GitHub**: https://github.com/TedGoas/Cerberus

**Key Features**:
- Fluid hybrid approach (works without media queries)
- Minimal code base
- Three template variations

**Notable Components**:
- Fluid hybrid layout: `references/cerberus/cerberus-fluid.html`
- Responsive layout: `references/cerberus/cerberus-responsive.html`
- Hybrid layout: `references/cerberus/cerberus-hybrid.html`

**When to Reference**:
- When you need a lightweight, minimal approach
- For emails that need to work in older email clients
- When media query support is uncertain

### 2. Email Framework

**GitHub**: https://github.com/g13nn/Email-Framework

**Key Features**:
- Comprehensive grid system
- Extensive component library
- Well-documented code

**Notable Components**:
- Grid system: `references/email-framework/src/grid.html`
- Button styles: `references/email-framework/src/buttons.html`
- Typography: `references/email-framework/src/typography.html`

**When to Reference**:
- When you need a robust grid system
- For complex layouts with multiple columns
- When you need a variety of pre-built components

### 3. Simple Responsive Template

**GitHub**: https://github.com/leemunroe/responsive-html-email-template

**Key Features**:
- Extremely simple and clean
- Single file implementation
- Minimal CSS

**Notable Components**:
- Full template: `references/simple-responsive/email.html`

**When to Reference**:
- When you need a simple starting point
- For text-heavy emails with minimal styling
- When simplicity and reliability are priorities

### 4. Mailwind

**GitHub**: https://github.com/soheilpro/mailwind

**Key Features**:
- Tailwind CSS approach for emails
- Utility-first CSS
- Modern development workflow

**Notable Components**:
- Example templates: `references/mailwind/examples/`

**When to Reference**:
- When you're familiar with Tailwind CSS
- For a utility-first approach to email styling
- When you want to use a build process for emails

## Learning from References

When studying these references, focus on:

1. **Structure**: How they organize HTML for maximum compatibility
2. **Responsive Techniques**: Different approaches to responsive design
3. **Component Design**: How they build reusable components
4. **CSS Approaches**: Different strategies for styling emails
5. **Compatibility Solutions**: How they handle various email clients

## Incorporating Ideas

When incorporating ideas from these references:

1. **Understand First**: Make sure you understand why a technique works
2. **Test Thoroughly**: Test any borrowed techniques across email clients
3. **Document Sources**: Note where ideas came from in your code comments
4. **Maintain Consistency**: Adapt techniques to match our project's style and standards

## Additional Online Resources

Beyond the included references, these online resources are valuable:

1. **Email on Acid Blog**: https://www.emailonacid.com/blog/
2. **Litmus Blog**: https://www.litmus.com/blog/
3. **Really Good Emails**: https://reallygoodemails.com/
4. **Campaign Monitor Guides**: https://www.campaignmonitor.com/resources/guides/
5. **HTML Email**: https://htmlemail.io/blog/
