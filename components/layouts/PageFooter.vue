<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p v-text="footerTitle" class="footer-column-title">
            </p>
          </div>

          <div class="column">
            <p v-text="footerLinksTitle" class="footer-column-title">
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

<script lang="ts">
import Vue from 'vue';
import { Link } from '~/types';

export default Vue.extend({
  name: 'PageFooter',
  computed: {
    allPageLinks (): Link[] {
      return this.$store.getters['pageLinks/allPageLinks'];
    },
    footerTitle (): string {
      return '© 2019 hiroxto';
    },
    footerLinksTitle (): string {
      return 'Page links';
    },
  },
});
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
