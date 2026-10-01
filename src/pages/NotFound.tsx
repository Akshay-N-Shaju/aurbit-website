import { Link } from 'react-router'

export function NotFound() {
  return (
    <article className="page">
      <div className="kicker">404</div>
      <h1>This page left the orbit.</h1>
      <p className="lede">That address isn’t on aurbit.space. The home page, privacy policy, terms, and support guide are.</p>
      <div className="cta-row">
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
        <Link className="btn btn-line" to="/support">
          Support
        </Link>
      </div>
    </article>
  )
}
