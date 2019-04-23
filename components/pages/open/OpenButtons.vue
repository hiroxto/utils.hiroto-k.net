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

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'OpenButtons',
    computed: {
      ...mapState({
        urls: state => state.openUrls.urls,
      }),
      ...mapGetters({
        reversedUrls: 'openUrls/reversedUrls',
        exceptedUrls: 'openUrls/exceptedUrls',
        exceptedReversedUrls: 'openUrls/exceptedReversedUrls',
      }),
    },
    methods: {
      openNormal () {
        this
          .urls
          .forEach(url => window.open(url.url, '_blank'));
      },
      openReverse () {
        this
          .reversedUrls
          .forEach(url => window.open(url.url, '_blank'));
      },
      openExceptNormal () {
        this
          .exceptedUrls
          .forEach(url => window.open(url.url, '_blank'));
      },
      openExceptedReverse () {
        this
          .exceptedReversedUrls
          .forEach(url => window.open(url.url, '_blank'));
      },
    },
  };
</script>

<style scoped>

</style>
