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
  split: {
    design: [
      'Met regularly with customer reps to learn what users care about (and what they don’t)',
      'Designed the dashboard, graphs and KPI cards in Figma',
      'Renamed and regrouped info so it explains itself',
    ],
    code: [
      'Built the dashboard in Vue 3 + Tailwind',
      'Rebuilt every sub-page on one shared section component',
      'Moved forms onto updated input and validation libraries',
    ],
  },
  collage: { back: images.overviewBefore, front: images.overviewAfter, label: 'The old and new event overview dashboards' },

  card: {
    title: 'Event Dashboard Redesign',
    badge: 'Case study',
    tags: ['Figma', 'Vue 3', 'Tailwind'],
    problem: 'Organizers had <b>eight equally weighted numbers and a wall of links</b>, and had to go digging through menus to find basic details about their own event.',
    solution: 'Designed and built it around what customers actually care about: <b>relevant graphs, regrouped info and clearer labels</b>, with every sub-page rebuilt on shared components.',
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
      type: 'build',
      title: 'Uniform on the surface and underneath',
      text: 'The redesign went past the overview. Every tab under the dashboard, from Signups to Communications, got the same treatment in code, built in Vue 3 + Tailwind straight from my Figma designs.',
      points: [
        { title: 'Shared components', text: 'Every sub-page is rebuilt on one shared section component with grid and stacked layouts, instead of one-off markup per tab.' },
        { title: 'Consistent validation', text: 'Forms across the dashboard moved to updated input and validation libraries, so every field validates the same way.' },
        { title: 'Slimmer codebase', text: 'Replacing one-off tab layouts with shared components cut duplicate markup across the dashboard.' },
        { title: 'Design to code', text: 'Built directly from my Figma designs with the product’s current colors and components, so what shipped matches what was designed.' },
      ],
    },
  ],

  results: {
    title: 'The answers organizers need, right where they look.',
    items: [
      { title: 'Relevant, not exhaustive', text: 'Four KPIs with trends instead of eight tiles of equal weight.' },
      { title: 'Less hunting', text: 'Key details and enabled features are up front, so organizers don’t have to dig through menus or ask support where things are.' },
      { title: 'Consistent sub-pages', text: 'Every section under the dashboard looks and validates the same way.' },
    ],
  },
}
