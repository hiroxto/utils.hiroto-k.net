<template>
  <section class="section">
    <div class="container">
      <h1 class="title" v-text="title">
      </h1>

      <h2 class="subtitle" v-text="description">
      </h2>

      <div class="content">
        <div class="qr-setting-fields">
          <b-field label="埋め込む値">
            <b-input
              v-model="value"
              placeholder="値を入力"
            >
            </b-input>
          </b-field>

          <b-field label="サイズ">
            <b-slider
              v-model="size"
              :min="1"
              :max="500"
            >
              <b-slider-tick
                v-for="(sliderTickValue, sliderTicksKey) in sliderTicks"
                :key="sliderTicksKey"
                :value="sliderTickValue"
                v-text="sliderTickValue"
                style="word-break:keep-all;"
              >
              </b-slider-tick>
            </b-slider>
          </b-field>

          <b-field label="誤り訂正レベル">
            <b-select
              v-model="level"
              placeholder="誤り訂正レベルを選択"
            >
              <option
                v-for="(errorCorrectionLevel, errorCorrectionLevelsKey) in errorCorrectionLevels"
                :key="errorCorrectionLevelsKey"
                :value="errorCorrectionLevel.value"
                v-text="errorCorrectionLevel.text"
              >
              </option>
            </b-select>
          </b-field>

          <b-field label="背景色">
            <b-input
              v-model="backGround"
              type="color"
            >
            </b-input>
          </b-field>

          <b-field label="QRコードの色">
            <b-input
              v-model="foreGround"
              type="color"
            >
            </b-input>
          </b-field>
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

interface ErrorCorrectionLevel {
  value: 'L' | 'M' | 'Q' | 'H';
  text: string;
}

export default Vue.extend({
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ],
    };
  },
  data () {
    return {
      value: '',
      size: 250,
      level: 'H',
      backGround: '#ffffff',
      foreGround: '#000000',
    };
  },
  components: {
    QrCodeVue,
  },
  computed: {
    title (): string {
      return 'QrCode生成';
    },
    description (): string {
      return 'QrCodeを生成。';
    },
    sliderTicks (): number[] {
      return [0, 100, 200, 300, 400, 500];
    },
    errorCorrectionLevels (): ErrorCorrectionLevel[] {
      return [
        { value: 'L', text: 'Level L (7%)' },
        { value: 'M', text: 'Level M (15%)' },
        { value: 'Q', text: 'Level Q (25%)' },
        { value: 'H', text: 'Level H (30%)' },
      ];
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
