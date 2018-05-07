import nhf from 'node-hook-filename';

nhf([/\.jpg/, /\.png/, /\.svg/], (filename: string) => {
  let name = filename.split('./')[1];
  return `/static/images/${name}`;
});