/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Helvetica"],
        sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        coolestBlue: {
          700: "#240D57",
        },
        coolestGrey: {
          100: "#DDDDDD",
          200: "#828282",
          300: "#4F4F4F",
        },
      },
      margin: {
        105: "105px",
      },
      width: {
        375: "375px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
