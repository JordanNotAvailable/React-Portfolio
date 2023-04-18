import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.scss'
<meta name="Permissions-Policy" content="interest-cohort=()" />

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/React-Portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
