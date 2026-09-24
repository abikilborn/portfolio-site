// Case study content, rendered by pages/CaseStudy.jsx at /work/:slug
//
// Block types:
//   { type: 'chapter',   number, title, text }
//   { type: 'compare',   before: img, after: img }
//   { type: 'changes',   items: [{ title, text }] }
//   { type: 'showcase',  title, text, main: img, phone: img }
//   { type: 'feature',   eyebrow, title, text, images: [img] }
//   { type: 'spotlight', img, items: [{ title, text }] }
//   { type: 'build',     title, text, points: [{ title, text }] }
//
// img = { src, alt, width, height, url?, plain?, maxWidth? }
// plain: true shows the image without a browser frame
//
// split = { design: ['...'], code: ['...'] } shows what was designed vs built
// problem.flow = { tally: [{ value, label }], steps: ['...'] } adds a compact
// summary of the old flow under the problem section

import events from './studies/events'
import eventSetup from './studies/eventSetup'

export const caseStudies = [eventSetup, events]

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug)
