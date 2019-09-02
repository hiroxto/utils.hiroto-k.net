<template>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { QrCodeErrorCorrectionLevel } from '~/types';

interface ErrorCorrectionLevelSelects {
  value: QrCodeErrorCorrectionLevel;
  text: string;
}

export default Vue.extend({
  name: 'ErrorCorrectionLevelField',
  computed: {
    level: {
      get (): string {
        return this.$store.state.qrCodeGenerator.level;
      },
      set (level): void {
        this.$store.commit('qrCodeGenerator/setLevel', level);
      },
    },
    errorCorrectionLevels (): ErrorCorrectionLevelSelects[] {
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
