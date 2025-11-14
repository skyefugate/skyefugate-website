<script lang="ts">
  import { parseMarkdown } from '$src/helpers/markdown';
  
  export let content: string;
  
  $: html = parseMarkdown(content);
</script>

<div class="markdown-content">
  {@html html}
</div>

<style lang="scss">
  .markdown-content {
    line-height: 1.7;
    color: var(--foreground);
    
    :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 700;
      line-height: 1.3;
      color: var(--foreground);
    }
    
    :global(h1) { font-size: 2.5rem; }
    :global(h2) { font-size: 2rem; }
    :global(h3) { font-size: 1.75rem; }
    :global(h4) { font-size: 1.5rem; }
    :global(h5) { font-size: 1.25rem; }
    :global(h6) { font-size: 1.1rem; }
    
    :global(p) {
      margin-bottom: 1.5rem;
    }

    :global(.blog-image) {
      text-align: center;
      margin: 2rem 0;
    }
    
    :global(.blog-image img) {
      display: block;
      margin: 0 auto 1rem auto;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    :global(.blog-image .caption) {
      font-style: italic;
      color: var(--dimmed-text);
      font-size: 0.9rem;
      margin: 0;
      padding: 0 1rem;
    }

    :global(strong) {
      font-weight: 700;
      color: var(--foreground);
    }

    :global(em) {
      font-style: italic;
    }
    
    :global(a) {
      color: var(--accent-1);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.2s ease-in-out;
      
      &:hover {
        border-bottom-color: var(--accent-1);
      }
    }
    
    :global(ul), :global(ol) {
      margin-bottom: 1.5rem;
      padding-left: 2rem;
      
      :global(li) {
        margin-bottom: 0.5rem;
      }
    }
    
    :global(blockquote) {
      border-left: 4px solid var(--accent-1);
      padding-left: 1rem;
      margin: 1.5rem 0;
      color: var(--dimmed-text);
      font-style: italic;
    }
    
    :global(code) {
      font-family: 'FiraCode', monospace;
      background: var(--card-background);
      padding: 0.125rem 0.375rem;
      border-radius: var(--curve-factor);
      font-size: 0.9em;
      border: var(--card-border);
    }
    
    :global(pre) {
      background: var(--card-background);
      border: var(--card-border);
      border-radius: var(--curve-factor);
      padding: 1rem;
      overflow-x: auto;
      margin: 1.5rem 0;
      
      :global(code) {
        background: none;
        padding: 0;
        border: none;
        font-size: 0.9rem;
        line-height: 1.5;
      }
    }
    
    :global(img) {
      max-width: 100%;
      height: auto;
      border-radius: var(--curve-factor);
      margin: 1.5rem 0;
    }
    
    :global(table) {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      
      :global(th), :global(td) {
        padding: 0.75rem;
        border: var(--card-border);
        text-align: left;
      }
      
      :global(th) {
        background: var(--card-background);
        font-weight: 700;
      }
      
      :global(tr:nth-child(even)) {
        background: var(--card-background);
      }
    }
    
    :global(hr) {
      border: none;
      border-top: var(--card-border);
      margin: 2rem 0;
    }
  }
</style>
