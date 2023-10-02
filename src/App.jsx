import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'

// import particle
import Particles from "react-particles";

// import all component
import Banner from './components/Banner'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'



function App() {
  return (
    <>
    <NavigationBar/>
    <Banner/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App
