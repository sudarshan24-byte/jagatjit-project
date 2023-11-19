import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import HomeNavbar from './components/HomeNavbar'
import OurStory from './pages/OurStory'

const App = () => {
  return (
    <div className='text-secondary font-arya'>
      <BrowserRouter>
        {/* <HomeNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App