import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      // Build outputs
      'dist',
      'dist/**',
      'build',
      'build/**',
      '*.tsbuildinfo',

      // Dependencies & package managers
      'node_modules',
      'node_modules/**',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',

      // Test & coverage
      'coverage',
      'coverage/**',
      '.nyc_output',

      // Development & documentation
      'storybook-static',
      'storybook-static/**',
      '.storybook',
      '*.md',
      'docs',
      'docs/**',

      // Configuration files
      'vite.config.ts',
      'vitest.config.ts',
      'jest.config.ts',
      'tailwind.config.ts',
      'postcss.config.ts',
      'tsconfig.json',
      'tsconfig.*.json',
      'eslint.config.js',
      '.prettierignore',
      '.prettierrc',
      '.prettierrc.json',

      // Environment & secrets
      '.env',
      '.env.local',
      '.env.*.local',

      // Version control & CI/CD
      '.git',
      '.git/**',
      '.github',
      '.github/**',
      '.gitignore',

      // IDE & OS files
      '.vscode',
      '.vscode/**',
      '.idea',
      '.idea/**',
      '.DS_Store',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  }
);
