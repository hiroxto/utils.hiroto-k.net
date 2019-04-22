<script>
  import TrainNumberPage from '~/components/pages/train-number/TrainNumberPage';
  import contentSource from '~/assets/train-number/2018-03-17.md';

  export default {
    extends: TrainNumberPage,
    computed: {
      title: () => '2018年3月17日 改正',
      source () {
        return contentSource;
      },
    },
  };
</script>

<style scoped>
</style>
