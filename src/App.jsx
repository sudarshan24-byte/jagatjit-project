import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-primary-bg text-secondary font-arya'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App