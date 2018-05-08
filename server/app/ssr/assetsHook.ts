import * as nhf from 'node-hook-filename';

nhf([/\.jpg/, /\.png/, /\.svg/], (filename: string) => {
  const name: string = filename.split('./')[1];
  return `/static/images/${name}`;
});
