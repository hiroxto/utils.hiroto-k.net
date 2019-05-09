<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p class="footer-column-title">
              © 2019 root-80
            </p>
          </div>

          <div class="column">
            <p class="footer-column-title">
              Page links
            </p>
            <p
              v-for="(pageLink, allPageLinksKey) in allPageLinks"
              :key="allPageLinksKey"
              class="footer-column-item"
            >
              <nuxt-link
                :to="pageLink.to"
                :title="pageLink.title"
                v-text="pageLink.title"
                class="footer-column-link"
              >
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'PageFooter',
    computed: {
      ...mapGetters({
        allPageLinks: 'pageLinks/allPageLinks',
      }),
    },
  };
</script>

<style scoped>
  .footer-column-title {
    color: #000000;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .footer-column-item {
    color: #000000;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
  }

  .footer-column-link {
    color: #12428F;
  }

  .footer-column-link:hover {
    color: #3273dc;
  }
</style>
