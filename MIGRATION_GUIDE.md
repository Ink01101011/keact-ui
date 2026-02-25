# Migration: CSS to Tailwind CSS + Design Tokens

## Overview

keact-ui has transitioned from custom CSS to **Tailwind CSS** with a comprehensive **Design Token System**. This provides better maintainability, easier theming, and smaller bundle sizes.

## Key Changes

### 1. CSS Replaced with Tailwind CSS

**Before:**

```tsx
// Button.css
.keact-button {
  display: inline-flex;
  padding: 0.625rem 1.25rem;
  background-color: #3b82f6;
  /* ... more custom styles */
}
```

**After:**

```tsx
// Using Tailwind classes in component
className={clsx(
  'inline-flex items-center justify-center',
  'bg-primary-500 text-white hover:bg-primary-600',
  'px-4 py-2.5 text-base rounded-md transition-all duration-200'
)}
```

### 2. Design Tokens Introduced

A centralized design token system replaces scattered constant values:

```tsx
// src/tokens/index.ts
export const designTokens = {
  colors: {
    primary: { 50: '#eff6ff', 500: '#3b82f6', ... },
    secondary: { ... },
    // ...
  },
  typography: { ... },
  spacing: { ... },
  // ...
};
```

### 3. Package Manager Changed to pnpm

**Before:** `npm install`, `npm run build`
**After:** `pnpm install`, `pnpm build`

Benefits:

- 30-40% faster installations
- Better disk space usage
- Strict enforced dependency resolution
- Built-in monorepo support

## File Structure Changes

```
Old:                          New:
src/                          src/
├── components/               ├── components/
│   └── Button/               │   └── Button/
│       ├── Button.tsx        │       ├── Button.tsx (no .css import)
│       ├── Button.css ❌     │       ├── Button.test.tsx
│       └── Button.test.tsx   │       └── index.ts
                              ├── tokens/ ✨
                              │   └── index.ts (design tokens)
                              ├── hooks/ ✨
                              │   └── useDesignTokens.ts
                              └── styles/ ✨
                                  └── globals.css (Tailwind imports)

(root)                        (root)
├── package.json (npm)        ├── package.json
├── package-lock.json ❌      ├── pnpm-lock.yaml ✨
├── vite.config.ts            ├── vite.config.ts
└── tsconfig.json             ├── tailwind.config.ts ✨
                              ├── postcss.config.ts ✨
                              ├── THEMING.md ✨
                              └── PNPM.md ✨
```

## Migration Steps for Components

If you're creating new components following the Button pattern, use Tailwind instead of CSS:

### Before (Custom CSS):

```tsx
// Button.css
.keact-button--primary {
  background-color: #3b82f6;
  color: white;
}

.keact-button--primary:hover {
  background-color: #2563eb;
}

// Button.tsx
import './Button.css';
className="keact-button keact-button--primary"
```

### After (Tailwind + Tokens):

```tsx
// No separate CSS file needed!

// Button.tsx - inline Tailwind classes
const variantStyles = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
};

className={clsx('inline-flex items-center', variantStyles[variant])}
```

## Bundle Size Impact

### CSS Size Comparison:

```
Before: 1.48 KB (custom CSS for Button only)
After:  2.81 KB (total Tailwind CSS + utilities)

⚠️ Note: Tailwind CSS includes full utility set needed for all future components
✅ Benefits: Only used utilities are included in production build (PurgeCSS)
```

### Performance:

- **Faster classifying**: Utility-first CSS is faster to scan
- **Better caching**: Tailwind CSS rarely changes between builds
- **Smaller diffs**: Pure utility classes = minimal CSS changes
- **DX**: No context switching between CSS and TSX

## Testing Changes

Tests now check for Tailwind classes instead of custom class names:

**Before:**

```tsx
expect(button).toHaveClass('keact-button--primary');
expect(button).toHaveClass('keact-button--sm');
```

**After:**

```tsx
expect(button).toHaveClass('bg-primary-500');
expect(button).toHaveClass('text-white');
expect(button).toHaveClass('px-3'); // size-specific
```

## Customization

### Custom CSS (Old Way):

Users had to override CSS with higher specificity:

```css
.keact-button.my-override {
  background-color: red !important; /* ugh */
}
```

### Design Tokens (New Way):

Users customize via Tailwind config:

```ts
// tailwind.config.ts
export default {
  theme: {
    colors: {
      primary: '#your-brand-color', // centralized
    },
  },
};
```

See [THEMING.md](./THEMING.md) for complete theming guide.

## Benefits of This Migration

✅ **Better DX**: Utility-first CSS is faster to implement
✅ **Consistency**: All components use the same token values
✅ **Maintainability**: Single source of truth for design tokens
✅ **Theming**: Users can easily customize colors and spacing
✅ **Scalability**: Easier to add new components without CSS duplication
✅ **Performance**: Smaller overall CSS with tree-shaking
✅ **Accessibility**: Built-in utilities for focus states, etc.

## Breaking Changes

If you were using keact-ui v0.1.0 with custom CSS:

1. **CSS Class Names**: All `keact-button--*` classes are removed
2. **CSS Import**: No separate CSS file to import
3. **Package Manager**: Use `pnpm` instead of `npm`
4. **Node Version**: Requires Node 18+ (Tailwind CSS requirement)

### Migration Help

If you were overriding component styles:

**Old way:**

```tsx
import 'keact-ui/dist/keact-ui.css';
// Then override with custom CSS
```

**New way:**

```tsx
import 'keact-ui'; // CSS included automatically
// Customize via tailwind.config.ts
```

## Future Directives

- 🔄 **PostCSS plugins**: Tailwind adds support for custom plugins
- 🎨 **Advanced theming**: Nested color scales, custom utilities
- 🔗 **Design system integration**: Connect to design tools
- 📱 **Responsive utilities**: Better mobile-first approach
- 🌙 **Dark mode**: Built-in dark mode support coming

## Questions?

Refer to:

- [THEMING.md](./THEMING.md) - Theme customization guide
- [PNPM.md](./PNPM.md) - Package manager documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Component Storybook - `pnpm storybook`
