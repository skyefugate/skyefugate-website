# Implementation Plan

- [x] 1. Initialize blog site project structure
  - Create new SvelteKit project in a separate directory
  - Configure static adapter for Cloudflare Pages deployment
  - Set up TypeScript configuration matching portfolio site
  - Install required dependencies (marked, highlight.js, sass)
  - _Requirements: 8.1, 8.2, 8.3_

- [ ] 2. Copy and configure design system
  - [x] 2.1 Copy SCSS files from portfolio site
    - Copy `color-palette.scss` with all three theme definitions
    - Copy `typography.scss` with font imports and variables
    - Copy `dimensions.scss` with grid and spacing variables
    - Copy `media-queries.scss` with responsive breakpoints
    - _Requirements: 5.1, 5.2, 5.5_

  - [x] 2.2 Copy font files to static directory
    - Copy FiraCode font files (ttf, woff, woff2)
    - Copy RedHatText font file
    - Install @fontsource/poppins package
    - _Requirements: 5.2_

  - [x] 2.3 Set up theme store
    - Copy `ThemeStore.ts` from portfolio site
    - Implement localStorage persistence for theme selection
    - Create derived store for CSS variable injection
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 3. Create shared UI components
  - [x] 3.1 Implement NavBar component
    - Copy NavBar component from portfolio site
    - Update route links to blog-specific navigation (Home, Archive, Categories, About)
    - Maintain same styling, hover effects, and responsive behavior
    - Integrate ThemeSwitcher component
    - _Requirements: 5.3, 10.1, 10.2, 10.3, 10.4, 10.5_

  - [x] 3.2 Implement Footer component
    - Copy Footer component from portfolio site
    - Update content for blog site context
    - Maintain identical styling and layout
    - _Requirements: 5.4_

  - [x] 3.3 Implement Button component
    - Copy Button component with primary, secondary, and outline variants
    - Maintain same hover effects (scale, rotate, grayscale filter)
    - Support icon integration
    - _Requirements: 11.1, 11.2, 11.5_

  - [x] 3.4 Implement TagBadge component
    - Create component based on portfolio site LangBadge
    - Support clickable and non-clickable variants
    - Apply accent color background with rounded corners
    - _Requirements: 4.4_

  - [x] 3.5 Implement ThemeSwitcher component
    - Copy ThemeSwitcher from portfolio site
    - Support three themes (dark, light, callisto)
    - Integrate with theme store for state management
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 4. Implement markdown processing system
  - [x] 4.1 Create markdown parser utility
    - Set up marked library with custom renderer
    - Implement frontmatter parsing using gray-matter
    - Add syntax highlighting with highlight.js
    - Configure responsive image handling
    - _Requirements: 7.1, 7.2, 12.1, 12.3, 12.5_

  - [x] 4.2 Create post loading utilities
    - Implement function to load all markdown files from posts directory
    - Parse frontmatter and extract metadata
    - Generate slug from filename
    - Calculate reading time from content
    - Validate required frontmatter fields
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [x] 4.3 Create MarkdownRenderer component
    - Render parsed HTML content
    - Apply typography styles matching portfolio site
    - Style code blocks with theme-aware colors
    - Handle inline code styling
    - _Requirements: 2.2, 12.1, 12.2, 12.3, 12.4_

- [ ] 5. Implement post display components
  - [x] 5.1 Create PostCard component
    - Display post title, date, excerpt, and tags
    - Apply card styling matching portfolio site (background, border, spacing)
    - Implement hover effect (scale transform)
    - Support optional featured styling
    - Make entire card clickable to post page
    - _Requirements: 1.2, 1.4, 1.5_

  - [x] 5.2 Create PostGrid component
    - Implement responsive grid layout (1/2/3 columns)
    - Use same grid spacing as portfolio site
    - Support filtering and sorting of posts
    - _Requirements: 1.1, 9.3, 9.4, 9.5_

  - [x] 5.3 Create PostHeader component
    - Display post title with Heading component styling
    - Show publication date, author, and reading time
    - Render tags as clickable TagBadge components
    - _Requirements: 2.3_

- [ ] 6. Implement search functionality
  - [ ] 6.1 Create search utility functions
    - Implement search algorithm filtering by title, excerpt, tags, and content
    - Add debouncing for performance (300ms delay)
    - Support case-insensitive matching
    - _Requirements: 3.2_

  - [ ] 6.2 Create SearchBar component
    - Implement input field with card background styling
    - Add search icon using Icon component
    - Show clear button when query exists
    - Emit search results to parent component
    - _Requirements: 3.1, 3.3_

  - [ ] 6.3 Implement search result highlighting
    - Highlight matching terms in search results
    - Display "No results found" message when appropriate
    - _Requirements: 3.4, 3.5_

- [ ] 7. Build home page
  - [x] 7.1 Create home page layout
    - Implement hero section with site title and description
    - Add SearchBar component
    - Display PostGrid with recent posts (12 most recent)
    - Add "View All Posts" button linking to archive
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 7.2 Implement home page data loading
    - Load all posts at build time in +page.ts
    - Sort posts by date descending
    - Pass posts to page component
    - _Requirements: 1.3, 7.5_

- [ ] 8. Build individual post page
  - [x] 8.1 Create post page layout
    - Implement PostHeader component at top
    - Render markdown content with MarkdownRenderer
    - Add "Back to Posts" navigation button
    - Style with same typography as portfolio site
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 8.2 Implement post page data loading
    - Load single post by slug in +page.ts
    - Parse markdown and frontmatter
    - Generate static page for each post
    - Handle 404 for invalid slugs
    - _Requirements: 7.5_

  - [x] 8.3 Add related posts section
    - Find posts with matching tags
    - Display up to 3 related posts as cards
    - _Requirements: 4.3_

