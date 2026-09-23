// Event setup (complex form) case study (/work/event-setup-redesign)

import quickCreate from '../../assets/imgs/forms/quick-create.webp'
import enhanceCard from '../../assets/imgs/forms/enhance-card.webp'
import generalSettings from '../../assets/imgs/forms/after-general-settings.webp'

const images = {
  quickCreate: { src: quickCreate, width: 1512, height: 1067, url: 'nucleus.app/connect/events/create', alt: 'New create screen: “Let’s set up your event” with name, start, end and location fields' },
  enhanceCard: { src: enhanceCard, width: 715, height: 223, plain: true, maxWidth: 715, alt: 'Enhance your event card with four optional next steps' },
  generalSettings: { src: generalSettings, width: 1512, height: 944, url: 'nucleus.app/connect/events/settings', alt: 'New General Settings page with a grouped side nav and toggle cards for paid events, phone verification, tickets and multiple signups' },
}

export default {
  slug: 'event-setup-redesign',
  company: 'Campaign Nucleus',
  title: 'Event setup,',
  titleAccent: 'without the maze',
  summary: 'Creating an event in Nucleus meant a five-step wizard that asked about everything up front: features, portals, tiers, templates and redirects. It didn’t follow the way organizers actually work, and every new feature made it longer. I redesigned it into a four-field quick start, followed by settings organized the way people look for them.',
  meta: [
    { label: 'Role', value: 'UX/UI Design + Frontend Dev' },
    { label: 'Scope', value: 'Event creation and event settings' },
    { label: 'Stack', value: 'Vue 3, Tailwind, Figma' },
    { label: 'Year', value: '2026' },
  ],
  card: {
    title: 'Complex Form Redesign',
    badge: 'Case study',
    tags: ['Figma', 'Vue 3', 'Tailwind'],
    problem: 'Two outdated forms were generating <b>user confusion and a ton of support tickets</b>. The UX was fighting users instead of helping them.',
    solution: 'Rebuilt the form completely with <b>modernized visuals and re-grouped fields</b>, which measurably reduced friction and reduced the number of support tickets.',
  },
  collage: { back: images.generalSettings, front: images.quickCreate, overlay: images.enhanceCard, label: 'The new event settings, quick create screen and Enhance your event card' },

  problem: {
    title: 'Where it started',
    text: 'The old create flow was a five-step wizard: General, Date & Location, Feature Settings, Template and Settings. It was a lot, and it didn’t match the order organizers actually work in.',
    groups: [
      {
        label: 'Too much, too soon',
        items: [
          'Step one asked organizers to pick from eight features before they could set any of them up',
          'Date & Location alone had more than a dozen fields, including signup and door windows and map coordinates',
          'Every feature you checked added its own sub-page to step three',
        ],
      },
      {
        label: 'Hard to find, hard to grow',
        items: [
          'Settings like redirects and auto-responders were buried in step five',
          'Columns of Yes/No radio pairs with little explanation of what each one did',
          'Adding a new field or feature meant making an already long form even longer',
        ],
      },
    ],
    // The old wizard at a glance, shown under the problem
    flow: {
      tally: [
        { value: '5', label: 'steps in a fixed order' },
        { value: '32', label: 'inputs in the first two steps' },
        { value: '13', label: 'sub-pages across steps 3–5' },
      ],
      steps: ['General', 'Date & Location', 'Feature Settings', 'Template', 'Settings'],
    },
  },

  body: [
    {
      type: 'chapter', number: '01',
      title: 'Start with four fields, not five steps',
      text: 'Most organizers just need the event to exist so they can share it and come back later. So creating one now asks only for the essentials.',
    },
    {
      type: 'spotlight',
      img: images.quickCreate,
      items: [
        { title: 'Essentials only', text: 'Name, start time, end time and location. Everything else can wait.' },
        { title: 'Smart defaults', text: 'Leave the end time empty and the event ends three hours after it starts.' },
        { title: 'No feature checklist', text: 'Features get turned on where they’re configured, instead of being picked blind up front.' },
        { title: 'Reassuring copy', text: 'The page says up front that features and settings can be added later, and nothing is permanent.' },
      ],
    },
    {
      type: 'feature',
      eyebrow: 'After creating',
      title: 'Enhance when you’re ready',
      text: 'Instead of a locked sequence, an “Enhance your event” card offers four optional paths: date and location details, features, registration and branding, and notifications. Organizers pick what they need, when they need it, and can dismiss it.',
      images: [images.enhanceCard],
    },
    {
      type: 'chapter', number: '02',
      title: 'Settings organized the way people look for them',
      text: 'Everything after creation lives on one settings page with a grouped side nav, not behind wizard steps. Organizers jump straight to what they need, and a new feature is a new nav item instead of another step for everyone.',
    },
    {
      type: 'spotlight',
      img: images.generalSettings,
      items: [
        { title: 'Grouped navigation', text: 'Basic setup, Template setup, Add-ons, Features and Advanced, with Event details first.' },
        { title: 'Toggle cards', text: 'Big switches like paid events and phone verification get an icon and a one-line explanation.' },
        { title: 'Related fields together', text: 'Options sit directly under the setting they belong to, like the verification note under phone verification.' },
        { title: 'Honest warnings', text: 'Choices that can’t be undone say so, like turning on paid events.' },
        { title: 'Room to grow', text: 'New features get their own page in the nav, so the form doesn’t get longer for everyone.' },
      ],
    },
  ],

  // TODO: swap in real numbers if you have them (support tickets, time to create an event)
  results: {
    title: 'A form that can grow without getting harder to use.',
    items: [
      { title: 'Four fields to start', text: 'Down from a five-step wizard that asked about everything up front.' },
      { title: 'Fewer support tickets', text: 'Settings are where organizers expect them, with plain-language explanations.' },
      { title: 'Built to grow', text: 'New features get their own page instead of making one long form longer.' },
    ],
  },
}
