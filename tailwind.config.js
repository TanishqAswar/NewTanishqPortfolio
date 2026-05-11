/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#050816",    // True deep dark background
                secondary: "#aaa6c3", // Muted lavender-grey for secondary text
                tertiary: "#1d1836",  // Card/surface background
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                // "hero-pattern": "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
}
