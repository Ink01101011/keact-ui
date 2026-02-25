# keact-ui

A modern React UI component library built with TypeScript, Vite, Tailwind CSS, and Design Tokens.

## Installation

```bash
pnpm add keact-ui
# or
npm install keact-ui
# or
yarn add keact-ui
```

## Usage

```tsx
import { Button } from 'keact-ui';
import 'keact-ui/dist/style.css';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## Theming & Customization

keact-ui supports powerful theming through design tokens and Tailwind CSS configuration.

### Quick Theme customization

Create your `tailwind.config.ts`:

```tsx
import type { Config } from 'tailwindcss';
import { designTokens } from 'keact-ui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/keact-ui/dist/**/*.{js,mjs}'],
  theme: {
    colors: {
      // Customize primary color for your brand
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
      // Reuse other tokens as-is
      secondary: designTokens.colors.secondary,
      success: designTokens.colors.success,
      warning: designTokens.colors.warning,
      error: designTokens.colors.error,
      neutral: designTokens.colors.neutral,
    },
  },
} satisfies Config;
```

### Using Design Tokens

Access and customize design tokens in your app:

```tsx
import { designTokens, useDesignTokens } from 'keact-ui';

// Static access
console.log(designTokens.colors.primary[500]);
console.log(designTokens.spacing[4]);

// Reactive access in components
export function MyComponent() {
  const tokens = useDesignTokens();

  return <div style={{ color: tokens.colors.primary[500] }}>Styled with tokens</div>;
}
```

### Available Design Tokens

- **Colors**: Primary, Secondary, Success, Warning, Error, Neutral (10 shades each)
- **Typography**: Font families, sizes (xs-4xl), weights
- **Spacing**: 13 predefined scale values
- **Border Radius**: 8 radius options
- **Shadows**: 5 shadow levels
- **Transitions**: Duration and timing functions

For complete theming documentation, see [THEMING.md](./THEMING.md).

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

| Prop        | Type                                               | Default     | Description             |
| ----------- | -------------------------------------------------- | ----------- | ----------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant    |
| `size`      | `'sm' \| 'md' \| 'lg'`                             | `'md'`      | Button size             |
| `loading`   | `boolean`                                          | `false`     | Shows loading spinner   |
| `fullWidth` | `boolean`                                          | `false`     | Makes button full width |
| `disabled`  | `boolean`                                          | `false`     | Disables the button     |

#### Example

```tsx
<Button variant="primary" size="lg" onClick={() => console.log('clicked')}>
  Primary Button
</Button>

<Button variant="outline" loading>
  Loading...
</Button>

<Button variant="ghost" size="sm" fullWidth>
  Full Width Button
</Button>
```

## Development

We use **pnpm** as the package manager for better performance and efficiency.

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm storybook

# Run tests
pnpm test

# Build library
pnpm build

# Lint code
pnpm lint

# Format code
pnpm format
```

## Scripts

- `pnpm dev` - Start Vite development server
- `pnpm build` - Build library for production
- `pnpm lint` - Lint code with ESLint
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage
- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build Storybook for production

## Documentation

- [THEMING.md](./THEMING.md) - Complete theming and design tokens guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guidelines
- [RELEASE_PLAN.md](./RELEASE_PLAN.md) - Component roadmap
- [PNPM.md](./PNPM.md) - Package manager reference

## License

MIT
