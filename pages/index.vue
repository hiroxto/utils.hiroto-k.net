<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
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
              v-text="pageLink.title"
            >
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
        title: this.title,
        titleTemplate: '',
      };
    },
    computed: {
      title () {
        return 'root-80.cf';
      },
      pageLinks () {
        return this.$store.getters['pageLinks/pageLinks'];
      },
    },
  };
</script>
