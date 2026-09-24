import useReveal from '../hooks/useReveal'

const design = [
  { title: 'Start with the people closest to users', text: 'I work with customer support and account reps to learn what users actually struggle with, what they care about and what they ignore.' },
  { title: 'Map the flow before the screens', text: 'User flows come first, built around how the audience thinks about the task, not how the database is shaped.' },
  { title: 'Design with the build in mind', text: 'In Figma I design real components, states and mobile layouts, so nothing gets reinvented during development.' },
  { title: 'Review early, with both sides', text: 'Designs go back to support and engineering before build, so feedback lands while it’s still cheap to change.' },
]

const development = [
  { title: 'Plan the structure while designing', text: 'By the time a design is done, I already know which components, props and data it needs.' },
  { title: 'Build on shared components', text: 'Reusable components and shared partials instead of one-off markup, so new features stay consistent and the codebase gets smaller, not bigger.' },
  { title: 'Ship it solid', text: 'Consistent validation, accessible markup, responsive layouts and end-to-end tests with Cypress.' },
  { title: 'Keep the codebase healthy', text: 'I review code, mentor developers on UI standards and remove what’s no longer needed, like old parallel flows.' },
]

function Column({ label, icon, steps, dark }) {
  return (
    <div className={`rounded-2xl p-6 md:p-8 border ${dark ? 'bg-stone-900 border-stone-900' : 'bg-white border-stone-200'}`}>
      <p className={`flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-6 ${dark ? 'text-brand-200' : 'text-brand-600'}`}>
        <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${dark ? 'bg-stone-800 font-mono text-[0.65rem]' : 'bg-brand-50 text-[0.85rem]'}`}>{icon}</span>
        {label}
      </p>
      <ol className="space-y-5">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span className={`shrink-0 text-[0.75rem] font-mono font-semibold pt-0.5 ${dark ? 'text-stone-500' : 'text-stone-400'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className={`text-[0.95rem] font-semibold mb-1 ${dark ? 'text-stone-50' : 'text-stone-900'}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed ${dark ? 'text-stone-400' : 'text-stone-500'}`}>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Process() {
  const h = useReveal()
  const g = useReveal(80)

  return (
    <div id="process" className="max-w-[1100px] mx-auto px-6 md:px-8">
      <div className="border-t border-stone-200 py-20">
        <div ref={h} className="reveal mb-10">
          <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-1.5">Process</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
            How I <span className="hl text-brand-600">work</span>
          </h2>
          <p className="text-stone-500 text-[0.95rem] mt-2 max-w-lg leading-relaxed">
            No handoff in the middle: the same person goes from the first support conversation to the shipped component.
          </p>
        </div>

        <div ref={g} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Column label="Design" icon="✎" steps={design} />
          <Column label="Development" icon="</>" steps={development} dark />
        </div>
      </div>
    </div>
  )
}