- [ ] 9. Build archive page
  - [x] 9.1 Create archive page layout
    - Group posts by year and month
    - Display in chronological order (newest first)
    - Show post count per month
    - Use same card styling for post items
    - _Requirements: 4.1_

  - [x] 9.2 Implement archive page data loading
    - Load all posts at build time
    - Group by publication date
    - Sort chronologically
    - _Requirements: 4.1_

- [ ] 10. Build categories page
  - [x] 10.1 Create categories overview page
    - Display all unique tags with post counts
    - Implement tag cloud visualization
    - Make tags clickable to filter view
    - _Requirements: 4.2_

  - [x] 10.2 Create tag filter page
    - Show posts filtered by selected tag
    - Display tag name as page heading
    - Use PostGrid for filtered results
    - Add "View All Categories" link
    - _Requirements: 4.3_

  - [x] 10.3 Implement categories data loading
    - Extract all unique tags from posts
    - Count posts per tag
    - Filter posts by tag parameter
    - _Requirements: 4.2, 4.3_

- [x] 11. Create about page
  - Create simple about page with blog description
  - Use same typography and layout as portfolio site
  - Include author information
  - _Requirements: 10.1_

- [ ] 12. Implement root layout
  - [x] 12.1 Create +layout.svelte
    - Add NavBar component at top
    - Add Footer component at bottom
    - Set up main content area with proper spacing
    - Apply theme CSS variables
    - _Requirements: 5.3, 5.4_

  - [x] 12.2 Create +layout.ts
    - Initialize theme store
    - Load global configuration
    - _Requirements: 6.5_

- [x] 13. Create sample blog posts
  - Create 5-10 sample markdown posts with proper frontmatter
  - Include variety of tags for testing
  - Add code blocks for syntax highlighting testing
  - Include images for responsive testing
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 14. Implement responsive design
  - [ ] 14.1 Test and adjust mobile layout
    - Verify navigation stacks vertically
    - Confirm single-column post grid
    - Test search bar usability
    - Check typography scaling
    - _Requirements: 9.1, 9.2, 9.3_

  - [ ] 14.2 Test and adjust tablet layout
    - Verify two-column post grid
    - Test navigation layout
    - Check spacing and padding
    - _Requirements: 9.4_

  - [ ] 14.3 Test and adjust desktop layout
    - Verify three-column post grid
    - Test all hover effects
    - Confirm proper max-width constraints
    - _Requirements: 9.5_

- [ ] 15. Configure build and deployment
  - [x] 15.1 Configure Cloudflare adapter
    - Set up svelte.config.js with cloudflare adapter
    - Configure prerender settings for all routes
    - Set up proper crawling for static generation
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 15.2 Create build scripts
    - Add build:cloudflare script to package.json
    - Configure environment variable handling
    - Set up proper output directory
    - _Requirements: 8.3_

  - [x] 15.3 Create deployment configuration
    - Create _redirects file for client-side routing
    - Configure caching headers
    - Set up proper 404 handling
    - _Requirements: 8.5_

- [x] 16. Create custom 404 page
  - Design 404 page matching portfolio site styling
  - Include "Post Not Found" message
  - Add SearchBar for finding other posts
  - Include links to home and archive pages
  - _Requirements: Error handling_

- [ ] 17. Implement hover effects and animations
  - [ ] 17.1 Apply link hover effects
    - Implement background color change on hover
    - Add smooth transitions (0.2s ease-in-out)
    - Apply to all interactive links
    - _Requirements: 11.3, 11.4_

  - [ ] 17.2 Apply button hover effects
    - Implement scale and rotate transform
    - Add grayscale filter transitions
    - Test across all button variants
    - _Requirements: 11.2, 11.5_

  - [ ] 17.3 Apply card hover effects
    - Implement subtle scale transform
    - Add shadow on hover (optional)
    - Ensure smooth transitions
    - _Requirements: 1.5, 11.1_

- [ ] 18. Add build-time validation
  - Implement post validation function
  - Check required frontmatter fields
  - Validate date formats
  - Log warnings for missing optional fields
  - _Requirements: 7.3, 7.4_

- [ ] 19. Optimize performance
  - Configure font subsetting
  - Implement image lazy loading
  - Set up CSS purging
  - Verify bundle size targets
  - _Requirements: Performance considerations_

- [ ] 20. Final testing and verification
  - [ ] 20.1 Test all navigation flows
    - Verify all internal links work
    - Test back/forward browser navigation
    - Confirm active route highlighting
    - _Requirements: 10.2, 10.3_

  - [ ] 20.2 Test theme switching
    - Verify all three themes apply correctly
    - Test theme persistence across page navigation
    - Confirm localStorage saving
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ] 20.3 Test search functionality
    - Search by title, excerpt, tags, and content
    - Verify debouncing works
    - Test "no results" state
    - Confirm result highlighting
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 20.4 Test responsive layouts
    - Test on mobile viewport (320px, 375px, 414px)
    - Test on tablet viewport (768px, 1024px)
    - Test on desktop viewport (1280px, 1920px)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [ ] 20.5 Visual comparison with portfolio site
    - Compare color consistency across themes
    - Verify typography matches exactly
    - Check component styling alignment
    - Confirm hover effects match
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ] 20.6 Test build process
    - Run full build and verify output
    - Check for build errors or warnings
    - Verify all posts generate static pages
    - Test production build locally
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_
