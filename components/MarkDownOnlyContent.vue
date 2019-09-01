<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <mark-down-content :source="source" :options="options">
        </mark-down-content>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import MarkDownContent from '~/components/MarkDownContent';
import { MarkedOptions } from 'marked';

export default Vue.extend({
  name: 'MarkDownOnlyContent',
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
  components: {
    MarkDownContent,
  },
});
</script>
