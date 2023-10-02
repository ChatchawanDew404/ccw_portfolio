import React,{ useCallback } from 'react'
import './Style/banner.css'
// import navigation scroll
import { Element } from 'react-scroll'


import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import {loadFull} from "tsparticles"
// import typing text
import { Typewriter } from 'react-simple-typewriter'


function Banner() {
// text animation 
    let animationText =     <Typewriter
    words={['Chatchawan', 'Web Developer', 'Frontend Dev', 'Backend Dev']}
    loop={Infinity}
    cursor
    cursorStyle='|'
    typeSpeed={100}
    deleteSpeed={100}
    delaySpeed={2000}
  />

  // particle animation
   const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
<>
<Element className="banner" id="banner" name="banner">
<Particles
        className="particle_bg"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",

                distance: 400,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ed6868",
            },
            links: {
              color: "#ed6868",
              distance: 150,
              enable: true,
              opacity: .9,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />

    <div className="container">
        <div className="content">
            <p className="greet-text">HELLO!</p>
            <h1 className='title'>I Am {animationText}</h1>
            <p className='description'>I am a Web Developer with more than 1 year of experience. My expertise is in creating and designing websites, designing systems, and much more...</p>

            <div className="btnBx">
                <button>My Project</button>
                <button>Hire Me</button>
            </div>
        </div>
    </div>


</Element>
</>
  )
}

export default Banner