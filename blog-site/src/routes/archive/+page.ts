import { loadAllPosts, groupPostsByDate } from '$lib/utils/post-utils';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
  const posts = await loadAllPosts();
  const groupedPosts = groupPostsByDate(posts);
  
  return {
    groupedPosts
  };
};
