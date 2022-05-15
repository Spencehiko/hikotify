module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    normal: "#1DB954",
                    dark: "#0a451f",
                },
                secondary: {
                    normal: "#2E77D0",
                    dark: "#0a451f",
                },
                background: "#121212",
                gray: {
                    darkest: "rgba(0, 0, 0, 0.8)",
                    dark: "rgba(31, 31, 31, 0.8)",
                    light: "#282828",
                    lightest: "rgba(255,255,255,.1)",
                },
            },
            lineHeight: {
                2: "0.5rem",
            },
            width: {
                "1/3-20": "calc(100% / 3 - 20px)",
                "1/2-20": "calc(100% / 2 - 20px)",
                "full-20": "calc(100% - 20px)",
            },
            gridTemplateColumns: {
                library:
                    "repeat(auto-fit, minmax(min(100%/3, max(128px, 100%/6)), 1fr))",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
