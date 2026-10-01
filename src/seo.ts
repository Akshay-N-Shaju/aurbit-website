export const SITE = 'https://aurbit.space'
export const UPDATED = '1 October 2026'

export type PageMeta = {
  path: string
  title: string
  description: string
  keywords: string
}

export const pages: PageMeta[] = [
  {
    path: '/',
    title: 'Aurbit — Your vibe, in orbit',
    description:
      'Give aura. Get aura. Aurbit shows your vibe in orbit — bless the people who make your day, nearby or anywhere. For iPhone and Android.',
    keywords:
      'aurbit, aurbit.space, aura app, vibe app, social orbit, give aura, nearby friends, contact matching, anonymous aura, iPhone, Android',
  },
  {
    path: '/privacy',
    title: 'Privacy policy — Aurbit',
    description:
      'How Aurbit handles your phone number, profile, hashed contacts, nearby presence, aura history, and account deletion. Effective 1 October 2026.',
    keywords:
      'aurbit privacy policy, aurbit data, contact hashing, nearby location, account deletion, DPDP, aura history',
  },
  {
    path: '/terms',
    title: 'Terms and conditions — Aurbit',
    description:
      'The rules for using Aurbit: accounts, aura (not money), acceptable use, referrals, safety tools, liability, and the laws of India.',
    keywords:
      'aurbit terms, aurbit conditions, aura rules, acceptable use, account deletion, referrals, aurbit.space',
  },
  {
    path: '/support',
    title: 'Support — Aurbit',
    description:
      'Help with Aurbit sign-in, aura, contacts, Nearby, reports, blocks, notifications, and how to delete your account.',
    keywords: 'aurbit support, aurbit help, delete aurbit account, aura help, contact sync, nearby',
  },
]

const notFound: PageMeta = {
  path: '/404',
  title: 'Page not found — Aurbit',
  description: 'That page is not on aurbit.space. Head home, or read the privacy policy, terms, and support guides.',
  keywords: 'aurbit, aurbit.space',
}

export function metaFor(url: string): PageMeta {
  const path = url.split('?')[0].replace(/\/$/, '') || '/'
  return pages.find((page) => page.path === path) ?? notFound
}

export function pageUrl(path: string) {
  return path === '/' ? `${SITE}/` : `${SITE}${path}`
}

export function jsonLd(meta: PageMeta) {
  const url = pageUrl(meta.path === '/404' ? '/' : meta.path)
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      name: 'Aurbit',
      url: SITE,
      logo: `${SITE}/logo.png`,
      email: 'hello@aurbit.space',
      contactPoint: [
        { '@type': 'ContactPoint', email: 'support@aurbit.space', contactType: 'customer support' },
        { '@type': 'ContactPoint', email: 'privacy@aurbit.space', contactType: 'privacy' },
      ],
    },
    {
      '@type': 'WebPage',
      name: meta.title,
      url,
      description: meta.description,
      isPartOf: { '@type': 'WebSite', name: 'Aurbit', url: SITE },
      inLanguage: 'en',
    },
  ]

  if (meta.path === '/') {
    graph.push({
      '@type': 'SoftwareApplication',
      name: 'Aurbit',
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: 'iOS, Android',
      url: SITE,
      description: meta.description,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    })
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
}
