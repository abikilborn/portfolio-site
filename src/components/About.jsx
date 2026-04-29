import useReveal from '../hooks/useReveal'
import myResume from '../assets/pdfs/Abigail_Kilborn_Resume.pdf'

export default function About() {
  const h = useReveal()
  const g = useReveal(80)

  return (
    <div className="bg-white border-y border-stone-200">
      <div id="about" className="max-w-[1100px] mx-auto px-6 md:px-8 py-20">
      <div className="mb-10">
        <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-1.5">About</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
          We'd make a <span className="text-blue-600">great team</span>!
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

        {/* Left: bio */}
        <div ref={h} className="reveal space-y-4">
          {[
            `I'm Abi: A front-end developer and UX/UI designer based in Colorado. I got my BS in Computer Science from Western Oregon University in 2020 and jumped straight into a startup where I discovered you could do both design and dev in the same job, and that's been my path ever since!`,
            `What makes me different? I don't just hand off Figma files, but I build what I design. That feedback loop between design decisions and code reality shapes how I think about both.`,
            `When I'm not working I am either scrapbooking, reading a book, or spending time with my baby and husband!`,
          ].map((p, i) => (
            <p key={i} className="text-[0.93rem] text-stone-500 leading-[1.75]">{p}</p>
          ))}
        </div>

        {/* Right: contact card */}
        <div ref={g} className="reveal">
          <div className="bg-white border border-stone-200 rounded-2xl p-7 shadow-sm sticky top-20">
            <a href="mailto:abikilborn@gmail.com"
              className="block text-center text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-xl py-3 mb-3 hover:bg-blue-100 hover:-translate-y-px transition-all no-underline">
              abikilborn@gmail.com
            </a>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abigail-kilborn-8170521ab/' },
                { label: 'GitHub',   href: 'https://github.com/abikilborn' },
              ].map(b => (
                <a key={b.label} href={b.href} target="_blank" rel="noreferrer"
                  className="text-center text-[0.75rem] font-semibold text-stone-700 bg-white border border-stone-200 py-2.5 rounded-lg hover:bg-stone-50 transition-colors no-underline">
                  {b.label}
                </a>
              ))}
            </div>

            <a href={myResume} download
              className="flex items-center justify-center gap-1.5 w-full text-[0.75rem] font-semibold text-stone-700 bg-white border border-stone-200 py-2.5 rounded-lg hover:bg-stone-50 transition-colors no-underline">
              ↓ Download Resume
            </a>

            <hr className="border-stone-100 my-5" />
            <p className="text-center text-[0.7rem] text-stone-400">BS Computer Science · Western Oregon University, 2020</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
