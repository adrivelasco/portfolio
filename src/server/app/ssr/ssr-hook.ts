import * as csmrh from 'css-modules-require-hook';
import * as nhf from 'node-hook-filename';

import config from '../../config';

nhf([/\.jpg/, /\.png/, /\.svg/], (filename: string) => {
  const name: string = filename.split('./')[1];
  return `/static/images/${name}`;
});

csmrh({
  camelCase: 'dashes',
  extensions: ['.css'],
  generateScopedName: config.env === 'development'
    ? '[name]-[local]-[hash:base64:5]'
    : '[hash:base64:5]'
});
