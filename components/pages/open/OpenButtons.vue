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
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'OpenButtons',
  computed: {
    ...mapState({
      links: state => state.openLinks.links,
    }),
    ...mapGetters({
      reversedLinks: 'openLinks/reversedLinks',
      exceptedLinks: 'openLinks/exceptedLinks',
      exceptedReversedLinks: 'openLinks/exceptedReversedLinks',
    }),
    buttonClass () {
      return 'button is-medium is-danger is-rounded has-text-warning';
    },
  },
  methods: {
    openNormal () {
      this
        .links
        .forEach(link => window.open(link.to, '_blank'));
    },
    openReverse () {
      this
        .reversedLinks
        .forEach(link => window.open(link.to, '_blank'));
    },
    openExceptNormal () {
      this
        .exceptedLinks
        .forEach(link => window.open(link.to, '_blank'));
    },
    openExceptedReverse () {
      this
        .exceptedReversedLinks
        .forEach(link => window.open(link.to, '_blank'));
    },
  },
};
</script>

<style scoped>
.buttons {
  margin-top: 3vmin;
  margin-bottom: 3vmin;
}
</style>
