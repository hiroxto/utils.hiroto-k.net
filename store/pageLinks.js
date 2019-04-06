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
};
