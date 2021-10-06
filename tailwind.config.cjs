const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins']
		},
		extend: {}
	},
	plugins: [require('daisyui')]
};

module.exports = config;
