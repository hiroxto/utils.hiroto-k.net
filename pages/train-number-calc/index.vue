<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ],
    };
  },
  components: {
  },
  computed: {
    title (): string {
      return '列車番号から列車種別を計算';
    },
    description (): string {
      return '列車番号から列車種別(特急客, 臨急客, 臨特急客, 高速貨A, 臨専貨A, など)を計算できるページ。';
    },
  },
});
</script>
