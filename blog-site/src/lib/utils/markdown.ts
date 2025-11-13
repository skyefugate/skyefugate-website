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
    }
  })
);

// Custom renderer for better control
const renderer = {
  heading(text: string, level: number) {
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} id="${id}">${text}</h${level}>`;
  },
  link(href: string, title: string | null, text: string) {
    const isExternal = href.startsWith('http');
    const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    const titleAttr = title ? ` title="${title}"` : '';
    return `<a href="${href}"${titleAttr}${target}>${text}</a>`;
  },
  image(href: string, title: string | null, text: string) {
    const titleAttr = title ? ` title="${title}"` : '';
    return `<img src="${href}" alt="${text}"${titleAttr} loading="lazy" style="max-width: 100%; height: auto;" />`;
  }
};

marked.use({ renderer });

/**
 * Parse markdown content to HTML
 */
export function parseMarkdown(content: string): string {
  return marked.parse(content) as string;
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
    day: 'numeric'
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
