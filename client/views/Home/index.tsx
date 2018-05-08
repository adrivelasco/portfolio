import * as React from 'react';

import Home from './Home';

export interface View {
  title: string;
  component: React.ComponentClass;
};

export default {
  title: 'Home',
  component: Home
};