# Email Button Components

## Overview

Our email template includes several types of buttons with modern styling that gracefully degrades in older email clients. Each button type has a specific purpose and visual treatment.

## Button Types

### 1. Primary CTA Button

Used for the main call-to-action, featuring gradient background and animation effects.

![Primary Button](../../email-images/primary-button.png)

#### Original HTML Structure

```html
<a href="https://example.com" class="cta-button">
    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8v6m0 2v.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" 
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    SCHEDULE YOUR FREE DEMO
</a>
```

#### Table-Based Implementation

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
    <tr>
        <td align="center" bgcolor="#2490eb" style="background: linear-gradient(-45deg, #2490eb, #0d3b6e, #4dabff, #1c7fd6); background-size: 300% 300%; border-radius: 50px; padding: 0; box-shadow: 0 10px 20px rgba(36, 144, 235, 0.3);">
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://example.com" style="height:56px;v-text-anchor:middle;width:250px;" arcsize="80%" stroke="f" fillcolor="#2490eb">
                <w:anchorlock/>
                <center>
            <![endif]-->
                <a href="https://example.com" target="_blank" 
                   style="background: linear-gradient(-45deg, #2490eb, #0d3b6e, #4dabff, #1c7fd6); background-size: 300% 300%; border-radius: 50px; color: #ffffff; display: inline-block; font-family: sans-serif; font-size: 18px; font-weight: 700; line-height: 56px; text-align: center; text-decoration: none; width: 250px; text-transform: uppercase; letter-spacing: 0.5px; -webkit-text-size-adjust: none;">
                    SCHEDULE YOUR FREE DEMO
                </a>
            <!--[if mso]>
                </center>
            </v:roundrect>
            <![endif]-->
        </td>
    </tr>
</table>
```

#### CSS Styling

```css
.cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 18px 40px;
    background: linear-gradient(-45deg, #2490eb, #0d3b6e, #4dabff, #1c7fd6);
    background-size: 300% 300%;
    color: var(--white);
    font-weight: 700;
    font-size: 18px;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(36, 144, 235, 0.3);
    border: none;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    animation: gradient-shift 6s ease infinite;
}

/* Add inner highlight effect */
.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%);
    border-radius: 50px;
}

/* Animation */
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
```

#### Mobile Responsiveness

```css
@media only screen and (max-width: 600px) {
    .cta-button {
        padding: 16px 30px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
    }
    
    /* Simplify animation for performance */
    .cta-button {
        background: var(--primary-light);
        animation: none;
    }
    
    .cta-button::before {
        display: none;
    }
}
```

### 2. Secondary Button

Used for less prominent actions, featuring a transparent background with border.

![Secondary Button](../../email-images/secondary-button.png)

#### Original HTML Structure

```html
<a href="https://example.com" class="secondary-button">
    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.5l-8 4.5v6.5l8 4.5 8-4.5v-6.5l-8-4.5zm-8 4.5l8 4.5m0 0v6.5m0-6.5l8-4.5m-16-4l8-4.5 8 4.5" 
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Learn More About Helium
</a>
```

#### Table-Based Implementation

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
    <tr>
        <td align="center" style="border: 1px solid rgba(20, 70, 123, 0.5); border-radius: 50px; padding: 0;">
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://example.com" style="height:52px;v-text-anchor:middle;width:250px;" arcsize="80%" strokecolor="#14467b" fillcolor="#ffffff">
                <w:anchorlock/>
                <center style="color:#14467b;font-family:sans-serif;font-size:17px;font-weight:600;">
                    Learn More About Helium
                </center>
            </v:roundrect>
            <![endif]-->
            <a href="https://example.com" target="_blank" 
               style="border: 1px solid rgba(20, 70, 123, 0.5); border-radius: 50px; color: #14467b; display: inline-block; font-family: sans-serif; font-size: 17px; font-weight: 600; line-height: 52px; text-align: center; text-decoration: none; width: 250px; -webkit-text-size-adjust: none;">
                Learn More About Helium
            </a>
        </td>
    </tr>
</table>
```

#### CSS Styling

```css
.secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px 35px;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: var(--primary-color);
    background-color: transparent;
    border: 1px solid rgba(20, 70, 123, 0.5);
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    z-index: 1;
    box-shadow: 0 2px 6px rgba(20, 70, 123, 0.08);
    letter-spacing: 0.3px;
}
```

#### Mobile Responsiveness

```css
@media only screen and (max-width: 600px) {
    .secondary-button {
        padding: 16px 30px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
    }
}
```

### 3. Trial Button

Used for trial signups, featuring a subtle animated gradient.

![Trial Button](../../email-images/trial-button.png)

#### Original HTML Structure

```html
<a href="https://example.com" class="trial-button">
    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 5l7 7-7 7M5 12h14" stroke="white" stroke-width="2" 
              stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Start Your Trial Today
</a>
```

