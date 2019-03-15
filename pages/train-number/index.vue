<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        {{ pageTitle }}
      </h1>

      <h2 class="subtitle">
        入出場,車輪転削などの予定臨や、パターンが概ね決まっている臨工や臨単の列車番号のメモ。
      </h2>

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
          {
            title: '2019年3月16日 改正',
            to: '/train-number/2019-03-16',
          },
        ];
      },
    },
  };
</script>

<style scoped>

</style>
