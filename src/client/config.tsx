export interface IConfigApp {
  title: string;
  description: string;
}

export interface IConfig {
  app: IConfigApp;
}

export const config: IConfig = {
  app: {
    description: 'Universal React App',
    title: 'AV eCommerce'
  }
};

export default config;
