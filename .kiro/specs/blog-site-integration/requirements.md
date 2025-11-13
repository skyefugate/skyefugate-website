# Requirements Document

## Introduction

This document outlines the requirements for building a blog-only website that seamlessly integrates with the existing portfolio site. The blog site will be a separate SvelteKit application deployed to Cloudflare Pages, but will maintain identical visual styling, theme system, and user experience to create a cohesive ecosystem where users cannot distinguish between the two sites.

## Glossary

- **Blog_Site**: The new SvelteKit application dedicated to blog content
- **Portfolio_Site**: The existing SvelteKit website at fugate.dev
- **Callisto_Theme**: The default dark theme with teal accent colors (#00ccb4) used in the Portfolio_Site
- **Theme_System**: The multi-theme color scheme system supporting dark, light, and callisto themes
- **Markdown_Post**: A blog post written in markdown format with YAML frontmatter
- **Frontmatter**: YAML metadata at the top of markdown files containing post metadata
- **Design_System**: The collection of CSS variables, typography, components, and visual patterns
- **Static_Generation**: The process of pre-rendering all pages at build time for Cloudflare Pages

## Requirements

### Requirement 1

**User Story:** As a blog reader, I want to see a list of recent blog posts on the home page, so that I can quickly discover and access the latest content

#### Acceptance Criteria

1. WHEN a user navigates to the Blog_Site home page, THE Blog_Site SHALL display a grid of blog post cards showing the most recent posts
2. THE Blog_Site SHALL display each post card with the post title, publication date, excerpt, and tags
3. THE Blog_Site SHALL sort posts by publication date in descending order (newest first)
4. THE Blog_Site SHALL use the same card styling as the Portfolio_Site including background color, border, hover effects, and spacing
5. WHEN a user hovers over a post card, THE Blog_Site SHALL apply the same hover animation and visual feedback as Portfolio_Site cards

### Requirement 2

**User Story:** As a blog reader, I want to read individual blog posts with proper formatting, so that I can consume the content comfortably

#### Acceptance Criteria

1. WHEN a user clicks on a blog post card, THE Blog_Site SHALL navigate to a dedicated post page displaying the full content
2. THE Blog_Site SHALL render markdown content with proper HTML formatting including headings, paragraphs, lists, code blocks, and links
3. THE Blog_Site SHALL display post metadata including title, publication date, author, and tags at the top of the post
4. THE Blog_Site SHALL apply the same typography styles as the Portfolio_Site including font families, sizes, weights, and line heights
5. THE Blog_Site SHALL use syntax highlighting for code blocks that matches the active theme

### Requirement 3

**User Story:** As a blog reader, I want to search for posts by keywords, so that I can find specific content quickly

#### Acceptance Criteria

1. THE Blog_Site SHALL display a search bar component in the navigation area on all pages
2. WHEN a user types a search query, THE Blog_Site SHALL filter posts by matching the query against post titles, excerpts, tags, and content
3. THE Blog_Site SHALL display search results in real-time as the user types
4. THE Blog_Site SHALL highlight matching terms in the search results
5. WHEN no posts match the search query, THE Blog_Site SHALL display a message indicating no results were found

### Requirement 4

**User Story:** As a blog reader, I want to browse posts by category or tag, so that I can explore related content

#### Acceptance Criteria

1. THE Blog_Site SHALL provide an archive page listing all posts organized by publication date
2. THE Blog_Site SHALL provide a categories page showing posts grouped by category or tag
3. WHEN a user clicks on a tag on any page, THE Blog_Site SHALL navigate to a filtered view showing only posts with that tag
4. THE Blog_Site SHALL display tag badges using the same styling as the Portfolio_Site LangBadge component
5. THE Blog_Site SHALL maintain consistent navigation and layout across all archive and category pages

### Requirement 5

**User Story:** As a site visitor, I want the blog to look identical to the portfolio site, so that I have a seamless experience across both sites

#### Acceptance Criteria

1. THE Blog_Site SHALL use the exact same CSS color variables as the Portfolio_Site for all three themes (dark, light, callisto)
2. THE Blog_Site SHALL use the same font families (Poppins, FiraCode, RedHatText) with identical font weights and styles
3. THE Blog_Site SHALL implement the same navigation bar component with identical styling, layout, and behavior
4. THE Blog_Site SHALL implement the same footer component with identical content and styling
5. THE Blog_Site SHALL use the same card background, borders, spacing, and border radius values as the Portfolio_Site

### Requirement 6

**User Story:** As a site visitor, I want to switch between themes on the blog site, so that I can customize my reading experience

#### Acceptance Criteria

1. THE Blog_Site SHALL implement a theme switcher component identical to the Portfolio_Site ThemeSwitcher
2. WHEN a user selects a theme, THE Blog_Site SHALL apply the corresponding color scheme immediately
3. THE Blog_Site SHALL persist the selected theme in browser storage
4. THE Blog_Site SHALL support the same three themes as the Portfolio_Site (dark, light, callisto)
5. THE Blog_Site SHALL default to the callisto theme when no theme preference is stored

### Requirement 7

**User Story:** As a content creator, I want to write blog posts in markdown with frontmatter, so that I can easily manage and publish content

#### Acceptance Criteria

1. THE Blog_Site SHALL support markdown files stored in a posts directory within the project
2. THE Blog_Site SHALL parse YAML frontmatter from markdown files to extract metadata
3. THE Blog_Site SHALL require frontmatter fields for title, date, tags, and excerpt
4. THE Blog_Site SHALL support optional frontmatter fields for author, featured image, and category
5. THE Blog_Site SHALL generate static pages for all markdown posts at build time

### Requirement 8

**User Story:** As a site administrator, I want the blog to be deployed to Cloudflare Pages, so that it has fast global performance and low hosting costs

#### Acceptance Criteria

1. THE Blog_Site SHALL use the SvelteKit static adapter for static site generation
2. THE Blog_Site SHALL generate all pages at build time with no server-side rendering
3. THE Blog_Site SHALL include a build script compatible with Cloudflare Pages deployment
4. THE Blog_Site SHALL produce output in the correct directory structure for Cloudflare Pages
5. THE Blog_Site SHALL include proper configuration for client-side routing on Cloudflare Pages

### Requirement 9

**User Story:** As a site visitor, I want the blog to be responsive across all devices, so that I can read comfortably on mobile, tablet, or desktop

#### Acceptance Criteria

1. THE Blog_Site SHALL use the same media query breakpoints as the Portfolio_Site
2. WHEN viewed on mobile devices, THE Blog_Site SHALL display navigation links in a stacked vertical layout
3. WHEN viewed on mobile devices, THE Blog_Site SHALL display post cards in a single column
4. WHEN viewed on tablet devices, THE Blog_Site SHALL display post cards in a two-column grid
5. WHEN viewed on desktop devices, THE Blog_Site SHALL display post cards in a three-column grid

### Requirement 10

**User Story:** As a site visitor, I want to navigate between key sections of the blog, so that I can explore different types of content

#### Acceptance Criteria

1. THE Blog_Site SHALL include navigation links for Home, Archive, Categories, and About pages
2. THE Blog_Site SHALL highlight the active navigation link using the same styling as the Portfolio_Site
3. WHEN a user clicks a navigation link, THE Blog_Site SHALL navigate to the corresponding page
4. THE Blog_Site SHALL use the same accent colors for navigation links as defined in the Portfolio_Site config
5. THE Blog_Site SHALL maintain the same navigation bar layout and positioning as the Portfolio_Site

### Requirement 11

**User Story:** As a site visitor, I want to see visual feedback when interacting with elements, so that the site feels responsive and polished

#### Acceptance Criteria

1. THE Blog_Site SHALL apply hover effects to all interactive elements (links, buttons, cards) matching the Portfolio_Site
2. WHEN a user hovers over a button, THE Blog_Site SHALL apply the same scale and rotation transform as Portfolio_Site buttons
3. WHEN a user hovers over a link, THE Blog_Site SHALL apply the same background color change as Portfolio_Site links
4. THE Blog_Site SHALL use the same transition timing and easing functions as the Portfolio_Site
5. THE Blog_Site SHALL apply the same grayscale filter effects to buttons as the Portfolio_Site

### Requirement 12

**User Story:** As a content creator, I want posts to support rich markdown features, so that I can create engaging and well-formatted content

#### Acceptance Criteria

1. THE Blog_Site SHALL render markdown headings (h1-h6) with the same styling as the Portfolio_Site Heading component
2. THE Blog_Site SHALL render inline code with monospace font and background color matching the theme
3. THE Blog_Site SHALL render code blocks with syntax highlighting and proper indentation
4. THE Blog_Site SHALL render markdown links with the same styling as Portfolio_Site links
5. THE Blog_Site SHALL render markdown images with responsive sizing and proper alt text
