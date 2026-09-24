import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies, getCaseStudy } from '../data/caseStudies'
import { BrowserFrame, Collage, PhoneFrame, Shot } from '../components/Frames'
import useReveal from '../hooks/useReveal'

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function Eyebrow({ children, className = '' }) {
  return <p className={`text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-2 ${className}`}>{children}</p>
}

function Chapter({ number, title, text }) {
  return (
    <Reveal className="pt-24 mb-10 max-w-3xl">
      <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-2">Part {number}</p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[2.6rem] leading-[1.1] font-bold tracking-tight mb-4">{title}</h2>
      <p className="text-[1.02rem] text-stone-500 leading-relaxed">{text}</p>
    </Reveal>
  )
}

function Compare({ before, after }) {
  const label = 'inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.08em] uppercase mb-3'
  return (
    <Reveal className="grid grid-cols-1 md:grid-cols-[0.85fr_1fr] gap-6 md:gap-8 items-start">
      <div>
        <p className={`${label} text-stone-400`}><span className="w-1.5 h-1.5 rounded-full bg-stone-300" />Before</p>
        <BrowserFrame img={before} />
      </div>
      <div>
        <p className={`${label} text-blue-600`}><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />After</p>
        <BrowserFrame img={after} className="shadow-lg shadow-blue-900/5" />
      </div>
    </Reveal>
  )
}

