
# SvelteKit + Tailwindcss (JIT)

This is a starter template with SvelteKit and Tailwindcss JIT (Just In Time Compiler).

## Installation

Clone repository

```bash
  git clone https://github.com/codetann/sveltekit-tailwind-template.git

  cd sveltekit-tailwind-template

  npm install
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
  npm run dev

  # or start the server and open the app in a new browser tab
  npm run dev -- --open
```

## TypeScript

Install TypeScript dependencies

```bash
  npm install -D @rollup/plugin-typescript typescript tslib
```

Open `svelte.config.js` and import the rollup TypeScript plugin

```js
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
```

Update `<scirpt>` tag in .svelte files

```svelte
<script lang='ts'></scirpt>
```


## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
