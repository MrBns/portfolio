import defaultConfig from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{svelte,ts,js,html}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['poppins', defaultConfig.fontFamily.sans]
			}
		}
	},
	plugins: []
};
