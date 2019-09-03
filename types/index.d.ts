export * from './state';

export interface Link {
  title: string;
  to: string;
}

export interface OpenLink extends Link {
  except: boolean;
}

export type QrCodeErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
