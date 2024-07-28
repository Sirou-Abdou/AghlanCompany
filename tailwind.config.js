/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {

      'xs': '360px',
      // => @media (min-width: 576px) { ... }

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
      'lg': '1660px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "#010851",
        secondary: "#9A7AF1",
        tartiary: "#707070",
        pink: "#EE9AE5",
      },
    },
  },
  plugins: [],
};
