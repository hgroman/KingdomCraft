# Dragon Email Design System

## Purpose
This design system provides a comprehensive visual framework for creating professional healthcare-oriented email communications. It is specifically designed for Dragon product announcements and communications, with emphasis on clarity, professionalism, and engagement. Use this guide when creating emails that need to maintain brand consistency while delivering important healthcare technology information.

## Voice Automated Brand Elements

### Logo Implementation
- **Primary Logo**: Use the Voice Automated logo (va-logo.png) in the header section
- **Size**: 180px width maximum with proportional height
- **Placement**: Centered in header with 25px margin below
- **Footer Usage**: Smaller version (150px) can be used above tagline

```html
<img src="{{ get_asset_url('/Zorica/images/va-logo.png') }}" alt="Voice Automated Logo" class="logo">
```

```css
.logo {
    max-width: 180px;
    height: auto;
    margin-bottom: 25px;
    transition: var(--transition);
}
```

### Preview Text Implementation
The preview text is critical for email open rates and should be properly configured for all email clients.

```html
<div id="preview_text" style="display:none;font-size:1px;color:#f7f9fc;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    Dragon Copilot now works with Mac! Access AI-powered clinical documentation from your preferred device with our new cloud-based solution.
</div>
```

**Guidelines for Preview Text:**
- Keep between 85-100 characters
- Highlight key value proposition
- Avoid repetition of subject line
- Include a call to action if possible
- Place immediately after opening body tag

### Social Media Implementation
Voice Automated social media links must be included in the footer with the following format:

```html
<div class="social-links">
    <a href="https://www.facebook.com/voiceautomated" class="social-link" aria-label="Facebook">
        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="Facebook">
    </a>
    <a href="https://www.linkedin.com/company/741789/" class="social-link" aria-label="LinkedIn">
        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="LinkedIn">
    </a>
    <a href="https://twitter.com/voiceautomated" class="social-link" aria-label="Twitter">
        <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="Twitter">
    </a>
</div>
```

```css
.social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 30px 0;
    width: 100%;
}

.social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    transition: var(--transition);
}

.social-link:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
}

.social-link img {
    width: 22px;
    height: 22px;
    filter: brightness(0) invert(1);
}
```

### Call to Action Button
Voice Automated CTAs follow these specific guidelines:

```html
<div class="cta-container">
    <a href="https://signup.voiceautomated.com/dragon-medical-one-trial-sign-up-2-0-0?_hsmi=185928410&utm_content=185928410&utm_campaign=NuanceNewCollatImproveTelehealthExperience&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8Sw0G9R_5Izrg4IlDsyFC32u2vMosGrTkeMYTK8mPD3Mp2YPs9j-gLdNc_4_1JgcZLuWGp" class="cta-button">Start Your Free Dragon Copilot Trial</a>
</div>
```

**Important CTA Guidelines:**
- Always include UTM parameters as shown above
- Use action-oriented verbs (Start, Get, Try, etc.)
- Make button text no longer than 5-7 words
- Include HubSpot tracking parameters

### CAN-SPAM Act Compliance Elements

To ensure HubSpot and legal compliance, every email must include:

1. **Physical Address**: Complete company address in footer
2. **Unsubscribe Link**: Properly formatted using HubSpot merge tags
3. **Company Information**: Legal company name

```html
<div id="company-details">
    <p><a class="hubspot-mergetag" style="text-decoration: underline; color: #ffffff;" href="{{ unsubscribe_link }}" data-unsubscribe="true">Manage your email preferences</a></p>
    <p>{{ site_settings.company_name }} | {{ site_settings.company_street_address_1 }} | {{ site_settings.company_city }} {{ site_settings.company_state }} {{ site_settings.company_zip }} {{ site_settings.company_country }}</p>
</div>
```

```css
#company-details {
    margin-top: 25px;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    max-width: 500px;
    text-align: center;
}

#company-details a {
    color: var(--white);
    font-weight: 500;
    text-decoration: underline;
    transition: var(--transition);
    display: inline-block;
}

#company-details p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    margin-bottom: 10px;
    line-height: 1.5;
    text-align: center;
}
```

**Legal Requirements Checklist:**
- [ ] Physical mailing address included
- [ ] Unsubscribe mechanism clearly visible
- [ ] "Email sent by" or equivalent statement
- [ ] Privacy policy link
- [ ] Valid from-name and from-email
- [ ] No deceptive subject lines

## How To Use This Guide

If you are asked to create or modify an email design based on this system, follow these steps:

1. **Analyze the content** to determine which components are needed
2. **Structure the layout** following the container specifications
3. **Apply the visual elements** consistently across all sections
4. **Implement responsive considerations** for mobile devices
5. **Verify alignment** with the design principles outlined below

## 🎨 Visual Language Overview

This design system creates a professional, modern healthcare communication experience with clean layouts, subtle gradients, and thoughtful interactive elements. The visual language balances clinical precision with approachable design.

---

## 📐 Layout Architecture

