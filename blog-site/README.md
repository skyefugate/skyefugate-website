# Skye Fugate's Blog

A blog-only website built with SvelteKit that seamlessly integrates with the main portfolio site at [fugate.dev](https://fugate.dev).

## Features

- 📝 **Markdown-based posts** with frontmatter metadata
- 🎨 **Callisto theme** matching the portfolio site design
- 🌓 **Theme switching** (Dark, Light, Callisto)
- 📱 **Fully responsive** design
- 🔍 **Category filtering** and tag-based navigation
- 📅 **Archive page** with posts grouped by date
- ⚡ **Static site generation** for optimal performance
- 🎯 **Syntax highlighting** for code blocks
- 🐱 **Custom 404 page** with HTTP cats

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: SCSS with design system from portfolio site
- **Markdown**: marked + gray-matter
- **Syntax Highlighting**: highlight.js
- **Deployment**: Cloudflare Pages
- **Build**: Static site generation

## Project Structure

```
blog-site/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable UI components
│   │   ├── styles/         # Design system (colors, typography, etc.)
│   │   ├── stores/         # Svelte stores (theme, etc.)
│   │   ├── utils/          # Helper functions
│   │   └── types/          # TypeScript types
│   ├── posts/              # Markdown blog posts
│   └── routes/             # SvelteKit routes
│       ├── +layout.svelte  # Root layout
│       ├── +page.svelte    # Home page
│       ├── posts/[slug]/   # Individual post pages
│       ├── archive/        # Archive page
│       ├── categories/     # Category pages
│       └── about/          # About page
└── static/                 # Static assets
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build:cloudflare

# Preview production build
npm run preview
```

## Writing Posts

Create a new markdown file in `src/posts/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2", "tag3"]
author: "Skye Fugate"
featured: false
---

# Your Post Content

Write your post content here using Markdown...
```

### Required Frontmatter Fields

- `title`: Post title
- `date`: Publication date (YYYY-MM-DD format)
- `excerpt`: Short description for post cards
- `tags`: Array of category tags

### Optional Frontmatter Fields

- `author`: Author name (defaults to config)
- `thumbnail`: Featured image URL
- `featured`: Boolean to highlight the post

## Deployment

The site is configured for Cloudflare Pages deployment:

1. Push to your repository
2. Connect to Cloudflare Pages
3. Set build command: `npm run build:cloudflare`
4. Set output directory: `.svelte-kit/cloudflare`

## Design System

The blog uses the exact same design system as the portfolio site:

- **Colors**: Callisto theme with teal accent (#00ccb4)
- **Typography**: Poppins, FiraCode, RedHatText
- **Components**: Matching buttons, cards, and navigation
- **Responsive**: Same breakpoints and grid system

## License

© Skye Fugate 2024
