import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import PageMeta from './components/PageMeta'
import SiteNav from './components/SiteNav'
import About from './pages/About'
import Home from './pages/Home'
import PatchNotes from './pages/PatchNotes'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="app-shell">
      <PageMeta />
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/patch-notes" element={<PatchNotes />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}
