import * as React from 'react';

import Home from './Home';

export interface View {
  path: string;
  exact: boolean;
  title: string;
  component: React.ComponentClass;
}

export const views: View[] = [
  {
    path: '/',
    exact: true,
    title: Home.title,
    component: Home.component
  }
];

export default views;