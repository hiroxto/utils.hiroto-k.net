<template>
  <ul class="menu-list">
    <li
      v-for="(link, linksKey) in links"
      :key="linksKey"
    >
      <a
        :href="link.to"
        :title="buildUrlTitle(link)"
        v-text="buildUrlTitle(link)"
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
  name: 'LinksList',
  computed: {
    ...mapState({
      links: state => state.openLinks.links,
    }),
  },
  methods: {
    buildUrlTitle (link) {
      return `${link.title} (${link.to})`;
    },
  },
};
</script>
