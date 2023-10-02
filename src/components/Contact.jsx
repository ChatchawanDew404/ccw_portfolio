import React from 'react'
import './Style/contact.css'

function Contact() {
  return (
    <>
    <footer className="contact">
      <div className="container">
      <div className="heading"><h2>Contact <span className="colorTx">Me</span></h2></div>
   
   <form action="">
    <div className="inputBx">
      <input type="text" placeholder='Enter your name'/>
      <input type="text" placeholder='Enter your email'/>
      <input type="text" placeholder='Enter your Subject'/>
    </div>

    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
   <button>Send Message</button>
   </form>
   
     </div>
    </footer>

    <div className="credit">
      <p>CopyRight ©  by Chatchawan Ngernthaworn </p>
    </div>
    </>
  )
}

export default Contact