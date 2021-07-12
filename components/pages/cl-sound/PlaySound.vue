<template>
  <div class="play-container">
    <div class="buttons">
      <b-button
        size="is-medium"
        type="is-info"
        icon-left="contactless-payment"
        rounded
        @click="playSound"
      >
        Play Sound
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PlaySound',
  computed: {
    audioContext (): AudioContext {
      return new AudioContext();
    },
  },
  methods: {
    playSound (): void {
      const oscillator = this.audioContext.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.value = 1500;
      oscillator.connect(this.audioContext.destination);
      oscillator.start(0);

      window.setTimeout(() => {
        oscillator.stop();
      }, 500);
    },
  },
});
</script>
