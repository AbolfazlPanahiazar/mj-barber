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
      "191C62": "#191C62",
      B95F1E: "#B95F1E",
      E7EAEE: "#E7EAEE",
    },
    maxWidth: {
      "2xl": "15rem",
      "8xl": "90rem",
      219: "219px",
      452: "452px",
    },
  },
  plugins: [],
};
