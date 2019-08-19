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

<script lang="ts">
import Vue from 'vue';
import MarkDownContent from '~/components/MarkDownContent';

export default Vue.extend({
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
});
</script>
