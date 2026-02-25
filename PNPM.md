## Package Manager: pnpm

This project uses [pnpm](https://pnpm.io) as the package manager instead of npm. pnpm is faster, more efficient, and has a better dependency resolution strategy.

### Installation

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

Or using Homebrew (macOS):

```bash
brew install pnpm
```

### Common Commands

All commands use `pnpm` instead of `npm`:

```bash
# Install dependencies
pnpm install

# Add a new package
pnpm add package-name

# Add a development dependency
pnpm add -D package-name

# Update packages
pnpm update

# Run scripts
pnpm dev
pnpm build
pnpm test

# Remove a package
pnpm remove package-name
```

### Why pnpm?

- **Faster**: pnpm is significantly faster than npm for installation
- **Disk efficient**: Uses hard links and a global store to avoid duplication
- **Better dependency resolution**: Prevents phantom dependencies
- **Strict requirements**: Enforces correct dependency declarations
- **Monorepo friendly**: Built-in monorepo support

### pnpm-lock.yaml

The `pnpm-lock.yaml` file (similar to npm's `package-lock.json`) ensures reproducible installs. Always commit this file to version control.

### Compatibility

pnpm is fully compatible with npm packages and registries. You can mix and match commands, but it's recommended to stick with pnpm throughout the project.

### Reference

For more information, visit [pnpm.io](https://pnpm.io)
