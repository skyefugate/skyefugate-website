import { loadAllPosts, getAllTags } from '$lib/utils/post-utils';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
  const posts = await loadAllPosts();
  const allTags = getAllTags(posts);
  
  // Count posts per tag
  const tagCounts = allTags.map(tag => ({
    tag,
    count: posts.filter(post => post.tags.includes(tag)).length
  }));
  
  return {
    tagCounts
  };
};
