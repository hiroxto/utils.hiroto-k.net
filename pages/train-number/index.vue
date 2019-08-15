<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <links-menu :links="trainNumberContentPageLinks">
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
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ],
    };
  },
  components: {
    LinksMenu,
  },
  computed: {
    trainNumberContentPageLinks (): Link[] {
      return this.$store.getters['pageLinks/trainNumberContentPageLinks'];
    },
    title (): string {
      return '列車番号メモ';
    },
    description (): string {
      return '入出場,車輪転削などの予定臨や、パターンが概ね決まっている臨工や臨単の列車番号のメモ。';
    },
  },
});
</script>
