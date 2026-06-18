import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import initScrollReveal from './scrollReveal'
import './App.css'

function App() {

  useEffect(() => {
    initScrollReveal()
    window.scrollTo(0, 0)
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname)
    }
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
