import { Link, QrCodeErrorCorrectionLevel, QrCodeRenderAsOptionValue } from './index';

export interface RootState {
  pageLinks: PageLinksState;
  qrCodeGenerator: QrCodeGeneratorState;
}

export interface PageLinksState {
  topPageLink: Link;
  trainNumberPageLink: Link;
  trainNumber20180317PageLink: Link;
  trainNumber20190316PageLink: Link;
  trainNumberCalcPageLink: Link;
  qrCodeGeneratorPageLink: Link;
  contactlessSoundPage: Link;
}

export interface QrCodeGeneratorState {
  value: string;
  size: number;
  level: QrCodeErrorCorrectionLevel;
  renderAs: QrCodeRenderAsOptionValue;
  backGround: string;
  foreGround: string;
}
