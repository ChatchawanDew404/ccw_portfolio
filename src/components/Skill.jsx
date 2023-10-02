import React from 'react'
import './Style/skill.css'




function Skill() {
  return (
    <section className="skill">
      <div className="container">
        <div className="heading"><h2>MY <span className="colorTx">SKILL</span></h2></div>

        <div className="row">
          <div className="col"><img src="/public/images/icons8-html-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-css-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-javascript-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-react-native-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-nodejs-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-sql-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-mysql-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-mongodb-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-figma-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-python-48.png" alt="" /></div>
          <div className="col"><img src="/public/images/icons8-java-48.png" alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default Skill