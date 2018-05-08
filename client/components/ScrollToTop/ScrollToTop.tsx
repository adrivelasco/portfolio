import * as React from 'react';
import { withRouter } from 'react-router';
import { Location } from 'history';

export interface ScrollToTopProps {
  children: any,
  location: Location
}

export class ScrollToTop extends React.Component<ScrollToTopProps> {
  componentDidUpdate(prevProps: ScrollToTopProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  
  render() {
    return this.props.children;
  }
}

export default withRouter<any>(ScrollToTop);
