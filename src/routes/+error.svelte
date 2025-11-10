<script>
  import { page } from '$app/stores';
  import LinkButton from '$src/components/LinkButton.svelte';

  const emojis = {
    401: '🔒',
    403: '🚫',
    404: '🧱',
    420: '🫠',
    500: '💥',
    501: '🚧',
  };
</script>

<svelte:head>
  <title>{$page.status} - {$page.error.message} | Skye Fugate</title>
  <meta name="description" content="Page not found. The requested page doesn't exist on Skye Fugate's website." />
</svelte:head>

<div class="errors-as-far-as-the-eye-can-see">
<h1>
  <span>{$page.status}</span>
  <br>
  {$page.error.message}
</h1>
<p>This is sad :'(</p>
<span style="font-size: 10em">
  {emojis[$page.status] ?? emojis[500]}
</span>

{#if $page.status === 404}
  <div class="suggestions">
    <p>Try these pages instead:</p>
    <div class="suggestion-links">
      <LinkButton to="/about">About</LinkButton>
      <LinkButton to="/projects">Projects</LinkButton>
      <LinkButton to="/contact">Contact</LinkButton>
      <LinkButton to="/volunteering">Volunteering</LinkButton>
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