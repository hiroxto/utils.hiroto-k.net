<template>
  <b-field>
    <div class="block">
      <label class="label">
        誤り訂正レベル
      </label>

      <div
        v-for="(levelForm, levelFormsKey) in levelForms"
        :key="levelFormsKey"
        class="field"
      >
        <b-radio
          :native-value="levelForm.value"
          v-model="level"
          name="name"
        >
          {{ levelForm.text }}
        </b-radio>
      </div>
    </div>
  </b-field>
</template>

<script lang="ts">
import Vue from 'vue';
import { QrCodeErrorCorrectionLevel } from '~/types';

interface ErrorCorrectionLevelFormOption {
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
    levelForms (): ErrorCorrectionLevelFormOption[] {
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
