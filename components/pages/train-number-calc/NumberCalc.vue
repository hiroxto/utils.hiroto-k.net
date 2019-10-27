<template>
  <div class="content">
    <div class="field">
      <validation-provider
        name="列車番号"
        rules="numeric|between:1,9999|not-starts-with-zero"
        v-slot="{ errors }"
      >
        <label class="label">列車番号</label>
        <div class="control">
          <input
            v-model="trainNumber"
            :class="getInputClass(errors)"
            class="input"
            type="text"
            placeholder="列車番号を入力"
          >
        </div>

        <p class="help is-danger">
          {{ errors[0] }}
        </p>
      </validation-provider>
    </div>

    <b-tag
      v-if="isRenderTrainType"
      v-text="trainType"
      type="is-info"
      size="is-large"
      rounded
    >
    </b-tag>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider, extend, localize } from 'vee-validate';
import { numeric, between } from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';
import TrainNumberCalc from '~/lib/TrainNumberCalc';

ja.messages['not-starts-with-zero'] = '{_field_}は不正な値です。';
extend('numeric', numeric);
extend('between', between);
extend('not-starts-with-zero', {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate: (value: any): boolean => {
    if (typeof value === 'string') {
      return !value.startsWith('0');
    } else {
      return false;
    }
  },
});
localize('ja', {
  messages: ja.messages,
});

export default Vue.extend({
  name: 'NumberCalc',
  data () {
    return {
      trainNumber: '',
    };
  },
  components: {
    ValidationProvider,
  },
  computed: {
    numberCalc (): TrainNumberCalc {
      return new TrainNumberCalc(this.trainNumber);
    },
    trainType (): string|null {
      return this.numberCalc.calc();
    },
    isRenderTrainType (): boolean {
      return this.trainType !== null;
    },
  },
  methods: {
    getInputClass (errors: string[]): string {
      return errors.length === 0 ? 'is-success' : 'is-danger';
    },
  },
});
</script>
