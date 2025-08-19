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
					background: 'var(--background)',
					foreground: 'var(--foreground)'
				},
				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)'
				},
				fontFamily: {
					montserrat: ['var(--font-montserrat)', 'sans-serif'],
				},
				keyframes: {
					'fade-in': {
						'0%': { opacity: '0' },
						'100%': { opacity: '1' }
					}
				},
				animation: {
					'fade-in': 'fade-in 700ms ease-out forwards'
				}
			}
	 },
	 plugins: [require("tailwindcss-animate")],
};
export default config;
