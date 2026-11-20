import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Process from './sections/Process'
import WhyChooseMe from './sections/WhyChooseMe'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero /><About /><Skills /><Projects /><Services /><Process /><WhyChooseMe /><FAQ /><Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
