import { useEffect, useState } from 'react'

type Links = { appStoreUrl: string; playStoreUrl: string }

/** Defaults match the admin's built-in values until the live config loads. */
const DEFAULT_LINKS: Links = {
  appStoreUrl: 'https://apps.apple.com/app/id0000000000',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aurbit.app',
}

let cached: Promise<Links> | null = null

/** Store listings from the API (editable in the admin: Product config → App links). */
function loadLinks(): Promise<Links> {
  cached ??= fetch('/api/v1/meta/config')
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((j: { data?: { links?: Links } }) => j.data?.links ?? DEFAULT_LINKS)
    .catch(() => DEFAULT_LINKS)
  return cached
}

const APPLE =
  'M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4z'
const PLAY = 'M4 2.8v18.4c0 .7.8 1.1 1.4.7l15.4-9.2c.6-.3.6-1.1 0-1.4L5.4 2.1C4.8 1.7 4 2.1 4 2.8z'

export function StoreButtons() {
  const [links, setLinks] = useState(DEFAULT_LINKS)
  useEffect(() => {
    let live = true
    loadLinks().then((l) => live && setLinks(l))
    return () => {
      live = false
    }
  }, [])
  return (
    <div className="cta-row store-row">
      <a className="store-btn" href={links.appStoreUrl}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d={APPLE} />
        </svg>
        <span>
          <small>Download on the</small>
          App Store
        </span>
      </a>
      <a className="store-btn" href={links.playStoreUrl}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d={PLAY} />
        </svg>
        <span>
          <small>Get it on</small>
          Google Play
        </span>
      </a>
    </div>
  )
}
