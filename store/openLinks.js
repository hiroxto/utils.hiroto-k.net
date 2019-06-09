export const state = () => ({
  links: [
    {
      title: '運用情報',
      to: 'https://loo-ool.com/rail/',
      except: true,
    },
    {
      title: '埼京線 運用情報',
      to: 'https://loo-ool.com/rail/A/',
      except: false,
    },
    {
      title: '武蔵野線 運用情報',
      to: 'https://loo-ool.com/rail/M/',
      except: false,
    },
    {
      title: '京葉線 運用情報',
      to: 'https://loo-ool.com/rail/B/',
      except: false,
    },
    {
      title: '八高・川越線 運用情報',
      to: 'https://loo-ool.com/rail/W/',
      except: false,
    },
    {
      title: '貨物ちゃんねる',
      to: 'http://kamo.apreed.com/',
      except: true,
    },
    {
      title: 'EF65[田] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_hata65.html',
      except: false,
    },
    {
      title: 'EF81[田] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_hata81.html',
      except: false,
    },
    {
      title: 'EF60[高] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_taka60.html',
      except: false,
    },
    {
      title: 'EF64[高] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_taka64.html',
      except: false,
    },
    {
      title: 'EF65[高] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_taka65.html',
      except: false,
    },
    {
      title: 'DE10[高] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_taka10.html',
      except: false,
    },
    {
      title: 'DD51[高] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_taka51.html',
      except: false,
    },
    {
      title: 'EF64[長岡] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_naka64.html',
      except: false,
    },
    {
      title: 'EF81[長岡] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_naka81.html',
      except: false,
    },
    {
      title: 'EF81[秋] 運用情報',
      to: 'http://kamo.apreed.com/uj-e_aki81.html',
      except: false,
    },
    {
      title: 'キヤE195系(仙ココ) 運用情報',
      to: 'http://kamo.apreed.com/uj-e_koko195.html',
      except: false,
    },
    {
      title: 'EF65[新] 運用情報',
      to: 'http://kamo.apreed.com/uj-tuso65.html',
      except: false,
    },
    {
      title: 'EF210[新] 運用情報',
      to: 'http://kamo.apreed.com/uj-tuso210.html',
      except: false,
    },
    {
      title: 'DE10[新] 運用情報',
      to: 'http://kamo.apreed.com/uj-tuso10.html',
      except: false,
    },
    {
      title: 'HD300[新] 運用情報',
      to: 'http://kamo.apreed.com/uj-tuso300.html',
      except: false,
    },
    {
      title: 'EH500[仙貨] 運用情報',
      to: 'http://kamo.apreed.com/uj-sen500.html',
      except: false,
    },
    {
      title: 'EH200[高] 運用情報',
      to: 'http://kamo.apreed.com/uj-taka200.html',
      except: false,
    },
    {
      title: 'EF64[愛] 運用情報',
      to: 'http://kamo.apreed.com/uj-ai64.html',
      except: false,
    },
    {
      title: 'EF66[吹] 運用情報',
      to: 'http://kamo.apreed.com/uj-sui66.html',
      except: false,
    },
    {
      title: 'EF210[吹] 運用情報',
      to: 'http://kamo.apreed.com/uj-sui210.html',
      except: false,
    },
    {
      title: 'EF210[岡] 運用情報',
      to: 'http://kamo.apreed.com/uj-oka210.html',
      except: false,
    },
    {
      title: 'Eventernote',
      to: 'https://www.eventernote.com/',
      except: false,
    },
  ],
});

export const getters = {
  linksCount (state) {
    return state.links.length;
  },
  reversedLinks (state) {
    return state.links.slice(0).reverse();
  },
  exceptedLinks (state) {
    return state.links.filter(link => !link.except);
  },
  exceptedReversedLinks (state, getters) {
    return getters.exceptedLinks.slice(0).reverse();
  },
  exceptedLinksCount (state, getters) {
    return getters.exceptedLinks.length;
  },
};
