<script lang="ts">
  import PostGrid from '$src/components/PostGrid.svelte';
  import Button from '$src/components/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: recentPosts = data.posts.slice(0, 8);
</script>

<div class="hero">
  <h1>Blog</h1>
  <p>
    Deep dives into security architecture, cloud infrastructure, and the occasional rant about why your SOC is drowning in false positives.
  </p>
</div>

<section class="posts">
  <PostGrid posts={recentPosts} />

  {#if data.posts.length > 8}
    <div class="view-all">
      <Button priority="secondary">
        <a href="/blog/archive">All Posts</a>
      </Button>
    </div>
  {/if}
</section>

<style lang="scss">
  .hero {
    text-align: center;
    padding: 2rem 0 3rem;
    max-width: 700px;
    margin: 0 auto;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: var(--foreground);
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--dimmed-text);
    }
  }

  .posts {
    margin-top: 2rem;

    .view-all {
      margin-top: 3rem;
      text-align: center;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 1.5rem 0 2rem;
      
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
</style>
