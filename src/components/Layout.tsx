import { useEffect, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { ICONS, Icon } from './Icon'
import { Seo } from './Seo'

function hashHref(pathname: string, hash: string) {
  return pathname === '/' ? hash : `/${hash}`
}

export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="shell">
      <Seo path={pathname} />
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
      <div className="blob blob-d" />
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="nav-bar">
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="Aurbit home">
            <img src="/logo.png" width={36} height={36} alt="" />
            aurbit
          </Link>
          <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary">
            <a href={hashHref(pathname, '#how')} onClick={() => setOpen(false)}>
              How it works
            </a>
            <a href={hashHref(pathname, '#features')} onClick={() => setOpen(false)}>
              Features
            </a>
            <a href={hashHref(pathname, '#privacy')} onClick={() => setOpen(false)}>
              Privacy
            </a>
            <Link to="/support" onClick={() => setOpen(false)}>
              Support
            </Link>
          </nav>
          <a className="btn btn-ghost" href={hashHref(pathname, '#get')}>
            Get the app
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon d={open ? ICONS.close : ICONS.menu} size={20} />
          </button>
        </div>
      </header>
      <div className="wrap">
        <main id="content">{children}</main>
        <footer className="site-footer">
          <span>
            <Link className="footer-brand" to="/">
              <img src="/logo.png" width={28} height={28} alt="" />
              aurbit
            </Link>{' '}
            · your vibe, in orbit
          </span>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/support">Support</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
