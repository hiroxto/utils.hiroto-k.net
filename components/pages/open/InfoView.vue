<template>
  <div>
    <p>Total urls : {{ urlsCount }}</p>
    <p>Excepted urls : {{ exceptedUrlsCount }}</p>
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
        urlsCount: 'openUrls/urlsCount',
        exceptedUrlsCount: 'openUrls/exceptedUrlsCount',
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

<style scoped>

</style>
