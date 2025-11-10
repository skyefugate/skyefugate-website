import config from '$src/helpers/config';
import type { RequestHandler } from './$types';
import { readdir } from 'fs/promises';
import { join } from 'path';

export const prerender = true;

// Manual route configuration for priorities and change frequencies
const routeConfig: Record<string, { priority: string; changefreq: string }> = {
  '': { priority: '1.0', changefreq: 'monthly' }, // Home
  'about': { priority: '0.8', changefreq: 'monthly' },
  'projects': { priority: '0.8', changefreq: 'weekly' },
  'contact': { priority: '0.7', changefreq: 'monthly' },
  'volunteering': { priority: '0.6', changefreq: 'monthly' },
  'volunteering/seckc': { priority: '0.5', changefreq: 'monthly' },
};

// Auto-discover routes from the file system
async function discoverRoutes(): Promise<string[]> {
  const routes: string[] = [];
  
  // Add manually configured routes
  routes.push(...Object.keys(routeConfig));
  
  // You can add auto-discovery logic here if needed
  // For now, we'll stick with manual configuration for better control
  
  return [...new Set(routes)]; // Remove duplicates
}

export const GET: RequestHandler = async () => {
  const today = new Date().toISOString().split('T')[0];
  const routes = await discoverRoutes();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const config_route = routeConfig[route] || { priority: '0.5', changefreq: 'monthly' };
    return `  <url>
    <loc>${config.baseUrl}/${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${config_route.changefreq}</changefreq>
    <priority>${config_route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
};
