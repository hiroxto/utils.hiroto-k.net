<template>
  <b-field label="埋め込む値">
    <b-input
      v-model="value"
      placeholder="値を入力"
    >
    </b-input>
  </b-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ValueField',
  computed: {
    value: {
      get (): string {
        return this.$store.state.qrCodeGenerator.value;
      },
      set (value): void {
        this.$store.commit('qrCodeGenerator/setValue', value);
      },
    },
  },
});
</script>
