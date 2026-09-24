import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Process from '../components/Process'
import WritingPreview from '../components/WritingPreview'
import About from '../components/About'

export default function Home() {
  const { hash } = useLocation()

  // Router links like /#projects don't scroll on their own
  useEffect(() => {
    if (!hash) return
    requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
  }, [hash])

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Process />
      {/* <WritingPreview /> */}
      <About />
    </>
  )
}
