'use strict';

interface IConfig {
  env: string,
  port: string,
  apiBasePath: string
}

const config: IConfig = {

  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || '3002',

  apiBasePath: '/',

};

export default config;