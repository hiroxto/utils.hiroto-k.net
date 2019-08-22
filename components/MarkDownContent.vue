<template>
  <div v-html="markedContent">
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import marked from 'marked';

export default Vue.extend({
  name: 'MarkDownContent',
  props: {
    source: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
  computed: {
    markedContent (): string {
      return marked(this.source);
    },
  },
});
</script>
