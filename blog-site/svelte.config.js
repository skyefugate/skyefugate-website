import cloudflareAdapter from '@sveltejs/adapter-cloudflare';
import staticAdapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

let selectedAdapter;

if (process.env.DEPLOY_TARGET === 'STATIC') {
  selectedAdapter = staticAdapter({ fallback: '404.html' });
} else {
  // Default to Cloudflare adapter
  selectedAdapter = cloudflareAdapter();
}

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
