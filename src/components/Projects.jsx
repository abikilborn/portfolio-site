import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { Collage } from './Frames'
import { getCaseStudy } from '../data/caseStudies'

const featured = [getCaseStudy('event-setup-redesign'), getCaseStudy('events-redesign')]

function Tag({ children }) {
  return <span className="text-[0.68rem] font-medium text-stone-500 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-md">{children}</span>
}

// Case study card; `flip` puts the collage on the left
function FeaturedCase({ study, flip }) {
  const { card } = study
  const rich = 'text-sm text-stone-500 leading-relaxed [&_b]:text-stone-700 [&_b]:font-semibold'

  return (
    <Link
      to={`/work/${study.slug}`}
      className={`group grid grid-cols-1 gap-8 p-8 bg-white hover:bg-stone-50/60 transition-colors no-underline text-stone-900 ${flip ? 'md:grid-cols-[1.2fr_1fr]' : 'md:grid-cols-[1fr_1.2fr]'}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <p className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-stone-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            UX/UI Design + Development
          </p>
          <span className="text-[0.62rem] font-bold tracking-[0.06em] uppercase text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 -my-0.5 rounded-full">
            {card.badge}
          </span>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight mb-4">{card.title}</h3>
        <div className="mb-3">
          <p className="text-[0.68rem] font-bold tracking-[0.06em] uppercase text-red-500 mb-1">The Problem</p>
          <p className={rich} dangerouslySetInnerHTML={{ __html: card.problem }} />
        </div>
        <div className="mb-5">
          <p className="text-[0.68rem] font-bold tracking-[0.06em] uppercase text-blue-600 mb-1">The Solution</p>
          <p className={rich} dangerouslySetInnerHTML={{ __html: card.solution }} />
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {card.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <span className="text-[0.8rem] font-semibold text-blue-600 mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
          Read the case study →
        </span>
      </div>
      <Collage {...study.collage} className={`aspect-[4/3] self-center ${flip ? 'md:order-first' : ''}`} />
    </Link>
  )
}

export default function Projects() {
  const h = useReveal()
  const g = useReveal(80)

  return (
    <div id="projects" className="max-w-[1100px] mx-auto px-6 md:px-8 py-20">

      <div ref={h} className="reveal mb-10">
        <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-1.5">Projects</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-blue-600">work</span>
        </h2>
        <p className="text-stone-500 text-[0.95rem] mt-2 max-w-md leading-relaxed">
          Real problems + real solutions: Solved with design and development.
        </p>
      </div>

      <div ref={g} className="reveal border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-200">

        {featured.map((study, i) => <FeaturedCase key={study.slug} study={study} flip={i % 2 === 1} />)}

        <a
          href="https://kilborncreative.com/"
          target="_blank" rel="noreferrer"
          className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-10 p-8 bg-white hover:bg-stone-50/60 transition-colors no-underline text-stone-900"
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              Frontend Dev · Side Project
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight mb-3">Kilborn Creative</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Personal brand site for my freelance work — <span className="text-stone-700 font-semibold">graphics, merch, websites, and media for local churches</span>. Built end-to-end in React.
            </p>
          </div>
          <span className="shrink-0 text-[0.8rem] font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Visit site →</span>
        </a>

      </div>
    </div>
  )
}
