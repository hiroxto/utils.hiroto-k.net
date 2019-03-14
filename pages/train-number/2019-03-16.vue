<template>
  <mark-down-content :source="source">
  </mark-down-content>
</template>

<script>
  import MarkDownContent from '~/components/train-number/MarkDownContent';
  import contentSource from '~/assets/train-number/2019-03-16.md';

  export default {
    components: {
      MarkDownContent,
    },
    head () {
      return {
        title: this.pageTitle,
      };
    },
    computed: {
      pageTitle: () => '2019年3月16日 改正',
      source () {
        return contentSource;
      },
    },
  };
</script>

<style scoped>

</style>
