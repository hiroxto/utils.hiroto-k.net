<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <info-view>
      </info-view>

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

      <ul class="menu-list">
        <li
          v-for="(url, urlsKey) in urls"
          :key="urlsKey"
        >
          <a
            :href="url.url"
            :title="buildUrlTitle(url)"
            v-text="buildUrlTitle(url)"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import InfoView from '~/components/pages/open/InfoView';
  import { mapState, mapGetters } from 'vuex';

  export default {
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.description },
        ],
      };
    },
    components: {
      InfoView,
    },
    computed: {
      ...mapState({
        urls: state => state.openUrls.urls,
      }),
      ...mapGetters({
        reversedUrls: 'openUrls/reversedUrls',
        exceptedUrls: 'openUrls/exceptedUrls',
        exceptedReversedUrls: 'openUrls/exceptedReversedUrls',
      }),
      title: () => 'Open urls',
      description: () => 'Open the urls.',
      buttonClass: () => 'button is-medium is-danger is-rounded has-text-warning',
    },
    methods: {
      buildUrlTitle (url) {
        return `${url.name} (${url.url})`;
      },
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
  .buttons {
    margin-top: 3vmin;
    margin-bottom: 3vmin;
  }
</style>
