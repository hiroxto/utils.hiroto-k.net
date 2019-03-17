module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | root-80.cf',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex, nofollow, noarchive' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '192x192', href: '/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700' },
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

  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
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
