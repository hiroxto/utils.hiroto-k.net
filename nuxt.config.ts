import { Configuration } from '@nuxt/types';

const nuxtConfig: Configuration = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | utils.hiroto-k.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Generic description.' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '192x192', href: '/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff8cf0' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-buefy', {
      materialDesignIcons: false,
    }],
  ],

  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true,
    }],
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    hardSource: true,

    transpile: [
      'vee-validate/dist/rules',
    ],

    extend (config, { isDev, isClient }): void {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/,
      });

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};

module.exports = nuxtConfig;
