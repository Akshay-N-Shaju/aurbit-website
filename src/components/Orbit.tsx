const G = {
  a: 'linear-gradient(135deg,#4285F4,#9B72CB)',
  b: 'linear-gradient(135deg,#D96570,#F6B26B)',
  c: 'linear-gradient(135deg,#9B72CB,#D96570)',
  d: 'linear-gradient(135deg,#1BA1E3,#3DDC97)',
} as const

const GLOW = {
  a: 'rgba(66,133,244,.7)',
  b: 'rgba(217,101,112,.7)',
  c: 'rgba(155,114,203,.7)',
  d: 'rgba(61,220,151,.6)',
} as const

type Tone = keyof typeof G

const RINGS: { d: string; line: 'dashed' | 'solid'; alpha: number; dur: number; dir: 1 | -1; s: number; start: number; users: [string, Tone][] }[] = [
  { d: '64%', line: 'dashed', alpha: 0.16, dur: 30, dir: -1, s: 38, start: 40, users: [['M', 'a'], ['K', 'b'], ['Z', 'c']] },
  { d: '82%', line: 'solid', alpha: 0.12, dur: 44, dir: 1, s: 42, start: 10, users: [['R', 'd'], ['P', 'c'], ['S', 'a']] },
  { d: '100%', line: 'solid', alpha: 0.07, dur: 64, dir: -1, s: 34, start: 70, users: [['L', 'b'], ['J', 'a'], ['O', 'd'], ['A', 'c']] },
]

export function Orbit() {
  return (
    <div className="orbit-stage">
      <div className="orbit-glow" aria-hidden="true" />
      <div className="orbit">
        {RINGS.map((ring) => {
          const spin = ring.dir > 0 ? 'orbit-spin' : 'orbit-spin-r'
          const counter = ring.dir > 0 ? 'spin-r' : 'spin'
          return (
            <div
              key={ring.d}
              className="ring"
              style={{
                width: ring.d,
                height: ring.d,
                borderStyle: ring.line,
                borderColor: `rgba(255,255,255,${ring.alpha})`,
                animation: `${spin} ${ring.dur}s linear infinite`,
              }}
            >
              {ring.users.map(([initial, tone], index) => {
                const angle = ((ring.start + (360 / ring.users.length) * index) * Math.PI) / 180
                return (
                  <div
                    key={initial}
                    className="moon"
                    style={{
                      left: `${50 + 50 * Math.cos(angle)}%`,
                      top: `${50 + 50 * Math.sin(angle)}%`,
                      width: ring.s,
                      height: ring.s,
                      marginLeft: -ring.s / 2,
                      marginTop: -ring.s / 2,
                      fontSize: Math.round(ring.s * 0.38),
                      background: G[tone],
                      boxShadow: `0 0 24px ${GLOW[tone]}, inset 0 1px 0 rgba(255,255,255,.4)`,
                      animation: `${counter} ${ring.dur}s linear infinite`,
                    }}
                  >
                    {initial}
                  </div>
                )
              })}
            </div>
          )
        })}
        <img className="hero-logo" src="/logo.png" width={148} height={148} alt="Aurbit" />
        <div className="toast toast-up">+50 from @maya</div>
        <div className="toast toast-down">−10 · took an L</div>
      </div>
    </div>
  )
}
