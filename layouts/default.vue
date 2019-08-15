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

<script lang="ts">
import PageFooter from '~/components/layouts/PageFooter';

export default {
  components: {
    PageFooter,
  },
};
</script>

<style scoped>
.app {
  font-family: "Noto Sans JP", "Helvetica", sans-serif;
  letter-spacing: .1em;
  text-align: justify;
  word-break: break-all;
}
</style>
