import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import myResume from '../assets/pdfs/Abigail_Kilborn_Resume.pdf'

const links = [
  { label: 'Experience', hash: '#work' },
  { label: 'Projects', hash: '#projects' },
  { label: 'About', hash: '#about' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abigail-kilborn-8170521ab/' },
  { label: 'GitHub', href: 'https://github.com/abikilborn' },
]

// Plain anchors on the home page, router links to /#section everywhere else
function SectionLink({ hash, isHome, className, onClick, children }) {
  return isHome
    ? <a href={hash} className={className} onClick={onClick}>{children}</a>
    : <Link to={`/${hash}`} className={className} onClick={onClick}>{children}</Link>
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const menuBtn = useRef(null)
  const closeBtn = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close the drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Esc to close, lock page scroll, move focus in and back out
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const btn = menuBtn.current
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      btn?.focus()
    }
  }, [open])

  const close = () => setOpen(false)
  const navigate = useNavigate()

  // Drawer links wait for the scroll lock to lift before jumping
  const goTo = (e, hash) => {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => {
      if (isHome) {
        document.querySelector(hash)?.scrollIntoView()
        history.replaceState(null, '', hash)
      } else {
        navigate(`/${hash}`)
      }
    }, 20)
  }

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/85 backdrop-blur-md border-b border-stone-200' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-[1100px] mx-auto h-16 px-6 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline text-stone-900">
            <span className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-[0.72rem] font-bold tracking-tight">AK</span>
            <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold tracking-tight">Abi Kilborn</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <SectionLink key={l.hash} hash={l.hash} isHome={isHome} className="text-[0.85rem] font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 px-3 py-1.5 rounded-md transition-colors no-underline">
                {l.label}
              </SectionLink>
            ))}
            <a href="mailto:abikilborn@gmail.com" className="ml-3 bg-stone-900 text-stone-50 text-[0.85rem] font-semibold px-4 py-2 rounded-xl hover:opacity-85 transition-opacity no-underline">
              Let's talk →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuBtn}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden -mr-2 w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-stone-100 transition-colors"
          >
            <span className="w-5 h-[2px] rounded-full bg-stone-900" />
            <span className="w-5 h-[2px] rounded-full bg-stone-900" />
            <span className="w-3.5 h-[2px] rounded-full bg-stone-900 self-end mr-2.5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed inset-0 z-[70] ${open ? '' : 'pointer-events-none'}`} inert={open ? undefined : ''}>
        <div
          onClick={close}
          className={`absolute inset-0 bg-stone-950/40 backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute top-0 right-0 h-full w-[84%] max-w-[360px] bg-stone-50 flex flex-col transition-[translate,box-shadow] duration-300 ease-out ${open ? 'translate-x-0 shadow-2xl' : 'translate-x-full shadow-none'}`}
        >
          <div className="h-16 px-6 flex items-center justify-between border-b border-stone-200">
            <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400">Menu</span>
            <button
              ref={closeBtn}
              onClick={close}
              aria-label="Close menu"
              className="-mr-2 w-10 h-10 flex items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors text-xl leading-none"
            >
              ✕
            </button>
          </div>

          <ul className="px-3 py-4">
            {!isHome && (
              <li>
                <Link to="/" onClick={close} className="block px-3 py-3 text-2xl font-semibold tracking-tight text-stone-900 no-underline rounded-lg hover:bg-stone-100">
                  Home
                </Link>
              </li>
            )}
            {links.map((l) => (
              <li key={l.hash}>
                <SectionLink hash={l.hash} isHome={isHome} onClick={(e) => goTo(e, l.hash)} className="flex items-center justify-between px-3 py-3 text-2xl font-semibold tracking-tight text-stone-900 no-underline rounded-lg hover:bg-stone-100">
                  {l.label}
                  <span className="text-base text-stone-300">→</span>
                </SectionLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto px-6 pb-8 space-y-3">
            <a href="mailto:abikilborn@gmail.com" className="block text-center bg-stone-900 text-stone-50 text-sm font-semibold py-3 rounded-xl hover:opacity-90 no-underline">
              Let's talk →
            </a>
            <div className="grid grid-cols-3 gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-center text-[0.75rem] font-semibold text-stone-700 bg-white border border-stone-200 py-2.5 rounded-lg hover:bg-stone-100 no-underline">
                  {s.label}
                </a>
              ))}
              <a href={myResume} download="Abigail_Kilborn_Resume.pdf" className="text-center text-[0.75rem] font-semibold text-stone-700 bg-white border border-stone-200 py-2.5 rounded-lg hover:bg-stone-100 no-underline">
                Resume
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
