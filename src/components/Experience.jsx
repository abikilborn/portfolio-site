import useReveal from '../hooks/useReveal'

const JOBS = [
  {
    dates: '2023 – Present', current: true,
    role: 'Front-End Developer & UX/UI Designer',
    company: 'Campaign Nucleus',
    desc: 'Building and designing features for a political tech platform. Responsibilities span <strong class="text-stone-900 font-semibold">frontend development</strong>, <strong class="text-stone-900 font-semibold">UX/UI design in Figma</strong>, and full-cycle delivery from concept through production. Part of a fast-moving team where I owned both design and implementation.',
    tags: ['Vue 2 + 3', 'Figma', 'TailwindCSS', 'Storybook', 'Cypress', 'Javascript', 'Code Reviews', 'RESTful APIs'],
  },
  {
    dates: '2022 – 2023', current: false,
    role: 'Front-End Developer & UX/UI Designer',
    company: 'BackIt',
    desc: 'Joined an early-stage startup to build the product UI from the ground up. Worked across the full front-end while <strong class="text-stone-900 font-semibold">owning all design systems and user flows</strong>. Designing in the morning and building in the afternoon.',
    tags: ['Vue 2 + 3', 'Figma', 'TailwindCSS', 'Javascript', 'RESTful APIs'],
  },
  {
    dates: '2020 – 2022', current: false,
    role: 'Front-End Developer & UX/UI Designer',
    company: 'Veedback',
    desc: 'First professional role! I developed core skills and discovered the power of doing both design and development. Contributed to a <strong class="text-stone-900 font-semibold">video feedback platform</strong> in Vue while growing into UX research and UI design responsibilities.',
    tags: ['Vue 2 + 3', 'Figma', 'TailwindCSS', 'Javascript', 'RESTful APIs'],
  },
]

export default function Experience() {
  const h = useReveal()
  const t = useReveal(80)
  return (
    <div id="work" className="bg-white border-y border-stone-200">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 py-20">

        {/* Header */}
        <div ref={h} className="reveal mb-10">
          <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-1.5">Experience</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
            Where I've <span className="text-blue-600">shipped</span>
          </h2>
          <p className="text-stone-500 text-[0.95rem] mt-2 max-w-md leading-relaxed">
            6 years across startups doing both development and design. Going from Figma all the way to production.
          </p>
        </div>

        {/* Table */}
        <div ref={t} className="reveal divide-y divide-stone-200">
          {JOBS.map((job) => (
            <div key={job.company} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-8">
              <div className="pt-0.5">
                <p className="text-[0.78rem] font-medium text-stone-400 tracking-wide">{job.dates}</p>
                {job.current && (
                  <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-[0.68rem] font-semibold border border-green-100 px-2 py-0.5 rounded-full mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink" />
                    Current
                  </div>
                )}
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-stone-400 mb-1">{job.role}</p>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight mb-3">{job.company}</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-lg" dangerouslySetInnerHTML={{ __html: job.desc }} />
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.tags.map(t => (
                    <span key={t} className="text-[0.68rem] font-medium text-stone-500 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
