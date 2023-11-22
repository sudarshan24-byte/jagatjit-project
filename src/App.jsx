import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import HomeNavbar from './components/HomeNavbar'
import OurStory from './pages/OurStory'
import Footer2 from './components/Footer2'

const App = () => {
  return (
    <div className='bg-primary-bg text-secondary font-arya overflow-x-hidden box-border'>
      <BrowserRouter>
        {/* <HomeNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
        <Footer2 />
      </BrowserRouter>
    </div>
  )
}

export default App