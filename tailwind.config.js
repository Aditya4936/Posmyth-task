/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B4F44",
        secondary: "#66BB94",
        white: "#FFFFFF",
        black: "#3D3D3D",
        gray: "#F8F8FF"
      },
    },
  },
  plugins: [],
};
