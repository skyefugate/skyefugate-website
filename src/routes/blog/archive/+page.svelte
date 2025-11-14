<script lang="ts">
  import { formatDate } from '$src/helpers/markdown';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Archive - Skye Fugate's Blog</title>
  <meta name="description" content="Browse all blog posts organized by date" />
</svelte:head>

<div class="archive">
  <h1>Archive</h1>
  <p class="subtitle">All posts organized by date</p>

  <div class="archive-content">
    {#each Array.from(data.groupedPosts.entries()).sort((a, b) => parseInt(b[0]) - parseInt(a[0])) as [year, monthMap]}
      <section class="year-section">
        <h2 class="year">{year}</h2>

        {#each Array.from(monthMap.entries()) as [month, posts]}
          <div class="month-section">
            <h3 class="month">
              {month} <span class="count">({posts.length})</span>
            </h3>

            <ul class="post-list">
              {#each posts as post}
                <li>
                  <a href="/blog/posts/{post.slug}">
                    <span class="date">{formatDate(post.date)}</span>
                    <span class="title">{post.title}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>
    {/each}
  </div>
</div>

<style lang="scss">
  .archive {
    max-width: 800px;
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

    .year-section {
      margin-bottom: 3rem;

      .year {
        font-size: 2rem;
        font-weight: 800;
        color: var(--accent-1);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--accent-1);
      }

      .month-section {
        margin-bottom: 2rem;

        .month {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--foreground);

          .count {
            font-size: 1rem;
            color: var(--dimmed-text);
            font-weight: 400;
          }
        }

        .post-list {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            margin-bottom: 0.75rem;

            a {
              display: flex;
              gap: 1rem;
              padding: 0.5rem;
              border-radius: var(--curve-factor);
              text-decoration: none;
              transition: all 0.2s ease-in-out;

              &:hover {
                background: var(--card-background);

                .title {
                  color: var(--accent-1);
                }
              }

              .date {
                flex-shrink: 0;
                width: 120px;
                color: var(--dimmed-text);
                font-size: 0.9rem;
              }

              .title {
                color: var(--foreground);
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .archive {
      h1 {
        font-size: 2rem;
      }

      .year-section .month-section .post-list li a {
        flex-direction: column;
        gap: 0.25rem;

        .date {
          width: auto;
          font-size: 0.85rem;
        }
      }
    }
  }
</style>
