import type {Config} from 'tailwindcss';
import {fontFamily} from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A2430',
        accent: '#14B8A6'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Manrope', ...fontFamily.sans]
      }
    }
  },
  plugins: []
};

export default config;
