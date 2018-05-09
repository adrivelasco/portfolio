declare module 'css-modules-require-hook';

declare module 'node-hook-filename';

declare module NodeJS {
  interface Process {
    browser: boolean;
  }
  interface Global {
    navigator: any
  }
}