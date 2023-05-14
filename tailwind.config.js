const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		listStyleType: {
			dash: "'\\2014'",
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		// custom extensions
		plugin(({ addVariant }) => {
			addVariant("child", "& > *");
		}),
	],
};
