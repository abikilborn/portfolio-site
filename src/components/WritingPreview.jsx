import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import useReveal from '../hooks/useReveal'

export default function WritingPreview() {
  const h = useReveal()
  const g = useReveal(80)

  return (
    <div className="bg-white border-y border-stone-200">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-20">

        <div ref={h} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-1.5">Writing</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-normal tracking-tight">
              Thinking out <em className="italic text-blue-600">loud</em>
            </h2>
            <p className="text-stone-500 text-[0.95rem] mt-2 max-w-md leading-relaxed">
              Real takes on front-end craft, UX, and working well in teams.
            </p>
          </div>
          <Link to="/writing" className="text-sm font-semibold text-blue-600 no-underline hover:opacity-70 transition-opacity whitespace-nowrap pb-0.5">
            View all articles →
          </Link>
        </div>

        <div ref={g} className="reveal border border-stone-200 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:grid md:grid-cols-3 md:divide-x divide-stone-200">
          {articles.map(a => (
            <Link
              key={a.slug}
              to={`/writing/${a.slug}`}
              className="group flex flex-col p-6 bg-white hover:bg-stone-50/60 transition-colors no-underline text-stone-900"
            >
              <p className="text-[0.68rem] font-medium text-stone-400 tracking-wide mb-3">{a.date} · {a.readTime}</p>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-normal leading-snug tracking-tight mb-3 flex-1 group-hover:text-blue-600 transition-colors">{a.title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed mb-4 line-clamp-3">{a.preview}</p>
              <span className="text-[0.75rem] font-semibold text-blue-600">Read →</span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
