import React from 'react'
import ReactDOM from 'react-dom'

import App from 'src/modules/App'
import Providers from 'src/providers'
import reportAccessibility from 'src/utils/reportAccessibility'
import reportWebVitals from 'src/utils/reportWebVitals'

ReactDOM.render(
  // Strict mode checks are run in development mode only; they do not impact the production build.
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)

reportAccessibility(React, ReactDOM) // Only for non-production builds

// If you want to start measuring performance in your app, pass a function
// to onPerfEntry to log results (for example: reportWebVitals({ onPerfEntry: console.log }))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Can also be used in production by changing `enable`.

const sendToAnalytics = (metric: any) => {
  const body = JSON.stringify(metric)
  const url = 'https://example.com/analytics'

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  }
}

reportWebVitals({ enable: process.env.NODE_ENV !== 'production' })
