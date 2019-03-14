<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <vue-markdown :source="source">
        </vue-markdown>
      </div>
    </div>
  </section>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'MarkDownContent',
    props: {
      source: {
        required: true,
        type: String,
      },
    },
    components: {
      VueMarkdown,
    },
  };
</script>

<style scoped>

</style>
