import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutPizza from './AboutPizza'
import PizzaTypes from './PizzaTypes'
import Footer from './Footer'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutPizza />
      <PizzaTypes/>
      <Footer />
    </div>
  )
}

export default App
