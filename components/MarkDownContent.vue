<template>
  <div v-html="markedContent">
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import marked, { MarkedOptions } from 'marked';

export default Vue.extend({
  name: 'MarkDownContent',
  props: {
    source: {
      required: true,
      type: String,
    } as PropOptions<string>,
    options: {
      required: false,
      type: Object,
      default (): MarkedOptions {
        return {};
      },
    } as PropOptions<MarkedOptions>,
  },
  computed: {
    markedContent (): string {
      return marked(this.source, this.options);
    },
  },
});
</script>
