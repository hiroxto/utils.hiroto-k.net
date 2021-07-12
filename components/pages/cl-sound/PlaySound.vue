<template>
  <div class="play-container">
    <div class="buttons">
      <button
        class="button is-medium is-danger is-rounded has-text-warning"
        @click="playSound"
      >
        Open normal
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
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
};
</script>
