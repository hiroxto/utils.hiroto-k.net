<template>
  <b-field>
    <div class="block">
      <label class="label">
        レンダリング方式
      </label>

      <b-radio
        v-model="renderAs"
        name="name"
        native-value="canvas"
      >
        canvas
      </b-radio>

      <b-radio
        v-model="renderAs"
        name="name"
        native-value="svg"
      >
        svg
      </b-radio>
    </div>
  </b-field>
</template>

<script lang="ts">
import Vue from 'vue';

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
  },
});
</script>