### Container Structure
- **Main Container**: 600px max-width with rounded corners (8px radius)
- **White background** with subtle shadow for depth
- **Section Padding**: 30px horizontal, 25-40px vertical depending on section importance

### Visual Hierarchy
```
┌────────────────────────────┐
│         HEADER             │ ← Gradient background + brand elements
├────────────────────────────┤
│                            │
│         CONTENT            │ ← White space with strategic sections
│                            │
├────────────────────────────┤
│         FOOTER             │ ← Brand gradient background
└────────────────────────────┘
```

### Enhanced Header Design

The enhanced header design adds visual interest and professionalism to email communications with subtle animation, gradients, and layered visual elements.

#### Design Specification
- **Gradient Background**: Multi-directional gradient using brand colors
- **Decorative Elements**: Subtle SVG patterns and highlights
- **Animation**: Gentle light sweep effect that draws attention
- **Text Treatment**: Text shadow for improved contrast
- **Visual Depth**: Border accents and box shadows for dimension

#### HTML Example
```html
<header>
    <!-- Logo on white background -->
    <div class="header-top">
        <img src="{{ get_asset_url('/Zorica/images/va-logo.png') }}" alt="Voice Automated Logo" class="logo">
    </div>

    <!-- Main heading on blue background -->
    <div class="header-main">
        <div class="light-effect"></div>
        <h1 class="header-title">DRAGON MEDICAL ONE</h1>
        <p class="header-subtitle">Now Built Natively for Mac</p>
    </div>
</header>
```

#### CSS Implementation
```css
/* White section with logo */
.header-top {
    background-color: var(--white);
    padding: 25px 20px;
    text-align: center;
}

.logo {
    max-width: 180px;
    height: auto;
}

/* Blue section with main heading */
.header-main {
    background: linear-gradient(135deg, var(--primary-color) 0%, #1a5ca3 50%, var(--primary-color) 100%);
    padding: 40px 20px 50px; /* Extra padding at bottom to compensate for curved edge */
    text-align: center;
    border-radius: 0 0 30px 30px; /* Curved bottom edge */
    position: relative;
    box-shadow: 0 10px 20px rgba(20, 70, 123, 0.15);
    overflow: hidden;
    border-bottom: 5px solid var(--primary-light);
}

/* Add decorative elements to make the header more visually interesting */
.header-main::before {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
}

.header-main::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-size: 130px 130px;
    opacity: 0.7;
    pointer-events: none;
}

/* Create dynamic light effect on top */
.header-main .light-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.1) 50%,
        rgba(255,255,255,0) 100%);
    animation: shine 5s infinite;
    pointer-events: none;
}

@keyframes shine {
    0% { transform: translateX(0); }
    100% { transform: translateX(200%); }
}

.header-title {
    color: var(--white);
    font-size: 42px;
    font-weight: 900;
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

.header-subtitle {
    font-size: 26px;
    font-weight: 400;
    margin-top: 12px;
    margin-bottom: 0;
    color: var(--white);
    position: relative;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

#### When to Use
- For campaign hero sections where you want to create visual impact
- When the email needs a modern, polished appearance
- For promotions, new product announcements, and premium communications

### Curved Section Transitions

Curved section transitions create smooth visual flow between content areas, adding a modern and sophisticated look to email communications.

#### Design Specification
- **Top/Bottom Rounding**: 60px border radius on top or bottom edges
- **Z-index Control**: Proper stacking for overlapping elements
- **Color Contrast**: Distinct background colors between sections
- **Responsive Behavior**: Maintained curves across devices

#### HTML Example
```html
<div class="curved-section-container">
    <div class="curved-section blue-section">
        <h2>Special Offer</h2>
        <p>Limited time discount on Dragon Medical One</p>
    </div>

    <div class="curved-section white-section">
        <h2>Product Benefits</h2>
        <p>See how Dragon Medical One can help your practice</p>
    </div>
</div>
```

#### CSS Implementation
```css
.curved-section-container {
    position: relative;
    width: 100%;
}

.curved-section {
    position: relative;
    padding: 40px 20px;
    z-index: 1;
}

.blue-section {
    background-color: var(--primary-color);
    color: white;
}

.white-section {
    background-color: white;
    border-radius: 60px 60px 0 0;
    margin-top: -30px; /* Create overlap */
}
```

#### Real-World Example from Promotional Email
```html
<div style="background-color: #e7f0fb;">
    <div
        class="offer-ends-soon"
        style="
            margin-top: -86px;
            background-color: #14467b;
            padding: 40px 20px 30px;
            position: relative;
            z-index: 1;
            border-radius: 60px 60px 0px 0px;
        "
    >
        <table class="table-wrapper" cellpadding="0" cellspacing="0">
            <!-- Content here -->
        </table>
    </div>
</div>
```

### Overlapping Sections

Creating depth and visual interest through intentionally overlapping content sections.

#### Design Specification
- **Negative Margins**: Use negative margins to pull sections into each other
- **Z-index Control**: Higher z-index for sections that should appear on top
- **Compatible Colors**: Use colors that work well when overlapping
- **Shadow Effects**: Add shadow to top element for depth perception

#### HTML Example
```html
<div class="section-container">
    <div class="top-section">
        <h2>Dragon Medical One</h2>
        <p>Cloud-based clinical speech recognition</p>
    </div>

    <div class="overlapping-section">
        <h3>Special Offer</h3>
        <p>Limited time pricing available now</p>
    </div>
