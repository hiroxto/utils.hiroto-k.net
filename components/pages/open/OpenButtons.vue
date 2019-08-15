<template>
  <div>
    <div class="buttons">
      <button
        :class="buttonClass"
        @click="openNormal"
      >
        Open normal
      </button>
      <button
        :class="buttonClass"
        @click="openReverse"
      >
        Open reverse
      </button>
    </div>

    <div class="buttons">
      <button
        :class="buttonClass"
        @click="openExceptNormal"
      >
        Open except normal
      </button>
      <button
        :class="buttonClass"
        @click="openExceptedReverse"
      >
        Open except reverse
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { OpenLink } from '~/types';

export default Vue.extend({
  name: 'OpenButtons',
  computed: {
    links (): OpenLink[] {
      return this.$store.state.openLinks.links;
    },
    reversedLinks (): OpenLink[] {
      return this.$store.getters['openLinks/reversedLinks'];
    },
    exceptedLinks (): OpenLink[] {
      return this.$store.getters['openLinks/exceptedLinks'];
    },
    exceptedReversedLinks (): OpenLink[] {
      return this.$store.getters['openLinks/exceptedReversedLinks'];
    },
    buttonClass (): string {
      return 'button is-medium is-danger is-rounded has-text-warning';
    },
  },
  methods: {
    openNormal (): void {
      this
        .links
        .forEach(link => window.open(link.to, '_blank'));
    },
    openReverse (): void {
      this
        .reversedLinks
        .forEach(link => window.open(link.to, '_blank'));
    },
    openExceptNormal (): void {
      this
        .exceptedLinks
        .forEach(link => window.open(link.to, '_blank'));
    },
    openExceptedReverse (): void {
      this
        .exceptedReversedLinks
        .forEach(link => window.open(link.to, '_blank'));
    },
  },
});
</script>

<style scoped>
.buttons {
  margin-top: 3vmin;
  margin-bottom: 3vmin;
}
</style>
