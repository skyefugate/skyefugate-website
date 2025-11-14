import { loadAllPosts, getAllTags } from '$src/helpers/post-utils';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async () => {
  const posts = await loadAllPosts();
  const allTags = getAllTags(posts);

  // Count posts per tag
  const tagCounts = allTags.map((tag) => ({
    tag,
    count: posts.filter((post) => post.tags.includes(tag)).length,
  }));

  return {
    tagCounts,
  };
};
