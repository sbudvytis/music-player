/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      minWidth: {
        96: '24rem',
      },
      rotate: {
        90: '-90deg',
      },
    },
  },
  daisyui: {
    themes: ['nord'],
  },
  plugins: [require('daisyui')],
}
