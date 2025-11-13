<script lang="ts">
  import Heading from '$src/components/Heading.svelte';
  import LangBadge from '$src/components/LangBadge.svelte';
  import config from '$src/helpers/config';

  const { volunteerExperience } = config;
  
  const morePages = config.routeLinks.filter(
    (link) => !['/volunteering', '/'].includes(link.route)
  );

  // Community involvement image - using a professional community/networking image
  const communityImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces';
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

  <!-- Community picture and navigation -->
  <section class="community-picture">
    <img src={communityImage} alt="Community leadership" />
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
        <span>Monthly Attendance</span>
      </div>
    </div>
    <div class="pages">
      {#each morePages as page}
        <a href={page.route} style={`--page-color: ${page.color};`}>{page.label}</a>
      {/each}
    </div>
  </section>

  <!-- Volunteer Experience Section with Hexagon Layout -->
  <section class="volunteer-hexagons">
    <Heading level="h2" size="1.8rem">Volunteer Experience</Heading>
    
    <div class="hexagon-container">
      {#each volunteerExperience as org}
        <div class="hexagon-wrapper">
          <img src={org.organizationLogo} alt={org.organization} class="hex-logo" />
          <h4>{org.organization}</h4>
          <p class="hex-role">{org.role}</p>
          <div class="hex-tech">
            {#each (org.technologies || []).slice(0, 3) as tech}
              <LangBadge language={tech} size={14} />
            {/each}
          </div>
          <span class="hex-link">
            {org.role}
          </span>
        </div>
      {/each}
    </div>
  </section>

  <!-- Community Impact with visual elements -->
  <section class="impact">
    <Heading level="h2" size="1.8rem">Community Impact</Heading>
    <div class="impact-grid">
      <div class="impact-item">
        <div class="impact-icon">🎯</div>
        <h4>Event Organization</h4>
        <p>Coordinated 100+ cybersecurity events, workshops, and conferences across the Kansas City metro area.</p>
      </div>
      <div class="impact-item">
        <div class="impact-icon">🤝</div>
        <h4>Mentorship</h4>
        <p>Guided 30+ individuals transitioning into cybersecurity careers through structured mentorship programs.</p>
      </div>
      <div class="impact-item">
        <div class="impact-icon">🌟</div>
        <h4>Community Building</h4>
        <p>Fostered inclusive environments that welcome newcomers while challenging experienced professionals.</p>
      </div>
      <div class="impact-item">
        <div class="impact-icon">📚</div>
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

    // Community picture section - like about page profile picture
    &.community-picture {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      img {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        border-radius: var(--curve-factor);
        object-fit: cover;
        height: 200px;
      }
      
      .community-stats {
        display: flex;
        justify-content: space-around;
        margin: 1rem 0;
        
        .stat {
          text-align: center;
          
          strong {
            display: block;
            font-size: 1.3rem;
            color: var(--accent);
            font-weight: bold;
          }
          
          span {
            font-size: 0.8rem;
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

    // Volunteer experience as clean cards
    &.volunteer-hexagons {
      grid-column-start: span 2;
      
      .hexagon-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }
      
      .hexagon-wrapper {
        background: var(--card-background);
        border: 1px solid var(--card-border);
        border-radius: var(--curve-factor);
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .hex-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: contain;
          margin: 0 auto 1rem;
          display: block;
        }
        
        h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
          color: var(--accent);
          font-weight: bold;
        }
        
        .hex-role {
          margin: 0 0 1rem 0;
          font-size: 1rem;
          color: var(--foreground);
          opacity: 0.8;
        }
        
        .hex-tech {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        
        .hex-link {
          display: inline-block;
          margin-top: 1rem;
          color: var(--dimmed-text);
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
    }

    // Impact section with visual icons
    &.impact {
      grid-column-start: span 2;
      
      .impact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        
        .impact-item {
          padding: 1.5rem;
          border: 1px solid var(--card-border);
          border-radius: var(--curve-factor);
          text-align: center;
          transition: all 0.3s ease;
          
          &:hover {
            transform: translateY(-2px);
            border-color: var(--accent);
          }
          
          .impact-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
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
        padding: 1.5rem;
        border-left: 4px solid var(--accent);
        background: rgba(var(--accent-rgb), 0.1);
        font-style: italic;
        font-size: 1.2rem;
        line-height: 1.7;
        color: var(--foreground);
        border-radius: 0 var(--curve-factor) var(--curve-factor) 0;
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
