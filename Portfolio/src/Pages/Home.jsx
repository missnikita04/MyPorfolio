import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify";


function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact />
       <ToastContainer
        position="top-center"
        autoClose={2000} // disappears after 2s
        hideProgressBar={false}
        pauseOnHover={false}
        draggable
        theme="colored"
      />
      <Footer/>
    </div>
  )
}

export default Home
