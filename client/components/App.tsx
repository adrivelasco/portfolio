import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Layout from './Layout';
import views, { View } from '../views';

export const App: React.SFC = () => {
  return (
    <ScrollToTop>
      <Route render={({ location, history }: RouteComponentProps<any>) => {
        return (
          <Layout location={location} history={history}>
            <Switch>
              {views.map((view: View, i: number) => {
                return (
                  <Route
                    key={i}
                    path={view.path}
                    exact={view.exact}
                    pageName={view.title}
                    render={(props: RouteComponentProps<any>) => 
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
