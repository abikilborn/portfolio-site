// Event dashboard case study (/work/events-redesign)

import overviewBefore from '../../assets/imgs/events/overview-before.webp'
import overviewAfter from '../../assets/imgs/events/overview-after.webp'

const images = {
  overviewBefore: { src: overviewBefore, width: 1272, height: 1169, url: 'nucleus.app/connect/events/show', alt: 'Old event overview: a column of five link fields next to eight equally weighted stat tiles' },
  overviewAfter: { src: overviewAfter, width: 1512, height: 1726, url: 'nucleus.app/connect/events/overview', alt: 'New event overview: header with actions, four KPI cards, a signups chart, traffic sources, share links, enabled features and recent registrations' },
}

export default {
  slug: 'events-redesign',
  company: 'Campaign Nucleus',
  title: 'The event dashboard,',
  titleAccent: 'showing what matters',
  summary: 'The event overview is where organizers check how their event is doing. After a lot of conversations with our customer reps about what users actually care about (and what they don’t), I redesigned it to put the right information up front: relevant graphs, clearer labels, and no more digging through menus to see what’s turned on.',
  meta: [
    { label: 'Role', value: 'UX/UI Design + Frontend Dev' },
    { label: 'Scope', value: 'Event overview dashboard and its sub-pages' },
    { label: 'Stack', value: 'Vue 3, Tailwind, Figma' },
    { label: 'Year', value: '2026' },
  ],
  collage: { back: images.overviewBefore, front: images.overviewAfter, label: 'The old and new event overview dashboards' },

  card: {
    title: 'Event Dashboard Redesign',
    badge: 'Case study',
    tags: ['Figma', 'Vue 3', 'Tailwind'],
    problem: 'Organizers had <b>eight equally weighted numbers and a wall of links</b>, and had to go digging through menus to find basic details about their own event.',
    solution: 'Rebuilt it around what customers actually care about: <b>relevant graphs, regrouped info and clearer labels</b>, with key details up front.',
  },

  problem: {
    title: 'Where it started',
    text: 'The old overview showed a lot of information, but not much of it answered the questions organizers actually had.',
    groups: [
      {
        label: 'What organizers saw',
        items: [
          'Eight stat tiles with equal weight, so nothing stood out',
          'Five link fields stacked in a column, taking up a third of the page',
          'Labels that didn’t explain what the numbers meant',
        ],
      },
      {
        label: 'What they had to go looking for',
        items: [
          'How signups were trending over time, and where they came from',
          'Which features were turned on, which meant going to Edit > Features',
          'An obvious way to edit the event or open the live page',
        ],
      },
    ],
  },

  body: [
    {
      type: 'chapter', number: '01',
      title: 'Built around what users actually care about',
      text: 'I met regularly with our customer reps to learn which numbers organizers use and which ones they ignore. That shaped every decision: what to show, what to rename, what to group together and what to drop.',
    },
    { type: 'compare', before: images.overviewBefore, after: images.overviewAfter },
    {
      type: 'changes',
      items: [
        { title: 'Graphs that matter', text: 'A 14-day signups chart that can overlay page views, plus traffic sources by UTM, state, device and referrer.' },
        { title: 'Regrouped to scan', text: 'Four KPI cards up top, sharing tools together, and recent registrations at the bottom.' },
        { title: 'Labels with context', text: 'Renamed fields and added short notes so numbers explain themselves, like “of 300 target” under total signups.' },
        { title: 'Up front, not buried', text: 'Status, date, registration window, and the Edit and View live page actions sit right in the header.' },
        { title: 'Features at a glance', text: 'An Event features card shows what’s enabled, so organizers don’t have to open Edit > Features to check.' },
        { title: 'On brand', text: 'Updated to the product’s current colors and components, so it feels like the rest of Nucleus.' },
      ],
    },
    {
      type: 'list',
      title: 'Under the hood',
      text: 'The redesign went past the overview. Every tab under the dashboard, from Signups to Communications, got the same treatment in code.',
      items: [
        'Rebuilt each sub-section so they look the same and behave the same way.',
        'Moved them onto updated validation and input libraries, so forms across the dashboard validate consistently.',
        'Built in Vue 3 + Tailwind straight from my own Figma designs.',
      ],
    },
  ],

  // TODO: swap in real numbers if you have them
  results: {
    title: 'The answers organizers need, right where they look.',
    items: [
      { title: 'Relevant, not exhaustive', text: 'Four KPIs with trends instead of eight tiles of equal weight.' },
      { title: 'No more digging', text: 'Enabled features and key actions are visible from the overview.' },
      { title: 'Consistent sub-pages', text: 'Every section under the dashboard looks and validates the same way.' },
    ],
  },
}
