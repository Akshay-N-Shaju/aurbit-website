import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { jsonLd, metaFor, pageUrl, pages } from './seo'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

export { jsonLd, metaFor, pageUrl, pages }
