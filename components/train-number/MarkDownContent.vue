<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <div v-html="markedContent">
        </div>
      </div>
    </div>
  </section>
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

<style scoped>

</style>
