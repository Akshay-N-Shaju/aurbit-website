import { useEffect } from 'react'
import { jsonLd, metaFor, pageUrl } from '../seo'

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/** Keeps the document head in step when someone moves between pages. */
export function Seo({ path }: { path: string }) {
  const meta = metaFor(path)
  const url = pageUrl(meta.path === '/404' ? path : meta.path)

  useEffect(() => {
    document.title = meta.title
    setMeta('meta[data-seo="description"]', 'content', meta.description)
    setMeta('meta[data-seo="keywords"]', 'content', meta.keywords)
    setMeta('link[data-seo="canonical"]', 'href', url)
    setMeta('meta[data-seo="og:title"]', 'content', meta.title)
    setMeta('meta[data-seo="og:description"]', 'content', meta.description)
    setMeta('meta[data-seo="og:url"]', 'content', url)
    setMeta('meta[data-seo="twitter:title"]', 'content', meta.title)
    setMeta('meta[data-seo="twitter:description"]', 'content', meta.description)
    setMeta('meta[data-seo="twitter:url"]', 'content', url)
    const script = document.head.querySelector('script[data-seo="jsonld"]')
    if (script) script.textContent = jsonLd(meta)
    setMeta('meta[name="robots"]', 'content', meta.path === '/404' ? 'noindex, follow' : 'index, follow, max-image-preview:large')
  }, [meta, url])

  return null
}
