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
            sans: ['"Open Sans"', "sans-serif"],
            cursive: ['"Gochi Hand"', "cursive"],
        },
        extend: {
            colors: {
                primary: "#fbe094",
                accent: "#f6ac9f",
            },
        },
    },
    variants: {},
    plugins: [],
};
