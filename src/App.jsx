import React from 'react'
import Header from './Component/Header/Navbar'
import Hero from './Component/Hero/Hero';
import Skills from './Component/Skill/Skills';
import About from './Component/About/About';
import Works from './Component/Project/Project';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Skills/>
      <About/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
