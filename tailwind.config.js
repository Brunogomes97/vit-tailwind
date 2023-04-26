/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkmode: 'media',
  theme: {
    fontFamily: {
      'boldo-standard': ['Manrope'],
      sans: ['Open Sans'],
    },
    colors: {
      'darker-blue': '#0A2640',
      'dark-blue': '#1C3D5B',
      'total-white': '#ffffff',
      'light-green': '#65E4A3',
      'total-black': '#111111',
      'total-gray': '#777777',
    },

    extend: {
      gridTemplateColumns: {
        cards: 'repeat(3, 18.75rem)',
        commentary: 'repeat(3, 21.875rem)',
      },
    },
  },
  plugins: [],
};
// https://tailwindcss.com/docs/configuration
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
