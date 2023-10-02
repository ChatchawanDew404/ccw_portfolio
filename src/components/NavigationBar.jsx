import React,{useState} from 'react'
import './Style/navigationbar.css'

// scroll navbar
import Scroll, { Link } from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

// import icons
import { RxHamburgerMenu } from 'react-icons/rx';

const NavigationBar = () => {
  const [activeNavbar,setActiveNavbar] = useState(false)
  const [burgerActive,setBurgerActive] = useState(false)

// Sticky Navbar
window.addEventListener('scroll',() =>{
  // stickyNavBar()
  if(window.scrollY >= 50){
     setActiveNavbar(true)
  }else{
    setActiveNavbar(false)
  }
  console.log(activeNavbar)
})



  return (
    <nav className={activeNavbar ? "nav_active": "nav"}>
        <div className="container">
            <div className="logo">CCW</div>

                <div className="burgerBar" onClick={() => setBurgerActive(!burgerActive)}><RxHamburgerMenu/></div>
                
            <ul className={burgerActive ? 'nav-box active' : 'nav-box' }>
           <li> <Link to="banner" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className='navLink'>Home</Link></li>
           <li>     <Link to="about" 
spy={true} 
smooth={true} 
duration={500} 
className='navLink'>About</Link></li>
<li><Link to="skill" 
spy={true} 
smooth={true} 
duration={500} 
className='navLink'>Skill</Link></li>

<li><Link to="project" 
spy={true} 
smooth={true} 
duration={500} 
className='navLink'>Project</Link></li>
<li><Link to="contact" 
spy={true} 
smooth={true} 
duration={500} 
className='navLink'>Contact</Link></li>
            </ul>

        </div>
    </nav>
  )
}

export default NavigationBar
