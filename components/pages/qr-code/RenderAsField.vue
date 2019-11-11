<template>
  <b-field>
    <div class="block">
      <label class="label">
        レンダリング方式
      </label>

      <div
        v-for="(renderAsForm, renderAsFormsKey) in renderAsForms"
        :key="renderAsFormsKey"
        class="field"
      >
        <b-radio
          :native-value="renderAsForm.value"
          v-model="renderAs"
          name="name"
        >
          {{ renderAsForm.text }}
        </b-radio>
      </div>
    </div>
  </b-field>
</template>

<script lang="ts">
import Vue from 'vue';
import { QrCodeRenderAsOptionValue } from '~/types';

interface RenderAsFormOption {
  value: QrCodeRenderAsOptionValue;
  text: string;
}

export default Vue.extend({
  name: 'RenderAsField',
  computed: {
    renderAs: {
      get (): string {
        return this.$store.state.qrCodeGenerator.renderAs;
      },
      set (renderAs): void {
        this.$store.commit('qrCodeGenerator/setRenderAs', renderAs);
      },
    },
    renderAsForms (): RenderAsFormOption[] {
      return [
        { value: 'svg', text: 'SVG' },
        { value: 'canvas', text: 'Canvas' },
      ];
    },
  },
});
</script>
