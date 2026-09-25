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
      type: 'jobs',
      title: 'What organizers come here to do',
      groups: [
        {
          who: 'Organizers (campaign staff and volunteers)',
          jobs: [
            'When my event is coming up, I want to know at a glance if signups are on track.',
            'When I’m promoting it, I want to see which channels are actually bringing people in.',
            'When I share it, I want the link or QR code in one click.',
            'When something needs to change, I want to get to the editor without hunting for it.',
            'I want to know what’s turned on for this event without opening the editor.',
          ],
        },
      ],
      note: 'Framed from regular conversations with our customer reps about what organizers use and ignore.',
    },
    {
      type: 'chapter', number: '01',
      title: 'Built around what users actually care about',
      text: 'I met regularly with our customer reps to learn which numbers organizers use and which ones they ignore. That shaped every decision: what to show, what to rename, what to group together and what to drop.',
    },
    {
      type: 'annotated',
      before: {
        img: images.overviewBefore,
        notes: [
          { x: 52, y: 20, text: 'No obvious way to edit the event or open the live page.' },
          { x: 47, y: 44, text: 'Only totals, with no trend over time or target to compare against.' },
          { x: 76, y: 56, text: 'Eight tiles with equal weight, so nothing stood out.' },
          { x: 33, y: 62, text: 'Five link fields stacked in a column, taking up a third of the page.' },
        ],
      },
      after: {
        img: images.overviewAfter,
        notes: [
          { x: 69, y: 11, text: 'View live page and Edit event details right in the header.' },
          { x: 47, y: 23, text: 'Four KPIs with trends and context, like “of 300 target.”' },
          { x: 31, y: 32, text: 'Signups over time, with page views overlaid so a spike has context.' },
          { x: 31, y: 57, text: 'Traffic sources by UTM, state, device and referrer.' },
          { x: 76, y: 32, text: 'Live link, preview link and QR code in one sharing card.' },
          { x: 76, y: 58, text: 'Which features are on, at a glance.' },
        ],
      },
    },
    {
      type: 'answers',
      title: 'Where the answers live now',
      text: 'I mapped the questions organizers bring to this page against where the old design put the answer.',
      items: [
        { q: 'Are signups on track?', before: 'A total signups tile with no target or trend', after: 'Total Signups KPI with target and % change, plus a 14-day chart' },
        { q: 'Where are signups coming from?', before: 'Not on the overview', after: 'Traffic sources card: UTM, state, device and referrer' },
        { q: 'What’s turned on for this event?', before: 'Edit > Features', after: 'Event features card on the overview' },
        { q: 'How do I share it?', before: 'Five separate link fields and a QR code at the bottom', after: 'One Share & links card with live link, preview link and QR code' },
        { q: 'How do I change something?', before: 'No edit action on the page', after: 'Edit event details button in the header' },
        { q: 'Who just registered?', before: 'Not on the overview', after: 'Recent registrations with Verified, Checked in and Incomplete badges' },
      ],
    },
    {
      type: 'decisions',
      items: [
        { title: 'Four KPIs instead of eight tiles', why: 'When everything has equal weight, nothing stands out. Customer reps told us which numbers organizers actually check, so those got the top row.', instead: 'giving every stat its own tile.' },
        { title: 'Context on every number', why: '“271” means little on its own. “271 of 300 target, +25%” tells you whether you’re on track.', instead: 'raw totals with no comparison.' },
        { title: 'Feature status on the overview', why: 'Organizers were opening Edit > Features just to check what was on.', instead: 'keeping feature status inside the edit flow only.' },
        { title: 'One sharing card', why: 'Five separate link fields took a third of the page for a task that usually needs one link or a QR code.', instead: 'a field per link, stacked down the side.' },
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
