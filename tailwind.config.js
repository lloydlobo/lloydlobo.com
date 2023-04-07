const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // class, 'media' or boolean.
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      // gray0: "#fafafa",
      gray0: "#f6f7fa",
      gray1: "#f8f8f8",
      gray2: "#dbe1e8",
      gray3: "#b2becd",
      gray4: "#6c7983",
      gray5: "#454e56",
      gray6: "#2a2e35",
      gray7: "#12181b",
      dim: "#a0a0a0",
      // dim: "#7d8590",
      // link: "#2f81f7",
      link: "#0969da",
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm)", ...fontFamily.sans],
        serif: ["var(--font-charter)", ...fontFamily.serif],
      },
      colors: {
        primary: "#f6f7fa",
        "primary-muted": "#656d76",
        secondary: "#e6edf3",
        "heading-light": "#1f2427",
        tertiary: "#7d8694",
        "on-primary": "#0e1117",
        "on-secondary": "#161a22",
        "on-tertiary": "#1f2427",
        accent: "#f6ac9f",
        "on-gray0": "#444",
      },
      // secondary: "#d4d4d4", tertiary: "#a3a3a3", "on-primary": "#111011", "on-secondary": "#151414",
      // primary: "#f3c77c", primary: "#fff", secondary: "#e7cfb1", secondary: "#d4d4d4", "on-primary": "#0f0d0d",
      boxShadow: {
        "3xl": "0 5px 20px rgb(0 0 0 / 30%)",
        "4xl": "0 5px 20px rgb(0 0 0 / 90%)",
      },
      typography: {
        DEFAULT: {
          css: {
            // These can be used as `.h1` className for divs etc..
            h1: {
              "font-weight": "normal",
              "font-size": "2.5rem",
            },
            h2: {
              "font-weight": "normal",
              "font-size": "2rem",
            },
            h3: {
              "font-weight": "normal",
              "font-size": "1.75rem",
            },
            h4: {
              "font-weight": "normal",
              "font-size": "1.5rem",
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
