export const state = () => ({
  urls: [
    {
      name: '運用情報',
      url: 'https://loo-ool.com/rail/e233.cgi',
      except: true,
    },
    {
      name: '埼京線 運用情報',
      url: 'https://loo-ool.com/rail/e233.cgi?a=A',
      except: false,
    },
    {
      name: '武蔵野線 運用情報',
      url: 'https://loo-ool.com/rail/e233.cgi?a=M',
      except: false,
    },
    {
      name: '京葉線 運用情報',
      url: 'https://loo-ool.com/rail/e233.cgi?a=B',
      except: false,
    },
    {
      name: '八高・川越線 運用情報',
      url: 'https://loo-ool.com/rail/e233.cgi?a=W',
      except: false,
    },
    {
      name: '貨物ちゃんねる',
      url: 'http://kamo.apreed.com/',
      except: true,
    },
    {
      name: 'EF65[田] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_hata65.html',
      except: false,
    },
    {
      name: 'EF81[田] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_hata81.html',
      except: false,
    },
    {
      name: 'EF60[高] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_taka60.html',
      except: false,
    },
    {
      name: 'EF64[高] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_taka64.html',
      except: false,
    },
    {
      name: 'EF65[高] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_taka65.html',
      except: false,
    },
    {
      name: 'DE10[高] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_taka10.html',
      except: false,
    },
    {
      name: 'DD51[高] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_taka51.html',
      except: false,
    },
    {
      name: 'EF64[長岡] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_naka64.html',
      except: false,
    },
    {
      name: 'EF81[長岡] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_naka81.html',
      except: false,
    },
    {
      name: 'EF81[秋] 運用情報',
      url: 'http://kamo.apreed.com/uj-e_aki81.html',
      except: false,
    },
    {
      name: 'キヤE195系(仙ココ) 運用情報',
      url: 'http://kamo.apreed.com/uj-e_koko195.html',
      except: false,
    },
    {
      name: 'EF65[新] 運用情報',
      url: 'http://kamo.apreed.com/uj-tuso65.html',
      except: false,
    },
    {
      name: 'EF210[新] 運用情報',
      url: 'http://kamo.apreed.com/uj-tuso210.html',
      except: false,
    },
    {
      name: 'DE10[新] 運用情報',
      url: 'http://kamo.apreed.com/uj-tuso10.html',
      except: false,
    },
    {
      name: 'HD300[新] 運用情報',
      url: 'http://kamo.apreed.com/uj-tuso300.html',
      except: false,
    },
    {
      name: 'EH500[仙貨] 運用情報',
      url: 'http://kamo.apreed.com/uj-sen500.html',
      except: false,
    },
    {
      name: 'EH200[高] 運用情報',
      url: 'http://kamo.apreed.com/uj-taka200.html',
      except: false,
    },
    {
      name: 'EF64[愛] 運用情報',
      url: 'http://kamo.apreed.com/uj-ai64.html',
      except: false,
    },
    {
      name: 'EF66[吹] 運用情報',
      url: 'http://kamo.apreed.com/uj-sui66.html',
      except: false,
    },
    {
      name: 'EF210[吹] 運用情報',
      url: 'http://kamo.apreed.com/uj-sui210.html',
      except: false,
    },
    {
      name: 'EF210[岡] 運用情報',
      url: 'http://kamo.apreed.com/uj-oka210.html',
      except: false,
    },
    {
      name: 'Eventernote',
      url: 'https://www.eventernote.com/',
      except: false,
    },
  ],
});

export const getters = {
  reversedUrls (state) {
    return state.urls.slice(0).reverse();
  },
  exceptedUrls (state) {
    return state.urls.filter(url => !url.except);
  },
  exceptedReversedUrls (state) {
    return state.exceptedUrls.slice(0).reverse();
  },
  exceptedUrlsCount (state) {
    return state.exceptedUrls.length;
  },
};
