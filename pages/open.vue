<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <info-view>
      </info-view>

      <open-buttons>
      </open-buttons>

      <urls-list>
      </urls-list>
    </div>
  </section>
</template>

<script>
  import InfoView from '~/components/pages/open/InfoView';
  import OpenButtons from '~/components/pages/open/OpenButtons';
  import UrlsList from '~/components/pages/open/UrlsList';

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
      OpenButtons,
      UrlsList,
    },
    computed: {
      title () {
        return 'Open urls';
      },
      description () {
        return 'Open the urls.';
      },
    },
  };
</script>
