import * as React from 'react';
import { Location, History } from 'history';

export interface ILayoutProps {
  children: React.ReactNode;
  history: History;
  location: Location;
}

export class Layout extends React.Component<ILayoutProps> {
  public render(): JSX.Element {
    const { children }: ILayoutProps = this.props;
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
