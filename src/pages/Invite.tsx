import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

type InviteInfo = {
  code: string
  inviter: { name: string | null; handle: string | null; initial: string; avatarUrl: string | null }
  joinReward: number
  appStoreUrl: string
  playStoreUrl: string
}

type State = { kind: 'loading' } | { kind: 'ok'; info: InviteInfo } | { kind: 'missing' }

/** Android: the code rides through the install via Play's install referrer. */
function playUrl(base: string, code: string) {
  const sep = base.includes('?') ? '&' : '?'
  return `${base}${sep}referrer=${encodeURIComponent(`aurbit_code=${code}`)}`
}

function platform(): 'ios' | 'android' | 'other' {
  if (typeof navigator === 'undefined') return 'other'
  const ua = navigator.userAgent
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  return 'other'
}

/**
 * /r/:code — an invite. With the app installed, iOS/Android open Aurbit directly
 * (Universal Links / App Links) and this page never shows. Otherwise it explains
 * the invite and sends people to the store with the code.
 */
export function Invite() {
  const { code = '' } = useParams()
  const [state, setState] = useState<State>({ kind: 'loading' })
  const [copied, setCopied] = useState(false)
  const [os, setOs] = useState<'ios' | 'android' | 'other'>('other')

  useEffect(() => {
    setOs(platform())
    if (!code) {
      setState({ kind: 'missing' })
      return
    }
    let live = true
    fetch(`/api/v1/referrals/codes/${encodeURIComponent(code)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((j: { data: InviteInfo }) => live && setState({ kind: 'ok', info: j.data }))
      .catch(() => live && setState({ kind: 'missing' }))
    return () => {
      live = false
    }
  }, [code])

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked: the code is on screen */
    }
  }

  if (state.kind === 'loading') {
    return (
      <article className="page invite">
        <div className="kicker">Invite</div>
        <h1>Opening your invite…</h1>
      </article>
    )
  }

  if (state.kind === 'missing') {
    return (
      <article className="page invite">
        <div className="kicker">Invite</div>
        <h1>This invite link doesn’t work anymore.</h1>
        <p className="lede">Ask your friend to send their link again — or just get Aurbit and sign up with your number.</p>
      </article>
    )
  }

  const { info } = state
  const who = info.inviter.name || (info.inviter.handle ? `@${info.inviter.handle}` : 'A friend')
  const appStore = { href: info.appStoreUrl, label: 'Download on the App Store' }
  const play = { href: playUrl(info.playStoreUrl, info.code), label: 'Get it on Google Play' }
  const stores = os === 'android' ? [play] : os === 'ios' ? [appStore] : [appStore, play]

  return (
    <article className="page invite">
      <div className="invite-card">
        <div className="invite-avatar" aria-hidden="true">
          {info.inviter.avatarUrl ? <img src={info.inviter.avatarUrl} alt="" /> : <span>{info.inviter.initial}</span>}
        </div>
        <div className="kicker">You’re invited</div>
        <h1>{who} wants you in their orbit.</h1>
        <p className="lede">
          Join Aurbit with this invite and you both get <strong>+{info.joinReward} aura</strong> when you finish signing up.
        </p>

        <div className="cta-row invite-stores">
          {stores.map((s) => (
            <a key={s.href} className="btn btn-primary" href={s.href}>
              {s.label}
            </a>
          ))}
          <a className="btn btn-line" href={`aurbit://r/${info.code}`}>
            I have the app — open it
          </a>
        </div>

        <div className="invite-code">
          <small>Your invite code</small>
          <div>
            <code>{info.code}</code>
            <button type="button" className="btn btn-ghost" onClick={() => copy(info.code)}>
              {copied ? 'Copied ✓' : 'Copy'}
            </button>
          </div>
          <p>
            {os === 'android'
              ? 'Installing from this page carries the invite into the app automatically.'
              : 'After installing, open this link again — or enter the code when you sign up.'}
          </p>
        </div>
      </div>
    </article>
  )
}
