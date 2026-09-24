import { Link } from "react-router-dom";
import heroShot from "../assets/imgs/events/registration-after.webp";

const SKILLS = [
  "Vue 3",
  "Nuxt",
  "React",
  "TailwindCSS",
  "JavaScript",
  "Figma",
  "UX Research",
  "Pinia / Vuex",
  "Cypress",
  "Storybook",
  "RESTful APIs",
  "Adobe CC",
  "Agile",
  "CSS / SCSS",
  "Component Design",
];
const DOUBLED = [...SKILLS, ...SKILLS];

const stats = [
  { value: "6 yrs", label: "shipping products" },
  { value: "Dev + Design", label: "both, fluently" },
  { value: "Vue · React", label: "primary frameworks" },
];

// Real screen with a case study tag, and the Vue component that builds it
function DesignToCode() {
  return (
    <Link
      to="/work/event-setup-redesign"
      className="group relative block no-underline pb-12 sm:pb-14"
      aria-label="Read the event form case study"
    >
      <span className="absolute -top-5 left-4 z-10 inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-brand-700 bg-brand-100 rounded-full px-3 py-1">
        Case study <span aria-hidden="true">→</span> Event form redesign
      </span>
      <div className="rounded-2xl overflow-hidden border-[1.5px] border-stone-900 bg-white offset-shadow aspect-[16/11]">
        <img
          src={heroShot}
          alt="The redesigned event registration page"
          width={1920}
          height={1731}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      <pre className="absolute bottom-0 -left-2 sm:-left-8 w-[78%] sm:w-[62%] bg-stone-900 text-stone-300 rounded-xl p-4 text-[0.68rem] sm:text-[0.72rem] leading-relaxed font-mono shadow-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
        <span className="text-stone-500">{"<!-- RegisterPage.vue -->"}</span>
        {"\n"}
        <span className="text-brand-200">{"<RegistrationCard"}</span>
        {"\n"}
        {"  "}
        <span className="text-violet-300">:event</span>=
        <span className="text-amber-200">"event"</span>
        {"\n"}
        {"  "}
        <span className="text-violet-300">:fields</span>=
        <span className="text-amber-200">"fields"</span>
        {"\n"}
        {"  "}
        <span className="text-violet-300">@submit</span>=
        <span className="text-amber-200">"register"</span>
        {"\n"}
        <span className="text-brand-200">{"/>"}</span>
      </pre>
    </Link>
  );
}

export default function Hero() {
  return (
    <>
      <section className="max-w-[1100px] mx-auto px-6 md:px-8 pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 items-center">
          <div>
            <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-[2.6rem] sm:text-6xl lg:text-[3.6rem] leading-[1.04] tracking-tight font-bold mb-6">
              Making complex products <span className="hl text-brand-600">feel simple.</span>
            </h1>

            <p className="animate-rise-3 text-[1.05rem] text-stone-500 max-w-[470px] leading-relaxed mb-8">
              Hey, I'm{" "}
              <span className="text-stone-900 font-semibold">Abi Kilborn</span>{" "}
              👋 A front-end developer and UX/UI designer who takes products
              from Figma all the way to production. Based in Colorado, working
              everywhere.
            </p>

            <div className="animate-rise-4 flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-600 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm hover:bg-brand-700 hover:-translate-y-px transition-all no-underline"
              >
                See my work ↓
              </a>
              <a
                href="mailto:abikilborn@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white text-stone-900 text-sm font-semibold px-6 py-3 rounded-xl border border-stone-300 shadow-xs hover:bg-stone-50 hover:-translate-y-px transition-all no-underline"
              >
                Let's talk →
              </a>
            </div>

            <dl className="animate-rise-5 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6 max-w-[470px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-[0.95rem] sm:text-base font-semibold text-stone-900 tracking-tight leading-tight">
                    {s.value}
                  </dd>
                  <dd
                    aria-hidden="true"
                    className="text-[0.72rem] text-stone-400 mt-0.5"
                  >
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise-5 px-2 sm:px-8 lg:px-0">
            <DesignToCode />
          </div>
        </div>
      </section>

      {/* Skills marquee */}
      <div className="border-y border-stone-200 bg-white overflow-hidden py-2.5">
        <div className="animate-marquee flex w-max gap-0">
          {DOUBLED.map((s, i) => (
            <span
              key={i}
              className="text-[0.72rem] font-medium tracking-wide text-stone-400 px-7 border-r border-stone-200 whitespace-nowrap leading-none"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
