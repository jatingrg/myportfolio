import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Statics from './Pages/Statics'
import Project from './Pages/Project'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/statistcs" element={<Statics />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
