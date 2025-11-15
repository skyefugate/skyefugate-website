<script lang="ts">
  import PostHeader from '$src/components/PostHeader.svelte';
  import MarkdownRenderer from '$src/components/MarkdownRenderer.svelte';
  import PostCard from '$src/components/PostCard.svelte';
  import Icon from '$src/components/Icon.svelte';
  import TableOfContents from '$src/components/TableOfContents.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  // Use explicit header image from frontmatter, fallback to first content image
  $: headerImage = data.post.headerImage || 
                   data.post.content.match(/<img[^>]+src="([^"]*)"[^>]*>/)?.[1] || 
                   data.post.content.match(/!\[.*?\]\(([^)]+)\)/)?.[1];
  $: postSlug = data.post.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
</script>

<svelte:head>
  <title>{data.post.title} - Skye Fugate's Blog</title>
  <meta name="description" content={data.post.excerpt} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://fugate.dev/blog/posts/{data.post.slug}" />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.excerpt} />
  <meta property="og:image" content={headerImage ? `https://fugate.dev${headerImage}` : `https://fugate.dev/preview.png`} />
  <meta property="og:site_name" content="Skye Fugate's Blog" />
  <meta property="article:author" content={data.post.author} />
  <meta property="article:published_time" content={data.post.date} />
  {#if data.post.tags}
    {#each data.post.tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://fugate.dev/blog/posts/{postSlug}" />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={data.post.excerpt} />
  <meta name="twitter:image" content={headerImage ? `https://fugate.dev${headerImage}` : `https://fugate.dev/preview.png`} />
  <meta name="twitter:creator" content="@skyefugate" />
</svelte:head>

<div class="container">
  <nav class="back-nav">
    <a href="/blog" class="back-link">
      <Icon name="arrow-left" size={16} />
      <span>Blog</span>
      <span class="separator">/</span>
      <span class="current">{data.post.title.length > 25 ? data.post.title.substring(0, 25) + '...' : data.post.title}</span>
    </a>
  </nav>

  {#if headerImage}
    <div class="hero-image">
      <img src={headerImage} alt={data.post.title} />
    </div>
  {/if}

  <article class="post">
    <PostHeader post={data.post} />
    <div class="post-content">
      <MarkdownRenderer content={data.post.content} />
    </div>
  </article>

  <TableOfContents content={data.post.content} />

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
</div>

<style lang="scss">
  .container {
    max-width: 750px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .back-nav {
    margin: 2rem 0;
    
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--dimmed-text);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s ease;
      
      &:hover {
        color: var(--foreground);
      }
      
      .separator {
        opacity: 0.5;
      }
      
      .current {
        color: var(--foreground);
        font-weight: 500;
      }
    }
  }

  .hero-image {
    margin: 2rem 0 3rem;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .post {
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

      @media (min-width: 780px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1150px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
    
    .back-nav {
      margin: 1rem 0;
    }
    
    .hero-image {
      margin: 1rem 0 2rem;
      border-radius: 8px;
    }
  }
</style>
