// ─────────────────────────────────────────────────────────────────────────────
// ARTICLES DATA — single source of truth
//
// To add a new article: copy an object below, give it a unique `slug`,
// fill in the fields, and add content to the `body` array.
//
// Body block types:
//   { type: 'p',       text: '...' }
//   { type: 'h2',      text: '...' }
//   { type: 'h3',      text: '...' }
//   { type: 'quote',   text: '...' }
//   { type: 'ul',      items: ['...'] }
//   { type: 'ol',      items: ['...'] }
//   { type: 'callout', text: '...' }
// ─────────────────────────────────────────────────────────────────────────────

export const articles = [
  {
    slug: 'servant-leadership',
    title: "Servant Leadership: The vital key to your tech team's success",
    date: 'October 5, 2023',
    readTime: '5 min read',
    tags: ['Leadership', 'Teams', 'Career'],
    preview: "Leadership that sounds backwards — but implementing it is crucial to not just your team's success, but your own.",
    body: [
      { type: 'p', text: "When most people think of leadership, they picture someone at the top — calling the shots, setting direction, holding authority. Servant leadership flips that model entirely. Instead of the team serving the leader, the leader serves the team." },
      { type: 'quote', text: '"The first responsibility of a leader is to define reality. The last is to say thank you." — Max De Pree' },
      { type: 'h2', text: 'What servant leadership actually means in practice' },
      { type: 'p', text: "In a tech context, servant leadership means your job as a lead or senior dev is to clear blockers, amplify your team's output, and make sure everyone has what they need to do their best work. It means asking \"what do you need from me?\" more than \"here's what I need from you.\"" },
      { type: 'p', text: "It also means being willing to do the unglamorous work — writing documentation, sitting in the long meeting so your junior dev doesn't have to, reviewing PRs promptly instead of letting them sit for three days." },
      { type: 'h2', text: 'Why it matters more in tech than other fields' },
      { type: 'p', text: "Tech teams are full of people who are intrinsically motivated and often doing deeply complex cognitive work. Micromanagement and top-down authority don't just fail to work here — they actively harm output. Autonomy and psychological safety are prerequisites for good engineering, not perks." },
      { type: 'ul', items: ['Engineers do better work when they feel trusted', 'Psychological safety leads to better code reviews and fewer hidden bugs', 'Teams that communicate openly ship faster and recover from failures better', 'People stay at companies where they feel supported, not managed'] },
      { type: 'h2', text: "How I've tried to apply this in my own work" },
      { type: 'p', text: "I'm not a people manager, but I've found opportunities to practice servant leadership as a senior IC. That looks like: thorough, encouraging code reviews. Jumping in to help a teammate debug something even when I'm busy. Writing up the thing that confused me so the next person doesn't have to figure it out from scratch." },
      { type: 'callout', text: "The paradox of servant leadership is that by focusing on others' success, you end up building more credibility, trust, and influence than you ever would by trying to accumulate those things directly." },
      { type: 'p', text: "It's not always easy. It requires ego management. But it's the kind of leader I want to be, and increasingly the kind of leadership I look for when evaluating where to work." },
    ],
  },
  {
    slug: 'good-code-review',
    title: 'What makes a good code review?',
    date: 'October 2, 2023',
    readTime: '6 min read',
    tags: ['Engineering', 'Best Practices', 'Collaboration'],
    preview: "Code reviews have been one of the highest-signal learning environments in my career. As I step into more senior roles, here's how I think about giving them well.",
    body: [
      { type: 'p', text: "I've learned more from code reviews than from almost any other part of my job. Both from receiving them — when someone pointed out a pattern I'd never considered — and from giving them, which forces you to read code carefully and articulate why something could be better." },
      { type: 'h2', text: "The goal of a code review isn't to catch bugs" },
      { type: 'p', text: "Well, it is — but that's the floor, not the ceiling. A great code review is also a teaching moment, a chance to share context, a way to enforce consistency across a codebase, and an opportunity to ask \"is this the right approach entirely?\" before the code is merged and lives forever." },
      { type: 'quote', text: '"Code is read many more times than it\'s written. Reviews are how you make sure it\'s worth reading."' },
      { type: 'h2', text: 'What I look for when reviewing' },
      { type: 'ol', items: ["Does it do what it's supposed to do? (Read the ticket/PR description first)", "Is it readable? Would I understand this in 6 months without the context I have now?", "Are edge cases handled? What happens when the API returns null? When the array is empty?", "Is there repeated logic that should be abstracted?", "Are component responsibilities clearly defined, or is this doing too many things?", "Does it follow the existing patterns in the codebase?"] },
      { type: 'h2', text: 'How to give feedback that actually helps' },
      { type: 'p', text: "This is where most code reviews go wrong. There's a huge difference between \"this is bad\" and \"I think this could cause a performance issue when the list gets long — have you considered virtualization here?\" One is a verdict, the other is a conversation." },
      { type: 'ul', items: ['Use "nit:" to signal minor style preferences — makes it clear what\'s blocking vs optional', 'Ask questions instead of making demands when you\'re not sure', 'Explain the why, not just the what', 'Acknowledge good decisions — not just problems', '"line 47" is more useful than "the error handling"'] },
      { type: 'h2', text: "As a reviewer, you're also responsible for speed" },
      { type: 'p', text: "A PR sitting unreviewed for two days is a real cost — context switching, merge conflicts, blocked work. Reviewing promptly is a form of respect for your teammate's time. I try to do it same-day if possible, or first thing the next morning." },
      { type: 'callout', text: "A PR that sits in review for a week is a PR that will be a pain to merge. Fast, high-quality reviews are one of the highest-leverage things a senior engineer can do for a team." },
    ],
  },
  {
    slug: 'nuxt-vs-vue',
    title: 'Nuxt vs Vue: Which should you pick for your app and why?',
    date: 'September 27, 2023',
    readTime: '7 min read',
    tags: ['Vue', 'Nuxt', 'Frontend', 'Architecture'],
    preview: "I've been asked this in 3 interviews and stumbled every time. So I finally sat down and wrote the definitive answer — for myself and for anyone else who needs it.",
    body: [
      { type: 'p', text: "If you've spent any time in the Vue ecosystem, you've encountered this question — or been asked it in an interview. On the surface it seems simple. In practice, it touches on rendering strategies, SEO, project complexity, and team conventions. Let me break it down the way I wish someone had for me." },
      { type: 'h2', text: 'The short answer' },
      { type: 'callout', text: "Vue is a UI framework. Nuxt is an application framework built on top of Vue. Use Vue when you're building a component or SPA with no SEO concerns. Use Nuxt when you're building a full application and want SSR, file-based routing, and a structured conventions layer." },
      { type: 'h2', text: 'What Vue gives you' },
      { type: 'p', text: "Vue 3 is a reactive UI framework. You get components, reactivity via the Composition API, a template system, and a router if you add one. It renders entirely in the browser (client-side rendering by default) which means fast subsequent navigation but a blank HTML shell on initial load." },
      { type: 'ul', items: ['Great for SPAs, dashboards, internal tools', 'No SEO requirements? Vue alone is probably fine', 'Lighter setup, more flexibility in how you structure things', 'You bring your own routing, state management, etc.'] },
      { type: 'h2', text: 'What Nuxt adds' },
      { type: 'p', text: "Nuxt is opinionated in the best way. It adds file-based routing, server-side rendering out of the box, automatic code splitting, a /server directory for API routes, auto-imported components and composables, and a ton of other quality-of-life features." },
      { type: 'ul', items: ['SSR means your pages are pre-rendered with real HTML — great for SEO', 'File-based routing eliminates a whole category of configuration', 'Built-in data fetching with useFetch and useAsyncData', 'Hybrid rendering: choose SSR, SSG, or CSR per route', 'Deployment targets: Node server, static, edge functions'] },
      { type: 'h2', text: 'When to choose which' },
      { type: 'ol', items: ['Does SEO matter? Yes → Nuxt. No → either works.', 'Do you need server-side logic or API routes? Yes → Nuxt.', "Is this a small widget/component embedded in another app? Vue alone.", "Is this a marketing site, blog, or public-facing product? Nuxt.", "Is this an internal dashboard with no public URLs? Vue alone is fine.", "Do you want conventions that scale across a team? Nuxt."] },
      { type: 'h2', text: 'The honest take' },
      { type: 'p', text: "For most production applications I'd start with Nuxt. The overhead is low, the conventions save real time as a project grows, and the SSR story is just better. You can always turn off SSR and use it like a Vue SPA anyway." },
      { type: 'p', text: "The one place I'd reach for raw Vue is when I'm building something that lives inside an existing app (like a complex widget in a Rails or Django app) and I just need the reactivity layer without the routing/rendering overhead." },
    ],
  },
]

export function getArticle(slug) {
  return articles.find(a => a.slug === slug) || null
}
