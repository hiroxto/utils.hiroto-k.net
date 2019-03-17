<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        root-80.cf
      </h1>

      <aside class="menu">
        <p class="menu-label">
          Pages
        </p>
        <ul class="menu-list">
          <li
            v-for="(pageLink, pageLinksKey) in pageLinks"
            :key="pageLinksKey"
          >
            <nuxt-link
              :to="pageLink.to"
              :title="pageLink.title"
            >
              {{ pageLink.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: 'root-80.cf',
        titleTemplate: '',
      };
    },
    computed: {
      pageLinks () {
        const pageLinks = this.$store.state.pageLinks;

        return [
          pageLinks.openUrlsPageLink,
          pageLinks.trainNumberPageLink,
        ];
      },
    },
  };
</script>
