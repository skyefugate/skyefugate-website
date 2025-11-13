<script lang="ts">
  import type { Post } from '$lib/types/Post';
  import TagBadge from '$lib/components/TagBadge.svelte';
  import { formatDate } from '$lib/utils/markdown';
  
  export let post: Post;
  export let featured = false;
</script>

<a href="/posts/{post.slug}" class="post-card" class:featured>
  {#if post.thumbnail}
    <div class="thumbnail">
      <img src={post.thumbnail} alt={post.title} />
    </div>
  {/if}
  
  <div class="content">
    <h3>{post.title}</h3>
    
    <div class="meta">
      <span class="date">{formatDate(post.date)}</span>
      {#if post.readingTime}
        <span class="reading-time">• {post.readingTime} min read</span>
      {/if}
    </div>
    
    <p class="excerpt">{post.excerpt}</p>
    
    <div class="tags">
      {#each post.tags as tag}
        <TagBadge {tag} />
      {/each}
    </div>
  </div>
</a>

<style lang="scss">
  .post-card {
    display: block;
    background: var(--card-background);
    border: var(--card-border);
    border-radius: var(--curve-factor);
    padding: 1.5rem;
    text-decoration: none;
    color: var(--foreground);
    transition: transform 0.2s ease-in-out;
    height: 100%;
    
    &:hover {
      transform: scale(1.02);
    }
    
    &.featured {
      border: 2px solid var(--accent-1);
    }
    
    .thumbnail {
      margin: -1.5rem -1.5rem 1rem -1.5rem;
      overflow: hidden;
      border-radius: var(--curve-factor) var(--curve-factor) 0 0;
      
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
    
    .content {
      h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--foreground);
      }
      
      .meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--dimmed-text);
        margin-bottom: 1rem;
        
        .date {
          font-weight: 600;
        }
        
        .reading-time {
          opacity: 0.8;
        }
      }
      
      .excerpt {
        color: var(--foreground);
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        margin: -0.25rem;
      }
    }
  }
</style>
