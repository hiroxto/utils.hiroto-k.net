<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <mark-down-content :source="source">
        </mark-down-content>
      </div>
    </div>
  </section>
</template>

<script>
  import MarkDownContent from '~/components/MarkDownContent';

  export default {
    name: 'MarkDownOnlyContent',
    props: {
      source: {
        required: true,
        type: String,
      },
    },
    components: {
      MarkDownContent,
    },
  };
</script>

<style scoped>

</style>
