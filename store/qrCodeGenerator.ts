import { QrCodeGeneratorState, QrCodeErrorCorrectionLevel } from '~/types';
import { MutationTree } from 'vuex';

export const state = (): QrCodeGeneratorState => ({
  value: '',
  size: 250,
  level: 'H',
  renderAs: 'canvas',
  backGround: '#ffffff',
  foreGround: '#000000',
});

export const mutations: MutationTree<QrCodeGeneratorState> = {
  setValue (state: QrCodeGeneratorState, payload: string): void {
    state.value = payload;
  },
  setSize (state: QrCodeGeneratorState, payload: number): void {
    state.size = payload;
  },
  setLevel (state: QrCodeGeneratorState, payload: QrCodeErrorCorrectionLevel): void {
    state.level = payload;
  },
  setBackGround (state: QrCodeGeneratorState, payload: string): void {
    state.backGround = payload;
  },
  setForeGround (state: QrCodeGeneratorState, payload: string): void {
    state.foreGround = payload;
  },
};
