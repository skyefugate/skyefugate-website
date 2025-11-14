<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  export let content: string;

  interface TocItem {
    id: string;
    text: string;
    level: number;
  }

  let tocItems: TocItem[] = [];
  let activeId = '';
  let isVisible = true;
  let readerMode = false;

  // Extract headings from markdown content
  function extractHeadings(content: string): TocItem[] {
    const headingRegex = /^(#{2,6})\s+(.+)$/gm; // Skip H1, start from H2
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      items.push({ id, text, level });
    }

    return items;
  }

  // Smooth scroll to heading
  function scrollToHeading(id: string) {
    if (!browser) return;
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Update active heading based on scroll position
  function updateActiveHeading() {
    if (!browser || tocItems.length === 0) return;

    const headings = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
    const scrollY = window.scrollY + 150; // Increased offset

    // Find the heading that's currently most visible
    let current = '';
    let closestDistance = Infinity;
    
    for (const heading of headings) {
      if (heading) {
        const rect = heading.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        // If heading is in viewport and closer than previous
        if (rect.top <= 150 && distance < closestDistance) {
          current = heading.id;
          closestDistance = distance;
        }
      }
    }

    // Fallback to first heading if none found
    if (!current && headings.length > 0) {
      current = headings[0].id;
    }

    activeId = current;
  }

  // Toggle TOC visibility
  function toggleToc() {
    isVisible = !isVisible;
  }

  // Toggle reader mode
  function toggleReaderMode() {
    readerMode = !readerMode;
    if (browser) {
      document.body.classList.toggle('reader-mode', readerMode);
    }
  }

  onMount(() => {
    tocItems = extractHeadings(content);
    
    if (tocItems.length > 0) {
      // Add IDs to headings in the DOM
      tocItems.forEach(item => {
        const heading = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
          .find(h => h.textContent?.trim() === item.text);
        if (heading && !heading.id) {
          heading.id = item.id;
        }
      });

      // Set up scroll listener
      const handleScroll = () => updateActiveHeading();
      window.addEventListener('scroll', handleScroll, { passive: true });
      updateActiveHeading();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (browser) {
          document.body.classList.remove('reader-mode');
        }
      };
    }
  });
</script>

{#if tocItems.length > 0}
  <div class="toc-container">
    <div class="controls">
      <button 
        class="control-btn reader-btn" 
        class:active={readerMode}
        on:click={toggleReaderMode} 
        title="Toggle reader mode"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </button>
      
      <button 
        class="control-btn toc-toggle" 
        on:click={toggleToc} 
        title={isVisible ? 'Hide contents' : 'Show contents'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </button>
    </div>

    <nav class="toc" class:visible={isVisible}>
      <div class="toc-header">
        <h3>Contents</h3>
      </div>
      
      <ul class="toc-list">
        {#each tocItems as item}
          <li class="toc-item level-{item.level}" class:active={activeId === item.id}>
            <button 
              class="toc-link"
              on:click={() => scrollToHeading(item.id)}
            >
              {item.text}
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
{/if}

<style lang="scss">
  .toc-container {
    position: fixed;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    
    @media (max-width: 1200px) {
      right: 1rem;
    }
    
    @media (max-width: 768px) {
      display: none; // Hide on mobile for now
    }
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .control-btn {
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 10px;
    background: var(--card-background);
    color: var(--dimmed-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--foreground);
      transform: scale(1.05);
    }
    
    &.active {
      color: var(--accent-1);
      background: var(--accent-1);
      color: white;
    }
  }

  .toc {
    width: 280px;
    max-height: 60vh;
    background: var(--card-background);
    border: var(--card-border);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(20px);
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    transition: all 0.3s ease;
    overflow: hidden;
    
    &:not(.visible) {
      opacity: 0;
      visibility: hidden;
      transform: translateX(20px);
    }
  }

  .toc-header {
    padding: 1rem 1.25rem 0.75rem;
    border-bottom: var(--card-border);
    
    h3 {
      margin: 0;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--foreground);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .toc-list {
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    max-height: calc(60vh - 60px);
    overflow-y: auto;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: var(--dimmed-text);
      border-radius: 2px;
      opacity: 0.3;
    }
  }

  .toc-item {
    margin: 0;
    
    &.level-2 { 
      padding-left: 1.25rem; 
      font-weight: 500;
    }
    &.level-3 { 
      padding-left: 2rem; 
      font-size: 0.85rem;
    }
    &.level-4 { 
      padding-left: 2.75rem; 
      font-size: 0.8rem;
      opacity: 0.9;
    }
    &.level-5 { 
      padding-left: 3.5rem; 
      font-size: 0.8rem;
      opacity: 0.8;
    }
    &.level-6 { 
      padding-left: 4.25rem; 
      font-size: 0.75rem;
      opacity: 0.7;
    }
    
    &.active .toc-link {
      color: var(--accent-1);
      font-weight: 600;
      
      &::before {
        opacity: 1;
        transform: scaleY(1);
      }
    }
  }

  .toc-link {
    display: block;
    width: 100%;
    padding: 0.5rem 1.25rem 0.5rem 0;
    border: none;
    background: none;
    color: var(--dimmed-text);
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.4;
    cursor: pointer;
    transition: color 0.2s ease;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: -4px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--accent-1);
      opacity: 0;
      transform: scaleY(0);
      transition: all 0.2s ease;
    }
    
    &:hover {
      color: var(--foreground);
    }
  }

  // Reader mode styles
  :global(body.reader-mode) {
    background: #1a1a1a !important;
    
    :global(.container) {
      max-width: 700px !important;
    }
    
    :global(.post-content) {
      font-size: 1.1rem !important;
      line-height: 1.8 !important;
      color: #e8e8e8 !important;
    }
    
    :global(.related-posts),
    :global(.back-nav),
    :global(.hero-image) {
      display: none !important;
    }
  }
  
  :global(body.reader-mode h1),
  :global(body.reader-mode h2),
  :global(body.reader-mode h3),
  :global(body.reader-mode h4),
  :global(body.reader-mode h5),
  :global(body.reader-mode h6) {
    color: #ffffff !important;
  }
</style>
