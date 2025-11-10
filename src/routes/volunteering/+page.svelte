<script lang="ts">
  import Heading from '$src/components/Heading.svelte';
  import config from '$src/helpers/config';

  const { volunteerExperience } = config;
</script>

<section class="title">
  <Heading level="h2" size="2.5rem">Volunteering</Heading>
</section>

<section class="intro">
  <p><i>Community involvement and volunteer leadership</i></p>
  <p>
    Beyond my professional work, I'm passionate about giving back to the cybersecurity community. 
    Through volunteer leadership roles, I help organize events, mentor others, and contribute to 
    the growth of our industry's knowledge sharing and professional development.
  </p>
</section>

<section class="volunteer-grid">
  {#each volunteerExperience as org}
    <div class="org-card">
      <div class="org-header">
        {#if org.organizationLogo}
          <img src={org.organizationLogo} alt="{org.organization} logo" class="org-logo" />
        {/if}
        <div class="org-info">
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
    </div>
  {/each}
</section>

<style lang="scss">
  @import '$src/styles/media-queries.scss';
  @import '$src/styles/dimensions.scss';

  .title {
    margin: 0 calc(5vw + 1rem);
  }

  .intro {
    background: var(--card-background);
    border: var(--card-border);
    border-radius: var(--curve-factor);
    margin: 1rem calc(5vw + 1rem);
    padding: 1.5rem;

    p {
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--foreground);
      font-family: RedHatText;

      &:last-child {
        margin-bottom: 0;
      }

      i {
        opacity: 0.8;
        color: var(--accent);
      }
    }
  }

  .volunteer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-item-width), 1fr));
    gap: var(--grid-item-spacing);
    padding: var(--grid-item-spacing);
    margin: var(--grid-item-spacing) 5vw;
  }

  .org-card {
    background: var(--card-background);
    border: var(--card-border);
    border-radius: var(--curve-factor);
    padding: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  }

  .org-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .org-logo {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: var(--curve-factor);
  }

  .org-info {
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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
      color: var(--accent-bright, var(--accent));
      text-decoration: underline;
    }
  }
</style>
