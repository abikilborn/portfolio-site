import useReveal from '../hooks/useReveal'

function Mockup() {
  const steps = [
    { n: 1, label: 'Basic Information', active: true },
    { n: 2, label: 'Account Type', active: false },
    { n: 3, label: 'Business Information', active: false },
    { n: 4, label: 'Review', active: false },
  ]

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden aspect-[4/3] flex flex-col select-none">

      {/* Browser chrome */}
      <div className="bg-stone-100 border-b border-stone-200 px-3 py-2 flex items-center gap-1.5 shrink-0">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <div className="flex-1 h-3.5 bg-white border border-stone-200 rounded mx-2" />
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-hidden flex flex-col px-6 pt-4 pb-3 gap-3">

        {/* Heading */}
        <div className="text-center shrink-0">
          <div className="text-[0.7rem] font-bold text-stone-800 leading-tight">Sign Up</div>
          <div className="text-[0.5rem] text-stone-400 mt-0.5">
            or <span className="text-blue-500">sign in to your account</span>
          </div>
        </div>

        {/* 4-step progress bar */}
        <div className="flex items-center justify-between shrink-0 px-1">
          {steps.map((step, i) => (
            <div key={step.n} className="flex items-center gap-0">
              {/* Step pill */}
              <div className="flex items-center gap-1">
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[0.42rem] font-bold shrink-0 ${step.active ? 'bg-blue-600 text-white' : 'bg-stone-200 text-stone-500'}`}>
                  {step.n}
                </div>
                <span className={`text-[0.42rem] font-semibold whitespace-nowrap ${step.active ? 'text-blue-600' : 'text-stone-400'}`}>
                  {step.label}
                </span>
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="w-10 h-px bg-stone-100 mx-1 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="w-full flex flex-col items-center">
          <div className="border border-stone-100 rounded-lg px-2.5 py-2 flex flex-col gap-1.5 bg-white">
            {['Email Address', 'First Name', 'Last Name', 'Organization/Company Name'].map((label) => (
              <div key={label} className="flex flex-col gap-0.5">
                <div className="text-[0.42rem] font-semibold text-stone-700">
                  {label}<span className="text-red-500 ml-0.5">*</span>
                </div>
                <div className="h-5 bg-white border border-stone-100 rounded" />
              </div>
            ))}

            {/* Region dropdown */}
            <div className="flex flex-col gap-0.5">
              <div className="text-[0.42rem] font-semibold text-stone-700">
                Region<span className="text-red-500 ml-0.5">*</span>
              </div>
              <div className="h-5 bg-white border border-stone-100 rounded flex items-center justify-between px-1">
                <span className="text-[0.38rem] text-stone-600">United States of America</span>
                <svg className="w-1.5 h-1.5 text-stone-400 shrink-0" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 2.5L4 5L6.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Legal text */}
            <p className="text-[0.36rem] py-1 text-stone-400 leading-tight">
              By registering, you agree to our{' '}
              <span className="text-blue-500">Terms of Use</span>
              {' '}and{' '}
              <span className="text-blue-500">Privacy Policy</span>.
            </p>

            {/* Continue button */}
            <div className="h-5 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-[0.42rem] font-semibold text-white tracking-wide">Continue</span>
            </div>
        </div>
        </div>

      </div>
    </div>
  )
}

function Tag({ children }) {
  return <span className="text-[0.68rem] font-medium text-stone-500 bg-stone-100 border border-stone-200 px-2.5 py-0.5 rounded-md">{children}</span>
}

export default function Projects() {
  const h = useReveal()
  const g = useReveal(80)

  return (
    <div id="projects" className="max-w-[1100px] mx-auto px-6 md:px-8 py-20">

      <div ref={h} className="reveal mb-10">
        <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-stone-400 mb-1.5">Projects</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-blue-600">work</span>
        </h2>
        <p className="text-stone-500 text-[0.95rem] mt-2 max-w-md leading-relaxed">
          Real problems + real solutions: Solved with design and development.
        </p>
      </div>

      <div ref={g} className="reveal border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-200">

        {/* Featured: Onboarding */}
        <a
          href="https://www.figma.com/design/ry9e7d0zogiZcHjplgxPRj/Onboarding?node-id=1-166&t=2joHAstLlf3SJhAG-1"
          target="_blank" rel="noreferrer"
          className="group grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white hover:bg-stone-50/60 transition-colors no-underline text-stone-900"
        >
          <div className="flex flex-col">
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              UX/UI Design + Development
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight mb-4">
              Onboarding Feature Creation
            </h3>
            <div className="mb-3">
              <p className="text-[0.68rem] font-bold tracking-[0.06em] uppercase text-red-500 mb-1">The Problem</p>
              <p className="text-sm text-stone-500 leading-relaxed">The onboarding flow was <span className="text-stone-700 font-semibold">manual, error-prone, and high-friction</span>, which was a huge time consumer for client services, and forced users to wait to get started.</p>
            </div>
            <div className="mb-4">
              <p className="text-[0.68rem] font-bold tracking-[0.06em] uppercase text-blue-600 mb-1">The Solution</p>
              <p className="text-sm text-stone-500 leading-relaxed">Collaborated early with client services, identified only necessary fields, and minimized steps to create a <span className="text-stone-700 font-semibold">brand new streamlined automated experience</span>. Taken from Figma and built in production.</p>
            </div>
            <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-xl p-3.5 mb-4 text-sm text-blue-700 leading-relaxed">
              <span className="shrink-0 mt-0.5">✦</span>
              Transformed a completely manual process into a guided, self-serve experience. Resulted in reducing onboarding time and support load significantly.
            </div>
            <span className="text-[0.8rem] font-semibold text-blue-600 mt-auto group-hover:gap-2 flex items-center gap-1 transition-all">
              View in Figma →
            </span>
          </div>
          <Mockup />
        </a>

        {/* Bottom row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">

          <a
            href="https://www.figma.com/design/2TUDe17OoSVTzrMu4svZUD/Restructuring-Complex-Forms-for-Better-Usability?node-id=0-1&t=2joHAstLlf3SJhAG-1"
            target="_blank" rel="noreferrer"
            className="group flex flex-col p-8 bg-white hover:bg-stone-50/60 transition-colors no-underline text-stone-900"
          >
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              UX/UI Design + Development
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight mb-4">Complex Form Redesign</h3>
            <div className="mb-3">
              <p className="text-[0.68rem] font-bold tracking-[0.06em] uppercase text-red-500 mb-1">The Problem</p>
              <p className="text-sm text-stone-500 leading-relaxed">Two outdated forms were generating <span className="text-stone-700 font-semibold">user confusion and a ton of support tickets</span>. The UX was fighting users instead of helping them.</p>
            </div>
            <div className="mb-4">
              <p className="text-[0.68rem] font-bold tracking-[0.06em] uppercase text-blue-600 mb-1">The Solution</p>
              <p className="text-sm text-stone-500 leading-relaxed">Rebuilt the form completely with <span className="text-stone-700 font-semibold">modernized visualsand and re-grouped fields</span>, which measurably reduced friction and reduced the number of support tickets.</p>
            </div>
            <span className="text-[0.8rem] font-semibold text-blue-600 flex items-center gap-1">View in Figma →</span>
          </a>

          <a
            href="https://kilborncreative.com/"
            target="_blank" rel="noreferrer"
            className="group flex flex-col p-8 bg-white hover:bg-stone-50/60 transition-colors no-underline text-stone-900"
          >
            <p className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.08em] uppercase text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              Frontend Dev · Side Project
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight mb-3">Kilborn Creative</h3>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">
              Personal brand site for my freelance work — <span className="text-stone-700 font-semibold">graphics, merch, websites, and media for local churches</span>. Built end-to-end in React.
            </p>
            <span className="text-[0.8rem] font-semibold text-blue-600 flex items-center gap-1">Visit site →</span>
          </a>

        </div>
      </div>
    </div>
  )
}
