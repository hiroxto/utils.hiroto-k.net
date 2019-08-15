<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <info-view>
      </info-view>

      <open-buttons>
      </open-buttons>

      <links-list>
      </links-list>
    </div>
  </section>
</template>

<script lang="ts">
import InfoView from '~/components/pages/open/InfoView';
import LinksList from '~/components/pages/open/LinksList';
import OpenButtons from '~/components/pages/open/OpenButtons';

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
    LinksList,
    OpenButtons,
  },
  computed: {
    title () {
      return 'Open links';
    },
    description () {
      return 'Open the links.';
    },
  },
};
</script>
