/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // includes all component files
  ],
  theme: {
    extend: {
      colors: {
        // Optional: you can customize or extend colors here
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'], // example if you're using a custom mono font
      },
    },
  },
  plugins: [],
};
