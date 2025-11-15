export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  author?: string;
  thumbnail?: string;
  headerImage?: string;
  featured?: boolean;
  readingTime?: number;
}

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author?: string;
  thumbnail?: string;
  featured?: boolean;
}