</div>
```

#### CSS Implementation
```css
.section-container {
    position: relative;
    width: 100%;
}

.top-section {
    background-color: var(--primary-color);
    color: white;
    padding: 40px 20px 60px; /* Extra padding at bottom for overlap */
    border-radius: 0 0 30px 30px;
    position: relative;
    z-index: 1;
}

.overlapping-section {
    background-color: white;
    padding: 30px 20px;
    border-radius: 20px;
    margin-top: -40px; /* Pull up to overlap */
    position: relative;
    z-index: 2;
    box-shadow: 0 -5px 15px rgba(0,0,0,0.05);
}
```

#### Real-World Example from Promotional Email
```html
<div class="section-2">
    <table class="table-wrapper" cellpadding="0" cellspacing="0">
        <!-- Content here -->
    </table>
</div>
<!--Third Row With Content-->
<div style="background-color: #e7f0fb;">
    <div
        class="offer-ends-soon"
        style="
            margin-top: -86px;
            background-color: #14467b;
            padding: 40px 20px 30px;
            position: relative;
            z-index: 1;
            border-radius: 60px 60px 0px 0px;
        "
    >
        <!-- Content here -->
    </div>
</div>
```

### Responsive Behavior
- Single-column layout
- Full-width buttons on mobile
- Reduced padding (25px → 20px)
- Smaller typography scaling (24px → 20px for headers)

### HTML Container Structure
```html
<div class="email-container">
    <div class="header">
        <!-- Header content -->
    </div>

    <div class="content">
        <!-- Main content sections -->
    </div>

    <div class="footer">
        <!-- Footer content -->
    </div>
</div>
```

### Base CSS
```css
:root {
    --primary-color: #174687;
    --primary-light: #3a7bd5;
    --secondary-color: #f0f7ff;
    --text-dark: #2d3748;
    --text-light: #4a5568;
    --white: #ffffff;
    --light-gray: #f7f9fc;
    --border-color: #e2e8f0;
    --success-color: #38a169;
    --border-radius: 8px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.05);
    --transition: all 0.3s ease;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    margin: 0;
    padding: 0;
    background-color: var(--light-gray);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
}

.email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
}
```

---

## 🔘 Interactive Elements

### Buttons

#### Design Specification
- **Primary**: Gradient background, 50px radius (pill)
- **Padding**: 16px horizontal, 36px vertical
- **Hover Effect**:
  - Transform: translateY(-3px)
  - Enhanced shadow
  - Subtle shimmer animation
- **Shadow**: 0 6px 15px rgba(23, 70, 135, 0.25)

#### HTML Example
```html
<div class="cta-container">
    <a href="https://signup.example.com" class="cta-button">Start Your Free Dragon Copilot Trial</a>
</div>
```

#### CSS Implementation
```css
.cta-container {
    text-align: center;
    margin: 40px 0 30px;
}

.cta-button {
    display: inline-block;
    padding: 16px 36px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: var(--white);
    background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
    border-radius: 50px;
    box-shadow: 0 6px 15px rgba(23, 70, 135, 0.25);
    transition: var(--transition);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.cta-button:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
    transition: all 0.8s ease;
    z-index: 1;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(23, 70, 135, 0.3);
    background: linear-gradient(45deg, #1a50a0, #4088e0);
}

.cta-button:hover:before {
    left: 100%;
}
```

### Premium Trial Button

#### Design Specification
- **Modern Animated Background**: Multi-color gradient that shifts continuously
- **Integrated Icon**: SVG arrow icon for directional cue
- **Visual Effects**:
  - Smooth gradient animation
  - Subtle scale on hover
  - Elegant shadow for depth
- **Accessibility**: High contrast text with proper spacing

#### HTML Example
```html
<div style="text-align: center;">
    <a href="https://signup.voiceautomated.com/dragon-medical-one-trial-sign-up" class="trial-button">
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
            <path d="M13 5l7 7-7 7M5 12h14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Start Your Trial Today
    </a>
</div>
```

#### CSS Implementation
```css
@keyframes gradient-shift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.trial-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    background: linear-gradient(90deg, #174687, #2a6dc9, #3a7bd5, #174687);
    background-size: 300% 100%;
    color: white;
    font-weight: 600;
    font-size: 17px;
    text-decoration: none;
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(23, 70, 135, 0.3);
    transition: all 0.3s ease;
    animation: gradient-shift 6s ease infinite;
    margin: 20px 0;
}

.trial-button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 20px rgba(23, 70, 135, 0.4);
    filter: brightness(1.05);
}

.trial-button .icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.trial-button:hover .icon {
    transform: translateX(3px);
}

