import * as React from 'react';
import { Location, History } from 'history';

export interface LayoutProps {
  history: History;
  location: Location;
  children: any; 
};

export class Layout extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;