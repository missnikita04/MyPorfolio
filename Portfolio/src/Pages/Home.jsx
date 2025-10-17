import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home
