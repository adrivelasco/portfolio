import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import views, { IRouteView } from '../views';
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';

export const App: React.SFC = () => {
  return (
    <ScrollToTop>
      <Route render={({ location, history }: RouteComponentProps<React.ReactNode>) => {
        return (
          <Layout location={location} history={history}>
            <Switch>
              {views.map((view: IRouteView, i: number) => {
                return (
                  <Route
                    key={i}
                    path={view.path}
                    exact={view.exact}
                    pageName={view.title}
                    render={(props: RouteComponentProps<React.ReactNode>) =>
                      <view.component key={i} {...props} />}
                  />
                );
              })}
            </Switch>
          </Layout>
        );
      }} />
    </ScrollToTop>
  );
};

export default App;
