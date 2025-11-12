/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
      "./*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
          heading: ['"Unbounded"', 'sans-serif'],
        },
        // colors: {
        //   'neutral-darkest': '#0b0b0b',
        //   'electric-violet': '#6e00ff',
        //   'electric-violet-dark': '#5800cc',
        // },
      },
    },
    plugins: [],
  };