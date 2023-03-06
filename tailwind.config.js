/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
      display: ["cubano", "sans-serif"],
      body: ["sofia-pro", "sans-serif"],
      code: ["attribute-mono", "sans-serif"],
      serif: ['"Newsreader"', "serif"],
      cursive: ['"Gochi Hand"', "cursive"],
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
      colors: {
        primary: "#f3c77c",
        "on-primary": "#151414",
        secondary: "#e7cfb1",
        "on-secondary": "#0f0d0d",
        // 'on-secondary': "#151414",
        accent: "#f6ac9f",
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
