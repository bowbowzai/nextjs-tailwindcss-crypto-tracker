module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "search-bg": "#222531",
                main: "rgb(17,16,19)",
            },
            borderWidth: {
                1: "1px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};