import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home_Page from './pages'
import './index.css'
import WhatsAppFloat from './components/whatsapp'

function App() {

  return (
      <Router>
        <WhatsAppFloat />
        <Routes>
          <Route path="/" element={<Home_Page />}></Route>
        </Routes>
      </Router>
  )
}

export default App
