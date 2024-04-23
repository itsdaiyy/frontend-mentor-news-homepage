/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        softOrange: 'hsl(var(--color-soft-orange) / <alpha-value>)',
        softRed: 'hsl(var(--color-soft-red) / <alpha-value>)',
        offWhite: 'hsl(var(--color-off-white) / <alpha-value>)',
        grayishBlue: 'hsl(var(--color-grayish-blue) / <alpha-value>)',
        darkGrayishBlue: 'hsl(var(--color-dark-grayish-blue) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
