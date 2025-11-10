<script lang="ts">
  import config from '$src/helpers/config';
  import Heading from '$src/components/Heading.svelte';

  const { workExperience } = config; 
</script>

<Heading level="h2" color="var(--foreground)">Resume</Heading>

<p>
  Resume available upon request - feel free to reach out via the contact page.
</p>

<style lang="scss">
  p {
    opacity: 0.8;
  }
</style>
