<script lang="ts">
  import PostHeader from '$lib/components/PostHeader.svelte';
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import Button from '$lib/components/Button.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>{data.post.title} - Skye Fugate's Blog</title>
  <meta name="description" content={data.post.excerpt} />
</svelte:head>

<article class="post">
  <div class="back-button">
    <Button priority="secondary">
      <a href="/">← Back to Posts</a>
    </Button>
  </div>
  
  <PostHeader post={data.post} />
  
  <div class="post-content">
    <MarkdownRenderer content={data.post.content} />
  </div>
</article>

{#if data.relatedPosts.length > 0}
  <section class="related-posts">
    <h2>Related Posts</h2>
    <div class="related-grid">
      {#each data.relatedPosts as relatedPost}
        <PostCard post={relatedPost} />
      {/each}
    </div>
  </section>
{/if}

<style lang="scss">
  @use '../../../lib/styles/media-queries.scss' as *;
  
  .post {
    max-width: 800px;
    margin: 0 auto;
    
    .back-button {
      margin-bottom: 2rem;
      
      a {
        color: inherit;
        text-decoration: none;
      }
    }
    
    .post-content {
      margin-top: 2rem;
    }
  }
  
  .related-posts {
    margin-top: 4rem;
    padding-top: 3rem;
    border-top: var(--card-border);
    
    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--foreground);
    }
    
    .related-grid {
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
  }
</style>
