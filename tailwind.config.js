/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f0c29", // Dep blue/black
                secondary: "#f7b733", // Gold/Yellow
                tertiary: "#302b63", // Purple/Blue
                "black-100": "#24243e",
                "black-200": "#0f0c29",
                "white-100": "#ffffff",
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
