export type Theme = 'dark' | 'light' | 'callisto';

export interface NavLink {
  label: string;
  route: string;
  color: string;
  description?: string;
}

export interface BlogConfig {
  title: string;
  author: string;
  description: string;
  baseUrl: string;
  defaultTheme: Theme;
  navLinks: NavLink[];
  colorSchemes: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
