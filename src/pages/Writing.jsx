import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { articles } from '../data/articles'
import useReveal from '../hooks/useReveal'

export default function WritingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const h = useReveal()
  const g = useReveal(100)

  return (
    <main className="max-w-[760px] mx-auto px-6 md:px-8 pt-32 pb-20">

      <div ref={h} className="reveal mb-12">
        <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-2">Writing</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-normal tracking-tight mb-4">
          Thinking out <em className="italic text-blue-600">loud</em>
        </h1>
        <p className="text-stone-500 text-base leading-relaxed max-w-lg">
          I write about front-end craft, UX, and working well in teams. Real takes from 6 years in the field — no fluff.
        </p>
      </div>

      <div ref={g} className="reveal border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-200">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/writing/${article.slug}`}
            className="group flex items-center justify-between gap-6 bg-white hover:bg-stone-50/60 transition-colors p-6 md:p-8 no-underline text-stone-900"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[0.72rem] font-medium text-stone-400 tracking-wide mb-2">
                <span>{article.date}</span>
                <span className="text-stone-300">·</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-normal tracking-tight leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed mb-3">{article.preview}</p>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map(t => (
                  <span key={t} className="text-[0.65rem] font-medium text-stone-400 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>
            <span className="text-xl text-blue-500 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0">→</span>
          </Link>
        ))}
      </div>

      <p className="text-center text-xs text-stone-400 mt-10">More articles coming soon.</p>
    </main>
  )
}
