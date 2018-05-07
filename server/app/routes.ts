'use strict';

import * as path from 'path';
import * as express from 'express';
import renderClient from './ssr/renderClient';

const router: express.Router = express.Router();

// Static Files
router.use('/static', express.static(path.resolve(__dirname, '../../build/static')));

// SSR Middleware
router.get('*', renderClient);

export default router;
