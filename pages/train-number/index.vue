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

<script>
import LinksMenu from '~/components/ui/LinksMenu';
import { mapGetters } from 'vuex';

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
    LinksMenu,
  },
  computed: {
    ...mapGetters({
      trainNumberContentPageLinks: 'pageLinks/trainNumberContentPageLinks',
    }),
    title () {
      return '列車番号メモ';
    },
    description () {
      return '入出場,車輪転削などの予定臨や、パターンが概ね決まっている臨工や臨単の列車番号のメモ。';
    },
  },
};
</script>

<style scoped>

</style>
