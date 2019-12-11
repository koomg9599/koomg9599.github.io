import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=2"
          />
          <meta
            name="google-site-verification"
            content="EFWY1tFw9rE53Le49JwUBZA-f199rj7MRsUQMRBT-jo"
          />

          <script
            data-ad-client="ca-pub-5538700590606443"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <script
            type="text/javascript"
            src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5df0a456557d7ce9"
          />
          <script
            type="text/javascript"
            src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5df0a456557d7ce9"
          />
          {this.props.preBodyComponents}
          <noscript>You need to enable JavaScript to run this app.</noscript>
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

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
