<template>
  <ul class="menu-list">
    <li
      v-for="(url, urlsKey) in urls"
      :key="urlsKey"
    >
      <a
        :href="url.to"
        :title="buildUrlTitle(url)"
        v-text="buildUrlTitle(url)"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UrlsList',
  computed: {
    ...mapState({
      urls: state => state.openUrls.urls,
    }),
  },
  methods: {
    buildUrlTitle (url) {
      return `${url.title} (${url.to})`;
    },
  },
};
</script>
