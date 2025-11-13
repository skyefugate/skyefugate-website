import { TWITTER_TOKEN, GITHUB_TOKEN } from '$env/static/private';
import type { SocialMetric } from '$src/types/Socials';
import config from '$src/helpers/config';

export const prerender = true;

export const _getTwitterInfo = async (username: string) => {
  const twitterEndpoint = `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`;
  return await fetch(twitterEndpoint, {
    headers: {
      Authorization: `Bearer ${TWITTER_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => res.json())
    .then((stats) => {
      if (stats.data && stats.data.public_metrics) {
        const { public_metrics } = stats.data;
        const { followers_count, tweet_count } = public_metrics;
        const metrics: SocialMetric[] = [
          { label: 'Followers', value: followers_count.toLocaleString() },
          { label: 'Tweets', value: tweet_count.toLocaleString() },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getRedditInfo = async (username: string) => {
  const redditEndpoint = `https://api.reddit.com/user/${username}/about`;
  return await fetch(redditEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.data && stats.data.link_karma) {
        const { total_karma, created_utc } = stats.data;
        const metrics: SocialMetric[] = [
          { label: 'Karma', value: total_karma.toLocaleString() },
          {
            label: 'Joined',
            value: new Date(created_utc * 1000).getFullYear(),
          },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getGithubInfo = async (username: string) => {
  const githubEndpoint = `https://api.github.com/users/${username}`;
  const githubRequest = {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  };
  return await fetch(githubEndpoint, githubRequest)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.public_repos) {
        const { public_repos, followers } = stats;
        const metrics: SocialMetric[] = [
          { label: 'Repos', value: public_repos.toLocaleString() },
          { label: 'Followers', value: followers.toLocaleString() },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getStackOverflowInfo = async (username: string) => {
  if (!username) return [];
  
  try {
    // First, search for the user by display name
    const searchEndpoint = `https://api.stackexchange.com/2.2/users?inname=${username}&site=stackoverflow`;
    const searchRes = await fetch(searchEndpoint);
    const searchData = await searchRes.json();
    
    if (searchData.items && searchData.items.length > 0) {
      const user = searchData.items[0];
      const { reputation, creation_date } = user;
      const metrics: SocialMetric[] = [
        { label: 'Rep', value: reputation.toLocaleString() },
        {
          label: 'Joined',
          value: new Date(creation_date * 1000).getFullYear(),
        },
      ];
      return metrics;
    }
    return [];
  } catch {
    return [];
  }
};

export const _getDevToInfo = async (username: string) => {
  const devToEndpoint = `https://dev.to/api/users/by_username?url=${username.toLocaleLowerCase()}`;
  return await fetch(devToEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      const metrics: SocialMetric[] = [
        { label: 'Joined', value: new Date(stats.joined_at).getFullYear() },
      ];
      return metrics;
    })
    .catch(() => []);
};

export const _getCodersRankInfo = async (username: string) => {
  const codersRankEndpoint = `https://api.codersrank.io/v2/users/${username}?get_by=username`;
  return await fetch(codersRankEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      const metrics: SocialMetric[] = [
        { label: 'Rank', value: stats.position },
      ];
      return metrics;
    })
    .catch(() => []);
};

export const _getMastodonInfo = async (username: string) => {
  if (!username) return [];
  
  // First lookup the user ID by username
  const lookupEndpoint = `https://mastodon.social/api/v1/accounts/lookup?acct=${username}`;
  try {
    const lookupRes = await fetch(lookupEndpoint);
    const userData = await lookupRes.json();
    
    if (userData && userData.id) {
      // Now get the account stats using the ID
      const accountEndpoint = `https://mastodon.social/api/v1/accounts/${userData.id}`;
      const accountRes = await fetch(accountEndpoint);
      const stats = await accountRes.json();
      
      if (stats) {
        const { followers_count, created_at } = stats;
        const metrics: SocialMetric[] = [
          { label: 'Followers', value: followers_count.toLocaleString() },
          { label: 'Joined', value: new Date(created_at).getFullYear() },
        ];
        return metrics;
      }
    }
    return [];
  } catch {
    return [];
  }
};

export const _getKeybaseInfo = async (username: string) => {
  const keyBaseEndpoint = `https://keybase.io/_/api/1.0/user/lookup.json?usernames=${username}`;
  return await fetch(keyBaseEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      if (stats && stats.them && stats.them[0]) {
        const { basics, devices } = stats.them[0];
        const metrics: SocialMetric[] = [
          {
            label: 'Joined',
            value: new Date(basics.ctime * 1000).getFullYear(),
          },
          { label: 'Devices', value: Object.keys(devices).length },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getYouTubeInfo = async (username: string) => {
  if (!username) return [];
  
  // YouTube Data API requires API key, so we'll use a simpler approach
  // This is a basic scraping approach - in production you'd want YouTube Data API
  try {
    const channelUrl = `https://www.youtube.com/@${username}`;
    const response = await fetch(channelUrl);
    const html = await response.text();
    
    // Basic regex to extract subscriber count (this is fragile and for demo only)
    const subMatch = html.match(/"subscriberCountText":\{"simpleText":"([^"]+)"/);
    const videoMatch = html.match(/"videosCountText":\{"runs":\[\{"text":"([^"]+)"/);
    
    const metrics: SocialMetric[] = [];
    if (subMatch) {
      metrics.push({ label: 'Subscribers', value: subMatch[1] });
    }
    if (videoMatch) {
      metrics.push({ label: 'Videos', value: videoMatch[1] });
    }
    
    return metrics;
  } catch {
    return [];
  }
};

export const _getLinkedInInfo = async (username: string) => {
  if (!username) return [];
  
  try {
    const profileUrl = `https://www.linkedin.com/${username}`;
    const response = await fetch(profileUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
      },
    });
    
    if (response.ok) {
      const html = await response.text();
      
      // More aggressive patterns to find 1k+ followers
      const patterns = [
        // Look for "1,000+ followers" or "1K+ followers" 
        /([\d,]+K?\+?)\s+followers?/gi,
        /([\d,]+)\s+followers?/gi,
        // Look in JSON-LD or structured data
        /"followersCount[^"]*":\s*"?(\d+[^"]*)"?/gi,
        // Look for aria-labels or data attributes
        /aria-label="[^"]*(\d+[^"]*)\s+followers?[^"]*"/gi,
        // Look for text patterns with numbers
        /(\d+(?:,\d+)*(?:\.\d+)?[KMB]?\+?)\s*(?:<[^>]*>)?\s*followers?/gi,
        // Look in meta tags
        /content="[^"]*(\d+[^"]*)\s+followers?[^"]*"/gi,
        // Look for specific LinkedIn patterns
        /follower-count[^>]*>([^<]+)</gi,
        /followers[^>]*>([^<]*\d[^<]*)</gi,
      ];
      
      const metrics: SocialMetric[] = [];
      
      // Try each pattern
      for (const pattern of patterns) {
        const matches = [...html.matchAll(pattern)];
        for (const match of matches) {
          if (match[1] && match[1].trim()) {
            const value = match[1].trim();
            // Skip if it's just a year or other non-follower number
            if (!value.match(/^\d{4}$/) && value.match(/[\d,KMB+]/)) {
              metrics.push({ label: 'Followers', value });
              break;
            }
          }
        }
        if (metrics.length > 0) break;
      }
      
      // Also try connections patterns
      const connectionPatterns = [
        /([\d,]+K?\+?)\s+connections?/gi,
        /([\d,]+)\s+connections?/gi,
        /(\d+(?:,\d+)*(?:\.\d+)?[KMB]?\+?)\s*(?:<[^>]*>)?\s*connections?/gi,
      ];
      
      for (const pattern of connectionPatterns) {
        const matches = [...html.matchAll(pattern)];
        for (const match of matches) {
          if (match[1] && match[1].trim()) {
            const value = match[1].trim();
            if (!value.match(/^\d{4}$/) && value.match(/[\d,KMB+]/)) {
              metrics.push({ label: 'Connections', value });
              break;
            }
          }
        }
        if (metrics.length >= 2) break;
      }
      
      // If we found metrics, return them
      if (metrics.length > 0) {
        return metrics;
      }
      
      // Fallback
      metrics.push({ label: 'Profile', value: 'Active' });
      return metrics;
    }
    return [];
  } catch {
    return [];
  }
};

export const _getInstagramInfo = async (username: string) => {
  if (!username) return [];
  
  try {
    // Instagram also blocks scraping, but we can try
    const profileUrl = `https://www.instagram.com/${username}/`;
    const response = await fetch(profileUrl);
    
    if (response.ok) {
      const html = await response.text();
      
      // Try to extract follower count from meta tags or JSON
      const followersMatch = html.match(/"edge_followed_by":\{"count":(\d+)\}/);
      const postsMatch = html.match(/"edge_owner_to_timeline_media":\{"count":(\d+)\}/);
      
      const metrics: SocialMetric[] = [];
      if (followersMatch) {
        metrics.push({ label: 'Followers', value: parseInt(followersMatch[1]).toLocaleString() });
      }
      if (postsMatch) {
        metrics.push({ label: 'Posts', value: postsMatch[1] });
      }
      
      return metrics;
    }
    return [];
  } catch {
    return [];
  }
};

export const _getPeerListInfo = async (username: string) => {
  if (!username) return [];
  
  try {
    const peerlistUrl = `https://peerlist.io/${username}`;
    const response = await fetch(peerlistUrl);
    const html = await response.text();
    
    // Basic extraction - this would need refinement
    const followersMatch = html.match(/(\d+)\s+followers/i);
    
    const metrics: SocialMetric[] = [];
    if (followersMatch) {
      metrics.push({ label: 'Followers', value: followersMatch[1] });
    }
    
    return metrics;
  } catch {
    return [];
  }
};

export const load = async () => {
  const {
    // Get usernames from config
    Twitter: twitterUn,
    Reddit: redditUn,
    GitHub: githubUn,
    StackOverflow: stackoverflowUn,
    'Dev.to': devtoUn,
    CodersRank: codersRankUn,
    Mastodon: mastodonUn,
    KeyBase: keybaseUn,
    YouTube: youtubeUn,
    PeerList: peerlistUn,
    LinkedIn: linkedinUn,
    Instagram: instagramUn,
  } = config.contact.socials;
  // Trigger fetch stats for each social
  const [
    twitter,
    reddit,
    github,
    stackoverflow,
    devto,
    codersrank,
    mastodon,
    keybase,
    youtube,
    peerlist,
    linkedin,
    instagram,
  ] = await Promise.all([
    _getTwitterInfo(twitterUn),
    _getRedditInfo(redditUn),
    _getGithubInfo(githubUn),
    _getStackOverflowInfo(stackoverflowUn),
    _getDevToInfo(devtoUn),
    _getCodersRankInfo(codersRankUn),
    _getMastodonInfo(mastodonUn),
    _getKeybaseInfo(keybaseUn),
    _getYouTubeInfo(youtubeUn),
    _getPeerListInfo(peerlistUn),
    _getLinkedInInfo(linkedinUn),
    _getInstagramInfo(instagramUn),
  ]);
  return {
    props: {
      twitter,
      reddit,
      github,
      stackoverflow,
      devto,
      codersrank,
      mastodon,
      keybase,
      youtube,
      peerlist,
      linkedin,
      instagram,
    },
  };
};
