import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./components/pages/MainPage"
// import About from "./components/pages/About"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  )
}
