<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Categories - Skye Fugate's Blog</title>
  <meta name="description" content="Browse blog posts by category" />
</svelte:head>

<div class="categories">
  <h1>Categories</h1>
  <p class="subtitle">Explore posts by topic</p>

  <div class="tag-cloud">
    {#each data.tagCounts as { tag, count }}
      <a
        href="/categories/{tag.toLowerCase()}"
        class="tag-item"
        style="--size: {Math.min(count * 0.3 + 1, 2.5)}rem;"
      >
        {tag}
        <span class="count">{count}</span>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  .categories {
    max-width: 1000px;
    margin: 0 auto;

    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: var(--dimmed-text);
      font-size: 1.25rem;
      margin-bottom: 3rem;
    }

    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;

      .tag-item {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--card-background);
        border: var(--card-border);
        padding: 0.75rem 1.25rem;
        border-radius: var(--curve-factor);
        text-decoration: none;
        color: var(--foreground);
        font-size: var(--size, 1.2rem);
        font-weight: 600;
        transition: all 0.2s ease-in-out;

        &:hover {
          background: var(--accent-1);
          color: var(--background);
          transform: scale(1.05);

          .count {
            background: var(--background);
            color: var(--accent-1);
          }
        }

        .count {
          background: var(--accent-1);
          color: var(--background);
          padding: 0.25rem 0.5rem;
          border-radius: calc(var(--curve-factor) / 2);
          font-size: 0.85em;
          font-weight: 700;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .categories {
      h1 {
        font-size: 2rem;
      }

      .tag-cloud .tag-item {
        font-size: 1rem !important;
      }
    }
  }
</style>
