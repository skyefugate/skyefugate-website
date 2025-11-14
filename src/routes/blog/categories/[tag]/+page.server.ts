import { loadAllPosts, getPostsByTag } from '$src/helpers/post-utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  const allPosts = await loadAllPosts();
  const posts = getPostsByTag(allPosts, params.tag);

  if (posts.length === 0) {
    throw error(404, `No posts found for tag: ${params.tag}`);
  }

  return {
    tag: params.tag,
    posts,
  };
};
