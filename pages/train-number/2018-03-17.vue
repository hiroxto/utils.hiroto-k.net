<script>
  import TrainNumberPage from '~/components/pages/train-number/TrainNumberPage';
  import contentSource from '~/assets/train-number/2018-03-17.md';

  export default {
    name: 'TrainNumber20180317Page',
    extends: TrainNumberPage,
    computed: {
      title () {
        return '2018年3月17日 改正';
      },
      source () {
        return contentSource;
      },
    },
  };
</script>

<style scoped>
</style>
