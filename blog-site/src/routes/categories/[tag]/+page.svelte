<script lang="ts">
  import PostGrid from '$lib/components/PostGrid.svelte';
  import LinkButton from '$lib/components/LinkButton.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<svelte:head>
  <title>{data.tag} - Categories - Skye Fugate's Blog</title>
  <meta name="description" content="Posts tagged with {data.tag}" />
</svelte:head>

<div class="category-page">
  <div class="header">
    <LinkButton to="/categories" priority="secondary">← All Categories</LinkButton>
    
    <h1>
      <span class="label">Category:</span>
      {data.tag}
    </h1>
    
    <p class="count">{data.posts.length} {data.posts.length === 1 ? 'post' : 'posts'}</p>
  </div>
  
  <PostGrid posts={data.posts} />
</div>

<style lang="scss">
  .category-page {
    .header {
      margin-bottom: 3rem;
      
      h1 {
        font-size: 3rem;
        margin: 1rem 0 0.5rem;
        
        .label {
          font-size: 1.5rem;
          color: var(--dimmed-text);
          font-weight: 400;
          display: block;
        }
      }
      
      .count {
        color: var(--dimmed-text);
        font-size: 1.1rem;
        margin: 0;
      }
    }
  }
  
  @media (max-width: 768px) {
    .category-page .header h1 {
      font-size: 2rem;
      
      .label {
        font-size: 1.2rem;
      }
    }
  }
</style>
