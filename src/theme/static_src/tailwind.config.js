import colors, { neutral } from "tailwindcss/colors";

const violet = {
	DEFAULT: "#a655af",
	50: "#fbf7fc",
	100: "#f7eef9",
	200: "#eedbf3",
	300: "#e2bfe8",
	400: "#d298da",
	500: "#bc6fc6",
	600: "#a655af",
	700: "#863f8c",
	800: "#6f3573",
	900: "#5c305f",
	950: "#3a163c",
};

const orange = {
	DEFAULT: "#ff8800",
	50: "#fffbec",
	100: "#fff5d3",
	200: "#ffe8a5",
	300: "#ffd66d",
	400: "#ffb832",
	500: "#ffa00a",
	600: "#ff8800",
	700: "#cc6402",
	800: "#a14d0b",
	900: "#82410c",
	950: "#461f04",
};

const red = {
	DEFAULT: "#dc2626",
	50: "#fef2f2",
	100: "#fee2e2",
	200: "#fecaca",
	300: "#fca5a5",
	400: "#f87171",
	500: "#ef4444",
	600: "#dc2626",
	700: "#c91e1e",
	800: "#991b1b",
	900: "#7f1d1d",
	950: "#450a0a",
};

module.exports = {
	content: [
		/**
		 * HTML. Paths to Django template files that will contain Tailwind CSS classes.
		 */

		/*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
		"../templates/**/*.html",

		/*
		 * Main templates directory of the project (BASE_DIR/templates).
		 * Adjust the following line to match your project structure.
		 */
		"../../templates/**/*.html",

		/*
		 * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
		 * Adjust the following line to match your project structure.
		 */
		"../../**/templates/**/*.html",

		/**
		 * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
		 * patterns match your project structure.
		 */
		/* JS 1: Ignore any JavaScript in node_modules folder. */
		// '!../../**/node_modules',
		/* JS 2: Process all JavaScript files in the project. */
		// '../../**/*.js',

		/**
		 * Python: If you use Tailwind CSS classes in Python, uncomment the following line
		 * and make sure the pattern below matches your project structure.
		 */
		// '../../**/*.py'
	],
	theme: {
		colors: {
			primary: red,
			secondary: orange,
			accent: violet,
			neutral: neutral,
			green: colors.lime,
			red: red,
			blue: colors.sky,
			yellow: colors.amber,
		},
		extend: {},
	},
	plugins: [
		/**
		 * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
		 * for forms. If you don't like it or have own styling for forms,
		 * comment the line below to disable '@tailwindcss/forms'.
		 */
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
