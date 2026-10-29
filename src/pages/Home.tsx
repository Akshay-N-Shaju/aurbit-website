import { Link } from 'react-router'
import { ICONS, Icon } from '../components/Icon'
import { Orbit } from '../components/Orbit'
import { StoreButtons } from '../components/StoreButtons'

const G = {
  a: 'linear-gradient(135deg,#4285F4,#9B72CB)',
  b: 'linear-gradient(135deg,#D96570,#F6B26B)',
  c: 'linear-gradient(135deg,#9B72CB,#D96570)',
  d: 'linear-gradient(135deg,#1BA1E3,#3DDC97)',
}

const CHAT = 'M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.1A8.5 8.5 0 1 1 21 12z'
const TARGET = 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'
const RADAR = 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 19.1a10 10 0 0 1 0-14.2M19.1 4.9a10 10 0 0 1 0 14.2'

const TICKER = ['Pings 💬', 'Rallies 🔥', 'Aura Hunt 🎯', 'Nearby, 3h memory 📍', 'Invite = +10 each ✦', 'Vibe match', 'No crumbs', 'Main character energy']

const WAYS = [
  {
    title: 'Tap',
    range: 'IRL, phone to phone',
    body: 'Scan each other’s code and drop aura on the spot. The fastest way to say “that was a whole vibe.”',
    bg: G.a,
    glow: 'rgba(66,133,244,.7)',
    icon: ICONS.tap,
  },
  {
    title: 'Nearby',
    range: 'Same café, same party',
    body: 'See who’s on Aurbit within ~25 m — or was, in the last 3 hours. Bless them, ping them, no number swap needed.',
    bg: G.c,
    glow: 'rgba(155,114,203,.7)',
    icon: RADAR,
  },
  {
    title: 'Contacts',
    range: 'No distance limit',
    body: 'Hype the fam and your long-distance besties wherever they are. New friends who join show up on their own.',
    bg: G.b,
    glow: 'rgba(217,101,112,.7)',
    icon: ICONS.heart,
  },
  {
    title: 'Aura Hunt',
    range: 'Find anyone',
    body: 'Search by name, @username or number and drop aura on whoever’s living rent-free in your head.',
    bg: G.d,
    glow: 'rgba(61,220,151,.6)',
    icon: TARGET,
  },
]

const STAGES = [
  ['NPC', '#A3A3B8'],
  ['Side Quest', '#8FD3C7'],
  ['Lowkey Lit', '#3DDC97'],
  ['Rising', '#1BA1E3'],
  ['Glow Up', '#5AA2FF'],
  ['Main Character', '#8C9EFF'],
  ['No Crumbs', '#B48CF0'],
  ['Iconic', '#D98CE0'],
  ['Mythic', '#F07A8A'],
  ['Celestial', '#F6B26B'],
] as const

const FEATURES = [
  {
    big: '◎',
    title: 'Your orbit, live',
    body: 'Your people circle you in real time. Every drop moves them, and their stage glows brighter as their aura climbs.',
    grad: 'linear-gradient(90deg,#8AB4F8,#C9A7F5)',
  },
  {
    big: '%',
    title: 'Vibe match',
    body: 'Open anyone’s profile to see their top traits, what the orbit says about them, and how hard your vibes match. Green flags only.',
    grad: 'linear-gradient(90deg,#C9A7F5,#F29AA6)',
  },
  {
    big: '↗',
    title: 'Receipts',
    body: 'Every W and every L, with the note that came with it. Your aura history lives in your profile, filtered how you like.',
    grad: 'linear-gradient(90deg,#F29AA6,#F6B26B)',
  },
]

