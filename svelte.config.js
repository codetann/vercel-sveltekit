import preprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript'; // import here

const config = {
	kit: {
		target: '#svelte'
	},
	preprocess: [
		typescript(), // add typescript here
		preprocess({
			postcss: true
		})
	]
};

export default config;
