<script lang="ts">
  import Heading from '$src/components/Heading.svelte';
</script>

<section class="title">
  <Heading level="h2" size="2.5rem">SecKC - Security Kansas City</Heading>
</section>

<section class="intro">
  <div class="org-header">
    <div class="org-info">
      <h3><a href="https://seckc.org/" target="_blank" rel="noopener noreferrer">SecKC</a></h3>
      <h4>Director of Stuff & Things</h4>
      <p class="dates">August 2016 - Present (9+ years)</p>
    </div>
  </div>
  <p>
    SecKC is Kansas City's premier information security community, bringing together cybersecurity 
    professionals, enthusiasts, and students for monthly events, training, and networking opportunities.
  </p>
</section>

<section class="timeline">
  <h3>Timeline & Milestones</h3>
  <div class="timeline-items">
    <div class="timeline-item">
      <div class="timeline-date">2016 - Present</div>
      <div class="timeline-content">
        <h4>Director of Stuff & Things</h4>
        <p>Joined SecKC leadership team to help organize and manage monthly InfoSec events</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-date">2017 - 2025</div>
      <div class="timeline-content">
        <h4>11 Speaking Engagements</h4>
        <p>Delivered presentations on various cybersecurity topics to the community</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-date">2018 - Present</div>
      <div class="timeline-content">
        <h4>Event Production Leadership</h4>
        <p>Established quality standards for live production across multiple venues</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-date">2019 - Present</div>
      <div class="timeline-content">
        <h4>Volunteer Team Management</h4>
        <p>Built and managed a team of 50+ volunteers ensuring smooth event execution</p>
      </div>
    </div>
  </div>
</section>

<section class="responsibilities">
  <h3>Key Responsibilities</h3>
  <div class="resp-grid">
    <div class="resp-item">
      <h4>Event Planning & Coordination</h4>
      <p>Plan and schedule monthly InfoSec events with consistent 200+ attendance through collaboration with various teams and speakers.</p>
    </div>
    <div class="resp-item">
      <h4>Production Quality Management</h4>
      <p>Ensure that live production for events at various venues meets quality standards for audio, video, and streaming.</p>
    </div>
    <div class="resp-item">
      <h4>Volunteer Leadership</h4>
      <p>Manage a diverse team of 50+ volunteers, coordinating roles and ensuring events are executed to attendees' satisfaction.</p>
    </div>
    <div class="resp-item">
      <h4>Community Speaking</h4>
      <p>Regular speaker at SecKC events, sharing knowledge on cybersecurity topics and industry best practices.</p>
    </div>
  </div>
</section>

<section class="impact">
  <h3>Community Impact</h3>
  <div class="impact-stats">
    <div class="stat">
      <div class="stat-number">200+</div>
      <div class="stat-label">Monthly Attendees</div>
    </div>
    <div class="stat">
      <div class="stat-number">50+</div>
      <div class="stat-label">Volunteers Managed</div>
    </div>
    <div class="stat">
      <div class="stat-number">11</div>
      <div class="stat-label">Speaking Engagements</div>
    </div>
    <div class="stat">
      <div class="stat-number">9+</div>
      <div class="stat-label">Years of Service</div>
    </div>
  </div>
</section>

<section class="skills">
  <h3>Skills Developed</h3>
  <div class="skills-tags">
    <span class="skill-tag">Event Management</span>
    <span class="skill-tag">Team Leadership</span>
    <span class="skill-tag">Public Speaking</span>
    <span class="skill-tag">InfoSec Community</span>
    <span class="skill-tag">Volunteer Coordination</span>
    <span class="skill-tag">Production Management</span>
    <span class="skill-tag">Venue Management</span>
    <span class="skill-tag">Community Building</span>
  </div>
</section>

<style lang="scss">
  @import '$src/styles/media-queries.scss';
  @import '$src/styles/dimensions.scss';

  .title {
    margin: 0 calc(5vw + 1rem);
  }

  section {
    background: var(--card-background);
    border: var(--card-border);
    border-radius: var(--curve-factor);
    margin: 1rem calc(5vw + 1rem);
    padding: 1.5rem;

    h3 {
      margin: 0 0 1rem 0;
      color: var(--accent);
      font-size: 1.5rem;
    }
  }

  .intro {
    .org-header {
      margin-bottom: 1rem;
    }

    .org-info {
      h3 {
        margin: 0;
        font-size: 1.8rem;
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
        margin: 0.5rem 0;
        font-size: 1.3rem;
        color: var(--foreground);
        font-weight: 500;
      }

      .dates {
        margin: 0;
        color: var(--dimmed-text);
        font-size: 1rem;
      }
    }

    p {
      margin: 1rem 0 0 0;
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--foreground);
      font-family: RedHatText;
    }
  }

  .timeline {
    .timeline-items {
      position: relative;
      padding-left: 2rem;

      &::before {
        content: '';
        position: absolute;
        left: 0.75rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--accent);
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
      padding-left: 2rem;

      &::before {
        content: '';
        position: absolute;
        left: -0.5rem;
        top: 0.5rem;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--accent);
      }

      .timeline-date {
        font-size: 0.9rem;
        color: var(--accent);
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .timeline-content {
        h4 {
          margin: 0 0 0.5rem 0;
          color: var(--foreground);
          font-size: 1.1rem;
        }

        p {
          margin: 0;
          color: var(--dimmed-text);
          line-height: 1.5;
        }
      }
    }
  }

  .responsibilities {
    .resp-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .resp-item {
      h4 {
        margin: 0 0 0.75rem 0;
        color: var(--accent);
        font-size: 1.1rem;
      }

      p {
        margin: 0;
        color: var(--foreground);
        line-height: 1.6;
      }
    }
  }

  .impact {
    .impact-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      text-align: center;
    }

    .stat {
      .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--accent);
        margin-bottom: 0.5rem;
      }

      .stat-label {
        color: var(--foreground);
        font-size: 1rem;
      }
    }
  }

  .skills {
    .skills-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-tag {
      background: var(--accent);
      color: var(--background);
      padding: 0.5rem 1rem;
      border-radius: var(--curve-factor);
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
</style>
