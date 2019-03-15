<template>
  <mark-down-content :source="source">
  </mark-down-content>
</template>

<script>
  import MarkDownContent from '~/components/train-number/MarkDownContent';
  import contentSource from '~/assets/train-number/2018-03-17.md';

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
      pageTitle: () => '2018年3月17日 改正',
      source () {
        return contentSource;
      },
    },
  };
</script>

<style scoped>
</style>
