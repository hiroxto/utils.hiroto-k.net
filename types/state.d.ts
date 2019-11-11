import { Link, OpenLink, QrCodeErrorCorrectionLevel } from './index';

export interface RootState {
  pageLinks: PageLinksState;
  openLinks: OpenLinksState;
  qrCodeGenerator: QrCodeGeneratorState;
}

export interface PageLinksState {
  topPageLink: Link;
  openLinksPageLink: Link;
  trainNumberPageLink: Link;
  trainNumber20180317PageLink: Link;
  trainNumber20190316PageLink: Link;
  trainNumberCalcPageLink: Link;
  qrCodeGeneratorPageLink: Link;
}

export interface OpenLinksState {
  links: OpenLink[];
}

export interface QrCodeGeneratorState {
  value: string;
  size: number;
  level: QrCodeErrorCorrectionLevel;
  renderAs: 'canvas'|'svg';
  backGround: string;
  foreGround: string;
}
