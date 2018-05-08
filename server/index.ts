'use strict';

// Loading enviroment variables
import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import config from './config';

app.listen(config.port, () =>
  console.log(`Nodejs server is running on PORT ${config.port} (${config.env})`)
);
