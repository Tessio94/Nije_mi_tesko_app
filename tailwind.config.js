/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				theme1: "#558B39",
				text1: "#CCDCC4",
			},
		},
	},
	plugins: [],
};
