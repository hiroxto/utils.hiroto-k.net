<template>
  <mark-down-only-content :source="source">
  </mark-down-only-content>
</template>

<script>
  import MarkDownOnlyContent from '~/components/MarkDownOnlyContent';

  export default {
    name: 'TrainNumberPage',
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
      title: () => 'title',
      description () {
        return `列車番号メモ ${this.title}`;
      },
      source () {
        return '';
      },
    },
  };
</script>

<style scoped>

</style>