const PRIVACY = [
  {
    title: 'Distance, never your spot',
    sub: 'People see “6 m away”. Nearby forgets you after 3 hours, and you can hide anytime.',
    bg: G.c,
    icon: ICONS.pin,
  },
  {
    title: 'Contacts, hashed',
    sub: 'Numbers are scrambled on your phone. Names and your address book never leave it.',
    bg: G.a,
    icon: ICONS.lock,
  },
  {
    title: 'Go anon',
    sub: 'Drop aura without your name — if they’re cool with anonymous aura.',
    bg: G.b,
    icon: ICONS.eye,
  },
  {
    title: 'Your call, always',
    sub: 'Block, report, hide from Nearby, mute pings, or delete your account in two taps.',
    bg: G.d,
    icon: ICONS.list,
  },
]

const REF_STAGES = [
  ['1', 'First Recruit', '+10'],
  ['3', 'The Plug', '+30'],
  ['5', 'Hype Squad', '+75'],
  ['10', 'Connector', '+200'],
  ['25', 'Influencer Arc', '+600'],
  ['50', 'Cult Classic', '+1,500'],
] as const

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <div className="pill">
            <span className="dot" />
            New: Pings, rallies & Aura Hunt
          </div>
          <h1 id="hero-title">
            Your vibe,
            <br />
            <span className="grad">measured. fr.</span>
          </h1>
          <p className="lede">
            Give aura. Get aura. Watch your orbit glow in real time. Bless the people who ate, drain it when someone takes an L, and
            slide into the group chat of life one ping at a time.
          </p>
          <StoreButtons />
          <p className="fine">Free on iPhone and Android. Your number is the whole account — no passwords, no cap.</p>
        </div>
        <Orbit />
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((t, k) => (
            <span key={k}>{t}</span>
          ))}
        </div>
      </div>

      <section id="how" className="section">
        <div className="kicker">How it works</div>
        <h2>Four ways to drop aura</h2>
        <p className="lede section-lede">Amounts move in steps of 5. Add a note, pick a reason (“ate that”, “real one”, “W energy”), or go anon.</p>
        <div className="grid-4">
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
        <p className="note">First drop to someone new is W’s only. No hate on first meet — that’s the rule.</p>
      </section>

      <section id="stages" className="section">
        <div className="kicker">Stages</div>
        <h2>
          From NPC to <span className="grad">Celestial.</span>
        </h2>
        <p className="lede section-lede">
          Your aura sets your stage. Climb high enough and people can bless you harder — main characters catch up to +75 in one drop.
        </p>
        <ol className="ladder">
          {STAGES.map(([name, color], k) => (
            <li key={name} style={{ ['--c' as string]: color, ['--k' as string]: k }}>
              <span className="ladder-dot" />
              {name}
            </li>
          ))}
        </ol>
      </section>

      <section id="pings" className="section split">
        <div>
          <div className="kicker">Pings</div>
          <h2>Shoot your shot. One ping at a time.</h2>
          <p className="lede">
            Pings are 160-character notes to anyone on Aurbit. Send one, then it’s their move — or wait 30 minutes to ping again. Reply fast and you start a
            rally.
          </p>
          <div className="list">
            {[
              ['Your move ⚡', 'When they reply, you can answer instantly. No cooldown, no waiting game.', G.b],
              ['Rallies 🔥', 'Every back-and-forth within an hour keeps the streak alive.', G.c],
              ['+5 aura each', 'Hit a rally of 5, then 10, and you both get bonus aura. Certified W.', G.d],
            ].map(([title, sub, bg]) => (
              <div key={title} className="row">
                <div className="mini-icon" style={{ background: bg }}>
                  <Icon d={CHAT} size={20} />
                </div>
                <div>
                  <strong>{title}</strong>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="note">Get a push the second someone pings you. Mute pings anytime in Profile → Notifications.</p>
        </div>
        <div className="phone" aria-hidden="true">
          <div className="phone-screen">
            <div className="phone-top">
              <span>9:41</span>
              <span>@maya.wav</span>
            </div>
            <div className="rally">
              <span>🔥</span>
              <div>
                <b>RALLY ×4</b>
                <div className="rally-bar">
                  <i style={{ width: '80%' }} />
                </div>
                <small>1 more to +5 aura for you both</small>
              </div>
            </div>
            <div className="bubble them">ngl your playlist at the café ate 🎧</div>
            <div className="bubble me">no crumbs?? thank u 😭</div>
            <div className="bubble them">coffee next week? lowkey</div>
            <div className="bubble me">say less ☕</div>
            <p className="phone-foot your-move">Your move! Reply now — no cooldown ⚡</p>
          </div>
        </div>
      </section>

      <section id="hunt" className="section">
        <div className="hunt">
          <div>
            <div className="kicker">Aura Hunt</div>
            <h2>Daily quest unlocked 🎯</h2>
            <p className="lede">
              Hunt down anyone — by name, @username or number — and bless three people a day to clear the quest. Keep it up to stack your streak.
            </p>
          </div>
          <div className="quest">
            <div className="quest-head">
              <div>
                <small>DAILY QUEST</small>
                <b>Hunt & bless 3 people</b>
              </div>
              <span className="claim">Claim +30</span>
            </div>
            <div className="pips">
              <span className="done">@maya.wav</span>
              <span className="done">@kai</span>
              <span className="next">next target</span>
            </div>
            <div className="rules">
              <div>
                <b style={{ color: '#F6B26B' }}>+30</b>
                <span>clear the quest</span>
              </div>
              <div>
                <b style={{ color: '#FFA05A' }}>+5</b>
                <span>bless a new find</span>
              </div>
              <div>
                <b style={{ color: '#8AB4F8' }}>🔥 5d</b>
                <span>keep your streak</span>
              </div>
            </div>
          </div>
        </div>
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
          <h2>Find your people. Keep your secrets.</h2>
          <p className="lede">
            Nearby is for vibes, not tracking. Your exact location and your contacts are never shown to anyone, and your gender only picks your default
            avatar and who Nearby shows you first.
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
            The full tea is in the <Link to="/privacy">privacy policy</Link> and <Link to="/terms">terms</Link>.
          </p>
        </div>
        <div className="phone" aria-hidden="true">
          <div className="phone-screen">
            <div className="phone-top">
              <span>9:41</span>
              <span>Nearby · 3 around</span>
            </div>
            <h3>Who’s around you</h3>
            {[
              ['R', '@riya.fm', '1.5 m · Here now', G.c, 'NEW'],
              ['M', '@maya.wav', '6 m · seen 40m ago', G.a, ''],
              ['A', '@aanya', '12 m · Here now', G.d, ''],
            ].map(([initial, name, line, bg, tag]) => (
              <div key={name} className="phone-card">
                <div className="avatar" style={{ background: bg }}>
                  {initial}
                </div>
                <div>
                  <b>
                    {name} {tag && <em className="tag-new">{tag}</em>}
                  </b>
                  <small>{line}</small>
                </div>
                <span className="match">Bless</span>
              </div>
            ))}
            <p className="phone-foot">Only distance is shared. Hide from Nearby in one tap.</p>
          </div>
        </div>
      </section>

      <section id="invite" className="section">
        <div className="kicker">Invite the squad</div>
        <h2>
          Bring a friend, <span className="grad">you both eat.</span>
        </h2>
        <p className="lede section-lede">
          Share your link — when they sign up, you each get +10 aura. Hit milestones for bonus aura and badges. Tap the link with Aurbit installed and it
          opens straight in the app.
        </p>
        <div className="ref-stages">
          {REF_STAGES.map(([n, title, reward]) => (
            <div key={title}>
              <b>{n}</b>
              <span>{title}</span>
              <em>{reward}</em>
            </div>
          ))}
        </div>
      </section>

      <section id="get" className="section">
        <div className="get">
          <div className="get-glow" />
          <div className="get-copy">
            <h2>Your orbit is waiting. Don’t be an NPC.</h2>
            <p className="lede">Free on iPhone and Android. Sign in with your number, pick your vibe tags, and you’re in. It’s giving main character.</p>
            <StoreButtons />
            <p className="fine">Got an invite link? Tap it after installing — or enter the code when you sign up.</p>
          </div>
        </div>
      </section>
    </>
  )
}
