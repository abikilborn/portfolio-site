// Event form case study (/work/event-setup-redesign)

import quickCreate from '../../assets/imgs/forms/quick-create.webp'
import step1Before from '../../assets/imgs/forms/before-step1-general.webp'
import generalSettings from '../../assets/imgs/forms/after-general-settings.webp'
import upgradeModal from '../../assets/imgs/forms/upgrade-modal.webp'
import pageBuilder from '../../assets/imgs/events/page-builder.webp'
import registrationBefore from '../../assets/imgs/events/registration-before.webp'
import registrationAfter from '../../assets/imgs/events/registration-after.webp'
import registrationMobile from '../../assets/imgs/events/registration-mobile.webp'

const images = {
  step1Before: { src: step1Before, width: 1341, height: 989, url: 'nucleus.app/connect/events/create', alt: 'Old create form, step 1 of 5: event info fields next to a checklist of eight features to pick up front' },
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
      type: 'jobs',
      title: 'What people are trying to get done',
      groups: [
        {
          who: 'Organizers (campaign staff and volunteers)',
          jobs: [
            'When I have a new event, I want to create it fast so I can start sharing it.',
            'When details change, I want to jump straight to the right setting instead of clicking through a wizard.',
            'When I need more, like tickets, VIPs or questions, I want to add it without starting over.',
          ],
        },
        {
          who: 'Customer support',
          jobs: [
            'When an organizer asks how to change something, I want the setting to be where they would expect it.',
            'When a new feature ships, I want it to have an obvious home instead of another step everyone has to get through.',
          ],
        },
      ],
      note: 'Framed from ongoing conversations with our customer support team.',
    },
    {
      type: 'flow',
      title: 'From a fixed wizard to create-then-edit',
      text: 'The old flow asked for everything in a fixed order. The new one gets the event created in two steps, then lets organizers come back to any setting directly.',
      lanes: [
        {
          label: 'Before · five steps, every time',
          tone: 'before',
          steps: [
            { title: 'General', text: 'Event info, plus a checklist of 8 features to pick up front' },
            { title: 'Date & Location', text: 'Dates, signup and door windows, address, map' },
            { title: 'Feature Settings', text: 'One sub-page for every feature checked in step 1' },
            { title: 'Template', text: 'Copy, SEO, six image slots, field visibility' },
            { title: 'Settings', text: 'Verification, redirects, confirmations', flag: 'The most-edited settings lived here, last' },
          ],
        },
        {
          label: 'After · create fast, edit anytime',
          tone: 'after',
          steps: [
            { title: 'Quick create', text: 'Name, start, end and location' },
            { title: 'Event created', text: 'Ready to share; everything else is optional' },
            {
              title: 'Settings, one click away',
              text: 'A vertical nav organizers come back to',
              items: [
                { label: 'Basic setup · most-used first', flag: true },
                { label: 'Template setup' },
                { label: 'Add-ons (incl. premium)' },
                { label: 'Features' },
                { label: 'Advanced' },
              ],
            },
          ],
        },
      ],
      note: 'Recreated for this case study from the old and new flows.',
    },
    {
      type: 'chapter', number: '01',
      title: 'One two-step flow instead of two forms',
      text: 'The original ask was simple: let organizers create an event quickly, without feeling like they have to fill out a whole form. The old answer was a separate “Simple Events” form next to the full wizard. I replaced both with one two-step flow, which kept the quick path and removed a big chunk of duplicate code.',
    },
    {
      type: 'annotated',
      before: {
        img: images.step1Before,
        notes: [
          { x: 56, y: 17, text: 'Five fixed steps, even to make one small change.' },
          { x: 90, y: 44, text: 'Organizers had to pick features before any of them could be set up.' },
          { x: 42, y: 45, text: 'Name, URL slug and page title all asked for before the event existed.' },
        ],
      },
      after: {
        img: images.quickCreate,
        notes: [
          { x: 77, y: 26, text: 'Reassuring copy: details can be added later, and nothing is permanent.' },
          { x: 78, y: 42, text: 'Only the essentials: name, start, end and location.' },
          { x: 78, y: 60, text: 'Smart default: leave the end empty and the event ends three hours after it starts.' },
          { x: 58, y: 77, text: 'Multi-day is a link for the few who need it, not a checkbox for everyone.' },
        ],
      },
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
        { x: 24, y: 62, title: 'Vertical navigation', text: 'Every section is one click away while editing, instead of behind a row of wizard steps.' },
        { x: 29, y: 21, title: 'Most-used settings first', text: 'Support told us which settings organizers change most. Those moved from the last step to the top.' },
        { x: 29, y: 32.5, title: 'Collapsible sections', text: 'Groups like Template Design and Advanced Settings expand in place, so you can see exactly which section you need.' },
        { x: 88, y: 55, title: 'Grouped fields', text: 'Related settings sit together, like the verification note right under phone verification.' },
        { x: 29, y: 43.5, title: 'Features and add-ons on the side', text: 'Every feature has its own spot in the nav, so new ones don’t make the form longer.' },
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
    {
      type: 'annotated',
      before: {
        img: images.registrationBefore,
        notes: [
          { x: 50, y: 5, text: 'No header or navigation, so the page felt disconnected from the org’s own site.' },
          { x: 58, y: 69, text: 'Placeholder-only labels disappear as soon as you start typing.' },
          { x: 62, y: 91, text: 'Three identical red buttons and no clear primary action.' },
          { x: 88, y: 62, text: 'Event details as a plain stack of text.' },
        ],
      },
      after: {
        img: images.registrationAfter,
        notes: [
          { x: 40, y: 3, text: 'The org’s branding and navigation sit over the event photo, with a live “Registration open” status.' },
          { x: 30, y: 29, text: 'Labels stay above each field, with a required-field legend.' },
          { x: 50, y: 78, text: 'A callout explains phone verification before anyone hits submit.' },
          { x: 33, y: 83, text: 'One clear Register button.' },
          { x: 78, y: 28, text: 'Date, doors, location and contact in a scannable, icon-led card.' },
        ],
      },
    },
    {
      type: 'decisions',
      items: [
        { title: 'Merge “Simple Events” into one two-step flow', why: 'The quick path was the original ask, but two separate forms meant two mental models for organizers and two code paths for us.', instead: 'keeping a separate simple form next to the full wizard.' },
        { title: 'Vertical navigation for settings', why: 'Events get edited far more often than they get created. A side nav makes every section one click away.', instead: 'horizontal wizard steps you have to click through in order.' },
        { title: 'Most-used settings at the top', why: 'Support kept hearing that the settings organizers change most were buried in the last step.', instead: 'ordering settings by when the old wizard happened to ask for them.' },
        { title: 'Show premium features instead of hiding them', why: 'Organizers can’t want what they can’t see. A visible, badged feature creates a natural moment to upgrade.', instead: 'only showing what the current plan includes.' },
        { title: 'Offer a Classic theme', why: 'Existing events keep looking the way organizers set them up until they choose to switch.', instead: 'forcing every live event onto the new look at once.' },
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
