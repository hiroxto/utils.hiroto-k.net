export * from './state';

export interface Link {
  title: string;
  to: string;
}

export type QrCodeErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type QrCodeRenderAsOptionValue = 'canvas' | 'svg';

export type TrainNumberType = '特急客' | '臨特急客' | '急客' | '臨急客' | '客' | '臨客' |
                              '高速貨A' | '臨高速貨A' | '高速貨B' | '臨高速貨B' | '高速貨C' | '臨高速貨C' |
                              '専貨A' | '臨専貨A' | '専貨B' | '臨専貨B';
