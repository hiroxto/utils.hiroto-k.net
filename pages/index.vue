<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <links-menu :links="pageLinks">
      </links-menu>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import LinksMenu from '~/components/ui/LinksMenu';
import { Link } from '~/types';

export default Vue.extend({
  head () {
    return {
      title: this.title,
      titleTemplate: '',
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ],
    };
  },
  components: {
    LinksMenu,
  },
  computed: {
    pageLinks (): Link[] {
      return this.$store.getters['pageLinks/pageLinks'];
    },
    title (): string {
      return 'root-80.cf';
    },
    description (): string {
      return 'Utility site for me.';
    },
  },
});
</script>
