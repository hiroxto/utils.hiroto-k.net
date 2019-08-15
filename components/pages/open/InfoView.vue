<template>
  <div>
    <p>Total links : {{ linksCount }}</p>
    <p>Excepted links : {{ exceptedLinksCount }}</p>
    <p>Normal : {{ normalBrowsers }}</p>
    <p>Reverse : {{ reverseBrowsers }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InfoView',
  computed: {
    linksCount (): number {
      return this.$store.getters['openLinks/linksCount'];
    },
    exceptedLinksCount (): number {
      return this.$store.getters['openLinks/exceptedLinksCount'];
    },
    joinSeparator (): string {
      return ', ';
    },
    normalBrowsers (): string {
      return [
        'PC Chrome',
        'Mobile Firefox',
      ].join(this.joinSeparator);
    },
    reverseBrowsers (): string {
      return [
        'PC Firefox',
      ].join(this.joinSeparator);
    },
  },
});
</script>
