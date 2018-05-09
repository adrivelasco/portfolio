import * as React from 'react';

import Home from './Home';
import Contact from './Contact';

export interface IView {
  title: string;
  component: React.ComponentClass;
}

export interface IRouteView {
  path: string;
  exact: boolean;
  title: string;
  component: React.ComponentClass;
}

export const views: IRouteView[] = [
  {
    component: Home.component,
    exact: true,
    path: '/',
    title: Home.title
  }
];

export default views;
