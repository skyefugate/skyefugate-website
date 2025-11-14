<script lang="ts">
  import type { Post } from '$src/types/Post';
  import PostCard from '$src/components/PostCard.svelte';

  export let posts: Post[];
  export let limit: number | undefined = undefined;

  $: displayPosts = limit ? posts.slice(0, limit) : posts;
</script>

<div class="post-grid">
  {#each displayPosts as post (post.slug)}
    <PostCard {post} featured={post.featured} />
  {/each}
</div>

{#if posts.length === 0}
  <div class="no-posts">
    <p>No posts found.</p>
  </div>
{/if}

<style lang="scss">
  @import '$src/styles/media-queries.scss';

  .post-grid {
    display: grid;
    gap: var(--grid-item-spacing);
    grid-template-columns: 1fr;

    @include tablet-up {
      grid-template-columns: repeat(2, 1fr);
    }

    @include laptop-up {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .no-posts {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--dimmed-text);

    p {
      font-size: 1.25rem;
    }
  }
</style>
