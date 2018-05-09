import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Location } from 'history';

export interface IScrollToTopProps {
  children: React.ReactNode;
  location: Location;
}

export class ScrollToTop extends React.Component<RouteComponentProps<IScrollToTopProps>> {
  public componentDidUpdate(prevProps: RouteComponentProps<IScrollToTopProps>): void {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  public render(): React.ReactNode {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
