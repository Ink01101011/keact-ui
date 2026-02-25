# Theming & Design Tokens

keact-ui uses a comprehensive design token system built with Tailwind CSS, allowing you to easily customize themes and colors.

## Design Tokens

Design tokens are predefined values for colors, typography, spacing, and other design properties. They're exported from the library and can be customized to match your brand.

### Available Tokens

Design tokens are available in `src/tokens/index.ts`:

```tsx
import { designTokens } from 'keact-ui';

// Access tokens
console.log(designTokens.colors.primary[500]); // #3b82f6
console.log(designTokens.typography.fontSize.base); // 1rem
console.log(designTokens.spacing[4]); // 1rem
```

#### Color Tokens

- **Primary**: Main brand color (blue by default)
- **Secondary**: Secondary color for less prominent elements (gray)
- **Success**: Color for success states (green)
- **Warning**: Color for warning states (yellow)
- **Error**: Color for error states (red)
- **Neutral**: Grayscale colors for text, backgrounds, borders

Each color has 10 shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

#### Typography Tokens

- **fontFamily**: Default system font stacks
- **fontSize**: 8 predefined sizes (xs to 4xl)
- **fontWeight**: Weight values (thin to black)

#### Spacing Tokens

Predefined spacing scale (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32)

#### Border Radius Tokens

Predefined border radius values (none, sm, base, md, lg, xl, 2xl, full)

#### Shadow Tokens

Predefined shadow levels (none, sm, base, md, lg, xl)

## Customizing Themes

### Method 1: Tailwind Config Override (Recommended)

Create your own `tailwind.config.ts` in your project:

```tsx
import type { Config } from 'tailwindcss';
import { designTokens } from 'keact-ui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/keact-ui/dist/**/*.{js,mjs}'],
  theme: {
    colors: {
      // Override with your brand colors
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9', // Your brand color
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c3d66',
      },
      // Use other tokens as is
      secondary: designTokens.colors.secondary,
      success: designTokens.colors.success,
      warning: designTokens.colors.warning,
      error: designTokens.colors.error,
      neutral: designTokens.colors.neutral,
    },
    extend: {
      // Your additional customizations
    },
  },
} satisfies Config;
```

### Method 2: CSS Custom Properties

Override tokens using CSS variables:

```css
:root {
  /* Primary colors */
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;

  /* Other customizations */
}
```

Then in your components, reference these variables.

### Method 3: Runtime Customization (Future)

In future releases, keact-ui will support runtime token customization via a Theme Provider:

```tsx
import { ThemeProvider } from 'keact-ui';

const customTokens = {
  colors: {
    primary: '#0ea5e9',
    secondary: '#6366f1',
  },
};

export default function App() {
  return (
    <ThemeProvider tokens={customTokens}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Component-Specific Tokens

Each component uses specific tokens:

### Button

```tsx
designTokens.components.button.padding; // Size-specific padding
designTokens.components.button.fontSize; // Size-specific font sizes
designTokens.components.button.borderRadius; // Border radius
designTokens.components.button.fontWeight; // Font weight
designTokens.components.button.transitions; // Transition effects
```

## Theme Examples

### Dark Theme

```tsx
// tailwind.config.ts
export default {
  theme: {
    colors: {
      primary: designTokens.colors.primary,
      neutral: {
        0: '#111827',
        50: '#1f2937',
        100: '#374151',
        200: '#4b5563',
        300: '#6b7280',
        400: '#9ca3af',
        500: '#d1d5db',
        600: '#e5e7eb',
        700: '#f3f4f6',
        800: '#f9fafb',
        900: '#ffffff',
      },
    },
  },
};
```

### High Contrast Theme

```tsx
// tailwind.config.ts
export default {
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      neutral: {
        50: '#ffffff',
        100: '#ffffff',
        // ... all neutrals are black or white
        900: '#000000',
      },
    },
  },
};
```

## Using useDesignTokens Hook

Access tokens programmatically in your components:

```tsx
import { useDesignTokens } from 'keact-ui';

export function MyComponent() {
  const tokens = useDesignTokens();

  return <div style={{ color: tokens.colors.primary[500] }}>{/* Your component */}</div>;
}
```

## Customizing Component Tokens

To customize component-specific tokens, extend your Tailwind config:

```tsx
export default {
  theme: {
    extend: {
      spacing: {
        // Custom sizes for buttons
        'button-sm': '0.5rem',
        'button-md': '1rem',
        'button-lg': '1.5rem',
      },
    },
  },
};
```

## Best Practices

1. **Use Design Tokens**: Always use tokens for styling, never hardcode color values
2. **Maintain Scale**: Keep your custom tokens within the 50-900 scale
3. **Consistent Naming**: Use consistent names across your theme
4. **Document Changes**: Document any token customizations in your project
5. **Test Accessibility**: Ensure color contrast ratios meet WCAG standards

## Browser Support

design tokens work in all modern browsers with CSS variable support:

- Chrome/Edge 49+
- Firefox 31+
- Safari 11.1+
- iOS Safari 11.3+

## Accessing Raw Token Values

For advanced use cases, import tokens directly:

```tsx
import { designTokens } from 'keact-ui';

const primaryColor = designTokens.colors.primary[500];
const baseSpacing = designTokens.spacing[4];
```

## TypeScript Support

Full TypeScript support for design tokens:

```tsx
import type { DesignTokens } from 'keact-ui';

const tokens: DesignTokens = designTokens;
```

---

For more information on Tailwind CSS theming, see the [Tailwind CSS documentation](https://tailwindcss.com/docs/theme).
