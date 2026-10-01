import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const templatePath = path.join(dist, 'index.html')
const template = fs.readFileSync(templatePath, 'utf8')
const serverUrl = pathToFileURL(path.resolve('.ssr/entry-server.js')).href
const { render, pages, metaFor, jsonLd, pageUrl } = await import(serverUrl)

function esc(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function replaceContent(html, seo, value) {
  const re = new RegExp(`(<meta\\s+data-seo="${seo}"[\\s\\S]*?content=")[\\s\\S]*?(")`)
  return html.replace(re, `$1${esc(value)}$2`)
}

function applyMeta(html, meta) {
  const url = pageUrl(meta.path)
  const ld = jsonLd(meta)
  let next = html
  next = next.replace(/<title data-seo="title">[\s\S]*?<\/title>/, `<title data-seo="title">${esc(meta.title)}</title>`)
  next = replaceContent(next, 'description', meta.description)
  next = replaceContent(next, 'keywords', meta.keywords)
  next = next.replace(/(<link\s+data-seo="canonical"[\s\S]*?href=")[^"]*(")/, `$1${esc(url)}$2`)
  next = replaceContent(next, 'og:title', meta.title)
  next = replaceContent(next, 'og:description', meta.description)
  next = replaceContent(next, 'og:url', url)
  next = replaceContent(next, 'twitter:title', meta.title)
  next = replaceContent(next, 'twitter:description', meta.description)
  next = replaceContent(next, 'twitter:url', url)
  next = next.replace(
    /<script data-seo="jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script data-seo="jsonld" type="application/ld+json">${ld}</script>`,
  )
  return next
}

for (const page of pages) {
  const body = render(page.path)
  const found = metaFor(page.path)
  if (!template.includes('<!--app-->')) throw new Error('Prerender marker <!--app--> missing from dist/index.html')
  const html = applyMeta(template, found).replace('<!--app-->', body)
  const file = page.path === '/' ? path.join(dist, 'index.html') : path.join(dist, page.path.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  console.log('prerendered', page.path)
}
