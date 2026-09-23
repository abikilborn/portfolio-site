// Events redesign case study (/work/events-redesign)

import registrationBefore from '../../assets/imgs/events/registration-before.webp'
import registrationAfter from '../../assets/imgs/events/registration-after.webp'
import registrationMobile from '../../assets/imgs/events/registration-mobile.webp'
import pageBuilder from '../../assets/imgs/events/page-builder.webp'
import overviewBefore from '../../assets/imgs/events/overview-before.webp'
import overviewAfter from '../../assets/imgs/events/overview-after.webp'

const images = {
  registrationBefore: { src: registrationBefore, width: 1336, height: 969, url: 'northwind.org/events/community-kickoff-rally', alt: 'Old registration page: a hero photo, placeholder-only inputs and three identical red No, Maybe and Yes buttons' },
  registrationAfter: { src: registrationAfter, width: 1920, height: 1731, url: 'northwind.org/events/community-kickoff-rally', alt: 'New registration page: branded header over the event photo, the form in a raised card with persistent labels, and an event details sidebar' },
  registrationMobile: { src: registrationMobile, width: 390, height: 2656, alt: 'New registration page on mobile, with the event details card below the form' },
  pageBuilder: { src: pageBuilder, width: 1512, height: 1348, url: 'nucleus.app/events/design', alt: 'Page builder: a list of draggable page sections on the left and a live preview of the registration page on the right' },
  overviewBefore: { src: overviewBefore, width: 1272, height: 1169, url: 'nucleus.app/events/show', alt: 'Old event overview: a column of five link fields next to eight equally weighted stat tiles' },
  overviewAfter: { src: overviewAfter, width: 1512, height: 1726, url: 'nucleus.app/events/overview', alt: 'New event overview: header with actions, four KPI cards, a signups chart, traffic sources, share links and recent registrations' },
}

export default {
  slug: 'events-redesign',
  company: 'Campaign Nucleus',
  title: 'Redesigning Events,',
  titleAccent: 'front to back',
  summary: "Campaign Nucleus's Events module has two sides: the public page supporters register on, and the dashboard organizers run their event from. Both had fallen behind the rest of the product. I redesigned both in Figma, built them in production, and gave organizers a page builder to make each event their own.",
  meta: [
    { label: 'Role', value: 'UX/UI Design + Frontend Dev' },
    { label: 'Scope', value: 'Registration page, page builder, event dashboard' },
    { label: 'Stack', value: 'Laravel Blade, Vue 3, Tailwind, Figma' },
    { label: 'Year', value: '2026' },
  ],
  collage: { back: images.overviewAfter, front: images.registrationAfter, phone: images.registrationMobile, label: 'The redesigned event dashboard, registration page and mobile view' },

  card: {
    title: 'Events Redesign',
    badge: 'New · Case study',
    tags: ['Figma', 'Vue 3', 'Laravel Blade', 'Tailwind'],
    problem: 'Supporters signed up on a page with <b>vanishing labels and three competing buttons</b>, while organizers read a dashboard with no hierarchy.',
    solution: 'Redesigned and built both sides: a <b>branded, mobile-first registration page</b> with a page builder, and a dashboard that leads with what matters.',
  },

  problem: {
    title: 'Where it started',
    text: 'Every rally, fundraiser and volunteer night on Nucleus runs through Events, so both sides of it get a lot of use.',
    groups: [
      {
        label: 'For supporters',
        items: [
          'Placeholder-only labels that disappear as soon as you start typing',
          'Three identical red buttons (No, Maybe, Yes) and no clear primary action',
          "No header, branding or navigation, so the page felt disconnected from the org's own site",
          'Event details as a plain stack of text',
        ],
      },
      {
        label: 'For organizers',
        items: [
          'Eight equally weighted stat tiles, so nothing stood out',
          'Five link fields stacked in a column, taking up a third of the page',
          'No trend over time and no sense of where signups came from',
          'No obvious way to edit the event or see the live page',
        ],
      },
    ],
  },

  body: [
    {
      type: 'chapter', number: '01',
      title: 'A registration page that feels like the org’s own site',
      text: 'The goal: make it obvious what the event is, when it is and how to sign up, then get out of the way.',
    },
    { type: 'compare', before: images.registrationBefore, after: images.registrationAfter },
    {
      type: 'changes',
      items: [
        { title: 'Branded hero', text: "The org's header and nav sit over the event photo, with the title, date and a live “Registration open” status." },
        { title: 'Labels that stay put', text: 'Top-aligned labels, a required-field legend, and helper text where it helps, like why we need a mobile number.' },
        { title: 'One clear action', text: 'Three competing red buttons became a single Register button.' },
        { title: 'Grouped fields', text: "Contact fields come first. The organizer's custom questions sit below a divider." },
        { title: 'No surprises', text: "A callout above the button explains that you'll verify by text to finish registering." },
        { title: 'Scannable details', text: 'Date, doors, location and contact info live in an icon-led sidebar card.' },
      ],
    },
    {
      type: 'showcase',
      title: 'Built for organizers, too',
      text: "Every part of the page is a section organizers control in a page builder. They can drag to reorder, hide what they don't need, add new blocks, and preview desktop, mobile, Thank You and Form Closed states before publishing. On mobile, the details card drops below the form so signing up always comes first.",
      main: images.pageBuilder,
      phone: images.registrationMobile,
    },
    {
      type: 'chapter', number: '02',
      title: 'A dashboard that answers “how’s my event doing?”',
      text: 'Organizers come here to check progress and share their event. The old page gave them a pile of numbers and links. The new one leads with what matters and keeps the next action one click away.',
    },
    { type: 'compare', before: images.overviewBefore, after: images.overviewAfter },
    {
      type: 'changes',
      items: [
        { title: 'Actions up front', text: 'Status, date, owner and registration window in the header, with View live page and Edit event as the main actions.' },
        { title: 'Four KPIs, not eight', text: 'Signups against a target, conversion rate, verified signups and average score, each with a trend.' },
        { title: 'Signups over time', text: 'A 14-day chart that can overlay page views, so a spike has context.' },
        { title: 'Traffic sources', text: 'UTM source, medium, state, device and referrer in one tabbed card.' },
        { title: 'Sharing, consolidated', text: 'Five link fields became a live link, a preview link and a QR code that downloads as PNG or SVG.' },
        { title: 'Recent registrations', text: 'The latest signups with Verified, Checked in and Incomplete badges, plus a link to the full list.' },
      ],
    },
    {
      type: 'list',
      title: 'Under the hood',
      text: 'The public pages are Laravel Blade; the dashboard and builder are Vue 3 + Tailwind. Designing it myself meant I could plan the code structure while I was still in Figma.',
      items: [
        'Pulled duplicated markup and CSS out of 15+ Blade templates into shared partials (header, footer, sidebar, contact info), so every event page renders from one source.',
        'Contact info supports three modes (show, hide or custom) with a compact stacked layout on mobile.',
        'Fixed older bugs along the way, including a time-formatting crash and an inverted timezone setting.',
      ],
    },
  ],

  // TODO: swap in real numbers if you have them (support tickets, conversion, time to publish)
  results: {
    title: 'Two sides of one feature, finally speaking the same language.',
    items: [
      { title: 'One template', text: 'Every public event page renders from shared partials instead of 15+ copies drifting apart.' },
      { title: 'Self-serve pages', text: 'Organizers customize, reorder and preview without asking a developer.' },
      { title: 'Progress at a glance', text: 'The dashboard leads with trends and next actions, not a wall of tiles.' },
    ],
  },
}
