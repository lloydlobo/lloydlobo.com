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
    fontFamily: {
      // sans: ['"IBM Plex Sans","Inter"', "sans-serif"],
      // display: ["cubano", "sans-serif"],
      // body: ["sofia-pro", "sans-serif"],
      // code: ["attribute-mono", "sans-serif"],
      // serif: ['"Newsreader"', "serif"],
      // cursive: ['"Gochi Hand"', "cursive"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray1: "#f8f8f8",
      gray2: "#dbe1e8",
      gray3: "#b2becd",
      gray4: "#6c7983",
      gray5: "#454e56",
      gray6: "#2a2e35",
      gray7: "#12181b",
      dim: "#a0a0a0",
      link: "#0000ee",
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
        // primary: "#f3c77c",
        // primary: "#fff",
        primary: "#d4d4d4",
        secondary: "#a3a3a3",
        // secondary: "#e7cfb1",
        // secondary: "#d4d4d4",
        tertiary: "#f2f2f2",
        accent: "#f6ac9f",
        "on-primary": "#111011",
        // "on-primary": "#0f0d0d",
        "on-secondary": "#151414",
        "on-tertiary": "#1c1c1c",
      },
      boxShadow: {
        "3xl": "0 5px 20px rgb(0 0 0 / 30%)",
        "4xl": "0 5px 20px rgb(0 0 0 / 90%)",
      },
      typography: {
        DEFAULT: {
          css: {
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
            h5: {
              "font-weight": "normal",
              "font-size": "1.25rem",
            },
          },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

// secondary: "#f3c77c",
// primary: "#fbe094",
// 'on-primary': "#0f0d0d",
// text-[#f3c77c]
