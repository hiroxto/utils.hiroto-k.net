<template>
  <div v-html="markedContent">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';

export default Vue.extend({
  name: 'MarkDownContent',
  props: {
    source: {
      required: true,
      type: String,
    },
  },
  computed: {
    markedContent (): string {
      return marked(this.source);
    },
  },
});
</script>
