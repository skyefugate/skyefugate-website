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
  let scrollY = 0;

  // Extract headings from markdown content
  function extractHeadings(content: string): TocItem[] {
    const headingRegex = /^(#{2,6})\s+(.+)$/gm; // Skip H1, start from H2
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      // Match the markdown renderer's ID generation exactly
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      
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
    const viewportHeight = window.innerHeight;

    let current = '';
    let bestScore = -1;
    
    for (const heading of headings) {
      if (heading) {
        const rect = heading.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Check if heading is visible in viewport
        if (elementTop < viewportHeight && elementBottom > 0) {
          // Score based on how close to top of viewport (higher score = closer to top)
          const score = viewportHeight - Math.max(0, elementTop);
          if (score > bestScore) {
            bestScore = score;
            current = heading.id;
          }
        }
      }
    }

    // Fallback: if no heading is visible, use the last one that passed
    if (!current) {
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.getBoundingClientRect().top <= 100) {
          current = heading.id;
          break;
        }
      }
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

  // Handle scroll for TOC positioning
  function handleScroll() {
    if (browser) {
      scrollY = window.scrollY;
      updateActiveHeading();
    }
  }

  // Calculate TOC position based on scroll
  $: tocOffset = Math.max(0, Math.min(scrollY * 0.1, 100));

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
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

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
  <div class="toc-container" style="transform: translateY(calc(-50% + {tocOffset}px))">
    {#if !readerMode}
      <nav class="toc" class:visible={isVisible}>
        <div class="toc-header">
          <button 
            class="reader-btn" 
            on:click={toggleReaderMode} 
            title="Toggle reader mode"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </button>
          <h3>Contents</h3>
          <button 
            class="close-btn" 
            on:click={toggleToc} 
            title="Hide contents"
          >
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
    {:else}
      <!-- Reader mode exit notch -->
      <div class="reader-notch" title="Exit reader mode" on:click={toggleReaderMode}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </div>
    {/if}

    {#if !isVisible && !readerMode}
      <!-- Hidden TOC peek tab -->
      <div class="toc-peek-tab" on:click={toggleToc} title="Show contents">
        <div class="peek-content">
          <div class="peek-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          <div class="peek-text">TOC</div>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .toc-container {
    position: fixed;
    top: 50%;
    right: 2rem;
    z-index: 100;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    transition: transform 0.3s ease;
    
    @media (max-width: 1200px) {
      right: 1rem;
    }
    
    @media (max-width: 768px) {
      display: none;
    }
  }

  .toc {
    width: 280px;
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

  .toc-peek-tab {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 32px;
    height: 120px;
    background: var(--card-background);
    border: var(--card-border);
    border-right: none;
    border-radius: 8px 0 0 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    z-index: 99;
    
    &:hover {
      width: 48px;
      background: var(--accent-1);
      color: white;
      transform: translateY(-50%) translateX(-4px);
    }
    
    .peek-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--dimmed-text);
      transition: color 0.2s ease;
    }
    
    &:hover .peek-content {
      color: white;
    }
    
    .peek-text {
      font-size: 0.7rem;
      font-weight: 600;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      letter-spacing: 1px;
    }
  }

  .toc-list {
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    overflow: visible;
  }

  .reader-notch {
    width: 32px;
    height: 48px;
    background: var(--card-background);
    border: var(--card-border);
    border-radius: 8px 0 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--dimmed-text);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--foreground);
      transform: translateX(-4px);
    }
  }

  .toc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem 0.75rem;
    border-bottom: var(--card-border);
    
    .reader-btn {
      border: none;
      background: none;
      color: var(--dimmed-text);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: color 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        color: var(--foreground);
      }
    }
    
    h3 {
      margin: 0;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--foreground);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .close-btn {
      border: none;
      background: none;
      color: var(--dimmed-text);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: color 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        color: var(--foreground);
      }
    }
  }

  .toc-item {
    margin: 0;
    
    &.level-2 { 
      padding-left: 1.25rem; 
      font-weight: 500;
      
      .toc-link {
        color: var(--foreground);
        font-size: 0.9rem;
      }
    }
    &.level-3 { 
      padding-left: 2rem; 
      font-size: 0.85rem;
      
      .toc-link {
        color: var(--dimmed-text);
        opacity: 0.9;
      }
    }
    &.level-4 { 
      padding-left: 2.75rem; 
      font-size: 0.8rem;
      
      .toc-link {
        color: var(--dimmed-text);
        opacity: 0.8;
      }
    }
    &.level-5 { 
      padding-left: 3.5rem; 
      font-size: 0.8rem;
      
      .toc-link {
        color: var(--dimmed-text);
        opacity: 0.7;
      }
    }
    &.level-6 { 
      padding-left: 4.25rem; 
      font-size: 0.75rem;
      
      .toc-link {
        color: var(--dimmed-text);
        opacity: 0.6;
      }
    }
    
    &.active .toc-link {
      color: var(--accent-1) !important;
      font-weight: 600;
      opacity: 1 !important;
      
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
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.4;
    cursor: pointer;
    transition: all 0.2s ease;
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
      color: var(--foreground) !important;
      opacity: 1 !important;
    }
  }

  // Reader mode styles - hide TOC completely
  :global(body.reader-mode) {
    background: #faf9f7 !important;
    
    :global(.container) {
      max-width: 650px !important;
      padding: 0 3rem !important;
    }
    
    :global(.post-content) {
      font-family: Georgia, 'Times New Roman', serif !important;
      font-size: 1.2rem !important;
      line-height: 1.7 !important;
      color: #2d2d2d !important;
    }
    
    :global(.related-posts),
    :global(.back-nav),
    :global(.hero-image),
    :global(.blog-image) {
      display: none !important;
    }
    
    :global(.post-header) {
      border: none !important;
      text-align: center !important;
    }
  }
  
  :global(body.reader-mode h1),
  :global(body.reader-mode h2),
  :global(body.reader-mode h3),
  :global(body.reader-mode h4),
  :global(body.reader-mode h5),
  :global(body.reader-mode h6) {
    color: #1a1a1a !important;
    font-family: Georgia, 'Times New Roman', serif !important;
  }
</style>
