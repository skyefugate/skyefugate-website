<script>
  import { page } from '$app/stores';
  import LinkButton from '$src/components/LinkButton.svelte';
  import config from '$src/helpers/config';

  $: status = $page.status || 500;
  $: catImageUrl = `https://http.cat/${status}.jpg`;
  
  // Get public navigation links from config
  $: publicLinks = config.routeLinks.filter(link => 
    link.route !== '/' && 
    !link.route.includes('volunteering') // Exclude non-public routes
  );
</script>

<svelte:head>
  <title>{status} - {$page.error?.message || 'Error'} | {config.author}</title>
  <meta name="description" content="Page not found. The requested page doesn't exist on {config.author}'s website." />
</svelte:head>

<div class="errors-as-far-as-the-eye-can-see">
<h1>
  <span>{status}</span>
  <br>
  {$page.error?.message || 'Something went wrong'}
</h1>
<p>This is sad :'(</p>

<div class="cat-container">
  <img src={catImageUrl} alt="HTTP {status} Cat" class="http-cat" />
</div>

{#if status === 404}
  <div class="suggestions">
    <p>Try these pages instead:</p>
    <div class="suggestion-links">
      {#each publicLinks as link}
        <LinkButton to={link.route}>{link.label}</LinkButton>
      {/each}
    </div>
  </div>
{/if}

<LinkButton to="/">Back Home</LinkButton>
</div>

<style lang="scss">
.errors-as-far-as-the-eye-can-see {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    span { font-size: 5rem; }
  }
  p {
    margin: 0.5rem 0;
    color: var(--dimmed-text);
  }
}

.cat-container {
  margin: 2rem 0;
  
  .http-cat {
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: var(--curve-factor);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
}

.suggestions {
  margin: 2rem 0;
  text-align: center;
  
  .suggestion-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>