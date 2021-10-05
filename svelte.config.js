import preprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

const config = {
	kit: {
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$ui: path.resolve('./src/components')
				}
			}
		}
	},
	preprocess: [
		typescript(), // add typescript here
		preprocess({
			postcss: true
		})
	]
};

export default config;
