'use strict';

import * as path from 'path';
import * as express from 'express';

import render from './ssr/render';

const router: express.Router = express.Router();

// Static Files
router.use('/static', express.static(path.resolve(__dirname, '../../../build/static')));

// SSR Middleware
router.get('*', render);

export default router;
