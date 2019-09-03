<template>
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SizeField',
  computed: {
    size: {
      get (): string {
        return this.$store.state.qrCodeGenerator.size;
      },
      set (size): void {
        this.$store.commit('qrCodeGenerator/setSize', size);
      },
    },
    sliderTicks (): number[] {
      return [0, 100, 200, 300, 400, 500];
    },
  },
});
</script>
