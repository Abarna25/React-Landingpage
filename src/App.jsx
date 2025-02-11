import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contacts from './components/Contacts'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}
