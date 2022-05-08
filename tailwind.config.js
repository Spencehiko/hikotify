module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1DB954",
                gray: {
                    dark: "rgba(0, 0, 0, 0.8)",
                    light: "#282828",
                },
            },
            lineHeight: {
                2: "0.5rem",
            },
        },
    },
    plugins: [],
};
