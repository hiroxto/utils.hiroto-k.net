<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <play-sound>
      </play-sound>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import PlaySound from '../../components/pages/cl-sound/PlaySound';

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
    PlaySound,
  },
  computed: {
    title (): string {
      return 'EMVコンタクトレスのサウンドをWeb Audio APIで再生';
    },
    description (): string {
      return 'EMVコンタクトレスのサウンドをWeb Audio APIで再生';
    },
  },
});
</script>
