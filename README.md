# keact-ui

A modern React UI component library built with TypeScript and Vite.

## Installation

```bash
npm install keact-ui
# or
yarn add keact-ui
# or
pnpm add keact-ui
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

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `disabled` | `boolean` | `false` | Disables the button |

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

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

## Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build library for production
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## License

MIT
