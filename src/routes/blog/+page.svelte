<script lang="ts">
  import PostGrid from '$src/components/PostGrid.svelte';
  import Button from '$src/components/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: recentPosts = data.posts.slice(0, 12);
</script>

<div class="hero">
  <h1>Welcome to Skye's Blog</h1>
  <p class="subtitle">Technology, Security, and Community</p>
  <p>
    Thoughts from an Enterprise Architect on cloud infrastructure,
    cybersecurity, and building inclusive tech communities.
  </p>
</div>

<section class="recent-posts">
  <h2>Recent Posts</h2>
  <PostGrid posts={recentPosts} />

  {#if data.posts.length > 12}
    <div class="view-all">
      <Button priority="primary">
        <a href="/archive">View All Posts</a>
      </Button>
    </div>
  {/if}
</section>

<style lang="scss">
  .hero {
    text-align: center;
    padding: 3rem 0 4rem;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--foreground);
    }

    .subtitle {
      font-size: 1.5rem;
      color: var(--dimmed-text);
      margin-bottom: 1rem;
    }

    p {
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .recent-posts {
    margin-top: 3rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--foreground);
    }

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
      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.25rem;
      }
    }
  }
</style>
