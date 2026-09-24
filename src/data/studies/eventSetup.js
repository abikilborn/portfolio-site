// Event form case study (/work/event-setup-redesign)

import quickCreate from '../../assets/imgs/forms/quick-create.webp'
import generalSettings from '../../assets/imgs/forms/after-general-settings.webp'
import upgradeModal from '../../assets/imgs/forms/upgrade-modal.webp'
import pageBuilder from '../../assets/imgs/events/page-builder.webp'
import registrationBefore from '../../assets/imgs/events/registration-before.webp'
import registrationAfter from '../../assets/imgs/events/registration-after.webp'
import registrationMobile from '../../assets/imgs/events/registration-mobile.webp'

const images = {
  quickCreate: { src: quickCreate, width: 1512, height: 1067, url: 'nucleus.app/connect/events/create', alt: 'New create screen: “Let’s set up your event” with name, start, end and location fields' },
  generalSettings: { src: generalSettings, width: 1512, height: 944, url: 'nucleus.app/connect/events/settings', alt: 'New General Settings page with a vertical, grouped side nav and toggle cards for paid events, phone verification, tickets and multiple signups' },
  upgradeModal: { src: upgradeModal, width: 655, height: 567, plain: true, maxWidth: 440, alt: 'Upgrade modal offering VIP Credentialing as a $49 per-event add-on or the $199 per month Pro plan' },
  pageBuilder: { src: pageBuilder, width: 1512, height: 1348, url: 'nucleus.app/connect/events/design', alt: 'Page builder: draggable page sections on the left and a live preview of the registration page on the right' },
  registrationBefore: { src: registrationBefore, width: 1336, height: 969, url: 'northwind.org/events/community-kickoff-rally', alt: 'Old registration page: a hero photo, placeholder-only inputs and three identical red No, Maybe and Yes buttons' },
  registrationAfter: { src: registrationAfter, width: 1920, height: 1731, url: 'northwind.org/events/community-kickoff-rally', alt: 'New registration page: branded header over the event photo, the form in a raised card with persistent labels, and an event details sidebar' },
  registrationMobile: { src: registrationMobile, width: 390, height: 2656, alt: 'New registration page on mobile, with the event details card below the form' },
}

