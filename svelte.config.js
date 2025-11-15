import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import vercelAdapter from '@sveltejs/adapter-vercel';
import nodeAdapter from '@sveltejs/adapter-node';
import cloudflareAdapter from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/kit/vite';

let selectedAdapter;

if (process.env.DEPLOY_TARGET === 'NETLIFY') {
  selectedAdapter = netlifyAdapter();
} else if (process.env.DEPLOY_TARGET === 'VERCEL') {
  selectedAdapter = vercelAdapter();
} else if (process.env.DEPLOY_TARGET === 'NODE') {
  selectedAdapter = nodeAdapter();
} else if (process.env.DEPLOY_TARGET === 'STATIC') {
  selectedAdapter = staticAdapter();
} else if (process.env.DEPLOY_TARGET === 'CLOUDFLARE') {
  selectedAdapter = cloudflareAdapter();
} else {
  selectedAdapter = autoAdapter();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  onwarn: (warning, handler) => {
    // Ignore unused CSS selector warnings (hljs, theme selectors, etc)
    if (warning.code === 'css-unused-selector') return;
    // Ignore a11y warnings for now
    if (warning.code.startsWith('a11y-')) return;
    handler(warning);
  },
  kit: {
    adapter: selectedAdapter,
    alias: {
      '$src/*': 'src/*',
    },
    prerender: {
      handleMissingId: 'ignore',
      crawl: true,
    }
  }
};

export default config;
