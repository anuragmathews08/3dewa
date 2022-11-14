/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#d5e6ef",
          200: "#cbe0eb",
          300: "#c1d9e7",
          400: "#accddf",
          500: "#97c0d7",
          600: "#799aac",
          700: "#5b7381",
          800: "#3c4d56",
          900: "#1e262b",
        },
        purple: {
          100: "#ede0ea",
          200: "#e8d8e5",
          300: "#e3d0df",
          400: "#dac1d5",
          500: "#d1b1ca",
          600: "#bc9fb6",
          700: "#bc9fb6",
          800: "#927c8d",
          900: "#695965",
        },
      },
    },
  },
  plugins: [],
};
