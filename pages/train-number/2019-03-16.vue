<script lang="ts">
import TrainNumberPage from '~/components/pages/train-number/TrainNumberPage';
import contentSource from '~/assets/train-number/2019-03-16.md';

export default TrainNumberPage.extend({
  name: 'TrainNumber20190316Page',
  computed: {
    title (): string {
      return '2019年3月16日 改正';
    },
    source (): string {
      return contentSource;
    },
  },
});
</script>
