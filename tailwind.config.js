module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    normal: "#1DB954",
                    dark: "#0a451f",
                },
                background: "#121212",
                gray: {
                    dark: "rgba(0, 0, 0, 0.8)",
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
        },
    },
    plugins: [],
};
