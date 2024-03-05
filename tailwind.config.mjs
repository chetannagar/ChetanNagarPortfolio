/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-cream': '#ffffe3',
			},
		},
		fontFamily: {
			'poppins': ['Poppins', 'sans-serif'],
			'anton': ['Anton', 'sans-serif'],
		},
	},
	darkMode: ['selector', '[data-mode="dark"]'],
	plugins: [],
}