@media screen and (max-width: 600px) {
    .trial-button {
        width: 100%;
        padding: 16px 20px;
        font-size: 16px;
    }
}
```

#### When to Use
- For primary conversion actions (trial signups, demos)
- When you want to highlight a premium offer
- In high-impact content sections like testimonials or feature highlights
- As a standalone CTA within highlight blocks

### Interactive Links

#### Design Specification
- **Standard Link**: Simple underline in brand color
- **Pill Links**: Light blue background with icon
- **Hover Effects**: Subtle background shift or transform

#### HTML Example
```html
<a href="https://www.example.com" class="website-link">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- SVG path data -->
    </svg>
    www.example.com
</a>
```

#### CSS Implementation
```css
.website-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 500;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
    background-color: rgba(23, 70, 135, 0.08);
    transition: var(--transition);
}

.website-link:hover {
    background-color: rgba(23, 70, 135, 0.15);
    transform: translateY(-2px);
}

.website-link svg {
    margin-right: 6px;
}
```

---

## ✨ Visual Accents & Details

### Decorative Elements
- **Gradient Dividers**: Horizontal line with centered icon
- **Corner Accents**: Abstract shapes in low opacity
- **Icon Treatments**: Consistent weight and styling

### Implementation Example
```html
<div class="divider"></div>
```

```css
.divider {
    height: 1px;
    background: linear-gradient(to right, rgba(23, 70, 135, 0), rgba(23, 70, 135, 0.2), rgba(23, 70, 135, 0));
    margin: 35px 0;
    position: relative;
}

.divider:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23174687' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
}
```

### Spatial Relationships
- **Component Spacing**: 35px between major sections
- **Text Spacing**: 20px between paragraphs
- **Internal Padding**: 25-30px within components
- **List Items**: 16px between items

### Visual Depth Cues
- **Shadow Levels**:
  - Light: 0 1px 3px rgba(0,0,0,0.05)
  - Medium: 0 4px 6px rgba(0,0,0,0.05)
  - Heavy: 0 10px 20px rgba(23, 70, 135, 0.3)
- **Border Accents**: Used to draw attention or create separation

---

## 🧠 Design Principles

### 1. Consistent Visual Rhythm
- Maintain consistent spacing between related elements
- Group related content with visual containers
- Use whitespace strategically to create breathing room

### 2. Progressive Enhancement
- Base functionality with elegant enhancements
- Subtle animations and transitions
- Hover states that provide feedback without distraction

### 3. Visual Hierarchy Cues
- Size, weight, and color signal importance
- Background color changes to highlight key information
- Icons and visual elements to reinforce meaning

### 4. Brand Reinforcement
- Strategic use of brand colors in gradients and accents
- Consistent tone in visual and written elements
- Professional polish appropriate for healthcare industry

---

## 📊 Component Grid System

### Benefits Grid
```
┌───────────┐ ┌───────────┐
│ BENEFIT 1 │ │ BENEFIT 2 │
└───────────┘ └───────────┘
┌───────────┐ ┌───────────┐
│ BENEFIT 3 │ │ BENEFIT 4 │
└───────────┘ └───────────┘
```
- **Two-column layout** on desktop
- **Single-column** on mobile
- **Equal height** cards
- **25px gap** between items

## Implementation Steps

When implementing a new email based on this design system:

1. **Start with the container structure**
   - Set up the email-container, header, content, and footer sections

2. **Add the core styles**
   - Copy the CSS variables and base styles first
   - Add component-specific styles as needed

3. **Build components methodically**
   - Begin with text and basic elements
   - Add cards, highlights, and benefits
   - Incorporate testimonials and CTAs
   - Finish with the footer

4. **Test responsively**
   - Verify all components stack properly on mobile
   - Ensure text remains readable at all sizes
   - Check interactive elements are large enough for touch

5. **Verify visual consistency**
   - Confirm spacing between sections is consistent
   - Check alignment of all elements
   - Ensure color usage follows the design system

## Email Template Checklist

Before finalizing any email based on this design system:

- [ ] All sections follow the specified layout structure
- [ ] Typography is consistent and properly hierarchical
- [ ] Interactive elements are properly styled and functional
- [ ] Spacing between elements follows the design system
- [ ] Mobile responsiveness has been verified
- [ ] All images have appropriate alt text
- [ ] Footer contains all required legal information
- [ ] Preview text is properly configured

---

## Feature Highlight Boxes

Feature boxes are critical for highlighting key product benefits and creating visual interest in email communications. The following experimental designs offer various approaches to feature section styling, each with unique visual characteristics but all adhering to the established design system.

### Design 1: Premium Gradient Cards

A modern, premium approach featuring subtle gradients, floating icons, and layered effects.

#### Design Specification
- **Background**: Subtle gradient with white base
- **Accent**: Top bar with brand color gradient
- **Icon Treatment**: Floating circle with shadow and glow
- **Animation**: Subtle hover rise and glow intensification
- **Corners**: 12px radius for modern feel

#### HTML Example
```html
<div class="feature-grid">
  <div class="feature-card premium">
    <div class="card-accent"></div>
    <div class="icon-container">
      <div class="icon-circle">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
          <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"></path>
        </svg>
      </div>
    </div>
    <h3 class="feature-title">Native macOS Compatibility</h3>
    <p class="feature-description">Runs seamlessly on your Mac—no Parallels or Boot Camp needed.</p>
  </div>

  <!-- More feature cards -->
