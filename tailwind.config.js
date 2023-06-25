/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#094B0F',
      bgcolor: '#F1E9CE',
      white: '#fff',
    },
    minHeight: {
      inh: 'inherit',
    },
  },
  plugins: [daisyui],
  corePlugins: {
    preflight: true,
  },
};
