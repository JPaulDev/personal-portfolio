// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const { fontFamily, screens } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

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
      screens: {
        xs: '480px',
        ...screens,
      },
      textColor: {
        skin: {
          primary: withOpacity('--color-text-primary'),
          secondary: withOpacity('--color-text-secondary'),
          tertiary: withOpacity('--color-text-tertiary'),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-bg-primary'),
          secondary: withOpacity('--color-bg-secondary'),
        },
      },
    },
  },
  plugins: [],
};
