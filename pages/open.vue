<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Open urls
      </h1>
      <p>Total urls : {{ urlsCount }}</p>
      <p>Normal : {{ normalBrowsersText }}</p>
      <p>Reverse : {{ reverseBrowsersText }}</p>

      <div class="buttons">
        <button
          class="button is-large is-primary is-rounded"
          @click="openNormal"
        >
          Open normal
        </button>
        <button
          class="button is-large is-primary is-rounded"
          @click="openReverse"
        >
          Open reverse
        </button>
      </div>

      <ul class="menu-list">
        <li
          v-for="(url, urlsKey) in urls"
          :key="urlsKey"
        >
          <a
            :href="url.url"
            :title="url.name"
            v-text="`${url.name} (${url.url})`"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Open urls',
      };
    },
    computed: {
      urls () {
        return [
          {
            name: '運用情報',
            url: 'https://loo-ool.com/rail/e233.cgi',
          },
          {
            name: '埼京線 運用情報',
            url: 'https://loo-ool.com/rail/e233.cgi?a=A',
          },
          {
            name: '武蔵野線 運用情報',
            url: 'https://loo-ool.com/rail/e233.cgi?a=M',
          },
          {
            name: '京葉線 運用情報',
            url: 'https://loo-ool.com/rail/e233.cgi?a=B',
          },
          {
            name: '八高・川越線 運用情報',
            url: 'https://loo-ool.com/rail/e233.cgi?a=W',
          },
          {
            name: '貨物ちゃんねる',
            url: 'http://kamo.apreed.com/',
          },
          {
            name: 'EF65[田] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_hata65.html',
          },
          {
            name: 'EF81[田] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_hata81.html',
          },
          {
            name: 'EF60[高] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_taka60.html',
          },
          {
            name: 'EF64[高] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_taka64.html',
          },
          {
            name: 'EF65[高] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_taka65.html',
          },
          {
            name: 'DE10[高] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_taka10.html',
          },
          {
            name: 'DD51[高] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_taka51.html',
          },
          {
            name: 'EF64[長岡] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_naka64.html',
          },
          {
            name: 'EF81[長岡] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_naka81.html',
          },
          {
            name: 'EF81[秋] 運用情報',
            url: 'http://kamo.apreed.com/uj-e_aki81.html',
          },
          {
            name: 'キヤE195系(仙ココ) 運用情報',
            url: 'http://kamo.apreed.com/uj-e_koko195.html',
          },
          {
            name: 'EF65[新] 運用情報',
            url: 'http://kamo.apreed.com/uj-tuso65.html',
          },
          {
            name: 'EF210[新] 運用情報',
            url: 'http://kamo.apreed.com/uj-tuso210.html',
          },
          {
            name: 'DE10[新] 運用情報',
            url: 'http://kamo.apreed.com/uj-tuso10.html',
          },
          {
            name: 'HD300[新] 運用情報',
            url: 'http://kamo.apreed.com/uj-tuso300.html',
          },
          {
            name: 'EH500[仙貨] 運用情報',
            url: 'http://kamo.apreed.com/uj-sen500.html',
          },
          {
            name: 'EH200[高] 運用情報',
            url: 'http://kamo.apreed.com/uj-taka200.html',
          },
          {
            name: 'EF64[愛] 運用情報',
            url: 'http://kamo.apreed.com/uj-ai64.html',
          },
          {
            name: 'EF66[吹] 運用情報',
            url: 'http://kamo.apreed.com/uj-sui66.html',
          },
          {
            name: 'EF210[吹] 運用情報',
            url: 'http://kamo.apreed.com/uj-sui210.html',
          },
          {
            name: 'EF210[岡] 運用情報',
            url: 'http://kamo.apreed.com/uj-oka210.html',
          },
          {
            name: 'Eventernote',
            url: 'https://www.eventernote.com/',
          },
        ];
      },
      reversedUrls () {
        return this.urls.slice(0).reverse();
      },
      urlsCount () {
        return this.urls.length;
      },
      joinSeparator: () => ', ',
      normalBrowsers () {
        return [
          'Mobile Firefox',
        ];
      },
      normalBrowsersText () {
        return this.normalBrowsers.join(this.joinSeparator);
      },
      reverseBrowsers () {
        return [
          'PC Firefox',
          'PC Chrome',
        ];
      },
      reverseBrowsersText () {
        return this.reverseBrowsers.join(this.joinSeparator);
      },
    },
    methods: {
      openNormal () {
        this
          .urls
          .forEach(url => window.open(url.url, '_blank'));
      },
      openReverse () {
        this
          .reversedUrls
          .forEach(url => window.open(url.url, '_blank'));
      },
    },
  };
</script>

<style scoped>
  .buttons {
    margin-top: 3vmin;
    margin-bottom: 3vmin;
  }
</style>
