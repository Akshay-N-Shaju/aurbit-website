import { Link } from 'react-router'

const FAQS = [
  {
    q: 'How do I sign in?',
    a: 'Open the app and enter your mobile number. We text a 6-digit code. It expires in a few minutes, and you can request another after a short wait. There is a limit on how many codes one number can request in an hour, to stop abuse of the SMS route.',
  },
  {
    q: 'Why can’t I give someone aura?',
    a: 'You can’t give aura to yourself. The first time you send someone aura it can only be positive, and the same is true for contacts you labelled Family. There is a cooldown between drops to the same person and a daily cap. Anonymous aura only lands if they have anonymous drops turned on. Amounts move in steps of 5 and have to sit inside their current stage range.',
  },
  {
    q: 'Does aura cost money?',
    a: 'No. Aura is a vibe score inside the app. It is not cash, it cannot be bought, and it cannot be withdrawn. Referral rewards are aura too.',
  },
  {
    q: 'Why did my aura go down while I was away?',
    a: 'If inactivity decay is on, aura can drop by a small amount each day after you have been away for a few days, never below a floor. The app warns you beforehand when that warning is enabled. Opening Aurbit resets the clock.',
  },
  {
    q: 'Who can see my number?',
    a: 'Other people see the profile you chose to show: handle, name, photo, tags, and whatever your privacy settings allow for aura and details. Contact sync uploads hashes, not names and not the raw numbers in your address book. Turning contacts off deletes your matches.',
  },
  {
    q: 'How do I disappear from Nearby?',
    a: 'Profile → Privacy, and turn Nearby off. You are removed from the nearby view right away. The position itself was only kept for a couple of minutes either way.',
  },
  {
    q: 'How do I block or report someone?',
    a: 'Open their profile and block them. They lose your orbit, Nearby, and contacts, and they can’t send aura or see you. Reports can be spam, harassment, inappropriate content, a fake account, an underage user, or other. Add a short note if it helps. Write to support@aurbit.space if you can’t reach the control in the app.',
  },
  {
    q: 'How do I delete my account?',
    a: 'In the app, delete the account and confirm with the word the screen asks for. We erase the profile, photo, orbit, contact matches, blocks, and invites, and sign out every device. Your number can sign up again as a new account. Aura you already gave other people stays on their totals, without your name.',
  },
]

export function Support() {
  return (
    <article className="page">
      <div className="kicker">Support</div>
      <h1>We’re here when the orbit glitches.</h1>
      <p className="lede">
        Most answers are below. If yours isn’t, email us from the address you can read, and include your handle plus the phone you sign in with.
      </p>
      <div className="contact-grid">
        <a href="mailto:support@aurbit.space">
          <small>Product help</small>
          support@aurbit.space
        </a>
        <a href="mailto:privacy@aurbit.space">
          <small>Privacy</small>
          privacy@aurbit.space
        </a>
        <a href="mailto:legal@aurbit.space">
          <small>Legal</small>
          legal@aurbit.space
        </a>
      </div>
      <div className="faq">
        {FAQS.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
      <p className="note">
        The rules live in the <Link to="/terms">terms</Link>. What we store, and how deletion works, is in the <Link to="/privacy">privacy policy</Link>.
      </p>
    </article>
  )
}
