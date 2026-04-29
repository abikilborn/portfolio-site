const SKILLS = ['Vue 3','Nuxt','React','TailwindCSS','JavaScript','Figma','UX Research','Pinia / Vuex','Cypress','Storybook','RESTful APIs','Adobe CC','Agile','CSS / SCSS','Component Design']
const DOUBLED = [...SKILLS, ...SKILLS]

export default function Hero() {
  return (
    <>
      <section className="max-w-[1100px] mx-auto px-6 md:px-8 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">

        {/* Left */}
        <div>

          <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-[5.25rem] tracking-tight font-bold mb-6">
            I build things<br />
            <em className="italic text-blue-600">people love</em><br />
            to use.
          </h1>

          <p className="animate-rise-3 text-[1.05rem] text-stone-500 max-w-[480px] leading-relaxed mb-9">
            Hey, I'm <span className="text-stone-900 font-semibold">Abi Kilborn</span> 👋 I'm a front-end developer & UX/UI designer with{' '}
            <span className="text-stone-900 font-semibold">6 years</span> of building products from pixel to production. Based in Colorado, working everywhere.
          </p>

          <div className="animate-rise-4 flex items-center gap-3">
            <a
              href="mailto:abikilborn@gmail.com"
              className="inline-flex items-center gap-1.5 bg-stone-900 text-stone-50 text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:opacity-90 hover:-translate-y-px transition-all no-underline"
            >
              Let's talk →
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 bg-white text-stone-900 text-sm font-medium px-5 py-2.5 rounded-lg border border-stone-300 shadow-xs hover:bg-stone-50 hover:-translate-y-px transition-all no-underline"
            >
              View my work
            </a>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="animate-rise-5 flex flex-row lg:flex-col gap-2 lg:items-end">
          {[
            { num: '6 yrs',       label: 'Professional experience' },
            { num: 'Dev + Design', label: 'Both, fluently',         italic: true },
            { num: 'Vue · React', label: 'Primary frameworks' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-stone-200 rounded-xl px-5 py-4 lg:text-right lg:min-w-[200px] flex-1 lg:flex-none shadow-xs hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="font-[family-name:var(--font-display)] text-[1.9rem] leading-none tracking-tight text-stone-900">
                {s.italic
                  ? <>Dev <em className="italic text-blue-600">+</em> Design</>
                  : s.num}
              </div>
              <div className="text-[0.72rem] font-medium text-stone-400 tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills marquee */}
      <div className="border-y border-stone-200 bg-white overflow-hidden py-2.5">
        <div className="animate-marquee flex w-max gap-0">
          {DOUBLED.map((s, i) => (
            <span key={i} className="text-[0.72rem] font-medium tracking-wide text-stone-400 px-7 border-r border-stone-200 whitespace-nowrap leading-none">
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
