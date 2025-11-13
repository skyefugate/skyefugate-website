<script lang="ts">
  import config from '$lib/config';
</script>

<svelte:head>
  <title>About - Skye Fugate's Blog</title>
  <meta name="description" content="About Skye Fugate and this blog" />
</svelte:head>

<div class="about">
  <h1>About This Blog</h1>
  
  <div class="content">
    <section>
      <h2>Welcome!</h2>
      <p>
        This blog is a space where I share my thoughts, experiences, and learnings from the world of 
        enterprise technology, cybersecurity, and community building.
      </p>
    </section>
    
    <section>
      <h2>What You'll Find Here</h2>
      <ul>
        <li><strong>Cloud Architecture:</strong> Insights from working with AWS, Azure, and GCP at enterprise scale</li>
        <li><strong>Security:</strong> Practical security engineering and NetSecDevOps approaches</li>
        <li><strong>Community Building:</strong> Lessons from organizing InfoSec events and building inclusive tech communities</li>
        <li><strong>Technology Leadership:</strong> Thoughts on leading technical teams and driving innovation</li>
      </ul>
    </section>
    
    <section>
      <h2>About Me</h2>
      <p>
        I'm {config.author}, an Enterprise Technology Architect at Netsmart with a passion for cloud infrastructure, 
        security, and building inclusive tech communities.
      </p>
      <p>
        When I'm not architecting cloud solutions, you'll find me volunteering with InfoSec communities like 
        SecKC, BSidesKC, and DEF CON, where I help organize events and mentor newcomers to the field.
      </p>
    </section>
    
    <section>
      <h2>Get in Touch</h2>
      <p>
        I'm always happy to discuss technology, security, or community building. You can find me on:
      </p>
      <ul class="links">
        <li><a href="https://fugate.dev" target="_blank" rel="noopener noreferrer">My Portfolio Site</a></li>
        <li><a href="https://github.com/skyefugate" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/skye-f" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://twitter.com/CodexMafia" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </section>
    
    <section>
      <h2>About This Site</h2>
      <p>
        This blog is built with SvelteKit and deployed on Cloudflare Pages. It's designed to be fast, 
        accessible, and easy to read on any device.
      </p>
      <p>
        All posts are written in Markdown and the site is statically generated for optimal performance.
      </p>
    </section>
  </div>
</div>

<style lang="scss">
  .about {
    max-width: 800px;
    margin: 0 auto;
    
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    
    .content {
      section {
        margin-bottom: 3rem;
        
        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--accent-1);
        }
        
        p {
          line-height: 1.7;
          margin-bottom: 1rem;
          color: var(--foreground);
        }
        
        ul {
          line-height: 1.8;
          
          li {
            margin-bottom: 0.75rem;
            
            strong {
              color: var(--accent-1);
            }
          }
          
          &.links {
            list-style: none;
            padding: 0;
            
            li {
              a {
                color: var(--accent-1);
                text-decoration: none;
                font-weight: 600;
                transition: all 0.2s ease-in-out;
                
                &:hover {
                  color: var(--accent-2);
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .about {
      h1 {
        font-size: 2rem;
      }
      
      .content section h2 {
        font-size: 1.5rem;
      }
    }
  }
</style>
