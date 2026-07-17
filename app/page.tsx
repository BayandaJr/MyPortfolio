import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Education } from '@/components/portfolio/education'
import { Certifications } from '@/components/portfolio/certifications'
import { Projects } from '@/components/portfolio/projects'
import { Achievements } from '@/components/portfolio/achievements'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { BackToTop } from '@/components/portfolio/back-to-top'
import { Preloader } from '@/components/portfolio/preloader'

export default function Page() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