export default {
  slug: 'event-setup-redesign',
  company: 'Campaign Nucleus',
  title: 'The event form,',
  titleAccent: 'built to grow',
  summary: 'Organizers create an event once, then come back to edit it again and again. The old form was built like a one-time wizard, and it had run out of room. Working closely with our customer support team, I redesigned it end to end: a two-step create flow, settings grouped the way people use them, a drag-and-drop page builder with a live preview, and the product’s first in-app upsell.',
  meta: [
    { label: 'Role', value: 'UX/UI Design + Frontend Dev' },
    { label: 'Scope', value: 'Event creation, settings, page builder, upsell' },
    { label: 'Stack', value: 'Vue 3, Laravel Blade, Tailwind, Figma' },
    { label: 'Year', value: '2026' },
  ],
  card: {
    title: 'Event Form Redesign',
    badge: 'New · Case study',
    stat: '32 → 4 inputs · ~⅔ faster to create an event',
    tags: ['Figma', 'Vue 3', 'Laravel Blade', 'Tailwind'],
    problem: 'A form organizers edit constantly was built like a one-time wizard, with <b>the most-used settings buried in the last step</b> and no room to add new features.',
    solution: 'Designed and built it with our support team’s feedback: <b>a two-step create flow, grouped vertical settings, a live-preview page builder</b>, and our first upsell path.',
  },
  split: {
    design: [
      'Worked closely with customer support and mapped user flows around how organizers think',
      'Designed the create flow, settings, page builder and upgrade modal in Figma',
      'Theming so every public event page stays on brand',
    ],
    code: [
      'Built the create flow, settings and page builder in Vue 3 + Tailwind',
      'Removed “Simple Events,” leaving one create flow to maintain',
      'Consolidated 15+ Blade templates into shared partials',
      'Shipped a “Classic” theme for backward compatibility',
    ],
  },
  collage: { back: images.generalSettings, front: images.pageBuilder, phone: images.registrationMobile, label: 'The new event settings, page builder and mobile registration page' },

  problem: {
    title: 'Where it started',
    text: 'The old form was a five-step wizard with horizontal navigation. That works for something you fill out once, but organizers come back to their events over and over. Our customer support team kept hearing the same complaints.',
    groups: [
      {
        label: 'What organizers told support',
        items: [
          'The settings they changed most were in the last step, so every quick edit meant getting through the whole wizard',
          'There was no way to see the registration page while editing it',
          'It felt like a whole form to fill out when they just wanted to get an event up',
        ],
      },
      {
        label: 'What the product needed',
        items: [
          'Room to add new features without making the form longer for everyone',
          'One create flow instead of a separate “Simple Events” form, which doubled the code to maintain',
          'A way to show organizers premium features they didn’t have yet',
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
      title: 'One two-step flow instead of two forms',
      text: 'The original ask was simple: let organizers create an event quickly, without feeling like they have to fill out a whole form. The old answer was a separate “Simple Events” form next to the full wizard. I replaced both with one two-step flow, which kept the quick path and removed a big chunk of duplicate code.',
    },
    {
      type: 'spotlight',
      img: images.quickCreate,
      items: [
        { title: 'Essentials first', text: 'Name, start, end and location are enough to create the event. Everything else can wait.' },
        { title: 'Smart defaults', text: 'Leave the end time empty and the event ends three hours after it starts.' },
        { title: 'Reassuring copy', text: 'The page says up front that features and settings can be added later, and nothing is permanent.' },
        { title: 'One flow to maintain', text: '“Simple Events” is gone, so there’s one create path in the product and in the codebase.' },
      ],
    },
    {
      type: 'chapter', number: '02',
      title: 'Settings built for coming back',
      text: 'An event gets edited far more often than it gets created, so settings moved from horizontal wizard steps to a vertical side nav. I spent a lot of time in meetings with support mapping how organizers think about their events, and grouped everything to match.',
    },
    {
      type: 'spotlight',
      img: images.generalSettings,
      items: [
        { title: 'Vertical navigation', text: 'Every section is one click away while editing, instead of behind a row of wizard steps.' },
        { title: 'Most-used settings first', text: 'Support told us which settings organizers change most. Those moved from the last step to the top.' },
        { title: 'Collapsible sections', text: 'Groups like Template Design and Advanced Settings expand in place, so you can see exactly which section you need.' },
        { title: 'Grouped fields', text: 'Related settings sit together, like the verification note right under phone verification.' },
        { title: 'Features and add-ons on the side', text: 'Every feature has its own spot in the nav, so new ones don’t make the form longer.' },
      ],
    },
    {
      type: 'feature',
      eyebrow: 'New revenue',
      title: 'Our first in-app upsell',
      text: 'The product had never sold upgrades inside the app. Now the nav shows every feature and add-on, including ones an organizer’s plan doesn’t include yet. Clicking a premium feature opens an upgrade modal with two clear choices: add it to this event, or unlock everything with the Pro plan.',
      images: [images.upgradeModal],
    },
    {
      type: 'chapter', number: '03',
      title: 'A page builder with a live preview',
      text: 'Not being able to see the page while editing it was one of the biggest complaints about the old form. The new builder shows every change live, with a completely new look for the public page.',
    },
    {
      type: 'showcase',
      title: 'Drag, drop, see it live',
      text: 'Organizers drag sections to reorder them, hide what they don’t need, add new blocks, and preview desktop, mobile, Thank You and Form Closed states before publishing. Themes keep every page on brand with the organization’s colors, logo and navigation.',
      main: images.pageBuilder,
      phone: images.registrationMobile,
    },
    { type: 'compare', before: images.registrationBefore, after: images.registrationAfter },
    {
      type: 'changes',
      items: [
        { title: 'A completely new look', text: 'A branded hero, labels that stay put while you type, and one clear Register button instead of three.' },
        { title: 'On brand by default', text: 'Theming pulls in the organization’s colors, logo and site navigation.' },
        { title: 'Classic theme', text: 'Existing events can keep a “Classic” theme that skins the new builder like the old page, so nothing changes until they’re ready.' },
      ],
    },
    {
      type: 'build',
      title: 'Built to be maintained, not just shipped',
      text: 'The public pages are Laravel Blade; the create flow, settings and builder are Vue 3 + Tailwind. Designing it myself meant I could plan the code structure while I was still in Figma, so the new form shipped on a cleaner foundation instead of on top of the old one.',
      points: [
        { title: 'Slimmer codebase', text: 'Removed the separate “Simple Events” form and its code paths, leaving one create flow to build on, test and maintain.' },
        { title: 'Shared partials', text: 'Consolidated 15+ duplicated Blade templates into shared partials, so every public event page renders from one source.' },
        { title: 'Shared components', text: 'Feature and add-on settings (VIPs, paid tiers, credentials) are built from shared form components instead of one-off markup.' },
        { title: 'Consistent validation', text: 'Inputs and validation rules come from one shared library, so every field behaves and shows errors the same way.' },
        { title: 'Backward compatible', text: 'The new builder shipped with a “Classic” theme, so existing events kept their look until organizers chose to switch.' },
        { title: 'Easier to extend', text: 'Settings are read straight from the event instead of passed through every template, so adding one touches a single file.' },
      ],
    },
  ],

  results: {
    title: 'A form that can grow without getting harder to use.',
    stat: { value: '32 → 4', label: 'inputs to create an event', text: 'The old wizard had 32 inputs in its first two steps; the new flow needs 4 fields. By my estimate, that makes creating an event about two-thirds faster.' },
    items: [
      { title: 'One create flow', text: 'Replaced both the five-step wizard and “Simple Events,” with a lot less code to maintain.' },
      { title: 'First in-app upsell', text: 'Premium features are visible and one click from an upgrade, a new revenue path.' },
    ],
  },
}
