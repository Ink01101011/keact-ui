# Quick Start Guide - keact-ui

## 🚀 Getting Started

This guide will help you set up and start using keact-ui in your project.

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- React 18+
- TypeScript (recommended)

## Installation

```bash
npm install keact-ui
# or
yarn add keact-ui
# or
pnpm add keact-ui
```

## Basic Usage

### 1. Import the CSS

First, import the component styles in your app's entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'keact-ui/dist/style.css';
```

### 2. Import and Use Components

```tsx
import { Button } from 'keact-ui';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
```

## Examples

### Button Variants

```tsx
import { Button } from 'keact-ui';

function ButtonExamples() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
```

### Button Sizes

```tsx
import { Button } from 'keact-ui';

function ButtonSizes() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
```

### Button States

```tsx
import { Button } from 'keact-ui';
import { useState } from 'react';

function ButtonStates() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Button disabled>Disabled</Button>
      <Button loading={loading} onClick={handleClick}>
        Click to Load
      </Button>
      <Button fullWidth>Full Width Button</Button>
    </div>
  );
}
```

## TypeScript Support

keact-ui is built with TypeScript and provides full type definitions out of the box.

```tsx
import { Button, ButtonProps } from 'keact-ui';
import { FC } from 'react';

const MyButton: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Next Steps

1. **Explore Components**: Check out [Storybook](https://your-storybook-url.com) to see all available components and their variants
2. **Read Documentation**: See the full [README](./README.md) for detailed API documentation
3. **View Examples**: Check out example projects in the `/examples` directory
4. **Customize**: Learn about theming and customization options

## Troubleshooting

### Styles Not Showing

Make sure you've imported the CSS file:

```tsx
import 'keact-ui/dist/style.css';
```

### TypeScript Errors

Ensure your `tsconfig.json` has the following settings:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "react-jsx"
  }
}
```

### Build Errors

If using Vite, make sure your `vite.config.ts` optimizes dependencies:

```ts
export default defineConfig({
  optimizeDeps: {
    include: ['keact-ui']
  }
});
```

## Need Help?

- 📖 [Full Documentation](./README.md)
- 🐛 [Report Issues](https://github.com/yourusername/keact-ui/issues)
- 💬 [Discussions](https://github.com/yourusername/keact-ui/discussions)

## What's Next?

Stay tuned for upcoming components! Check out our [Release Plan](./RELEASE_PLAN.md) to see what's coming.
