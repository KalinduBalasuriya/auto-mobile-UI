/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        basic: {
          basicGreen: "#407337",
          basicLightGreen: "#6b9c43",
          basicYellow: "#F4E0AF",
          basicPink: "#F9C0AB",
        },
      },
    },
  },
  plugins: [],
};
