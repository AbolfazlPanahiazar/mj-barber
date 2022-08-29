/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      F2F5F7: "#F2F5F7",
    },
    maxWidth: {
      "8xl": "90rem",
    },
  },
  plugins: [],
};
