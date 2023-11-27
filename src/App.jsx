import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import HomeNavbar from './components/HomeNavbar'
import OurStory from './pages/OurStory'
import Footer2 from './components/Footer2'
import Investor from './pages/Investor'
import OurProducts from './pages/OurProducts'
import Brands from './pages/Brands'
import Blog from './pages/Blog'

import CSRFramework from './pages/CSRFramework'
import Infrastructure from './pages/Infrastructure'

const App = () => {
  return (
    <div className='bg-primary-bg text-secondary font-arya overflow-x-hidden box-border'>
      <BrowserRouter>
        {/* <HomeNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/investor' element={<Investor />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/csr-framework' element={<CSRFramework />} />
          <Route path='/infrastructure' element={<Infrastructure />} />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
        <Footer2 />
      </BrowserRouter>
    </div>
  )
}

export default App