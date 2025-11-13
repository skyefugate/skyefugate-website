<script lang="ts">
  export let tag: string;
  export let clickable = false;
  export let href: string | undefined = undefined;
</script>

{#if clickable && href}
  <a {href} class="tag-badge clickable">
    {tag}
  </a>
{:else}
  <span class="tag-badge">
    {tag}
  </span>
{/if}

<style lang="scss">
  .tag-badge {
    display: inline-block;
    background: var(--accent-1);
    color: var(--background);
    padding: 0.25rem 0.5rem;
    border-radius: var(--curve-factor);
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0.25rem;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    
    &.clickable {
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
      }
    }
  }
</style>
