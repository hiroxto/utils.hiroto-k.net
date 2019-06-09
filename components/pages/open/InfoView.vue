<template>
  <div>
    <p>Total links : {{ linksCount }}</p>
    <p>Excepted links : {{ exceptedLinksCount }}</p>
    <p>Normal : {{ normalBrowsersText }}</p>
    <p>Reverse : {{ reverseBrowsersText }}</p>
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
      ];
    },
    normalBrowsersText () {
      return this.normalBrowsers.join(this.joinSeparator);
    },
    reverseBrowsers () {
      return [
        'PC Firefox',
      ];
    },
    reverseBrowsersText () {
      return this.reverseBrowsers.join(this.joinSeparator);
    },
  },
};
</script>
