import staticAdapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

// Use static adapter by default, Cloudflare for production builds
const selectedAdapter = staticAdapter({ fallback: '404.html' });

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({ scss: true }),
  kit: {
    adapter: selectedAdapter,
    alias: {
      '$lib': 'src/lib'
    },
    prerender: {
      handleMissingId: 'ignore',
      handleHttpError: 'warn',
      crawl: true,
      entries: ['*']
    }
  }
};

export default config;
