<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <vue-markdown :source="content">
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
      title: {
        required: true,
        type: String,
      },
      content: {
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
