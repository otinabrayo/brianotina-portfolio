export default {
   plugins: {
      "@tailwindcss/postcss": {},
   },
   content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
		},
	},
}