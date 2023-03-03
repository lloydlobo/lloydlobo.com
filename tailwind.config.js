/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['"Inter"', "sans-serif"],
            cursive: ['"Gochi Hand"', "cursive"],
        },
        extend: {
            colors: {
                primary: "#f3c77c",
                'on-primary': "#151414",
                secondary: "#e7cfb1",
                'on-secondary': "#0f0d0d",
                // 'on-secondary': "#151414",
                accent: "#f6ac9f",
            },
        },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
    ],
};

// secondary: "#f3c77c",
// primary: "#fbe094",
// 'on-primary': "#0f0d0d",
// text-[#f3c77c]
