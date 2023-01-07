// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-calibre)', ...fontFamily.sans],
        mono: ['var(--font-sf-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
