# Feature Highlight Cards

## Overview

Feature highlight cards are a key visual element in our email template, showcasing product benefits with visual interest. These cards feature animated headers, icons, and subtle hover effects that gracefully degrade in email clients with limited support.

![Feature Cards](../../email-images/feature-cards.png)

## Original HTML Structure

```html
<div class="features-row">
    <!-- Feature 1: Native macOS Compatibility -->
    <div class="feature-highlight">
        <div class="highlight-header">
            <div class="highlight-icon">
                <img src="https://img.icons8.com/ios/50/14467b/mac-os.png" alt="macOS Icon" width="35" height="35">
            </div>
        </div>
        <div class="highlight-body">
            <h3>Native macOS Compatibility</h3>
            <p>Runs seamlessly on your Mac—no Parallels or Boot Camp needed.</p>
            <div class="highlight-line"></div>
        </div>
    </div>
    
    <!-- More feature cards -->
</div>
```

## Table-Based Implementation

For proper email client compatibility, the feature cards must be converted to a table structure:

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 40px 0;">
    <tr>
        <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <!-- For side-by-side cards on desktop, use multiple cells -->
                    <td class="feature-card-cell" width="50%" align="center" valign="top" style="padding: 0 10px 20px;">
                        <!-- Feature Card 1 -->
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="260" style="max-width: 260px; border-radius: 12px; border: 1px solid rgba(23, 70, 135, 0.05); box-shadow: 0 8px 20px rgba(23, 70, 135, 0.1); background-color: #ffffff;">
                            <!-- Card Header -->
                            <tr>
                                <td align="center" bgcolor="#14467b" background="images/header-bg.png" style="background: linear-gradient(135deg, #14467b, #2490eb); padding: 25px 0; border-radius: 12px 12px 0 0;">
                                    <!--[if gte mso 9]>
                                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:260px;height:120px;">
                                    <v:fill type="gradient" color="#14467b" color2="#2490eb" angle="135" />
                                    <v:textbox inset="0,0,0,0">
                                    <![endif]-->
                                    
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td align="center">
                                                <div style="width: 70px; height: 70px; border-radius: 50%; background-color: #ffffff; padding: 0; margin: 0; line-height: 0; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);">
                                                    <img src="https://img.icons8.com/ios/50/14467b/mac-os.png" alt="macOS Icon" width="35" height="35" style="margin: 18px; display: block; border: 0;">
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <!--[if gte mso 9]>
                                    </v:textbox>
                                    </v:rect>
                                    <![endif]-->
                                </td>
                            </tr>
                            
                            <!-- Card Body -->
                            <tr>
                                <td align="center" style="padding: 25px 20px; background-color: #ffffff; border-radius: 0 0 12px 12px;">
                                    <h3 style="color: #14467b; font-size: 18px; font-weight: 600; margin: 0 0 15px; line-height: 1.3;">
                                        Native macOS Compatibility
                                    </h3>
                                    <p style="color: #4a5568; font-size: 14px; line-height: 1.6; margin: 0;">
                                        Runs seamlessly on your Mac—no Parallels or Boot Camp needed.
                                    </p>
                                    
                                    <!-- Decorative Line (Optional) -->
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="50" style="margin: 20px auto 0; opacity: 0;">
                                        <tr>
                                            <td style="height: 2px; background: linear-gradient(to right, #14467b, #2490eb); font-size: 0; line-height: 0;">
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                    
                    <td class="feature-card-cell" width="50%" align="center" valign="top" style="padding: 0 10px 20px;">
                        <!-- Feature Card 2 (similar structure) -->
                    </td>
                </tr>
                
                <!-- Additional row for more cards -->
                <tr>
                    <td class="feature-card-cell" width="50%" align="center" valign="top" style="padding: 0 10px 20px;">
                        <!-- Feature Card 3 (similar structure) -->
                    </td>
                    
                    <td class="feature-card-cell" width="50%" align="center" valign="top" style="padding: 0 10px 20px;">
                        <!-- Feature Card 4 (similar structure) -->
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
```

## CSS Styling

```css
.features-row {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    margin: 40px 0;
}

.feature-highlight {
    width: 260px;
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
```

## Mobile Responsiveness

For reliable mobile display, use these essential CSS styles and HTML structure:

```css
@media only screen and (max-width: 600px) {
    .feature-card-container {
        width: 100% !important;
        display: block !important;
        text-align: center !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        float: none !important;
    }

    .feature-card {
        margin: 0 auto 20px auto !important;
        width: 100% !important;
        max-width: 280px !important;
        display: block !important;
        text-align: center !important;
        float: none !important;
    }
    
    /* This ensures ALL child elements inherit center alignment */
    .feature-card * {
        text-align: center !important;
    }
}
```

## Email Client Compatibility

### Key Considerations

1. **Outlook (Windows)**
   - Uses VML for gradient background in header
   - Animation effects won't work (non-essential)
   - Table-based layout needed for consistent display

2. **Gmail**
   - Will support the basic card structure
   - May not support animations

3. **Apple Mail/iOS**
   - Will display as designed with all enhancements
   - Supports gradients and shadows

### Fallbacks

- Gradient colors fall back to solid colors
- Animation effects are non-essential and gracefully degrade
- Icon containers maintain visibility in all clients

## Implementation Notes

1. Four feature cards work best in a 2x2 grid on desktop
2. Use real image icons (PNGs) instead of SVGs for compatibility
3. Cards stack in single column on mobile
4. The animation and hover effects are progressive enhancements
5. CSS transitions won't work in most email clients, but static styling remains
6. **CRITICAL FOR MOBILE CENTERING**: Follow these rules for reliable mobile display:
   - Apply `display: block` (not inline-block) to feature cards on mobile
   - Set both `margin: 0 auto` AND `text-align: center` on feature cards
   - Use the universal selector (`.feature-card *`) to ensure all child elements inherit centering
   - Remove left/right padding in mobile view that can cause misalignment
   - Add `float: none` for Outlook compatibility
   - Include `!important` flags on all mobile overrides
   - Test actual rendering on physical iOS and Android devices

### Proper HTML Structure for Mobile Compatibility

```html
<!-- For each feature card container -->
<td class="feature-card-container" align="center" valign="top" width="50%" style="padding-right: 12px; padding-bottom: 20px; text-align: center;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="feature-card" width="100%" style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(23, 70, 135, 0.05); box-shadow: 0 8px 20px rgba(23, 70, 135, 0.1); background-color: #ffffff; max-width: 260px; margin: 0 auto; display: block;">
        <!-- Card content -->
    </table>
</td>
```

## Using Feature Cards Effectively

- Keep descriptions concise (1-2 lines)
- Use clear, meaningful icons that represent the feature
- Consider using alternating background colors for visual interest
- Limit to 4-6 cards maximum to avoid overwhelming the email
- Make each card about a single, focused benefit