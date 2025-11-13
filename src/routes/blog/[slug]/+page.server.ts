import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchPostsFromRss } from '$src/helpers/fetch-rss-posts';
import { rssFeedUrls } from '$src/store/BlogStore';
import { get } from 'svelte/store';

export const prerender = true;

// Provide the available blog post slugs for prerendering
export async function entries() {
  try {
    const feeds = get(rssFeedUrls);
    const posts = await fetchPostsFromRss(feeds);
    return posts.map(post => ({ slug: post.slug }));
  } catch (error) {
    // If we can't fetch posts, return empty array to skip prerendering
    console.warn('Could not fetch blog posts for prerendering:', error);
    return [];
  }
}

export function load({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if (slug === '404') throw error(404);

  return {
    slug,
  };
}
