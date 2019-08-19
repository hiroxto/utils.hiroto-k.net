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

<script lang="ts">
import Vue from 'vue';
import { OpenLink } from '~/types';

export default Vue.extend({
  name: 'LinksList',
  computed: {
    links (): OpenLink[] {
      return this.$store.state.openLinks.links;
    },
  },
  methods: {
    buildUrlTitle (link: OpenLink): string {
      return `${link.title} (${link.to})`;
    },
  },
});
</script>
