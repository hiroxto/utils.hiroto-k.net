<template>
  <mark-down-only-content :source="source">
  </mark-down-only-content>
</template>

<script lang="ts">
import Vue from 'vue';
import MarkDownOnlyContent from '~/components/MarkDownOnlyContent';

export default Vue.extend({
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
    title (): string {
      return 'title';
    },
    description (): string {
      return `列車番号メモ ${this.title}`;
    },
    source (): string {
      return '';
    },
  },
});
</script>
