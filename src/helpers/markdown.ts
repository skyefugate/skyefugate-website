import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

// Configure marked with syntax highlighting
marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

// Custom renderer for better control
const renderer = {
  heading({ text, depth }: { text: string; depth: number }) {
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  },
  link({
    href,
    title,
    text,
  }: {
    href: string;
    title?: string | null;
    text: string;
  }) {
    const isExternal = href.startsWith('http');
    const target = isExternal
      ? ' target="_blank" rel="noopener noreferrer"'
      : '';
    const titleAttr = title ? ` title="${title}"` : '';
    return `<a href="${href}"${titleAttr}${target}>${text}</a>`;
  },
  image({
    href,
    title,
    text,
  }: {
    href: string;
    title?: string | null;
    text: string;
  }) {
    const titleAttr = title ? ` title="${title}"` : '';
    return `<img src="${href}" alt="${text}"${titleAttr} loading="lazy" style="max-width: 100%; height: auto;" />`;
  },
};

marked.use({ renderer });

/**
 * Parse markdown content to HTML
 */
export function parseMarkdown(content: string): string {
  try {
    const result = marked.parse(content);
    // marked.parse can return a Promise or string depending on options
    if (typeof result === 'string') {
      return result;
    }
    // If it's a Promise, this shouldn't happen with sync usage, but handle it
    console.error('marked.parse returned a Promise unexpectedly');
    return '';
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return content; // Return raw content as fallback
  }
}

/**
 * Calculate reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate slug from filename
 */
export function generateSlug(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove date prefix if present
    .toLowerCase();
}
