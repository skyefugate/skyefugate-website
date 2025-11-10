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
    <p>
      I believe that community is where real innovation happens. Whether it's organizing large-scale 
      conferences, mentoring newcomers to the field, or building inclusive spaces for learning, 
      volunteer work has shaped both my career and my perspective on what makes technology meaningful.
    </p>
  </section>

  <!-- Navigation to other pages -->
  <section class="navigation">
    <div class="community-stats">
      <div class="stat">
        <strong>8+</strong>
        <span>Years Volunteering</span>
      </div>
      <div class="stat">
        <strong>50+</strong>
        <span>Volunteers Managed</span>
      </div>
      <div class="stat">
        <strong>200+</strong>
        <span>Monthly Event Attendance</span>
      </div>
    </div>
    <div class="pages">
      {#each morePages as page}
        <a href={page.route} style={`--page-color: ${page.color};`}>{page.label}</a>
      {/each}
    </div>
  </section>

  <!-- Volunteer Experience Section -->
  <section class="experience">
    <Heading level="h2" size="1.8rem">Volunteer Experience</Heading>
    
    {#each volunteerExperience as org}
      <div class="org-experience">
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
          <div class="achievements">
            <h5>Key Achievements</h5>
            <ul>
              {#each org.achievements as achievement}
                <li>{achievement}</li>
              {/each}
            </ul>
          </div>
        {/if}
        
        <div class="actions">
          <a href="/volunteering/{org.organization.toLowerCase().replace(/\s+/g, '')}" class="details-link">
            View Detailed Experience →
          </a>
        </div>
      </div>
    {/each}
  </section>

  <!-- Community Impact -->
  <section class="impact">
    <Heading level="h2" size="1.8rem">Community Impact</Heading>
    <div class="impact-grid">
      <div class="impact-item">
        <h4>Event Organization</h4>
        <p>Coordinated 100+ cybersecurity events, workshops, and conferences across the Kansas City metro area.</p>
      </div>
      <div class="impact-item">
        <h4>Mentorship</h4>
        <p>Guided 30+ individuals transitioning into cybersecurity careers through structured mentorship programs.</p>
      </div>
      <div class="impact-item">
        <h4>Community Building</h4>
        <p>Fostered inclusive environments that welcome newcomers while challenging experienced professionals.</p>
      </div>
      <div class="impact-item">
        <h4>Knowledge Sharing</h4>
        <p>Delivered technical presentations and workshops on security topics to diverse audiences.</p>
      </div>
    </div>
  </section>

  <!-- Volunteer Philosophy -->
  <section class="philosophy">
    <Heading level="h2" size="1.8rem">Volunteer Philosophy</Heading>
    <blockquote>
      "Technology is only as strong as the community that builds it. My volunteer work focuses on 
      creating spaces where people can learn, grow, and contribute regardless of their background 
      or experience level."
    </blockquote>
    <p>
      I approach volunteer leadership with the same rigor I bring to my professional work: 
      strategic planning, clear communication, and a focus on measurable outcomes that benefit 
      the entire community.
    </p>
  </section>
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

    // Navigation section with stats
    &.navigation {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      
      .community-stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
        
        .stat {
          text-align: center;
          
          strong {
            display: block;
            font-size: 1.5rem;
            color: var(--accent);
            font-weight: bold;
          }
          
          span {
            font-size: 0.9rem;
            color: var(--dimmed-text);
          }
        }
      }
      
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

    // Experience section - spans 2 columns like about page
    &.experience {
      grid-column-start: span 2;
      
      .org-experience {
        border-bottom: 1px solid var(--card-border);
        padding: 1.5rem 0;
        margin-bottom: 1rem;
        
        &:last-child {
          border-bottom: none;
          margin-bottom: 0;
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
          font-size: 1.1rem;
        }

        .achievements {
          margin: 1.5rem 0;
          
          h5 {
            margin: 0 0 0.5rem 0;
            color: var(--accent);
            font-size: 1rem;
          }
          
          ul {
            margin: 0;
            padding-left: 1.5rem;
            
            li {
              margin: 0.5rem 0;
              line-height: 1.5;
              color: var(--foreground);
            }
          }
        }

        .actions {
          margin-top: 1rem;
          
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
    }

    // Impact section
    &.impact {
      grid-column-start: span 2;
      
      .impact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        
        .impact-item {
          padding: 1rem;
          border: 1px solid var(--card-border);
          border-radius: var(--curve-factor);
          
          h4 {
            margin: 0 0 0.5rem 0;
            color: var(--accent);
            font-size: 1.1rem;
          }
          
          p {
            margin: 0;
            line-height: 1.5;
            color: var(--foreground);
            font-size: 0.95rem;
          }
        }
      }
    }

    // Philosophy section
    &.philosophy {
      blockquote {
        margin: 1rem 0;
        padding: 1rem;
        border-left: 3px solid var(--accent);
        background: rgba(var(--accent-rgb), 0.1);
        font-style: italic;
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--foreground);
      }
      
      p {
        margin: 1rem 0;
        font-size: 1.1rem;
        line-height: 1.6;
        font-family: RedHatText;
        color: var(--foreground);
      }
    }
  }
</style>
