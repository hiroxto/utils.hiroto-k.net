<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <aside class="menu">
        <p class="menu-label">
          Pages
        </p>
        <ul class="menu-list">
          <li
            v-for="(trainNumberContentPageLink, trainNumberContentPageLinksKey) in trainNumberContentPageLinks"
            :key="trainNumberContentPageLinksKey"
          >
            <nuxt-link
              :to="trainNumberContentPageLink.to"
              :title="trainNumberContentPageLink.title"
              v-text="trainNumberContentPageLink.title"
            >
            </nuxt-link>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script>
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
