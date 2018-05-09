import * as React from 'react';
import { Location, History } from 'history';

import * as styles from './Layout.css'; 

export interface ILayoutProps {
  children: React.ReactNode;
  history: History;
  location: Location;
}

export class Layout extends React.Component<ILayoutProps> {
  public render(): JSX.Element {
    const { children }: ILayoutProps = this.props;
    return (
      <div className={styles.root}>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
