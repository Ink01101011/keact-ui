# keact-ui

A modern React UI component library built with TypeScript and Vite

## Development

This project uses:
- **Vite** for fast builds and development
- **TypeScript** for type safety
- **React 18** for UI components
- **Jest & React Testing Library** for testing
- **Storybook** for component documentation
- **ESLint & Prettier** for code quality
- **Husky & lint-staged** for pre-commit checks

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run Storybook:
   ```bash
   npm run storybook
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Build the library:
   ```bash
   npm run build
   ```

## Publishing

Before publishing to npm:

1. Update version in package.json
2. Run tests: `npm test`
3. Build: `npm run build`
4. Publish: `npm publish`

## Component Structure

```
src/
  components/
    ComponentName/
      ComponentName.tsx      # Main component
      ComponentName.css      # Component styles
      ComponentName.test.tsx # Component tests
      ComponentName.stories.tsx # Storybook stories
      index.ts              # Exports
```
