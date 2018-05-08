'use strict';

import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as sanitized from 'express-sanitized';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import routes from './routes';
import config from '../config';

class App {
  public express: express.Application = express();

  constructor() {
    this.injectMiddlewares();
    this.routing();
  }

  private injectMiddlewares(): void {
    // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
    // user agent is not known.
    global.navigator = global.navigator || {};
    global.navigator.userAgent = global.navigator.userAgent || 'all';

    if (config.env === 'development') {
      this.express.use(morgan('dev'));
      this.express.enable('trust proxy');
    }

    this.express.disable('x-powered-by');
    this.express.use(cookieParser());
    this.express.use(sanitized());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(compression());
  }

  private routing(): void {
    this.express.use(routes);
  }
}

export default new App().express;
