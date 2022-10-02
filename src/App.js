import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from  './pages/Detail'
import './css/styles.scss'

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Detail />} />
      </Routes>

  )
}

export default App