</div>
```

#### CSS Implementation
```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 40px 0;
  width: 100%;
}

.feature-card.premium {
  position: relative;
  background: linear-gradient(135deg, #ffffff, #f8faff);
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(23, 70, 135, 0.1);
  transition: all 0.4s ease;
  overflow: hidden;
  border: 1px solid rgba(23, 70, 135, 0.08);
}

.feature-card.premium:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(23, 70, 135, 0.15);
  border-color: rgba(23, 70, 135, 0.12);
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  z-index: 1;
}

.icon-container {
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.icon-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #174687, #3a7bd5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  box-shadow: 0 5px 15px rgba(23, 70, 135, 0.3),
              inset 0 1px 3px rgba(255, 255, 255, 0.3);
  position: relative;
  transition: all 0.3s ease;
}

.icon-circle:before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  opacity: 0.7;
  z-index: -1;
}

.feature-card.premium:hover .icon-circle {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(23, 70, 135, 0.4),
              inset 0 2px 5px rgba(255, 255, 255, 0.4);
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 12px;
  position: relative;
}

.feature-description {
  color: var(--text-light);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  position: relative;
}

@media (max-width: 600px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
```

### Design 2: Layered 3D Cards

A sophisticated design with depth and dimensionality using layered elements and strong shadows.

#### Design Specification
- **Structure**: Card with overlapping elements
- **Shadow**: Prominent shadows for 3D effect
- **Icon Treatment**: Icon appears to float above the card
- **Corners**: Asymmetrical corner treatments
- **Visual Hooks**: Decorative corner accent

#### HTML Example
```html
<div class="feature-container">
  <div class="feature-box layered">
    <div class="feature-content">
      <div class="icon-wrapper">
        <div class="icon-platform">
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18" />
          </svg>
        </div>
      </div>
      <div class="text-content">
        <h3>Native macOS Compatibility</h3>
        <p>Runs seamlessly on your Mac—no Parallels or Boot Camp needed.</p>
      </div>
    </div>
    <div class="corner-accent"></div>
  </div>

  <!-- More feature boxes -->
</div>
```

#### CSS Implementation
```css
.feature-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin: 40px 0;
}

.feature-box.layered {
  position: relative;
  width: 280px;
  background-color: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow:
    0 20px 30px -10px rgba(23, 70, 135, 0.15),
    0 10px 20px -5px rgba(23, 70, 135, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.feature-box.layered:hover {
  transform: translateY(-8px) rotate(1deg);
  box-shadow:
    0 30px 40px -15px rgba(23, 70, 135, 0.2),
    0 15px 25px -10px rgba(23, 70, 135, 0.15);
}

.feature-content {
  position: relative;
  z-index: 2;
}

.icon-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.icon-platform {
  width: 70px;
  height: 70px;
  background: var(--primary-color);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  box-shadow:
    0 10px 20px -5px rgba(23, 70, 135, 0.3),
    0 5px 15px -3px rgba(23, 70, 135, 0.2);
  transform: rotate(-5deg);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.feature-box.layered:hover .icon-platform {
  transform: rotate(0deg) scale(1.1);
}

.icon-platform:before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(23, 70, 135, 0.2));
  opacity: 0.7;
  z-index: -1;
}

.text-content {
  margin-left: 5px;
}

.text-content h3 {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
}

.text-content p {
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.corner-accent {
  position: absolute;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(58, 123, 213, 0.1), rgba(23, 70, 135, 0.03));
  border-radius: 50%;
  bottom: -60px;
  right: -60px;
  z-index: 1;
}

@media (max-width: 600px) {
  .feature-container {
    flex-direction: column;
    align-items: center;
  }

  .feature-box.layered {
    width: 100%;
    max-width: 280px;
  }
}
```

### Design 3: Animated Highlight Cards

An attention-grabbing design with clean lines and smooth animations to highlight important features.

#### Design Specification
- **Animation**: Highlight sweep animation
- **Structure**: Clean, segmented design with distinct sections
- **Icon Treatment**: Floating icon on gradient background
- **Visual Cues**: Animated accent line
- **Interaction**: Multi-stage hover effects

#### HTML Example
```html
<div class="features-row">
  <div class="feature-highlight">
    <div class="highlight-header">
      <div class="highlight-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>
    </div>
    <div class="highlight-body">
      <h3>99% Accuracy, Powered by AI</h3>
      <p>Enjoy industry-leading precision that continually adapts to your unique speech patterns, hosted on secure Microsoft Azure data centers.</p>
      <div class="highlight-line"></div>
    </div>
  </div>

  <!-- More feature highlights -->
</div>
```

#### CSS Implementation
```css
.features-row {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin: 40px 0;
}

.feature-highlight {
  width: 280px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(23, 70, 135, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(23, 70, 135, 0.05);
  position: relative;
}

.feature-highlight:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(23, 70, 135, 0.15);
  border-color: rgba(23, 70, 135, 0.1);
}

.highlight-header {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  padding: 25px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.highlight-header:after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.2) 50%,
    rgba(255,255,255,0) 100%);
  animation: sweep 3s ease-in-out infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-highlight:hover .highlight-header:after {
  opacity: 1;
}

