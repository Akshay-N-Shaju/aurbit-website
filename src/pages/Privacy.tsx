import { Link } from 'react-router'
import { Legal, Section } from '../components/Legal'

export function Privacy() {
  return (
    <Legal
      kicker="Privacy policy"
      title="How Aurbit handles your data."
      lede="Your phone number signs you in. Contact names stay on your phone. Nearby presence expires in minutes. Aura is a vibe score, not a payment record. You can delete the account, and the number is free to use again."
    >
      <nav className="toc" aria-label="On this page">
        <a href="#who">Who we are</a>
        <a href="#collect">What we collect</a>
        <a href="#contacts">Contacts</a>
        <a href="#nearby">Nearby</a>
        <a href="#use">How we use it</a>
        <a href="#share">Who we share it with</a>
        <a href="#keep">How long we keep it</a>
        <a href="#rights">Your rights</a>
        <a href="#children">Children</a>
        <a href="#contact">Contact</a>
      </nav>

      <Section id="who" title="1. Who we are">
        <p>
          Aurbit (“we”, “us”) operates the Aurbit mobile apps for iPhone and Android and the website at{' '}
          <a href="https://aurbit.space">aurbit.space</a>. This policy explains what we collect, why we collect it, and the choices you have. It covers the apps and this website. It does not cover third-party stores, SMS carriers, or sites we link to.
        </p>
        <p>
          If you live in India, we handle personal data in line with the Digital Personal Data Protection Act, 2023, and the rules made under it. If you live in the UK, the EEA, or somewhere else with its own privacy law, you can still use the rights described below, and any extra rights that law gives you, by writing to{' '}
          <a href="mailto:privacy@aurbit.space">privacy@aurbit.space</a>.
        </p>
        <p>
          Questions about a bug, a missing code, or how a feature works go to <Link to="/support">Support</Link>. Privacy requests go to the address above so they are not mixed in with general mail.
        </p>
      </Section>

      <Section id="collect" title="2. Information we collect">
        <h3>Account and profile</h3>
        <p>You sign in with a mobile number. We store it in international format (for example +91…) together with:</p>
        <ul>
          <li>a one-way hash of that number, used to match you with people who already have you saved;</li>
          <li>the name, handle, pronouns, and short bio you choose;</li>
          <li>up to five vibe tags from the list in the app;</li>
          <li>a profile photo, if you add one;</li>
          <li>your aura total, stage, referral code, and whether someone referred you;</li>
          <li>privacy settings (who can see your photo, aura, and details; Nearby; anonymous drops; stage; contacts) and notification switches (aura, reminders, social).</li>
        </ul>
        <p>
          We send a one-time code by SMS to prove the number is yours. The code is stored only as a keyed hash, expires in minutes, and is single use. We keep a log that a code was requested, sent, verified, or blocked — not the code itself.
        </p>
        <h3>Aura and social graph</h3>
        <p>When someone gives or drains aura we store the amount, the channel (orbit, nearby, tap, contact, referral, system, or inactivity), an optional reason and note, whether the drop was anonymous, and the receiver’s aura afterwards. We also store connections (who is in whose orbit and how you met), blocks, reports, and referral rewards.</p>
        <p>
          A note is visible to the person who received it. If you send anonymously, and they allow anonymous aura, they see the note and the amount without your name. We still keep the sender on our side so we can enforce limits, investigate reports, and stop abuse. Staff do not browse notes for curiosity; they see them when a report, a safety review, or a legal request requires it.
        </p>
        <h3>Device and session</h3>
        <p>Each signed-in device has a session. We store a device id you generate, a device name, platform (iOS, Android, or web), app version, push token if you allow notifications, IP address, user agent, and when the session was last used. Sessions are how the app stays signed in. We do not use the push token for advertising.</p>
        <h3>Photos</h3>
        <p>
          If you upload an avatar we re-encode it, crop it square, and strip embedded metadata, including location, before it is stored. The public image address does not include your phone number.
        </p>
        <h3>This website</h3>
        <p>
          aurbit.space is a marketing and legal site. The phone field on the home page checks that a 10-digit Indian mobile number looks complete, then confirms it in your browser. We do not transmit or store that number from the website. The site does not set advertising cookies and does not load a third-party analytics tracker. Your browser will request the page, the logo, the fonts from Google Fonts, and this text. That request includes the usual technical data a web server sees, such as IP address and user agent, in host logs kept for security and debugging.
        </p>
      </Section>

      <Section id="contacts" title="3. Contacts">
        <p>
          Contact sync is off until you turn it on. When you do, the app hashes each number in your address book on the device, the same way we hash account numbers, and uploads those hashes plus an optional short label you already use (such as Family, School, or College). We do not receive the contact’s name, email, photo, or the raw phone number from your address book.
        </p>
        <p>
          We compare the hashes with hashes of Aurbit accounts and store a match only when both people are on Aurbit: your account, their account, and the label if you sent one. Labels matter because family contacts can only receive positive aura. Turning contacts off deletes every match tied to you. Deleting your account does the same.
        </p>
        <p>
          Hashing is not the same as encryption that we can reverse. A hash cannot be turned back into a phone number by us. Someone who already knows a number could hash it and test whether it matches, which is why we only run the comparison to find people you chose to sync, and we rate-limit how often a sync can run.
        </p>
      </Section>

      <Section id="nearby" title="4. Nearby and Tap">
        <p>
          Nearby shows people who are in the same place as you and who also have Nearby on. While it is on, the app sends an approximate position so we can answer “who is around”. That position lives in a short-lived cache, on the order of two minutes, and is dropped when it expires, when you turn Nearby off, when you go idle, or when you delete the account. It is not written into your profile record and it is not kept as a location history.
        </p>
        <p>
          You can hide from Nearby without deleting your account. Other people still cannot see you there once the presence is removed. Tap is a separate, in-the-moment exchange between two phones; we record the aura and the connection, not a map of where the tap happened.
        </p>
      </Section>

      <Section id="use" title="5. How we use information, and why">
        <p>We use personal data to:</p>
        <ul>
          <li>create and protect your account, send one-time codes, and keep you signed in;</li>
          <li>show your orbit, aura, stage, history, and vibe match, including live updates while the app is open;</li>
          <li>deliver aura you send or receive, including anonymous drops when the receiver allows them;</li>
          <li>match hashed contacts, run Nearby, and complete Tap;</li>
          <li>apply the product rules you can read in the <Link to="/terms">terms</Link>: daily limits, cooldowns, first-meet and family positive-only sends, referral rewards, and inactivity decay;</li>
          <li>send pushes you have switched on (aura received, a nudge when you have been away, a warning before decay, and the decay itself);</li>
          <li>investigate reports, blocks, spam, fake accounts, underage use, and other abuse, and keep the service reliable;</li>
          <li>answer support mail and meet legal duties.</li>
        </ul>
        <p>
          Where the law asks for a legal ground, we rely on the contract of providing Aurbit (running the account and the features you use), our legitimate interests in safety, fraud prevention, and understanding whether the product works (balanced against your rights), consent where we ask for it (contact sync, Nearby, notifications, and optional profile fields), and legal obligation when a law requires us to keep or disclose something.
        </p>
        <p>
          We do not sell personal information. We do not use your contacts, notes, or aura history to build advertising profiles, and the app does not show third-party ads. Aura is not a payment instrument; we do not collect card or bank details to give or receive it.
        </p>
      </Section>

      <Section id="share" title="6. Who we share it with">
        <p>Other people on Aurbit see what your privacy settings allow. That can include your handle, name, photo, tags, bio, aura, and stage. Anonymous senders are shown to the receiver as “Someone”. People you have blocked lose access to your profile and cannot send you aura.</p>
        <p>We use processors who handle data only on our instructions:</p>
        <ul>
          <li>SMS providers (such as MSG91 for India, or Twilio) to deliver one-time codes and invite texts;</li>
          <li>cloud hosting for the database and cache that run the app;</li>
          <li>object storage (Cloudflare R2) for profile photos;</li>
          <li>Google Firebase Cloud Messaging, and Apple’s push service, to deliver notifications to devices that registered a token;</li>
          <li>Google Fonts on this website, which serves the typefaces.</li>
        </ul>
        <p>
          We share information with authorities when the law requires it, or when we believe it is needed to prevent serious harm, and with professional advisers under confidentiality. If Aurbit is involved in a merger or a sale of the product, the buyer would have to honour this policy or ask for your consent where the law requires it. We will say so on this page if that happens.
        </p>
        <p>
          Servers may sit outside the country you live in. When we transfer personal data we use contracts and technical measures (access control, encryption in transit, hashed secrets) appropriate to the transfer. You can ask privacy@aurbit.space for a summary of those safeguards.
        </p>
      </Section>

      <Section id="keep" title="7. How long we keep it">
        <ul>
          <li>Account data stays while the account is open.</li>
          <li>One-time-code logs are deleted after 90 days.</li>
          <li>Sessions that have been signed out or have expired are deleted after 30 days. An active app that is opened at least once a year can stay signed in; that window is a product setting and can change.</li>
          <li>Nearby positions expire in about two minutes and are not kept as history.</li>
          <li>Profile photos are deleted when you replace them, remove them, or delete the account.</li>
          <li>Reports and safety records are kept long enough to resolve the case and to prevent the same abuse from returning.</li>
          <li>Host and security logs are kept for a limited period and then deleted or aggregated.</li>
        </ul>
        <h3>When you delete your account</h3>
        <p>
          Deletion is irreversible. We erase the profile fields, photo, orbit connections, contact matches, blocks you created, and invites you sent, and we sign out every device. The phone number and handle can be used again on a new account. Aura you already gave other people stays on their totals, without your name, photo, or number attached, because taking it back would rewrite their history. A minimal audit record of the deletion itself may remain for security.
        </p>
      </Section>

      <Section id="rights" title="8. Your choices and rights">
        <p>Inside the app you can:</p>
        <ul>
          <li>edit your name, handle, pronouns, bio, tags, and photo;</li>
          <li>choose who sees your photo, aura, and details;</li>
          <li>turn Nearby, anonymous drops, stage display, and contact sync on or off;</li>
          <li>switch aura, reminder, and social notifications off;</li>
          <li>block someone, report a person or a drop, and sign out a device;</li>
          <li>delete the account from the profile settings by confirming the deletion.</li>
        </ul>
        <p>
          You can also email <a href="mailto:privacy@aurbit.space">privacy@aurbit.space</a> to access the personal data we hold, correct it, delete it, withdraw consent (which does not undo processing that already happened lawfully), ask us to stop a particular use, or raise a grievance. We will acknowledge the request and respond within the time the applicable law requires, and we aim to answer within 30 days. We may need to confirm that the request comes from the account holder, usually from the phone number on the account.
        </p>
        <p>
          If you are in India and you are not satisfied with our response, you may complain to the Data Protection Board of India once that route is open to you. If you are in the UK or the EEA, you may complain to your local supervisory authority. We would like the chance to fix the problem first.
        </p>
      </Section>

      <Section id="children" title="9. Children">
        <p>
          Aurbit is not directed at children under 13, and we do not knowingly create accounts for them. If we learn an account belongs to a child under 13 we will delete it. If you are under 18, use Aurbit only with a parent or guardian’s permission.
        </p>
        <p>
          Indian law treats anyone under 18 as a child for data-protection purposes and restricts tracking, targeted advertising, and certain processing. We do not run targeted advertising. People can report an account as underage. We review those reports and may remove the account, restrict features, or ask for proof of age or parental permission where the law requires it. Write to privacy@aurbit.space if you believe a child has an account.
        </p>
      </Section>

      <Section id="security" title="10. Security">
        <p>
          We protect accounts with one-time codes, short-lived access tokens, rotating refresh tokens, and the ability to revoke a session immediately. Contact matching uses hashes rather than raw address-book numbers. Photos are stripped of location metadata. Traffic to the app is encrypted in transit.
        </p>
        <p>
          No service can promise perfect security. If we learn of a breach that is likely to affect you, we will tell you and the authorities when the law says we must. Please keep your phone and SMS access private; anyone who can read your texts can request a code.
        </p>
      </Section>

      <Section id="changes" title="11. Changes to this policy">
        <p>
          We will update the date at the top when this policy changes. If a change materially reduces your rights or starts a new use of data you would not expect, we will tell you in the app or by a message to the account before it takes effect, where the law requires notice. The current version is always at <Link to="/privacy">aurbit.space/privacy</Link>.
        </p>
      </Section>

      <Section id="contact" title="12. Contact and grievances">
        <p>Aurbit’s contact for privacy requests and grievances:</p>
        <ul>
          <li>
            Email: <a href="mailto:privacy@aurbit.space">privacy@aurbit.space</a>
          </li>
          <li>
            Support: <a href="mailto:support@aurbit.space">support@aurbit.space</a> or the <Link to="/support">support page</Link>
          </li>
          <li>
            Legal notices: <a href="mailto:legal@aurbit.space">legal@aurbit.space</a>
          </li>
        </ul>
        <p>Please include your handle or the phone number on the account, and say what you want us to do. Do not send copies of identity documents unless we specifically ask for them.</p>
      </Section>
    </Legal>
  )
}
