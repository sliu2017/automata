import adapter from '@sveltejs/adapter-auto'
import {vitePreprocess} from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({postcss: true}),
  kit: {
    adapter: adapter(),
    alias: {
      '@automata': path.resolve('./src/lib/index.ts'),
    },
  },
}

export default config
