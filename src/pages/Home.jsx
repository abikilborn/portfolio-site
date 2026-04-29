import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import WritingPreview from '../components/WritingPreview'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      {/* <WritingPreview /> */}
      <About />
    </>
  )
}