@keyframes sweep {
  0% { left: -100%; }
  100% { left: 100%; }
}

.highlight-icon {
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: var(--primary-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.feature-highlight:hover .highlight-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

.highlight-body {
  padding: 25px 20px;
  text-align: center;
  position: relative;
}

.highlight-body h3 {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 15px;
}

.highlight-body p {
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.highlight-line {
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--primary-color), var(--primary-light));
  margin: 20px auto 0;
  transition: width 0.5s ease;
}

.feature-highlight:hover .highlight-line {
  width: 50px;
}

@media (max-width: 600px) {
  .features-row {
    flex-direction: column;
    align-items: center;
  }

  .feature-highlight {
    width: 100%;
    max-width: 280px;
  }
}
```

### Design 4: Interactive Feature Tiles

A modern, interactive design with clean lines and distinctive hover states.

#### Design Specification
- **Layout**: Tile-based design with consistent proportions
- **Transitions**: Smooth reveal animations
- **Background**: Two-tone color treatment
- **Typography**: Strong typographic hierarchy
- **Visual Interest**: Decorative pattern overlay

#### HTML Example
```html
<div class="feature-tiles">
  <div class="feature-tile">
    <div class="tile-content">
      <div class="tile-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z"></path>
          <path d="M12 8v8m-4-4h8"></path>
        </svg>
      </div>
      <h3 class="tile-title">Native macOS Compatibility</h3>
      <div class="tile-divider"></div>
      <p class="tile-description">Runs seamlessly on your Mac—no Parallels or Boot Camp needed.</p>
    </div>
    <div class="tile-overlay"></div>
  </div>

  <!-- More feature tiles -->
</div>
```

#### CSS Implementation
```css
.feature-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin: 40px 0;
}

.feature-tile {
  position: relative;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(23, 70, 135, 0.08);
  transition: all 0.4s ease;
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.feature-tile:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(23, 70, 135, 0.15);
}

