<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.scss';
  
  const accentColor = 'var(--accent-1)';
</script>

<svelte:head>
  <title>Skye Fugate's Blog</title>
</svelte:head>

<div class="app">
  <NavBar color={accentColor} />
  <main>
    <slot />
  </main>
  <Footer color={accentColor} />
</div>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    padding: 2rem;
    max-width: var(--grid-max-width);
    margin: 0 auto;
    width: 100%;
  }
</style>
