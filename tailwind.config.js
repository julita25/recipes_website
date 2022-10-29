const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./config/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "var(--color-primary)",
        dark: "var(--color-primary-dark)"
      },
      secondary: {
        DEFAULT: "var(--color-secondary)"
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green
    },
    fontFamily: {
      title: "var(--font-title)",
      default: "var(--font-default)",
      small: "var(--font-small)"
    },
    extend: {}
  },
  plugins: []
};
