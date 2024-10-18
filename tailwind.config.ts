import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				blue: {
					light: "#8bb6ff",
					DEFAULT: "#4c9aff",
					dark: "#0056b3",
				},
				slate: {
					light: "#6c7380",
					DEFAULT: "#3b3f4a",
					dark: "#2e313a",
				},
				white: "#ffffff",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
