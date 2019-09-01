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

    <span
      v-if="isRenderTrainType"
      v-text="trainType"
      class="tag is-info is-large is-rounded"
    >
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider, extend, localize } from 'vee-validate';
import { numeric, between } from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';

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
    trainType (): string|null {
      if (
        this.trainNumber === '' ||
        this.splitNumber.includes(NaN) ||
        this.splitNumber.length !== 4 ||
        this.trainNumber.startsWith('0')
      ) {
        return null;
      }

      return this.isPassengerNumber ? this.getPassengerType() : this.getFreightType();
    },
    isRenderTrainType (): boolean {
      return this.trainType !== null;
    },
    splitNumber (): number[] {
      return this
        .trainNumber
        .toString()
        .padStart(4, '0')
        .split('')
        .map(s => parseInt(s));
    },
    isPassengerNumber (): boolean { // 旅客列車か
      return this.splitNumber[2] < 5;
    },
    isPassengerSpecial (): boolean {
      return this.splitNumber[0] >= 6;
    },
    isFreightSpecial (): boolean {
      return this.splitNumber[0] >= 8;
    },
  },
  methods: {
    getPassengerType (): string|null {
      const splitNumber = this.splitNumber;
      const isSpecial = this.isPassengerSpecial;

      if (splitNumber[1] === 0) {
        // Check 特急客
        return `${isSpecial ? '臨' : ''}特急客`;
      } else if ((splitNumber[0] !== 0 || splitNumber[1] !== 0) && splitNumber[2] <= 1) {
        // Checks 急客
        return `${isSpecial ? '臨' : ''}急客`;
      } else if (splitNumber[1] !== 0 && splitNumber[2] >= 2) {
        // Checks 客
        return `${isSpecial ? '臨' : ''}客`;
      } else {
        return null;
      }
    },
    getFreightType (): string|null {
      const splitNumber = this.splitNumber;
      const isSpecial = this.isFreightSpecial;

      if (splitNumber[1] === 0) {
        // Checks 高速貨A,B
        const ab = (splitNumber[2] <= 6) ? 'A' : 'B';
        return `${isSpecial ? '臨' : ''}高速貨${ab}`;
      } else if ((splitNumber[0] <= 1 || isSpecial) && splitNumber[2] === 5) {
        // Checks 高速貨C
        return `${isSpecial ? '臨' : ''}高速貨C`;
      } else if (splitNumber[2] >= 6 && splitNumber[2] <= 8) {
        // Checks 専貨A
        return `${isSpecial ? '臨' : ''}専貨A`;
      } else if (splitNumber[2] === 9) {
        // Checks 専貨B
        return `${isSpecial ? '臨' : ''}専貨B`;
      } else {
        // Undefined
        return null;
      }
    },
  },
});
</script>
