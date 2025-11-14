import { loadAllPosts, groupPostsByDate } from '$src/helpers/post-utils';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  const posts = await loadAllPosts();
  const groupedPosts = groupPostsByDate(posts);

  return {
    groupedPosts,
  };
};
