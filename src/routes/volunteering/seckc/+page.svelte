<script lang="ts">
  import Heading from '$src/components/Heading.svelte';
</script>

<section class="title">
  <Heading level="h2" size="2.5rem">>SecKC</Heading>
</section>

<section class="intro">
  <h3><a href="https://seckc.org/" target="_blank" rel="noopener noreferrer">SecKC</a></h3>
  <h4>Director of Stuff & Things</h4>
  <p class="dates">August 2016 - Present (9+ years)</p>
  <p>
    SecKC is Kansas City's premier information security community, bringing together cybersecurity 
    professionals, enthusiasts, and students for monthly events, training, and networking opportunities.
  </p>
</section>

<section class="impact">
  <h3>>Community Impact</h3>
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

<section class="responsibilities">
  <h3>>Key Responsibilities</h3>
  <ul>
    <li>Plan and schedule monthly InfoSec events with consistent 200+ attendance</li>
    <li>Ensure live production quality standards across multiple venues</li>
    <li>Manage a diverse team of 50+ volunteers</li>
    <li>Regular community speaking on cybersecurity topics</li>
  </ul>
</section>

<section class="timeline">
  <h3>>Timeline</h3>
  <div class="timeline-items">
    <div class="timeline-item">
      <span class="year">2016</span>
      <span class="event">Joined SecKC leadership as Director of Stuff & Things</span>
    </div>
    <div class="timeline-item">
      <span class="year">2017-2025</span>
      <span class="event">11 speaking engagements on various cybersecurity topics</span>
    </div>
    <div class="timeline-item">
      <span class="year">2018</span>
      <span class="event">Established production quality standards for events</span>
    </div>
    <div class="timeline-item">
      <span class="year">2019</span>
      <span class="event">Built volunteer management system for 50+ team members</span>
    </div>
  </div>
</section>

<section class="skills">
  <h3>>Skills Developed</h3>
  <div class="skills-tags">
    <span class="skill-tag">Event Management</span>
    <span class="skill-tag">Team Leadership</span>
    <span class="skill-tag">Public Speaking</span>
    <span class="skill-tag">InfoSec Community</span>
    <span class="skill-tag">Volunteer Coordination</span>
    <span class="skill-tag">Production Management</span>
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
      margin: 0 0 1rem 0;
      color: var(--dimmed-text);
      font-size: 1rem;
    }

    p:last-child {
      margin: 1rem 0 0 0;
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--foreground);
      font-family: RedHatText;
    }
  }

  .impact {
    .impact-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.5rem;
      text-align: center;
    }

    .stat {
      .stat-number {
        font-size: 2rem;
        font-weight: bold;
        color: var(--accent);
        margin-bottom: 0.5rem;
      }

      .stat-label {
        color: var(--foreground);
        font-size: 0.9rem;
      }
    }
  }

  .responsibilities {
    ul {
      margin: 0;
      padding-left: 1.5rem;
      
      li {
        margin: 0.75rem 0;
        color: var(--foreground);
        line-height: 1.5;
      }
    }
  }

  .timeline {
    .timeline-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .timeline-item {
      display: flex;
      gap: 1rem;
      align-items: flex-start;

      .year {
        color: var(--accent);
        font-weight: 600;
        font-size: 0.9rem;
        min-width: 80px;
        flex-shrink: 0;
      }

      .event {
        color: var(--foreground);
        line-height: 1.5;
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
