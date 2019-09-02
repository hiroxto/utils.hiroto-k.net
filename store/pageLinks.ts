import { Link, PageLinksState, RootState } from '~/types';
import { GetterTree } from 'vuex';

export const state = (): PageLinksState => ({
  topPageLink: {
    title: 'Top page',
    to: '/',
  },
  openLinksPageLink: {
    title: 'Open links',
    to: '/open',
  },
  trainNumberPageLink: {
    title: '列車番号メモ',
    to: '/train-number',
  },
  trainNumber20180317PageLink: {
    title: '2018年3月17日 改正',
    to: '/train-number/2018-03-17',
  },
  trainNumber20190316PageLink: {
    title: '2019年3月16日 改正',
    to: '/train-number/2019-03-16',
  },
  trainNumberCalcPageLink: {
    title: '列車番号から列車種別を計算',
    to: '/train-number-calc',
  },
  qrCodeGeneratorPageLink: {
    title: 'QRコード生成',
    to: '/qr-code',
  },
});

export const getters: GetterTree<PageLinksState, RootState> = {
  allPageLinks (state: PageLinksState): Link[] {
    return [
      state.topPageLink,
      state.openLinksPageLink,
      state.trainNumberPageLink,
      state.trainNumberCalcPageLink,
      state.qrCodeGeneratorPageLink,
    ];
  },
  pageLinks (state: PageLinksState): Link[] {
    return [
      state.openLinksPageLink,
      state.trainNumberPageLink,
      state.trainNumberCalcPageLink,
      state.qrCodeGeneratorPageLink,
    ];
  },
  trainNumberContentPageLinks (state: PageLinksState): Link[] {
    return [
      state.trainNumber20180317PageLink,
      state.trainNumber20190316PageLink,
    ];
  },
};
