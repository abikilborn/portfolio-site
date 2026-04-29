import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
      <Link to="/" className="font-[family-name:var(--font-display)] text-stone-400 no-underline text-base">
        Abi <span className=" text-blue-600">Kilborn</span>
      </Link>
      <p className="text-xs text-stone-400">Front-End Developer & UX/UI Designer · Colorado</p>
      <p className="text-xs text-stone-400">© {new Date().getFullYear()}</p>
    </footer>
  )
}