#### Table-Based Implementation

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
    <tr>
        <td align="center" bgcolor="#2490eb" style="background: linear-gradient(-45deg, #2490eb, #14467b, #4dabff, #3085d6); background-size: 300% 300%; border-radius: 50px; padding: 0; box-shadow: 0 10px 20px rgba(20, 70, 123, 0.2);">
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://example.com" style="height:48px;v-text-anchor:middle;width:200px;" arcsize="80%" stroke="f" fillcolor="#2490eb">
                <w:anchorlock/>
                <center>
            <![endif]-->
                <a href="https://example.com" target="_blank" 
                   style="background: linear-gradient(-45deg, #2490eb, #14467b, #4dabff, #3085d6); background-size: 300% 300%; border-radius: 50px; color: #ffffff; display: inline-block; font-family: sans-serif; font-size: 15px; font-weight: 600; line-height: 48px; text-align: center; text-decoration: none; width: 200px; text-transform: uppercase; letter-spacing: 0.5px; -webkit-text-size-adjust: none;">
                    Start Your Trial Today
                </a>
            <!--[if mso]>
                </center>
            </v:roundrect>
            <![endif]-->
        </td>
    </tr>
</table>
```

#### CSS Styling

```css
.trial-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    background: linear-gradient(-45deg, #2490eb, #14467b, #4dabff, #3085d6);
    background-size: 300% 300%;
    color: white;
    font-weight: 600;
    font-size: 15px;
    border-radius: 50px;
    margin-top: 18px;
    text-decoration: none;
    border: none;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 0 10px 20px rgba(20, 70, 123, 0.2);
    animation: gradient-shift 5s ease infinite;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```

### 4. Promotional Badge Button

Used for limited-time offers, featuring a rotated design.

![Promo Button](../../email-images/promo-button.png)

#### Original HTML Structure

```html
<a href="https://example.com" class="limited-spots">
    SPOTS ARE LIMITED — ACT NOW!
</a>
```

#### Table-Based Implementation

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 15px auto 0;">
    <tr>
        <td align="center" bgcolor="#FFD700" style="background: linear-gradient(135deg, #FFD700, #f8cc00); border-radius: 30px; padding: 0; transform: rotate(-2deg); box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 2px solid rgba(255, 255, 255, 0.2);">
            <!--[if mso]>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://example.com" style="height:40px;v-text-anchor:middle;width:240px;" arcsize="60%" stroke="f" fillcolor="#FFD700">
                <w:anchorlock/>
                <center style="color:#14467b;font-family:sans-serif;font-size:16px;font-weight:700;">
                    SPOTS ARE LIMITED — ACT NOW!
                </center>
            </v:roundrect>
            <![endif]-->
            <a href="https://example.com" target="_blank" 
               style="background: linear-gradient(135deg, #FFD700, #f8cc00); border: 2px solid rgba(255, 255, 255, 0.2); border-radius: 30px; color: #14467b; display: inline-block; font-family: sans-serif; font-size: 16px; font-weight: 700; line-height: 40px; text-align: center; text-decoration: none; width: 240px; letter-spacing: 0.5px; -webkit-text-size-adjust: none;">
                SPOTS ARE LIMITED — ACT NOW!
            </a>
        </td>
    </tr>
</table>
```

#### CSS Styling

```css
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
```

#### Mobile Responsiveness

```css
@media only screen and (max-width: 600px) {
    .limited-spots {
        transform: rotate(0deg); /* No rotation on mobile for better readability */
        font-size: 15px;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }
}
```

## Email Client Compatibility

### Key Considerations

1. **Outlook (Windows)**
   - Uses VML for rounded corners
   - Gradients fall back to solid colors
   - Animations won't work (non-essential)

2. **Gmail**
   - Supports button styling
   - May not support animations in all clients

3. **Apple Mail/iOS**
   - Will display as designed with all enhancements
   - Supports gradients and animations

### Fallbacks

All buttons include:
- Color fallbacks for clients that don't support gradients
- Shape fallbacks for clients that don't support rounded corners
- Animation fallbacks (non-essential)

## Implementation Notes

1. Always include both HTML attributes and CSS properties
2. Keep button text concise and action-oriented
3. Ensure buttons are at least 44px tall for mobile touch targets
4. For mobile, make buttons full-width for easier tapping
5. Use VML fallbacks for Outlook to maintain rounded corners

## Button Container

For multiple buttons, use a container with proper spacing:

```html
<div class="button-container">
    <!-- Primary CTA Button -->
    <!-- Secondary Button -->
</div>
```

```css
.button-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 35px 0;
}

@media only screen and (max-width: 600px) {
    .button-container {
        flex-direction: column;
        gap: 15px;
    }
}
```

When implementing as tables:

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 35px 0;">
    <tr>
        <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <!-- For multiple buttons, use multiple cells with spacing -->
                    <td style="padding-right: 8px;">
                        <!-- Button 1 -->
                    </td>
                    <td style="padding-left: 8px;">
                        <!-- Button 2 -->
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
```