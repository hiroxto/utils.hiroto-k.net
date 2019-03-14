<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        {{ pageTitle }}
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
        title: this.pageTitle,
      };
    },
    computed: {
      pageTitle: () => '列車番号メモ',
      pageLinks () {
        return [
          {
            title: '2018年3月17日 改正',
            to: '/train-number/2018-03-17',
          },
        ];
      },
    },
  };
</script>

<style scoped>

</style>
