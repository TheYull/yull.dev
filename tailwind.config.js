/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
          heading: ['"Unbounded"', 'sans-serif'],
        },
        colors: {
          'neutral-darkest': '#0b0b0b',
          'electric-violet': '#6e00ff',
          'electric-violet-dark': '#5800cc',
        },
        height: {
          '[72px]': '72px',
        },
        padding: {
          '[64px]': '64px',
        },
        maxWidth: {
          '[1440px]': '1440px',
        },
      },
    },
    plugins: [],
  };