function Changes({ items }) {
  return (
    <Reveal className="mt-10">
      <Eyebrow>What changed</Eyebrow>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
        {items.map((item, i) => (
          <li key={item.title} className="bg-white p-6">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50 text-blue-600 text-[0.7rem] font-bold mb-3">{i + 1}</span>
            <h3 className="text-[0.95rem] font-semibold text-stone-900 mb-1.5">{item.title}</h3>
            <p className="text-sm text-stone-500 leading-relaxed">{item.text}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

function Showcase({ title, text, main, phone }) {
  return (
    <Reveal className="mt-16 bg-white border border-stone-200 rounded-3xl p-6 md:p-10">
      <div className="max-w-2xl mb-8">
        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-3">{title}</h3>
        <p className="text-[0.95rem] text-stone-500 leading-relaxed">{text}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8 items-start">
        <div>
          <Eyebrow>Page builder</Eyebrow>
          <BrowserFrame img={main} />
        </div>
        <div className="max-w-[250px] mx-auto w-full">
          <Eyebrow>Mobile<span className="hidden lg:inline"> · scroll me</span></Eyebrow>
          <PhoneFrame img={phone} />
        </div>
      </div>
    </Reveal>
  )
}

function Feature({ eyebrow, title, text, images }) {
  return (
    <Reveal className="mt-16 bg-white border border-stone-200 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 lg:gap-12 items-center">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-3">{title}</h3>
        <p className="text-[0.95rem] text-stone-500 leading-relaxed">{text}</p>
      </div>
      <div className="bg-stone-100 rounded-2xl p-5 md:p-8 flex flex-col sm:flex-row items-center justify-center gap-6">
        {images.map((img) => <Shot key={img.src} img={img} className="drop-shadow-sm" />)}
      </div>
    </Reveal>
  )
}

function Spotlight({ img, items }) {
  return (
    <Reveal className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
      <BrowserFrame img={img} className="shadow-lg shadow-blue-900/5" />
      <ol className="divide-y divide-stone-200 border-y border-stone-200">
        {items.map((item, i) => (
          <li key={item.title} className="flex gap-3.5 py-4">
            <span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-blue-50 text-blue-600 text-[0.7rem] font-bold flex items-center justify-center">{i + 1}</span>
            <div>
              <h3 className="text-[0.95rem] font-semibold text-stone-900 mb-1">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

// Compact "before" summary: a few numbers and the old step order
function OldFlow({ tally, steps }) {
  return (
    <Reveal className="mt-12 pt-10 border-t border-stone-200 grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-8 lg:gap-14 items-center">
      <dl className="grid grid-cols-3 gap-6 lg:gap-10">
        {tally.map((t) => (
          <div key={t.label} className="max-w-[130px]">
            <dt className="sr-only">{t.label}</dt>
            <dd className="text-4xl font-bold tracking-tight text-stone-900 leading-none mb-1.5">{t.value}</dd>
            <dd aria-hidden="true" className="text-[0.75rem] text-stone-500 leading-snug">{t.label}</dd>
          </div>
        ))}
      </dl>
      <div>
        <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-3">The old wizard</p>
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-stone-600 bg-stone-50 border border-stone-200 rounded-full pl-1 pr-3 py-1">
                <span className="w-5 h-5 rounded-full bg-white border border-stone-200 text-[0.65rem] font-bold text-stone-500 flex items-center justify-center">{i + 1}</span>
                {step}
              </span>
              {i < steps.length - 1 && <span aria-hidden="true" className="text-stone-300 text-xs">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  )
}

function List({ title, text, items }) {
  return (
    <Reveal className="mt-24 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-16 border-t border-stone-200 pt-12">
      <div>
        <Eyebrow>Development</Eyebrow>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight mb-3">{title}</h2>
        <p className="text-[0.95rem] text-stone-500 leading-relaxed">{text}</p>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.95rem] text-stone-600 leading-relaxed">
            <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-600 text-[0.65rem] font-bold flex items-center justify-center">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'chapter': return <Chapter {...block} />
    case 'compare': return <Compare {...block} />
    case 'changes': return <Changes {...block} />
    case 'showcase': return <Showcase {...block} />
    case 'feature': return <Feature {...block} />
    case 'spotlight': return <Spotlight {...block} />
    case 'list': return <List {...block} />
    default: return null
  }
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!study) return <Navigate to="/" replace />

  const idx = caseStudies.indexOf(study)
  const next = caseStudies[(idx + 1) % caseStudies.length]

  return (
    <main className="pt-24 md:pt-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        <Link to="/#projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-400 hover:text-stone-700 hover:bg-stone-100 -ml-3 px-3 py-1.5 rounded-lg transition-colors no-underline mb-8">
          ← All work
        </Link>

        <header className="mb-10">
          <p className="animate-rise-1 flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Case study · {study.company}
          </p>
          <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-[2.6rem] md:text-6xl lg:text-7xl leading-[1.02] font-bold tracking-tight mb-6">
            {study.title}<br />
            <span className="text-blue-600">{study.titleAccent}</span>
          </h1>
          <p className="animate-rise-3 text-[1.05rem] text-stone-500 leading-relaxed max-w-2xl">{study.summary}</p>
        </header>

        <dl className="animate-rise-4 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 border-y border-stone-200 py-6 mb-12">
          {study.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-stone-400 mb-1">{m.label}</dt>
              <dd className="text-sm font-medium text-stone-800 leading-snug">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="animate-rise-5">
          <Collage {...study.collage} className="aspect-[4/3] md:aspect-[16/9]" />
        </div>
      </div>

      {/* Problem */}
      <section className="bg-white border-y border-stone-200 mt-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-16">
          <Reveal>
            <p className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-red-500 mb-2">The problem</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-4">{study.problem.title}</h2>
            <p className="text-[0.95rem] text-stone-500 leading-relaxed">{study.problem.text}</p>
          </Reveal>
          <Reveal delay={80} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {study.problem.groups.map((g) => (
              <div key={g.label} className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                <p className="text-sm font-semibold text-stone-900 mb-4">{g.label}</p>
                <ul className="space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-stone-500 leading-relaxed">
                      <span className="shrink-0 mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
        {study.problem.flow && (
          <div className="max-w-[1100px] mx-auto px-6 md:px-8 pb-16 md:pb-20 -mt-4">
            <OldFlow {...study.problem.flow} />
          </div>
        )}
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        {study.body.map((block, i) => <Block key={i} block={block} />)}

        {/* Results */}
        <Reveal className="mt-24 bg-stone-900 text-stone-50 rounded-3xl p-8 md:p-12">
          <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-blue-300 mb-2">The result</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-10 max-w-xl">
            {study.results.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {study.results.items.map((r) => (
              <div key={r.title} className="border-t border-stone-700 pt-5">
                <p className="text-xl font-semibold tracking-tight mb-1.5">{r.title}</p>
                <p className="text-sm text-stone-400 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-20">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight mb-1.5">Like what you see?</h3>
            <p className="text-sm text-stone-500">I'm open to front-end dev and UX/UI roles. Let's chat.</p>
          </div>
          <div className="flex items-center gap-3">
            {next !== study && (
              <Link to={`/work/${next.slug}`} className="inline-flex items-center bg-white text-stone-900 text-sm font-medium px-5 py-2.5 rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors no-underline">
                Next case study →
              </Link>
            )}
            <a href="mailto:abikilborn@gmail.com" className="inline-flex items-center gap-1.5 bg-stone-900 text-stone-50 text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity no-underline">
              Let's talk →
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
