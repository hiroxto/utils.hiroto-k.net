export const state = () => ({
  topPageLink: {
    title: 'Top page',
    to: '/',
  },
  openUrlsPageLink: {
    title: 'Open urls',
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

export const getters = {
  allPageLinks (state) {
    return [
      state.topPageLink,
      state.openUrlsPageLink,
      state.trainNumberPageLink,
    ];
  },
  pageLinks (state) {
    return [
      state.openUrlsPageLink,
      state.trainNumberPageLink,
    ];
  },
  trainNumberContentPageLinks (state) {
    return [
      state.trainNumber20180317PageLink,
      state.trainNumber20190316PageLink,
    ];
  },
};
