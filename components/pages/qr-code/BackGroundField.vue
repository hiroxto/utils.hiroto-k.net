<template>
  <b-field label="背景色">
    <b-input
      v-model="backGround"
      type="color"
    >
    </b-input>
  </b-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BackGroundField',
  computed: {
    backGround: {
      get (): string {
        return this.$store.state.qrCodeGenerator.backGround;
      },
      set (backGround): void {
        this.$store.commit('qrCodeGenerator/setBackGround', backGround);
      },
    },
  },
});
</script>
