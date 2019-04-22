<template>
  <mark-down-only-content :source="source">
  </mark-down-only-content>
</template>

<script>
  import MarkDownOnlyContent from '~/components/MarkDownOnlyContent';
  import contentSource from '~/assets/train-number/2019-03-16.md';

  export default {
    components: {
      MarkDownOnlyContent,
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.description },
        ],
      };
    },
    computed: {
      title: () => '2019年3月16日 改正',
      description () {
        return `列車番号メモ ${this.title}`;
      },
      source () {
        return contentSource;
      },
    },
  };
</script>

<style scoped>
</style>
