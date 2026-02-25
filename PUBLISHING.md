# Publishing Guide

This document explains how to publish **keact-ui** to npm using GitHub Workflows.

## Prerequisites

Before you can publish, you need to:

1. **Create an npm account** at https://www.npmjs.com
2. **Generate an npm token**:
   - Log in to npm
   - Go to Account → Auth Tokens
   - Create a new "Automation" token (recommended for CI/CD)
   - Copy the token

3. **Add the token to GitHub Secrets**:
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - New repository secret
   - Name: `NPM_TOKEN`
   - Value: Your npm automation token
   - Click "Add secret"

## Publishing Methods

### Method 1: GitHub Release (Recommended)

The easiest way to publish is to create a **GitHub Release**:

1. **Update version in `package.json`**:

   ```json
   {
     "version": "0.2.0"
   }
   ```

2. **Update `CHANGELOG.md`** with release notes

3. **Commit changes**:

   ```bash
   git add package.json CHANGELOG.md
   git commit -m "chore: bump version to 0.2.0"
   git push origin main
   ```

4. **Create a GitHub Release**:
   - Go to your repo → Releases → Draft a new release
   - Tag version: `v0.2.0`
   - Release title: `v0.2.0 - Form Fundamentals`
   - Description: Copy from CHANGELOG.md
   - Click "Publish release"

5. **Workflow automatically triggers**:
   - Tests run
   - Library builds
   - Published to npm
   - Success comment added to release

### Method 2: Manual Workflow Dispatch

For more control, trigger the workflow manually:

1. Go to your repo → Actions → "Publish to npm"
2. Click "Run workflow"
3. Select publish type (patch/minor/major/prerelease)
4. Click "Run workflow"

**Note**: This method requires you to manually update version in `package.json` first.

## Version Numbering

Follow **Semantic Versioning** (MAJOR.MINOR.PATCH):

- **PATCH** (0.1.x): Bug fixes, documentation updates

  ```bash
  pnpm version patch  # 0.1.0 → 0.1.1
  ```

- **MINOR** (0.x.0): New components, features

  ```bash
  pnpm version minor  # 0.1.0 → 0.2.0
  ```

- **MAJOR** (x.0.0): Breaking changes, major rewrites
  ```bash
  pnpm version major  # 0.1.0 → 1.0.0
  ```

## Release Timeline

### v0.1.0 (Current)

**Released**: February 25, 2026

- ✅ Button component (4 variants × 3 sizes)
- ✅ Design token system
- ✅ Tailwind CSS integration
- ✅ Full test coverage, Storybook docs
- ✅ TypeScript support
- ✅ ESLint + Prettier configuration

### v0.2.0 (Next)

**Target**: March 15, 2026

- Input component
- Textarea component
- Checkbox component
- Radio component
- Form utilities

### v0.3.0+

See [RELEASE_PLAN.md](RELEASE_PLAN.md) for full roadmap.

## Publishing Checklist

Before each release, verify:

- [ ] Version updated in `package.json`
- [ ] `CHANGELOG.md` updated with all changes
- [ ] All tests passing (`pnpm test`)
- [ ] Build succeeds (`pnpm build`)
- [ ] No linting errors (`pnpm lint`)
- [ ] Storybook builds (`pnpm build-storybook`)
- [ ] Security audit clean (`pnpm audit`)
- [ ] Git history is clean
- [ ] Branch is main/develop
- [ ] npm token added to GitHub Secrets

## What Gets Published

The GitHub workflow publishes these files from `dist/`:

```
dist/
├── index.d.ts              # TypeScript definitions
├── index.js                # CommonJS (CJS) build
├── index.mjs               # ES Module (ESM) build
├── index.js.map            # CJS source map
├── index.mjs.map           # ESM source map
├── style.css               # Compiled CSS
└── style.css.map           # CSS source map
```

**Not included**:

- Source files (src/)
- Test files
- Stories (.stories.tsx)
- Configuration files (vite.config.ts, etc.)
- node_modules/

## Verifying Publication

After publishing:

1. **Check npm registry**:

   ```bash
   npm view keact-ui
   ```

2. **Check npm package page**:
   - Visit: https://www.npmjs.com/package/keact-ui
   - Verify version appears in the version list

3. **Install in a test project**:

   ```bash
   pnpm add keact-ui@latest
   ```

4. **Test imports**:
   ```typescript
   import { Button, designTokens } from 'keact-ui';
   ```

## Troubleshooting

### Workflow fails on "Install dependencies"

- **Cause**: pnpm version mismatch
- **Fix**: Update `pnpm version` in `.github/workflows/ci.yml` and `publish.yml`

### Workflow fails on "Publish to npm"

- **Cause**: NPM_TOKEN secret not set or expired
- **Fix**: Check GitHub Secrets → NPM_TOKEN is set and valid

### Workflow fails on tests

- **Cause**: Tests failing locally
- **Fix**: Run `pnpm test` locally to debug, commit fixes before releasing

### Package already published at this version

- **Cause**: Trying to publish the same version twice
- **Fix**: Update version in `package.json` and try again

### npm says "You must be logged in to publish"

- **Cause**: NPM_TOKEN not being used properly
- **Fix**: Verify token is added to `.npmrc`, context in workflow is correct

## Security Best Practices

✅ **Do**:

- Use npm automation tokens (never personal access tokens)
- Keep tokens secret (never commit tokens)
- Use `-access public` flag for public packages
- Verify gpg signatures on releases (advanced)
- Audit dependencies before each release (`pnpm audit`)

❌ **Don't**:

- Commit `NPM_TOKEN` to repository
- Use your personal npm account tokens in CI/CD
- Skip tests before publishing
- Publish pre-release versions to `latest` tag
- Use npm tokens in personal projects

## Next Steps

1. Update version in `package.json`:

   ```json
   {
     "version": "0.1.0"
   }
   ```

2. Create `NPM_TOKEN` secret in GitHub Settings

3. Create a release and publish to npm using Method 1

4. Verify at https://www.npmjs.com/package/keact-ui

---

**Questions?** Check [CHANGELOG.md](CHANGELOG.md) for past releases or [README.md](README.md) for general project info.
