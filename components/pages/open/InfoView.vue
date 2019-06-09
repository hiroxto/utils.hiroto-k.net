<template>
  <div>
    <p>Total links : {{ linksCount }}</p>
    <p>Excepted links : {{ exceptedLinksCount }}</p>
    <p>Normal : {{ normalBrowsers }}</p>
    <p>Reverse : {{ reverseBrowsers }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'InfoView',
  computed: {
    ...mapGetters({
      linksCount: 'openLinks/linksCount',
      exceptedLinksCount: 'openLinks/exceptedLinksCount',
    }),
    joinSeparator () {
      return ', ';
    },
    normalBrowsers () {
      return [
        'PC Chrome',
        'Mobile Firefox',
      ].join(this.joinSeparator);
    },
    reverseBrowsers () {
      return [
        'PC Firefox',
      ].join(this.joinSeparator);
    },
  },
};
</script>
