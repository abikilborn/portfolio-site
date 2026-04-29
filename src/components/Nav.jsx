import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 h-14 flex items-center justify-between px-6 md:px-8 bg-stone-50/85 backdrop-blur-md transition-all duration-300 ${scrolled ? 'border-b border-stone-200' : 'border-b border-transparent'}`}>
      <Link to="/" className="font-[family-name:var(--font-display)] text-lg text-stone-900 no-underline tracking-tight">
        Abi <span className=" text-blue-600">Kilborn</span>
      </Link>

      <div className="flex items-center gap-1">
        {isHome ? (
          <>
            <a href="#work"     className="text-[0.8rem] font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 px-3 py-1.5 rounded-md transition-colors no-underline">Experience</a>
            <a href="#projects" className="text-[0.8rem] font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 px-3 py-1.5 rounded-md transition-colors no-underline">Projects</a>
            <a href="#about"    className="text-[0.8rem] font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 px-3 py-1.5 rounded-md transition-colors no-underline">About</a>
          </>
        ) : (
          <Link to="/" className="text-[0.8rem] font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 px-3 py-1.5 rounded-md transition-colors no-underline">← Home</Link>
        )}
        {/* <Link
          to="/writing"
          className={`text-[0.8rem] font-medium px-3 py-1.5 rounded-md transition-colors no-underline ${pathname.startsWith('/writing') ? 'text-stone-900 bg-stone-100' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'}`}
        >
          Writing
        </Link> */}
        <a
          href="mailto:abikilborn@gmail.com"
          className="ml-2 bg-stone-900 text-stone-50 text-[0.8rem] font-semibold px-4 py-1.5 rounded-md hover:opacity-85 transition-opacity no-underline"
        >
          Let's talk →
        </a>
      </div>
    </nav>
  )
}
