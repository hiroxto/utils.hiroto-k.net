<template>
  <div class="specification mt-5">
    <h3>仕様</h3>
    <div class="description">
      <p>EMVCoが出しているContactless Specifications for Payment Systemsという仕様書にEMV Contactlessの仕様全般が書かれていて，オーディオ関連は9.1.2 Audio Indicationに書かれている．</p>
      <p>普段聴く音はSuccess Toneと定義されていて，約500msの周期で約1500Hzの正弦波と規定されている．</p>
      <p>ただし，実装する場合はリーダは意図した動作環境ではっきりと聞こえるレベルでトーンを鳴らす必要があるため，必ずしも仕様書通りの信号がリーダから鳴るとは限らない．</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Specification',
});
</script>
