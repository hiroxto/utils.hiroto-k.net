<template>
  <div class="app">
    <main>
      <nuxt>
      </nuxt>
    </main>
    <page-footer>
    </page-footer>
  </div>
</template>

<script>
  import PageFooter from '~/components/PageFooter';

  export default {
    components: {
      PageFooter,
    },
  };
</script>

<style scoped>
  .app {
    font-family: "Noto Sans JP", "Helvetica", sans-serif;
  }
</style>
