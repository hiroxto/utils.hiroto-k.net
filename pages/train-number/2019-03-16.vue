<template>
  <mark-down-content :source="source">
  </mark-down-content>
</template>

<script>
  import MarkDownContent from '~/components/train-number/MarkDownContent';

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
        return `
# ${this.pageTitle}

現在作成中。
        `;
      },
    },

  };
</script>

<style scoped>

</style>
