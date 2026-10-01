import { Link } from 'react-router'
import { Legal, Section } from '../components/Legal'

export function Terms() {
  return (
    <Legal
      kicker="Terms and conditions"
      title="The rules of the orbit."
      lede="Aurbit is free to use. Aura is a vibe score with no cash value. Be decent to people, don’t game the score, and you can leave whenever you want. These terms are the agreement between you and Aurbit."
    >
      <nav className="toc" aria-label="On this page">
        <a href="#agreement">Agreement</a>
        <a href="#service">The service</a>
        <a href="#account">Your account</a>
        <a href="#aura">Aura</a>
        <a href="#conduct">Acceptable use</a>
        <a href="#safety">Safety</a>
        <a href="#ip">Your content</a>
        <a href="#liability">Liability</a>
        <a href="#law">Law and contact</a>
      </nav>

      <Section id="agreement" title="1. Agreement">
        <p>
          These terms are a contract between you and Aurbit for the Aurbit iPhone and Android apps and the website at aurbit.space. By creating an account, signing in, or using the service, you agree to these terms and to the <Link to="/privacy">privacy policy</Link>. If you do not agree, do not use Aurbit.
        </p>
        <p>
          We may update these terms. We will change the date at the top and, if a change is material, we will tell you in the app before it applies. If you keep using Aurbit after the new date, the new terms apply. If you disagree, delete your account.
        </p>
        <p>
          If a court finds one part of these terms unenforceable, the rest still stands. If we do not enforce a right immediately, we have not waived it. These terms are the whole agreement on this subject and replace earlier versions.
        </p>
      </Section>

      <Section id="service" title="2. The service">
        <p>
          Aurbit lets people give and receive aura, see an orbit of their people, match vibes, and keep a history of gains and drops. You can reach someone by tapping phones together, by Nearby when you are in the same place, or through contacts with no distance limit. You can add a short note, send anonymously when the other person allows it, invite friends, block, and report.
        </p>
        <p>
          The apps are currently free. We may add optional paid features later. If we do, we will say what they cost and what you get before you pay. Aura itself is not something you purchase.
        </p>
        <p>
          We can change, pause, or remove features, stages, colours, limits, and copy. We can suspend the service for maintenance or for a security problem. We do not promise that Aurbit will be available without interruption, or that a particular phone, OS version, or carrier will always work.
        </p>
        <p>
          App stores (Apple’s App Store and Google Play) are marketplaces. Their terms also apply to the download and to in-app payments if we ever offer them. Aurbit is not Apple or Google, and those companies are not responsible for the app beyond what their own terms say.
        </p>
      </Section>

      <Section id="account" title="3. Eligibility and your account">
        <p>
          You must be at least 13 years old. If you are under 18, you may use Aurbit only if a parent or guardian agrees to these terms and supervises your use. We may remove accounts reported as underage, ask for age confirmation, or refuse registration. More on children is in the <Link to="/privacy">privacy policy</Link>.
        </p>
        <p>
          You sign in with a mobile number you control. One-time codes are for you. Do not share them, and do not create an account for someone else without their permission. You are responsible for activity on your account until you sign out or tell us it is compromised.
        </p>
        <p>
          Your handle must follow the format the app enforces. Some words are reserved (including aurbit, admin, support, and similar names) and cannot be claimed. Do not pick a handle or name that impersonates another person, a brand, or Aurbit staff.
        </p>
        <p>
          Keep one account. We may merge, limit, or close extra accounts that exist to farm aura, evade a block, or dodge a suspension.
        </p>
      </Section>

      <Section id="aura" title="4. Aura">
        <p>
          Aura is a number other people move when they think your vibe went up or down. It is a social signal inside Aurbit. It is not money, electronic money, a deposit, a gift card, a cryptocurrency, a security, or property. It has no cash value. You cannot sell, buy, transfer for payment, or redeem aura. Attempts to trade aura for money, goods, or other accounts are a breach of these terms.
        </p>
        <p>The product rules, which we can tune, include:</p>
        <ul>
          <li>amounts move in steps of 5, and cannot push someone’s aura below zero;</li>
          <li>the receiver’s stage sets how much aura one drop can add or remove;</li>
          <li>you cannot give aura to yourself;</li>
          <li>the first time you send someone aura, it can only be positive;</li>
          <li>contacts you have labelled Family can only receive positive aura;</li>
          <li>there is a cooldown between drops to the same person, and a daily cap on how much you can give;</li>
          <li>anonymous aura is delivered only if the receiver has anonymous drops turned on;</li>
          <li>referral rewards are aura (and sometimes a badge or a visual), paid when invited people actually join, on the schedule shown in the app;</li>
          <li>if you stop opening the app, aura can decay by a set amount each day after a waiting period, never below a floor, usually after a warning. Opening the app resets that clock. Decay is recorded in history like any other change.</li>
        </ul>
        <p>
          Stages, ranges, referral ladders, and decay settings are product configuration. We may change them, correct aura that was granted by a bug or by abuse, and reverse drops that break these terms. We do not owe you a particular aura total, stage, or position in anyone’s orbit.
        </p>
        <p>
          Notes and reasons you attach to a drop should be something you are willing for that person to read. Do not include passwords, financial details, or anyone’s private contact information.
        </p>
      </Section>

      <Section id="channels" title="5. Tap, Nearby, contacts, and referrals">
        <p>
          Tap is for two people who are together and both choose to exchange aura. Nearby shows people around you who have also turned Nearby on. You can turn it off, and you disappear from that view. Do not use Nearby to follow, watch, or pressure someone who has left.
        </p>
        <p>
          Contact sync is optional. You confirm you are allowed to use the numbers on your device for matching. We receive hashes and optional labels, not your address book. The details are in the privacy policy. Do not upload contacts in order to scrape who is on Aurbit.
        </p>
        <p>
          Referral links are for inviting people you actually know. Do not spam the link, buy installs, or mislead people about what Aurbit is. Rewards can be withheld or removed if the invites are fake, forced, or automated. A referral does not make you an employee, partner, or agent of Aurbit.
        </p>
      </Section>

      <Section id="conduct" title="6. Acceptable use">
        <p>You will not:</p>
        <ul>
          <li>harass, threaten, stalk, extort, or humiliate anyone, including through repeated negative aura or notes;</li>
          <li>post or send sexual content involving anyone under 18, or use Aurbit to exploit a minor;</li>
          <li>share illegal content, or use Aurbit to plan violence or crime;</li>
          <li>hateful attacks on a person or group;</li>
          <li>impersonate someone, or pretend a drop is from Aurbit;</li>
          <li>send spam, chain messages, or unsolicited promotions;</li>
          <li>scrape, crawl, or bulk-collect profiles, hashes, or aura;</li>
          <li>probe, disrupt, or overload the service, or bypass a limit, a block, or an access control;</li>
          <li>use bots or scripts to give aura, create accounts, or farm referrals;</li>
          <li>reverse engineer the app except where the law expressly allows it;</li>
          <li>misrepresent your age or help a suspended person back in under another number.</li>
        </ul>
        <p>
          We can remove content, undo aura, refuse a handle, and limit features when we believe a rule was broken. Serious or repeated breaches, and anything involving a child, can mean an immediate suspension.
        </p>
      </Section>

      <Section id="safety" title="7. Reports, blocks, and suspension">
        <p>
          You can block someone. They leave your orbit, Nearby, and contacts, and they cannot send you aura or see your profile. You can report spam, harassment, inappropriate content, a fake account, an underage user, or something else, and you can attach a short explanation. Reports are reviewed by people operating Aurbit. We do not promise a particular outcome or a public report of the decision.
        </p>
        <p>
          We may suspend an account, with or without notice, if we believe these terms were broken, the account is being used to harm someone, or we are required to by law. A suspended account cannot use the service until it is reinstated. You can email <a href="mailto:support@aurbit.space">support@aurbit.space</a> to ask for a review. We will look at good-faith requests. We do not have to restore aura or a handle after a suspension that was justified.
        </p>
        <p>
          Aurbit is not an emergency service. If you or someone else is in danger, contact local emergency services. We may preserve and share information with law enforcement when the law requires it or when we believe it is necessary to prevent serious harm.
        </p>
      </Section>

      <Section id="ip" title="8. Your content and ours">
        <p>
          You keep the rights to the photo, name, bio, tags, and notes you submit. You give Aurbit a worldwide, non-exclusive licence to host, reproduce, adapt (for example to resize a photo), display, and distribute that content only as needed to run the service: showing it to the people your settings allow, keeping backups, and moderating reports. The licence ends when the content is deleted from our systems, except for copies that already reached another user (a note they received, aura already counted) and copies we must keep for safety or law. Those residual copies are anonymised where the product already does that on account deletion.
        </p>
        <p>
          You promise that you have the rights to what you upload, and that it does not violate these terms or anyone else’s rights. Do not upload a photo of someone else in a private context without a right to do so.
        </p>
        <p>
          The Aurbit name, logo, orbit visual, stage names, and the app itself are ours or licensed to us. You may not copy our branding, imply we endorse you, or use our marks in an app, domain, or handle that could confuse people. These terms do not transfer any intellectual property to you.
        </p>
        <p>
          If you send us ideas or feedback, we can use them without owing you payment or credit. We are not obliged to implement them.
        </p>
      </Section>

      <Section id="privacy-term" title="9. Privacy">
        <p>
          The <Link to="/privacy">privacy policy</Link> describes what we collect and how deletion works. It is part of these terms. In short: contact names stay on your phone, Nearby presence is short-lived, and deleting the account frees your number. Please read it before you sync contacts or turn Nearby on.
        </p>
      </Section>

      <Section id="third" title="10. Third parties and the website">
        <p>
          SMS delivery depends on your carrier and our SMS provider. Push delivery depends on Apple, Google, and your notification settings. We are not responsible for a delayed code or a filtered text. The website’s phone field does not create an account and does not store the number; the account starts when you request a code in the app.
        </p>
        <p>
          Links to other sites or stores are for convenience. Their content and policies are their own.
        </p>
      </Section>

      <Section id="liability" title="11. Disclaimers and liability">
        <p>
          Aurbit is a social product. Aura, stages, vibe match, and notes are opinions and game-like signals from other people, not facts, credit scores, employment references, or professional advice. Do not rely on them for decisions about safety, money, health, or work. We do not control what other users send, and we are not liable for their notes, scores, or conduct, to the extent the law allows, though we will act on reports as described above.
        </p>
        <p>
          The service is provided “as is” and “as available”. To the extent the law allows, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Some places do not allow those disclaimers, so they apply only as far as they legally can.
        </p>
        <p>
          To the extent the law allows, Aurbit and the people who operate it are not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost data, or lost aura, arising from your use of the service. Our total liability for any claim relating to the service is limited to the greater of the amount you paid us in the three months before the claim (which today is zero, because the app is free) and INR 1,000. These limits do not apply to liability that cannot legally be limited, including liability for fraud, or for death or personal injury caused by negligence where the law forbids a cap.
        </p>
        <p>
          You will indemnify Aurbit against claims, damages, and reasonable legal costs arising from your content, your misuse of the service, or your breach of these terms, except to the extent the claim is caused by our own breach or wilful misconduct.
        </p>
      </Section>

      <Section id="end" title="12. Ending the service">
        <p>
          You can stop using Aurbit at any time and you can delete your account in the app. Deletion is described in the privacy policy. We can stop offering Aurbit in a country, or shut the product down, with notice when that is practical. If we shut down, aura ends with the service; it is not converted to money.
        </p>
        <p>
          Sections that should survive ending — including aura having no cash value, licences already granted for content other users received, disclaimers, liability limits, indemnity, and governing law — survive.
        </p>
      </Section>

      <Section id="law" title="13. Governing law and contact">
        <p>
          These terms are governed by the laws of India, without regard to conflict-of-law rules. Courts in India have jurisdiction, subject to any right you have, as a consumer, to bring a claim in the courts of the place where you live when a statute gives you that right and it cannot be waived. Nothing in these terms limits a non-waivable consumer protection.
        </p>
        <p>Before filing a claim, please write to us so we can try to resolve it:</p>
        <ul>
          <li>
            Legal: <a href="mailto:legal@aurbit.space">legal@aurbit.space</a>
          </li>
          <li>
            Support: <a href="mailto:support@aurbit.space">support@aurbit.space</a>
          </li>
          <li>
            Privacy: <a href="mailto:privacy@aurbit.space">privacy@aurbit.space</a>
          </li>
        </ul>
        <p>
          Aurbit, aurbit.space. These terms were last updated on 1 October 2026.
        </p>
      </Section>
    </Legal>
  )
}
