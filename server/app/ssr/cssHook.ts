import csmrh from 'css-modules-require-hook';

import config from '../../config';

csmrh({
  extensions: ['.css'],
  camelCase: 'dashes',
  generateScopedName: config.env === 'development'
    ? '[name]-[local]-[hash:base64:5]'
    : '[hash:base64:5]'
});