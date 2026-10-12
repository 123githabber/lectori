import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import LecturersPage from './components/LecturersPage.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  const goHomeSection = (id) => {
    if (page !== 'home') {
      setPage('home')
      setTimeout(() => scrollToSection(id), 50)
    } else {
      scrollToSection(id)
    }
  }

  const scrollToSection = (id) => {
    if (id === 'main') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        page={page}
        onOpenLectors={() => setPage('lectors')}
        onGoSection={goHomeSection}
      />
      <main>
        {page === 'home'
          ? <Home onFind={() => setPage('lectors')} />
          : <LecturersPage onGoSection={goHomeSection} />}
      </main>
      <Footer onGoSection={goHomeSection} onOpenLectors={() => setPage('lectors')} />
    </>
  )
}
