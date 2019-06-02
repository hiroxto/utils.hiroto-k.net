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

<script>
import LinksMenu from '~/components/ui/LinksMenu';
import { mapGetters } from 'vuex';

export default {
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
    ...mapGetters({
      pageLinks: 'pageLinks/pageLinks',
    }),
    title () {
      return 'root-80.cf';
    },
    description () {
      return 'Utility site for me.';
    },
  },
};
</script>
