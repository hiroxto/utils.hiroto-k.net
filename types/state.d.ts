import { Link, OpenLink } from './index';

export interface RootState {
  pageLinks: PageLinksState;
  openLinks: OpenLinksState;
}

export interface PageLinksState {
  topPageLink: Link;
  openLinksPageLink: Link;
  trainNumberPageLink: Link;
  trainNumber20180317PageLink: Link;
  trainNumber20190316PageLink: Link;
}

export interface OpenLinksState {
  links: OpenLink[];
}
