<script lang="ts">
import TrainNumberPage from '~/components/pages/train-number/TrainNumberPage';
import contentSource from '~/assets/train-number/2018-03-17.md';

export default TrainNumberPage.extend({
  name: 'TrainNumber20180317Page',
  computed: {
    title (): string {
      return '2018年3月17日 改正';
    },
    source (): string {
      return contentSource;
    },
  },
});
</script>
