<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <div class="content">
        <div class="qr-setting-fields">
          <value-field>
          </value-field>

          <size-field>
          </size-field>

          <error-correction-level-field>
          </error-correction-level-field>

          <back-ground-field>
          </back-ground-field>

          <fore-ground-field>
          </fore-ground-field>
        </div>

        <qr-code-vue
          :value="value"
          :size="size"
          :level="level"
          :background="backGround"
          :foreground="foreGround"
          class="qr-code"
        >
        </qr-code-vue>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import QrCodeVue from 'qrcode.vue';
import ValueField from '~/components/pages/qr-code/ValueField';
import SizeField from '~/components/pages/qr-code/SizeField';
import ErrorCorrectionLevelField from '~/components/pages/qr-code/ErrorCorrectionLevelField';
import BackGroundField from '~/components/pages/qr-code/BackGroundField';
import ForeGroundField from '~/components/pages/qr-code/ForeGroundField';
import { QrCodeErrorCorrectionLevel } from '~/types';

export default Vue.extend({
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ],
    };
  },
  components: {
    QrCodeVue,
    ValueField,
    SizeField,
    ErrorCorrectionLevelField,
    BackGroundField,
    ForeGroundField,
  },
  computed: {
    title (): string {
      return 'QRコード生成';
    },
    description (): string {
      return 'QrCodeを生成。';
    },
    value (): string {
      return this.$store.state.qrCodeGenerator.value;
    },
    size (): number {
      return this.$store.state.qrCodeGenerator.size;
    },
    level (): QrCodeErrorCorrectionLevel {
      return this.$store.state.qrCodeGenerator.level;
    },
    backGround (): string {
      return this.$store.state.qrCodeGenerator.backGround;
    },
    foreGround (): string {
      return this.$store.state.qrCodeGenerator.foreGround;
    },
  },
});
</script>

<style scoped lang="scss">
.qr-setting-fields > .field {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
.qr-code {
  margin-top: 3rem;
}
</style>
