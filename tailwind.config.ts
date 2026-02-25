import type { Config } from 'tailwindcss';
import { designTokens } from './src/tokens';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.stories.{js,jsx,ts,tsx}'],
  theme: {
    colors: designTokens.colors,
    typography: designTokens.typography,
    spacing: designTokens.spacing,
    borderRadius: designTokens.borderRadius,
    boxShadow: designTokens.shadow,
    transitionDuration: designTokens.transition.duration,
    extend: {
      transitionTimingFunction: {
        'ease-smooth': designTokens.transition.timing,
      },
    },
  },
  plugins: [],
} satisfies Config;
