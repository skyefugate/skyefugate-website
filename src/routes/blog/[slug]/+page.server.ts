import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = false;

export function load({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  if (slug === '404') throw error(404);

  return {
    slug,
  };
}
