<template>
  <div v-html="markedContent">
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'MarkDownContent',
  props: {
    source: {
      required: true,
      type: String,
    },
  },
  computed: {
    markedContent () {
      return marked(this.source);
    },
  },
};
</script>
