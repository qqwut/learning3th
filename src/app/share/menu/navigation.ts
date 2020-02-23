import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

var NavigationItems = [
  {
    id: 'sample-page',
    title: 'CANDIDATES',
    type: 'item',
    url: '/candidate',
    classes: 'nav-item',
    icon: 'fas fa-user-friends'
  },
  {
    id: 'sample-page',
    title: 'PERSONAL REQUISITON',
    type: 'item',
    url: '/personal',
    classes: 'nav-item',
    icon: 'fas fa-paste'
  },
  {
    id: 'sample-page',
    title: 'ACCOUNT MANAGEMENT',
    type: 'item',
    url: '/account',
    classes: 'nav-item',
    icon: 'fas fa-cogs'
  },
  {
    id: 'sample-page',
    title: 'COMMON DATA',
    type: 'item',
    url: '/common',
    classes: 'nav-item',
    icon: 'fas fa-folder-open'
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }

  public set(data) {
    NavigationItems = data;
    return NavigationItems;
  }
}
