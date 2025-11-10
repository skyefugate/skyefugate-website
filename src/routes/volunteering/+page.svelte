<script lang="ts">
  import Heading from '$src/components/Heading.svelte';
  import config from '$src/helpers/config';

  const { volunteerExperience } = config;
  
  const morePages = config.routeLinks.filter(
    (link) => !['/volunteering', '/'].includes(link.route)
  );
</script>

<!-- Page title -->
<div class="heading">
  <Heading level="h2" size="2.5rem">Volunteering</Heading>
</div>

<!-- Main content grid -->
<div class="content">
  <!-- Intro section -->
  <section class="intro">
    <i>Community involvement and volunteer leadership</i>
    <p>
      Beyond my professional work, I'm passionate about giving back to the cybersecurity community. 
      Through volunteer leadership roles, I help organize events, mentor others, and contribute to 
      the growth of our industry's knowledge sharing and professional development.
    </p>
  </section>

  <!-- Navigation to other pages -->
  <section class="navigation">
    <div class="pages">
      {#each morePages as page}
        <a href={page.route} style={`--page-color: ${page.color};`}>{page.label}</a>
      {/each}
    </div>
  </section>

  <!-- Volunteer organizations -->
  {#each volunteerExperience as org}
    <section class="org-card">
      <div class="org-header">
        <h3>
          {#if org.organizationUrl}
            <a href={org.organizationUrl} target="_blank" rel="noopener noreferrer">
              {org.organization}
            </a>
          {:else}
            {org.organization}
          {/if}
        </h3>
        <h4>{org.role}</h4>
        <p class="dates">{org.datesWorked}</p>
      </div>
      
      <p class="summary">{org.responsibilities}</p>
      
      {#if org.achievements && org.achievements.length > 0}
        <div class="highlights">
          {#each org.achievements.slice(0, 3) as achievement}
            <span class="highlight-tag">{achievement}</span>
          {/each}
        </div>
      {/if}
      
      <div class="actions">
        <a href="/volunteering/{org.organization.toLowerCase().replace(/\s+/g, '')}" class="details-link">
          View Details →
        </a>
      </div>
    </section>
  {/each}
</div>

<style lang="scss">
  @import '$src/styles/media-queries.scss';

  .heading {
    margin: 1rem calc(5vw + 1rem) 0;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    max-width: 1200px;
    @include laptop-up {
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    }
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    padding: 1rem;
    width: 95vw;
    margin: 0 auto;
  }

  section {
    padding: 1rem;
    border-radius: var(--curve-factor);
    background: var(--card-background);
    
    // Intro section - spans 2 columns like about page
    &.intro {
      grid-column-start: span 2;
      i {
        opacity: 0.8;
        color: var(--accent);
      }
      p {
        margin: 1rem 0;
        font-size: 1.25rem;
        line-height: 1.8rem;
        font-family: RedHatText;
        color: var(--foreground);
      }
    }

    // Navigation section - similar to about page's picture section
    &.navigation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      .pages {
        opacity: 0.9;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &:hover {
          opacity: 1;
        }
        a {
          color: var(--page-color, var(--accent));
          border-radius: var(--curve-factor);
          padding: 0.25rem 0.5rem;
          margin: 0.5rem;
          font-weight: bold;
          text-decoration: none;
          transition: all ease-in-out 0.2s;
          min-width: 5rem;
          text-align: center;
          border: 1px solid var(--page-color, var(--accent));
          &:hover {
            color: var(--background);
            background: var(--page-color, var(--accent));
          }
        }
      }
    }

    // Organization cards
    &.org-card {
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
      }

      .org-header {
        margin-bottom: 1rem;

        h3 {
          margin: 0;
          font-size: 1.4rem;
          color: var(--accent);
          
          a {
            color: var(--accent);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }

        h4 {
          margin: 0.25rem 0;
          font-size: 1.1rem;
          color: var(--foreground);
          font-weight: 500;
        }

        .dates {
          margin: 0;
          color: var(--dimmed-text);
          font-size: 0.9rem;
        }
      }

      .summary {
        margin: 1rem 0;
        line-height: 1.6;
        color: var(--foreground);
        font-family: RedHatText;
      }

      .highlights {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;

        .highlight-tag {
          background: var(--accent);
          color: var(--background);
          padding: 0.25rem 0.75rem;
          border-radius: var(--curve-factor);
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      .actions {
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid var(--card-border);
      }

      .details-link {
        color: var(--accent);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
