import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { ICONS, Icon } from '../components/Icon'
import { Orbit } from '../components/Orbit'

const G = {
  a: 'linear-gradient(135deg,#4285F4,#9B72CB)',
  b: 'linear-gradient(135deg,#D96570,#F6B26B)',
  c: 'linear-gradient(135deg,#9B72CB,#D96570)',
  d: 'linear-gradient(135deg,#1BA1E3,#3DDC97)',
}

const WAYS = [
  {
    title: 'Tap',
    range: 'Phone to phone',
    body: 'Bring two phones together and drop aura in the moment. The fastest way to say “that was a vibe.”',
    bg: G.a,
    glow: 'rgba(66,133,244,.7)',
    icon: ICONS.tap,
  },
  {
    title: 'Nearby',
    range: 'Same room',
    body: 'See who’s around and give or drain aura without swapping numbers. Add a note, or go anon.',
    bg: G.c,
    glow: 'rgba(155,114,203,.7)',
    icon: ICONS.pin,
  },
  {
    title: 'Contacts',
    range: 'No distance limit',
    body: 'Hype your fam and long-distance besties wherever they are. No tap or Nearby needed.',
    bg: G.b,
    glow: 'rgba(217,101,112,.7)',
    icon: ICONS.heart,
  },
]

const FEATURES = [
  {
    big: '◎',
    title: 'Your orbit',
    body: 'Your people circle you live. Every drop of aura moves them, and tiers glow brighter as their aura climbs.',
    grad: 'linear-gradient(90deg,#8AB4F8,#C9A7F5)',
  },
  {
    big: '%',
    title: 'Vibe match',
    body: 'Tap anyone in your orbit to see their traits, what friends say about them, and how well your vibes match.',
    grad: 'linear-gradient(90deg,#C9A7F5,#F29AA6)',
  },
  {
    big: '↗',
    title: 'Aura history',
    body: 'Every gain and drop, with the note that came with it. Filter by gains or drops and see today’s total at a glance.',
    grad: 'linear-gradient(90deg,#F29AA6,#F6B26B)',
  },
]

const PRIVACY = [
  {
    title: 'Encrypted matching',
    sub: 'We only compare hashed phone numbers. Names never leave your phone.',
    bg: G.a,
    icon: ICONS.lock,
  },
  {
    title: 'Anonymous drops',
    sub: 'Send aura without your name on it, whenever you want.',
    bg: G.c,
    icon: ICONS.eye,
  },
  {
    title: 'Opt out anytime',
    sub: 'Turn it off in Profile → Privacy and we delete every match.',
    bg: G.d,
    icon: ICONS.list,
  },
]

function formatPhone(digits: string) {
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)} ${digits.slice(5)}`
}

export function Home() {
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const digits = phone.replace(/\D/g, '')
  const valid = digits.length === 10

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (valid) setSent(true)
  }

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <div className="pill">
            <span className="dot" />
            Your vibe, in orbit
          </div>
          <h1 id="hero-title">
            Your vibe,
            <br />
            <span className="grad">measured.</span>
          </h1>
          <p className="lede">
            Give aura. Get aura. Watch your orbit glow in real time. Bless the people who make your day, drain it when someone takes an L.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#get">
              Get started
              <Icon d={ICONS.arrow} size={20} />
            </a>
            <a className="btn btn-line" href="#how">
              See how it works
            </a>
          </div>
          <p className="fine">iPhone and Android. Your number is all you need.</p>
        </div>
        <Orbit />
      </section>

      <section id="how" className="section">
        <div className="kicker">How it works</div>
        <h2>Three ways to drop aura</h2>
        <div className="grid-3">
          {WAYS.map((way) => (
            <article key={way.title} className="card">
              <div className="icon-blob" style={{ background: way.bg, boxShadow: `inset 0 1px 0 rgba(255,255,255,.4), 0 10px 24px -8px ${way.glow}` }}>
                <Icon d={way.icon} />
              </div>
              <h3>{way.title}</h3>
              <div className="range">{way.range}</div>
              <p>{way.body}</p>
            </article>
          ))}
        </div>
        <p className="note">Every drop can carry a short note, and you can always send it anonymously.</p>
      </section>

      <section id="features" className="section">
        <div className="kicker">Inside the app</div>
        <h2>
          Everyone has an aura. <span className="grad">Now you can see it.</span>
        </h2>
        <div className="grid-3">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="cell">
              <div className="big" style={{ backgroundImage: feature.grad }}>
                {feature.big}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="privacy" className="section split">
        <div>
          <div className="kicker">Privacy</div>
          <h2>Far, not forgotten. Matched privately.</h2>
          <p className="lede">
            Sync contacts to bless your fam and long-distance besties wherever they are. Aura has no distance limit, and your address book stays on your phone.
          </p>
          <div className="list">
            {PRIVACY.map((item) => (
              <div key={item.title} className="row">
                <div className="mini-icon" style={{ background: item.bg }}>
                  <Icon d={item.icon} size={20} />
                </div>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="note">
            The full write-up is in the <Link to="/privacy">privacy policy</Link> and <Link to="/terms">terms</Link>.
          </p>
        </div>
        <div className="phone" aria-hidden="true">
          <div className="phone-screen">
            <div className="phone-top">
              <span>9:41</span>
              <span>Privacy</span>
            </div>
            <h3>Your people, hashed.</h3>
            <p className="phone-foot" style={{ marginTop: 0 }}>
              Names stay on this phone. Aurbit only sees a match.
            </p>
            {[
              ['M', 'Maya', G.a],
              ['A', 'Arjun', G.d],
              ['Z', 'Zoya', G.c],
            ].map(([initial, name, bg]) => (
              <div key={name} className="phone-card">
                <div className="avatar" style={{ background: bg }}>
                  {initial}
                </div>
                <div>
                  <b>{name}</b>
                  <small>In your orbit</small>
                </div>
                <span className="match">Matched</span>
              </div>
            ))}
            <p className="phone-foot">Turn contacts off anytime. Every match is deleted.</p>
          </div>
        </div>
      </section>

      <section id="get" className="section">
        <div className="get">
          <div className="get-glow" />
          <div className="get-copy">
            <h2>Bring your people. Start your orbit.</h2>
            <p className="lede">
              iPhone and Android. Sign in with your number — that’s the whole account. Invite friends with your referral link and earn aura every time one joins.
            </p>
            {sent ? (
              <div className="sent" role="status">
                <span className="dot" />
                See you in orbit. Sign in on the app with +91 {formatPhone(digits)}.
              </div>
            ) : (
              <form className="signup" onSubmit={onSubmit}>
                <div className="cc">
                  <span className="flag" aria-hidden="true" />
                  +91
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="98765 43210"
                  aria-label="Phone number"
                  autoComplete="tel-national"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value.replace(/[^\d ]/g, '').slice(0, 11))}
                  style={{ borderColor: valid ? '#C9A7F5' : 'rgba(255,255,255,.14)' }}
                />
                <button className="btn btn-send" type="submit" disabled={!valid} style={{ opacity: valid ? 1 : 0.5 }}>
                  Text me the link
                </button>
              </form>
            )}
            <p className="fine">The app texts your one-time code at sign-in. This page checks the number and does not store it.</p>
          </div>
        </div>
      </section>
    </>
  )
}
