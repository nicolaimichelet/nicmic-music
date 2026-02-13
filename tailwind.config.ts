import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0d1320",
                backgroundDeep: "#090e18",
                foreground: "var(--foreground)",
                text: "#d4dfe9",
                textMuted: "#6889a8",
                accent: "#8ec2e8",
                accentDim: "#5a94b8",
                border: "rgba(142, 194, 232, 0.07)",
                glow: "rgba(142, 194, 232, 0.10)",
                warm: "#c4956a",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                title: ["var(--font-title)", "cursive"],
                subtitle: ["var(--font-subtitle)", "cursive"],
                body: ["var(--font-body)", "serif"],
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "star-pulse": {
                    "0%, 100%": { opacity: "0.05" },
                    "50%": { opacity: "1" },
                },
                starBreath: {
                    "0%, 100%": { opacity: "0.03", transform: "scale(1)" },
                    "50%": { opacity: "var(--star-max, 0.2)", transform: "scale(1.4)" },
                },
                snowfall: {
                    "0%": { opacity: "0", transform: "translateX(0) translateY(-20px)" },
                    "5%": { opacity: "var(--snow-opacity, 0.15)" },
                    "90%": { opacity: "var(--snow-opacity, 0.15)" },
                    "100%": { opacity: "0", transform: "translateX(var(--snow-drift, 0px)) translateY(100vh)" },
                },
                mistDrift: {
                    "0%": { transform: "translateX(-5%) translateY(0)" },
                    "100%": { transform: "translateX(5%) translateY(-2%)" },
                },
                scrollPulse: {
                    "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
                    "50%": { opacity: "0.6", transform: "scaleY(1.2)" },
                },
            },
            animation: {
                "fade-in": "fade-in 700ms ease-out forwards",
                "star-pulse": "star-pulse var(--star-duration, 4s) ease-in-out var(--star-delay, 0s) infinite",
                "star-breath": "starBreath ease-in-out infinite",
                snowfall: "snowfall linear infinite",
                "mist-drift": "mistDrift 25s ease-in-out infinite alternate",
                "scroll-pulse": "scrollPulse 2.5s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
