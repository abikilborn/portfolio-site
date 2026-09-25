import { useEffect, useState } from 'react'

// Full-size image overlay, closes on Esc or click
function Lightbox({ img, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog" aria-modal="true" aria-label={img.alt}
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-stone-950/85 backdrop-blur-sm overflow-y-auto cursor-zoom-out"
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors"
      >
        Close ✕
      </button>
      <img
        src={img.src} alt={img.alt}
        width={img.width} height={img.height}
        className="mx-auto my-12 w-auto max-w-[min(92vw,1600px)] h-auto rounded-lg shadow-2xl"
      />
    </div>
  )
}

// Image that opens the lightbox on click
function ZoomImg({ img }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="group/zoom relative block w-full cursor-zoom-in" aria-label={`Enlarge: ${img.alt}`}>
        <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" className="block w-full h-auto" />
        <span className="absolute bottom-3 right-3 text-[0.68rem] font-semibold text-white bg-stone-900/75 px-2 py-1 rounded-md opacity-0 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100 transition-opacity">
          Click to enlarge
        </span>
      </button>
      {open && <Lightbox img={img} onClose={() => setOpen(false)} />}
    </>
  )
}

// Numbered markers over a screenshot; x/y are percentages of the image
const pinTone = {
  before: 'bg-red-500 text-white ring-red-500/25',
  after: 'bg-brand-600 text-white ring-brand-600/25',
}

export function Pins({ pins, tone = 'after' }) {
  return pins.map((p, i) => (
    <span
      key={i}
      aria-hidden="true"
      style={{ left: `${p.x}%`, top: `${p.y}%` }}
      className={`pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[0.7rem] sm:text-xs font-bold shadow-lg ring-4 ${pinTone[tone]}`}
    >
      {i + 1}
    </span>
  ))
}

export function BrowserFrame({ img, pins, tone, className = '' }) {
  return (
    <figure className={`bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm ${className}`}>
      <div className="bg-stone-100 border-b border-stone-200 px-3 py-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-stone-300" />
        <span className="w-2 h-2 rounded-full bg-stone-300" />
        <span className="w-2 h-2 rounded-full bg-stone-300" />
        <div className="flex-1 h-4 bg-white border border-stone-200 rounded mx-2 px-2 text-[0.6rem] leading-[0.9rem] text-stone-400 truncate">
          {img.url}
        </div>
      </div>
      <div className="relative">
        <ZoomImg img={img} />
        {pins && <Pins pins={pins} tone={tone} />}
      </div>
    </figure>
  )
}

// Components shown without browser chrome (modals, cards, nav).
// img.maxWidth sets the display width; it shrinks to fit when needed.
export function Shot({ img, className = '' }) {
  return (
    <figure className={`min-w-0 ${className}`} style={{ width: img.maxWidth, maxWidth: '100%' }}>
      <ZoomImg img={img} />
    </figure>
  )
}

// Phone frame: scrolls in place on desktop; on small screens it's a
// fixed preview that opens the full page, so it never fights page scroll
export function PhoneFrame({ img, className = '' }) {
  const [open, setOpen] = useState(false)
  return (
    <figure className={`bg-stone-900 rounded-[2.2rem] p-2 shadow-xl ${className}`}>
      <div className="relative h-[440px] sm:h-[500px] rounded-[1.7rem] overflow-hidden bg-white">
        <div
          tabIndex={0}
          aria-label={`${img.alt} (scrollable)`}
          className="h-full overflow-hidden lg:overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" className="block w-full h-auto" />
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label={`View full page: ${img.alt}`}
          className="lg:hidden absolute inset-0 flex items-end justify-center pb-5 bg-linear-to-t from-white via-transparent to-transparent"
        >
          <span className="text-[0.75rem] font-semibold text-white bg-stone-900/85 px-3 py-1.5 rounded-full">View full page</span>
        </button>
      </div>
      {open && <Lightbox img={img} onClose={() => setOpen(false)} />}
    </figure>
  )
}

// Overlapping screenshots for cards and the case study hero.
// Pass `phone` for a mobile screen, or `overlay` for a floating component.
export function Collage({ back, front, phone, overlay, label, className = '' }) {
  const shot = 'absolute rounded-lg border border-stone-200/80 bg-white overflow-hidden'
  return (
    <div
      role="img" aria-label={label}
      className={`relative overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-brand-50 via-stone-50 to-stone-100 ${className}`}
    >
      <img src={back.src} alt="" loading="lazy" className={`${shot} left-[4%] top-[9%] w-[56%] shadow-md opacity-90 transition-transform duration-500 group-hover:-translate-y-1`} />
      <img src={front.src} alt="" loading="lazy" className={`${shot} right-[4%] top-[18%] w-[58%] !border-[1.5px] !border-stone-900 offset-shadow transition-transform duration-500 group-hover:-translate-y-2`} />
      {phone && (
        // Image is absolute so Safari can't stretch the phone to the screenshot's full height
        <div className="absolute left-[9%] top-[38%] w-[15%] aspect-[9/19] rounded-[14%/7%] border-[3px] sm:border-[5px] border-stone-900 bg-white overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-3">
          <img src={phone.src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
      )}
      {overlay && (
        <img src={overlay.src} alt="" loading="lazy" className="absolute left-[5%] bottom-[8%] w-[46%] drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-3" />
      )}
    </div>
  )
}
