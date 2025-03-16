# Email Header Component

## Overview

The header is one of the most visually striking elements of our email template. It features a gradient background, curved bottom edges, and subtle animation effects.

![Header Component](../../email-images/header-screenshot.png)

## HTML Structure

```html
<header>
    <!-- Logo on white background -->
    <div class="header-top">
        <img src="images/va-logo.png" alt="Voice Automated Logo" class="logo" width="140">
    </div>

    <!-- Main heading on blue background -->
    <div class="header-main">
        <div class="light-effect"></div>
        <h1 class="header-title">DRAGON MEDICAL ONE</h1>
        <p class="header-subtitle">Now Built Natively for Mac</p>
    </div>
</header>
```

## Table-Based Implementation

For proper email client compatibility, the header must be converted to a table-based structure:

```html
<!-- Email Header -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
    <!-- Logo Section -->
    <tr>
        <td align="center" bgcolor="#ffffff" style="background-color: #ffffff; padding: 25px 20px;">
            <img src="images/va-logo.png" alt="Voice Automated Logo" width="140" height="[HEIGHT]" style="display: block; border: 0;" />
        </td>
    </tr>
    
    <!-- Main Heading Section -->
    <tr>
        <td align="center" bgcolor="#14467b" background="images/header-bg.png" style="background: linear-gradient(135deg, #14467b 0%, #1a5ca3 50%, #14467b 100%); padding: 40px 20px 50px; border-radius: 0 0 30px 30px; position: relative;">
            <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">
            <v:fill type="gradient" color="#14467b" color2="#1a5ca3" angle="90" />
            <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
            <![endif]-->
            
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center">
                        <h1 style="color: #ffffff; font-size: 42px; font-weight: 900; margin: 0; letter-spacing: -0.02em; line-height: 1.2; text-transform: uppercase; text-shadow: 0 2px 4px rgba(0,0,0,0.15);">
                            DRAGON MEDICAL ONE
                        </h1>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <p style="font-size: 26px; font-weight: 400; margin-top: 12px; margin-bottom: 0; color: #ffffff; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                            Now Built Natively for Mac
                        </p>
                    </td>
                </tr>
            </table>
            
            <!--[if gte mso 9]>
            </v:textbox>
            </v:rect>
            <![endif]-->
        </td>
    </tr>
</table>
```

## CSS Styling

```css
/* White section with logo */
.header-top {
    background-color: var(--white);
    padding: 25px 20px;
    text-align: center;
}

.logo {
    max-width: 160px;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* Blue section with main heading */
.header-main {
    background: linear-gradient(135deg, var(--primary-color) 0%, #1a5ca3 50%, var(--primary-color) 100%);
    padding: 40px 20px 50px;
    text-align: center;
    border-radius: 0 0 30px 30px;
    position: relative;
    box-shadow: 0 10px 20px rgba(20, 70, 123, 0.15);
    overflow: hidden;
    border-bottom: 5px solid var(--primary-light);
}

/* Decorative elements */
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
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-size: 130px 130px;
    opacity: 0.7;
    pointer-events: none;
}

/* Animation effect */
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
```

## Mobile Responsiveness

```css
@media only screen and (max-width: 600px) {
    .header-main {
        padding: 30px 15px 40px;
    }

    .header-title {
        font-size: 32px;
    }

    .header-subtitle {
        font-size: 20px;
    }
    
    /* Simplify for performance */
    .header-main::before,
    .header-main::after,
    .header-main .light-effect {
        display: none; 
    }
    
    .header-main {
        background: var(--primary-color);
    }
}

@media only screen and (max-width: 375px) {
    .header-title {
        font-size: 28px;
    }

    .header-subtitle {
        font-size: 18px;
    }
}
```

## Email Client Compatibility

### Key Considerations

1. **Outlook (Windows)**
   - Uses VML for gradient background
   - Requires tables for structure
   - Text shadow not supported (will gracefully degrade)

2. **Gmail**
   - Animation will work in some versions but is non-essential
   - Will display properly in both web and mobile apps

3. **Apple Mail/iOS**
   - Will display as designed with all enhancements
   - Curved border radius supported
   - Animations supported

### Fallbacks

- Gradient background falls back to solid color
- Curved bottom corners fall back to straight edges
- Animation effects are non-essential and will simply not display
- All text remains readable in all clients

## Implementation Notes

1. Always test header in multiple email clients
2. Ensure all text is readable against the background color
3. Keep logo dimensions consistent for brand integrity
4. The animation is a progressive enhancement and not required for functionality