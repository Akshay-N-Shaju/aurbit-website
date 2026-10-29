import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { invitePage, jsonLd, metaFor, pageUrl, pages as sitePages } from './seo'

/** Prerendered: the public pages plus the invite shell (kept out of the sitemap). */
const pages = [...sitePages, invitePage]

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

export { jsonLd, metaFor, pageUrl, pages }
