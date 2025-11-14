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
  let isVisible = false;

  // Extract headings from markdown content
  function extractHeadings(content: string): TocItem[] {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
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
    const scrollY = window.scrollY + 100; // Offset for better UX

    let current = '';
    for (const heading of headings) {
      if (heading && heading.offsetTop <= scrollY) {
        current = heading.id;
      }
    }

    activeId = current;
  }

  // Toggle TOC visibility
  function toggleToc() {
    isVisible = !isVisible;
  }

  onMount(() => {
    tocItems = extractHeadings(content);
    
    if (tocItems.length > 0) {
      // Add IDs to headings in the DOM
      tocItems.forEach(item => {
        const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
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
      };
    }
  });
</script>

{#if tocItems.length > 0}
  <div class="toc-container" class:visible={isVisible}>
    <button class="toc-toggle" on:click={toggleToc} aria-label="Toggle table of contents">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
    </button>

    <nav class="toc" class:expanded={isVisible}>
      <div class="toc-header">
        <h3>Contents</h3>
        <button class="close-btn" on:click={toggleToc} aria-label="Close table of contents">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
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
    
    @media (max-width: 1200px) {
      right: 1rem;
    }
    
    @media (max-width: 768px) {
      top: auto;
      bottom: 2rem;
      right: 1rem;
      transform: none;
    }
  }

  .toc-toggle {
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 12px;
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
    
    .visible & {
      opacity: 0;
      pointer-events: none;
    }
  }

  .toc {
    position: absolute;
    top: 0;
    right: 0;
    width: 280px;
    max-height: 70vh;
    background: var(--card-background);
    border: var(--card-border);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    transform: translateX(20px);
    transition: all 0.3s ease;
    overflow: hidden;
    
    &.expanded {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
    
    @media (max-width: 768px) {
      width: 90vw;
      max-width: 320px;
      right: 0;
      transform: translateY(20px);
      
      &.expanded {
        transform: translateY(0);
      }
    }
  }

  .toc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: var(--card-border);
    
    h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: var(--foreground);
    }
    
    .close-btn {
      border: none;
      background: none;
      color: var(--dimmed-text);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: color 0.2s ease;
      
      &:hover {
        color: var(--foreground);
      }
    }
  }

  .toc-list {
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    max-height: calc(70vh - 60px);
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
    
    &.level-1 { padding-left: 1.25rem; }
    &.level-2 { padding-left: 1.75rem; }
    &.level-3 { padding-left: 2.25rem; }
    &.level-4 { padding-left: 2.75rem; }
    &.level-5 { padding-left: 3.25rem; }
    &.level-6 { padding-left: 3.75rem; }
    
    &.active .toc-link {
      color: var(--accent-1);
      font-weight: 500;
      
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

  // Hide on very small screens
  @media (max-width: 480px) {
    .toc-container {
      display: none;
    }
  }
</style>
