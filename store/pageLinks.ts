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
    title: 'Train number',
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
});

export const getters: GetterTree<PageLinksState, RootState> = {
  allPageLinks (state: PageLinksState): Link[] {
    return [
      state.topPageLink,
      state.openLinksPageLink,
      state.trainNumberPageLink,
    ];
  },
  pageLinks (state: PageLinksState): Link[] {
    return [
      state.openLinksPageLink,
      state.trainNumberPageLink,
    ];
  },
  trainNumberContentPageLinks (state: PageLinksState): Link[] {
    return [
      state.trainNumber20180317PageLink,
      state.trainNumber20190316PageLink,
    ];
  },
};