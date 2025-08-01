import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useContext } from 'react'

// Pages and Components
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import LoadingSpinnerGif from './Componentes/LoadingSpinner/LoadingSpinner'

// Utils
import ScrollToTop from './Utils/ScrollTop'
import { AppContext } from './Contexts/AppContext'

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading) {
    return <LoadingSpinnerGif />
  }
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
