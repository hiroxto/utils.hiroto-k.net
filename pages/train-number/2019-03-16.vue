<script>
  import TrainNumberPage from '~/components/pages/train-number/TrainNumberPage';
  import contentSource from '~/assets/train-number/2019-03-16.md';

  export default {
    name: 'TrainNumber20190316Page',
    extends: TrainNumberPage,
    computed: {
      title: () => '2019年3月16日 改正',
      source () {
        return contentSource;
      },
    },
  };
</script>

<style scoped>
</style>
