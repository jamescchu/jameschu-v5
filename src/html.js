import React from 'react'

import { TypographyStyle } from 'react-typography'
import typography from './utils/typography'

export default class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css'),
          }}
        />
      )
    }
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.headComponents}
          <TypographyStyle typography={typography} />
          <link rel="shortcut icon" href="/favicon.ico?v=2" />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-152.png"
            sizes="152x152"
          />
          <meta name="theme-color" content="#FFFFFF" />
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
