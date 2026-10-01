import type { ReactNode } from 'react'
import { UPDATED } from '../seo'

export function Legal({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string
  title: string
  lede: string
  children: ReactNode
}) {
  return (
    <article className="page">
      <div className="kicker">{kicker}</div>
      <h1>{title}</h1>
      <p className="updated">Effective {UPDATED}. These pages describe the Aurbit apps and aurbit.space.</p>
      <div className="callout">
        <strong>The short version. </strong>
        <span className="lede" style={{ display: 'inline', margin: 0 }}>
          {lede}
        </span>
      </div>
      <div className="prose">{children}</div>
    </article>
  )
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