.tile-content {
  padding: 30px 25px;
  z-index: 2;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tile-icon {
  width: 60px;
  height: 60px;
  background-color: var(--secondary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.feature-tile:hover .tile-icon {
  background-color: var(--primary-color);
  color: white;
  transform: scale(1.08) rotate(-5deg);
}

.tile-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 15px;
  transition: transform 0.3s ease;
}

.feature-tile:hover .tile-title {
  transform: translateY(-3px);
}

.tile-divider {
  width: 40px;
  height: 3px;
  background: linear-gradient(to right, var(--primary-color), var(--primary-light));
  margin-bottom: 15px;
  transition: width 0.3s ease;
}

.feature-tile:hover .tile-divider {
  width: 60px;
}

.tile-description {
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.tile-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657l1.415 1.414L13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zm-22.627 0l5.657 5.657-1.414 1.415L18.643 0h2.83zM32.93 0l7.07 7.07-1.414 1.415-8.485-8.486h2.83zm-9.9 0l8.486 8.485-1.415 1.414-9.9-9.9 2.83.001zm25.485 0l8.485 8.485-1.414 1.414-9.9-9.9h2.83zm-38.828 0l9.9 9.9-1.415 1.414-8.485-8.485h2.83zm42.785 0l9.9 9.9-1.414 1.414L58.97 0h2.83zM0 9.798L9.8 0h2.83L0 12.627v-2.83zm0 5.657L12.627 0h2.83L0 18.284v-2.829zm0 5.657L18.284 0h2.83L0 23.94v-2.83zm0 5.657L23.94 0h2.83L0 29.598v-2.83zm0 5.657L29.598 0h2.83L0 35.256v-2.829zm0 5.657L35.256 0h2.83L0 40.913v-2.83zm0 5.657L40.913 0h2.829L0 46.57v-2.83zm0 5.657L46.57 0h2.83L0 52.226v-2.83zm0 5.657L52.226 0h2.83L0 57.883v-2.83zm0 5.657L57.883 0h2.83L0 63.54v-2.83zm0 5.657L63.54 0h2.83L0 69.198v-2.829zm0 5.657L69.198 0h2.83L0 74.855v-2.83zm0 5.657L74.855 0h2.83L0 80.512v-2.83zm0 5.657L80.512 0h2.83L0 86.17v-2.83zm0 5.657L86.17 0h2.83L0 91.826v-2.83zm0 5.657L91.826 0h2.83L0 97.484v-2.83zm0 5.657L97.484 0h2.83L0 103.14v-2.83zm0 5.657L103.14 0h2.83L0 108.797v-2.83zm0 5.657L108.797 0h2.83L0 114.455v-2.83zm0 5.657L114.455 0h2.83L0 120.112v-2.83zm0 5.657L120.112 0h2.83L0 125.77v-2.83zm0 5.657L125.77 0h2.83L0 131.425v-2.83zm0 5.657L131.425 0h2.83L0 137.082v-2.83zm0 5.657L137.082 0h2.83L0 142.74v-2.83zm0 5.657L142.74 0h2.83L0 148.396v-2.83zm0 5.657L148.396 0h2.83L0 154.054v-2.83zm0 5.657L154.054 0h2.83L0 159.71v-2.829zm0 5.657L159.71 0h2.83L0 165.368v-2.83zm0 5.657L165.368 0h2.83L0 171.026v-2.83zm0 5.657L171.026 0h2.83L0 176.683v-2.83zm0 5.657L176.683 0h2.83L0 182.34v-2.83zm0 5.657L182.34 0h2.83L0 187.998v-2.83zm0 5.657L187.998 0h2.83L0 193.656v-2.83z' fill='%23174687' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-tile:hover .tile-overlay {
  opacity: 1;
}

@media (max-width: 600px) {
  .feature-tiles {
    grid-template-columns: 1fr;
  }
}
```

#### When to Use These Designs

- **Premium Gradient Cards**: For high-end product features and premium services
- **Layered 3D Cards**: When you want to create visual depth and emphasize importance
- **Animated Highlight Cards**: For key differentiators that deserve extra attention
- **Interactive Feature Tiles**: When presenting multiple related features in a grid layout

Each design can be adapted to suit specific content needs while maintaining the established brand identity.

---

This design system combines clinical precision with engaging visual elements to create effective healthcare communications. All components work together to establish trust while guiding the reader through important information in a structured, visually appealing way.

## Email-Compatible Icons: PNG Implementation Guide

Email clients have inconsistent support for SVG and other modern image formats. To ensure maximum compatibility while maintaining visual quality, PNG files are the recommended format for icons and graphical elements in all Dragon email communications.

### Icon Implementation Standards

#### Source and Format
- **File Format**: Always use PNG with transparency
- **Color**: Use monochrome icons when possible, colored to match brand palette (`#14467b`)
- **Resolution**: Use icons sized at 2x the display size (70px source for 35px display) for retina support
- **Host Location**: Store icons on reliable CDN or email platform's asset storage

#### HTML Implementation
```html
<div class="highlight-icon">
    <img src="https://img.icons8.com/ios/50/14467b/mac-os.png" alt="macOS Icon" width="35" height="35">
</div>
```

#### Key Attributes
- **src**: Use absolute URLs (not relative paths)
- **alt**: Always include descriptive alt text for accessibility
- **width/height**: Explicitly specify dimensions to ensure proper rendering
- **Color specification**: Include color code in URL when using services like Icons8

### Recommended Icon Sources
- **Icons8**: Provides direct URLs with color specification (example: `https://img.icons8.com/ios/50/14467b/mac-os.png`)
- **HubSpot Asset Library**: Use for company-specific icons
- **Flaticon**: Good source for downloadable icons that can be hosted on your servers

### Feature Card Icons Examples

The following icons are used in the Feature Highlight Cards and serve as references for future icon implementations:

| Feature | Icon | URL | Description |
|---------|------|-----|-------------|
| Native macOS Compatibility | Mac logo | `https://img.icons8.com/ios/50/14467b/mac-os.png` | Apple OS symbol for macOS compatibility |
| 99% Accuracy, Powered by AI | Microphone | `https://img.icons8.com/ios/50/14467b/microphone--v1.png` | Speech input representation for voice recognition |
| Medical Vocabularies | Stethoscope | `https://img.icons8.com/ios/50/14467b/stethoscope.png` | Medical symbol representing healthcare terminology |
| Cross-Platform Convenience | Network | `https://img.icons8.com/ios/50/14467b/network-cable.png` | Connection symbol showing cross-platform capability |

### Icon Selection Guidelines
When selecting icons for Dragon email communications, follow these principles:
1. **Conceptual Clarity**: Choose icons that directly represent the feature/concept
2. **Visual Consistency**: Maintain consistent style (line-weight, detail level) across all icons
3. **Simplicity**: Avoid complex details that may not render well at small sizes
4. **Brand Alignment**: Select professional icons appropriate for healthcare communications

### Testing Requirements
Test all PNG icons in these environments before deployment:
- Outlook (Windows and Mac)
- Gmail (web and app)
- Apple Mail
- Mobile email clients

### Icon Accessibility
All icons must include:
- Descriptive alt text
- Sufficient contrast ratio (4.5:1 minimum)
- Text labels accompanying icons where possible

This PNG implementation approach ensures consistent rendering across all email clients while maintaining the professional visual identity of Dragon communications.

## Premium Promotional Box

The Premium Promotional Box creates high-impact promotional sections using modern gradients, subtle animations, and enhanced call-to-action elements.

### Design Specification
- **Gradient Background**: Matches feature cards with 135deg directional flow
- **Visual Effects**: Includes light sweep animation and radial highlight
- **Content Styling**: High-contrast white text for maximum readability
- **Complementary CTA**: Custom gradient button with enhanced hover states
- **Cohesive Design**: Visually connected to feature cards for brand consistency

### HTML Implementation
```html
<div class="special-offer">
    <h3>EARLY ACCESS PERKS</h3>
    <p>We're offering an exclusive Early Access program for Mac users eager to streamline their documentation. As an Early Access participant, you'll receive:</p>
    <ul>
        <li><strong>Priority Feature Access</strong> – Be the first to try newly released enhancements.</li>
        <li><strong>One-on-One Onboarding</strong> – Personalized training to ensure a seamless rollout.</li>
        <li><strong>Direct Feedback Loop</strong> – Influence future improvements by sharing your insights.</li>
    </ul>
    <a href="https://signup.example.com" class="limited-spots">SPOTS ARE LIMITED — ACT NOW!</a>
</div>
```

### CSS Implementation
```css
.special-offer {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 80%, var(--primary-color) 100%);
    border-radius: var(--border-radius);
    padding: 30px;
    margin: 35px 0;
    box-shadow: var(--shadow-md);
    border: none;
    color: var(--white);
    position: relative;
    overflow: hidden;
}

.special-offer:before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
}

.special-offer::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.1) 50%,
        rgba(255,255,255,0) 100%);
    animation: shine 8s infinite;
    pointer-events: none;
    z-index: 1;
}

.special-offer h3 {
    color: var(--white);
    margin-top: 0;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
}

.special-offer ul {
    margin-bottom: 0;
    padding-left: 25px;
    position: relative;
    z-index: 2;
}

.special-offer li {
    margin-bottom: 12px;
    color: var(--white);
    position: relative;
}

.special-offer li::marker {
    color: var(--white);
}

.special-offer p {
    color: var(--white);
    position: relative;
    z-index: 2;
}

/* Premium CTA Button */
.limited-spots {
    background: linear-gradient(135deg, #FFD700, #f8cc00);
    color: var(--primary-color);
    font-weight: 700;
    text-align: center;
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 25px;
    margin-top: 15px;
    position: relative;
    z-index: 2;
    display: inline-block;
    transform: rotate(-2deg);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.2);
    letter-spacing: 0.5px;
}

.limited-spots:hover {
    background: linear-gradient(135deg, #f8cc00, #FFD700);
    transform: rotate(-2deg) scale(1.05);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

.limited-spots:active {
    transform: rotate(-2deg) scale(0.98);
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
```

### When to Use
- For special promotions and limited-time offers
- To highlight exclusive access or early-adopter programs
- When needing to create urgency and attention within email communications
- For high-priority calls-to-action that need to stand out from regular content

### Responsive Behavior
On mobile screens (max-width: 600px), the box adapts with:
```css
@media (max-width: 600px) {
    .special-offer {
        padding: 25px 20px;
    }

    .special-offer h3 {
        font-size: 22px;
    }
}
```

This promotional box style creates visual harmony with the feature highlight cards while clearly differentiating promotional content. The animated gradient effect and complementary CTA button create a premium look that draws attention to special offers.

## Partner Credibility Card

The Partner Credibility Card provides social proof by highlighting technology partnerships and integrations in a subtle, professional format.

### Design Specification
- **Background**: Gradient from light blue (var(--secondary-color)) to white
- **Text Styling**: Italicized body with bold emphasis on partner names
- **Container**: Card-like appearance with standard border radius
- **Alignment**: Centered text for formal presentation
- **Spacing**: Visually balanced internal padding for perfect vertical centering

### HTML Implementation
```html
<div class="card partner-card">
    <p class="partner-text">Helium is powered by Nuance's industry-leading Dragon Medical One technology and is supported by trusted partners like <strong class="partner-name">VoicePoint</strong>, <strong class="partner-name">VoiceX Communications</strong>, and <strong class="partner-name">The Dragon People</strong>.</p>
</div>
```

### CSS Implementation
```css
/* Uses the existing card class with custom styling */
.partner-card {
    background-color: var(--secondary-color);
    border: none;
    background-image: linear-gradient(to right, rgba(23, 70, 135, 0.05), rgba(255, 255, 255, 0.8));
    padding: 20px 25px 30px; /* Asymmetrical padding: less on top, more on bottom to visually center text */
    display: flex;
    align-items: center;
    justify-content: center;
}

.partner-text {
    font-style: italic;
    color: var(--primary-color);
    text-align: center;
    margin: 0;
    line-height: 1.6;
}

.partner-name {
    font-weight: 700;
}
```

### When to Use
- Near the end of emails to reinforce credibility
- When introducing new technology with established partners
- To leverage the reputation of partner brands
- In communications where building trust is essential

### Responsive Behavior
The component maintains its styling on mobile devices while adapting to the container width.

### Placement Guidelines
This component works best:
- Near the bottom of the email, before the call-to-action
- After feature descriptions to reinforce the solution's credibility
- As a subtle footer element that doesn't compete with primary CTAs

This subtle design element helps establish trust without overwhelming the main message of the communication, adding a professional touch that acknowledges important partnerships.
