import './ssr-hook';

import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import * as express from 'express';
import { Provider, Store } from 'react-redux';
import { StaticRouter } from 'react-router';

import configureStore from '../../../client/store/configureStore';
import { IApplicationState } from '../../../client/reducers/index';
import App from '../../../client/components/App';
import Html from '../../../client/components/Html';
import config from '../../../client/config';

// Assets file generated by webpack
const assets = require('../../../../build/assets.json');

export interface IContext {
  store: Store<IApplicationState>;
  url?: string,
  status?: string
}

export interface IData {
  description: string;
  favicon: string;
  scripts: string[];
  state: IApplicationState;
  styles: string[];
  title: string;
}

export function renderHtml(markup: string, data: IData): string {
  const html: string = ReactDOM.renderToStaticMarkup(
    <Html {...data}>{markup}</Html>
  );
  return `<!doctype html>${html}`;
}

/**
 * Render React UI from server
 */
export function renderClient(req: express.Request, res: express.Response, next: express.NextFunction): void {
  try {
    const store: Store<IApplicationState> = configureStore({});
    const context: IContext = { store };
    const data: IData = {
      description: config.app.description,
      favicon: '',
      scripts: [assets.vendor.js, assets.client.js],
      state: store.getState(),
      styles: [assets.client.css],
      title: config.app.title
    };

    let status: number = 200;
    if (context.url) {
      status = 302;
      req.originalUrl = context.url;
    }
    if (context.status === '404') {
      status = 404;
    }

    const html: string = renderHtml(
      ReactDOM.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.originalUrl} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      ),
      data
    );

    res.send(html);

  } catch (err) {
    next(err);
  }
}

export default renderClient;
