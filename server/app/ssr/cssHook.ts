import * as csmrh from 'css-modules-require-hook';

import config from '../../config';

csmrh({
  camelCase: 'dashes',
  extensions: ['.css'],
  generateScopedName: config.env === 'development'
    ? '[name]-[local]-[hash:base64:5]'
    : '[hash:base64:5]'
});
