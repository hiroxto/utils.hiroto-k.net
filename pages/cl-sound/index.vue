<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <div class="content">
        <play-sound>
        </play-sound>

        <specification>
        </specification>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import PlaySound from '~/components/pages/cl-sound/PlaySound';
import Specification from '~/components/pages/cl-sound/Specification';

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
    Specification,
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
