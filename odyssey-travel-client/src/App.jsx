import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/public/LandingPage/LandingPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='login' element={<LandingPage />} />
      <Route path='register' element={<LandingPage />} />
    </Routes>
  )
}

export default App
