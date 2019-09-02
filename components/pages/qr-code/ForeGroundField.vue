<template>
  <b-field label="QRコードの色">
    <b-input
      v-model="foreGround"
      type="color"
    >
    </b-input>
  </b-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ForeGroundField',
  computed: {
    foreGround: {
      get (): string {
        return this.$store.state.qrCodeGenerator.foreGround;
      },
      set (foreGround): void {
        this.$store.commit('qrCodeGenerator/setForeGround', foreGround);
      },
    },
  },
});
</script>
