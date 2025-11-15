// import { redirect } from '@sveltejs/kit';

// import config from '$src/helpers/config';
// import * as publicEnvs from '$env/static/public';

// // If the app is configured to use the /index route instead of home, then redirect
// export function load() {
//   const shouldLoadIndex = publicEnvs?.PUBLIC_LOAD_INDEX || config?.loadIndex;
//   if (shouldLoadIndex) {
//     throw redirect(302, '/index');
//   }
// };

import { load as loadProjects } from '$src/routes/projects/+page.server';
import { load as loadSocials } from '$src/routes/contact/+page.server';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async (event) => {
  return {
    repos: (await loadProjects(event)).repos,
    socials: (await loadSocials()).props,
  };
};
