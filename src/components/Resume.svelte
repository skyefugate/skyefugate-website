<script lang="ts">
  import Heading from '$src/components/Heading.svelte';
  import Icon from '$src/components/Icon.svelte';
  import Button from '$src/components/Button.svelte'; 

  </script>

<Heading level="h2" color="var(--foreground)">Resume</Heading>

<p>
  My curriculum vitae can be viewed at
  <a href="https://cv.skyefugate.com" target="_blank" rel="noreferrer">cv.skyefugate.com</a>
</p>

<p>A shortened PDF version can be downloaded below ↓</p>
<Button click={() => window.location.href = "https://cv.skyefugate.com/download" }>
  <Icon name="download" />
  Download CV
</Button>

<style lang="scss">
  a {
    color: var(--accent);
  }
  small {
    display: block;
    margin-top: 1rem; 
    opacity: 0.6;
  }
</style>
