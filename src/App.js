import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getStatusLoadingAll } from './state/selectors'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
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
