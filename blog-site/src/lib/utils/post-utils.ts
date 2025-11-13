import matter from 'gray-matter';
import type { Post, PostMetadata } from '$lib/types/Post';
import { calculateReadingTime, generateSlug } from './markdown';

/**
 * Load all markdown posts from the posts directory
 */
export async function loadAllPosts(): Promise<Post[]> {
  const postFiles = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });
  
  const posts: Post[] = [];
  
  for (const [filepath, content] of Object.entries(postFiles)) {
    const filename = filepath.split('/').pop() || '';
    const post = parsePost(filename, content as string);
    
    if (post && validatePost(post)) {
      posts.push(post);
    }
  }
  
  // Sort by date descending (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Load a single post by slug
 */
export async function loadPostBySlug(slug: string): Promise<Post | null> {
  const posts = await loadAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Parse a markdown file into a Post object
 */
function parsePost(filename: string, content: string): Post | null {
  try {
    const { data, content: markdownContent } = matter(content);
    const metadata = data as PostMetadata;
    
    const slug = generateSlug(filename);
    const readingTime = calculateReadingTime(markdownContent);
    
    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      excerpt: metadata.excerpt,
      tags: metadata.tags || [],
      content: markdownContent,
      author: metadata.author,
      thumbnail: metadata.thumbnail,
      featured: metadata.featured || false,
      readingTime
    };
  } catch (error) {
    console.error(`Error parsing post ${filename}:`, error);
    return null;
  }
}

/**
 * Validate that a post has all required fields
 */
function validatePost(post: Post): boolean {
  const errors: string[] = [];
  
  if (!post.title) errors.push('Title is required');
  if (!post.date) errors.push('Date is required');
  if (!post.excerpt) errors.push('Excerpt is required');
  if (!post.tags || post.tags.length === 0) errors.push('At least one tag is required');
  
  if (errors.length > 0) {
    console.warn(`Post validation failed for ${post.slug}:`, errors);
    return false;
  }
  
  return true;
}

/**
 * Get all unique tags from posts
 */
export function getAllTags(posts: Post[]): string[] {
  const tagSet = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Get posts by tag
 */
export function getPostsByTag(posts: Post[], tag: string): Post[] {
  return posts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Group posts by year and month
 */
export function groupPostsByDate(posts: Post[]): Map<string, Map<string, Post[]>> {
  const grouped = new Map<string, Map<string, Post[]>>();
  
  posts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    
    if (!grouped.has(year)) {
      grouped.set(year, new Map());
    }
    
    const yearMap = grouped.get(year)!;
    if (!yearMap.has(month)) {
      yearMap.set(month, []);
    }
    
    yearMap.get(month)!.push(post);
  });
  
  return grouped;
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(post: Post, allPosts: Post[], limit = 3): Post[] {
  const related = allPosts
    .filter(p => p.slug !== post.slug)
    .map(p => ({
      post: p,
      score: p.tags.filter(tag => post.tags.includes(tag)).length
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
  
  return related;
}
