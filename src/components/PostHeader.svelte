<script lang="ts">
  import type { Post } from '$src/types/Post';
  import TagBadge from '$src/components/TagBadge.svelte';
  import { formatDate } from '$src/helpers/markdown';

  export let post: Post;
</script>

<header class="post-header">
  <h1>{post.title}</h1>

  <div class="meta">
    <span class="date">{formatDate(post.date)}</span>
    {#if post.author}
      <span class="separator">•</span>
      <span class="author">By {post.author}</span>
    {/if}
    {#if post.readingTime}
      <span class="separator">•</span>
      <span class="reading-time">{post.readingTime} min read</span>
    {/if}
  </div>

  {#if post.tags && post.tags.length > 0}
    <div class="tags">
      {#each post.tags as tag}
        <TagBadge
          {tag}
          clickable={true}
          href="/blog/categories/{tag.toLowerCase()}"
        />
      {/each}
    </div>
  {/if}
</header>

<style lang="scss">
  .post-header {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: var(--card-border);

    h1 {
      font-size: 3rem;
      font-weight: 800;
      margin: 0 0 1rem 0;
      line-height: 1.2;
      color: var(--foreground);
    }

    .meta {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 1rem;
      color: var(--dimmed-text);
      margin-bottom: 1.5rem;

      .date {
        font-weight: 600;
      }

      .separator {
        opacity: 0.5;
      }

      .author,
      .reading-time {
        opacity: 0.9;
      }
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      margin: -0.25rem;
    }
  }

  @media (max-width: 768px) {
    .post-header {
      h1 {
        font-size: 2rem;
      }
    }
  }
</style>
