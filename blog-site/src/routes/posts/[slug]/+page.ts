import { loadPostBySlug, loadAllPosts, getRelatedPosts } from '$lib/utils/post-utils';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
  const post = await loadPostBySlug(params.slug);
  
  if (!post) {
    throw error(404, 'Post not found');
  }
  
  const allPosts = await loadAllPosts();
  const relatedPosts = getRelatedPosts(post, allPosts, 3);
  
  return {
    post,
    relatedPosts
  };
};
