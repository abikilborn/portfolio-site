import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getArticle, articles } from '../data/articles'

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="text-[1rem] text-stone-500 leading-[1.8] mb-5">{block.text}</p>
    case 'h2':
      return <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-normal tracking-tight mt-10 mb-4 text-stone-900">{block.text}</h2>
    case 'h3':
      return <h3 className="text-base font-semibold text-stone-900 mt-7 mb-3">{block.text}</h3>
    case 'quote':
      return (
        <blockquote className="border-l-[3px] border-blue-500 pl-5 my-7 font-[family-name:var(--font-display)] text-xl font-normal italic text-stone-500 leading-relaxed">
          {block.text}
        </blockquote>
      )
    case 'ul':
      return (
        <ul className="my-5 space-y-2 ml-5 list-disc marker:text-stone-300">
          {block.items.map((item, i) => (
            <li key={i} className="text-[0.95rem] text-stone-500 leading-relaxed">{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="my-5 space-y-2 ml-5 list-decimal marker:text-stone-400 marker:font-semibold">
          {block.items.map((item, i) => (
            <li key={i} className="text-[0.95rem] text-stone-500 leading-relaxed">{item}</li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-7 text-[0.95rem] text-blue-800 leading-relaxed">
          {block.text}
        </div>
      )
    default:
      return null
  }
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticle(slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!article) return <Navigate to="/writing" replace />

  const idx = articles.findIndex(a => a.slug === slug)
  const prev = articles[idx - 1] || null
  const next = articles[idx + 1] || null

  return (
    <main className="max-w-[680px] mx-auto px-6 md:px-8 pt-28 pb-20">

      {/* Back */}
      <Link to="/writing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-400 hover:text-stone-700 hover:bg-stone-100 px-3 py-1.5 rounded-lg transition-colors no-underline mb-10">
        ← All articles
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-[0.72rem] font-medium text-stone-400 tracking-wide mb-4">
          <span>{article.date}</span>
          <span className="text-stone-300">·</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-normal tracking-tight leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-base text-stone-400 italic leading-relaxed mb-4">{article.preview}</p>
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map(t => (
            <span key={t} className="text-[0.68rem] font-medium text-stone-500 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-md">{t}</span>
          ))}
        </div>
      </header>

      <hr className="border-stone-200 mb-8" />

      {/* Body */}
      <article>
        {article.body.map((block, i) => <Block key={i} block={block} />)}
      </article>

      <hr className="border-stone-200 mt-10 mb-8" />

      {/* Prev / Next */}
      <nav className="grid grid-cols-2 gap-3 mb-12">
        {prev ? (
          <Link to={`/writing/${prev.slug}`}
            className="flex flex-col gap-1 bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-300 hover:bg-stone-50/60 transition-all no-underline text-stone-900">
            <span className="text-[0.68rem] font-semibold tracking-widest uppercase text-stone-400">← Previous</span>
            <span className="font-[family-name:var(--font-display)] text-base font-normal leading-snug">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/writing/${next.slug}`}
            className="flex flex-col gap-1 items-end text-right bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-300 hover:bg-stone-50/60 transition-all no-underline text-stone-900">
            <span className="text-[0.68rem] font-semibold tracking-widest uppercase text-stone-400">Next →</span>
            <span className="font-[family-name:var(--font-display)] text-base font-normal leading-snug">{next.title}</span>
          </Link>
        ) : <div />}
      </nav>

      {/* CTA */}
      <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center shadow-sm">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-normal tracking-tight mb-2">Like what you read?</h3>
        <p className="text-sm text-stone-400 mb-5">I'm currently open to front-end dev and UX/UI roles. Let's chat.</p>
        <a href="mailto:abikilborn@gmail.com"
          className="inline-flex items-center gap-1.5 bg-stone-900 text-stone-50 text-sm font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity no-underline">
          Get in touch →
        </a>
      </div>

    </main>
  )
}
