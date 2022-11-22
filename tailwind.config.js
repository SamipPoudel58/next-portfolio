/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--c-primary)',
        'light-gray': 'var(--c-gray-light)',
        'med-gray': 'var(--c-text-gray)',
      },
    },
  },
  plugins: [],
};
