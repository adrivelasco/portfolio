import * as React from 'react';
import * as serialize from 'serialize-javascript';

export interface IHtmlProps {
  title: string;
  description: string;
  favicon: string;
  state: object;
  children: string;
  scripts: string[];
  styles: string[];
}

export interface IDefaultProps {
  styles: string[];
  scripts: string[];
}

export class Html extends React.Component<IHtmlProps> {
  private defaultProps: IDefaultProps = {
    scripts: [],
    styles: []
  };

  public render(): JSX.Element {
    const {
      title,
      description,
      children,
      favicon,
      state,
      scripts,
      styles
    }: IHtmlProps = this.props;
    return (
      <html className='no-js' lang='es'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <title>{title} | {description}</title>
          <meta name='description' content={description} />
          <link rel='shortcut icon' href={favicon} />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
          {styles.map((style: string) =>
            <link key={style} rel='stylesheet' href={style} />)}
        </head>
        <body>
          {/* <!-- The app hooks into this div --> */}
          <div id='app' dangerouslySetInnerHTML={{ __html: children }} />
          {/* <!-- Scripts tags --> */}
          <script dangerouslySetInnerHTML={{ __html: `window.APP_STATE=${serialize(state)}` }} />
          {scripts.map((script: string) =>
            <script key={script} src={script} />)}
        </body>
      </html>
    );
  }
}

export default Html;
