<template>
  <mark-down-only-content :source="source">
  </mark-down-only-content>
</template>

<script>
  import MarkDownOnlyContent from '~/components/MarkDownOnlyContent';
  import contentSource from '~/assets/train-number/2018-03-17.md';

  export default {
    components: {
      MarkDownOnlyContent,
    },
    head () {
      return {
        title: this.title,
      };
    },
    computed: {
      title: () => '2018年3月17日 改正',
      source () {
        return contentSource;
      },
    },
  };
</script>

<style scoped>
</style>
