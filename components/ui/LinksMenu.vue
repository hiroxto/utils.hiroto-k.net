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
import Vue, { PropOptions } from 'vue';
import { Link } from '~/types';

export default Vue.extend({
  name: 'LinksMenu',
  props: {
    links: {
      required: true,
      type: Array,
    } as PropOptions<Link[]>,
    label: {
      type: String,
      default (): string {
        return 'pages';
      },
    } as PropOptions<string>,
  },
});
</script>
