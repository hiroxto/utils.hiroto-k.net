<template>
  <aside class="menu">
    <p class="menu-label" v-text="label">
    </p>

    <ul class="menu-list">
      <li
        v-for="(link, linksKey) in links"
        :key="linksKey"
      >
        <nuxt-link
          :to="link.to"
          :title="link.title"
          v-text="link.title"
        >
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LinksMenu',
  props: {
    links: {
      required: true,
      type: Array,
    },
    label: {
      type: String,
      default (): string {
        return 'pages';
      },
    },
  },
});
</script>
