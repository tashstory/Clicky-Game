import React from 'react'
import "./index.css"



  const Nav = props => (
      <div className="navbar">
      <nav>
        <div className="nav-wrapper ">
          <span>{props.correct}</span>

          <ul className="">
            <li className="score"><span>Score: {props.score}</span></li>
            <li className="score"><span>High Score: {props.highScore}</span></li>
          </ul>
        </div>
      </nav>
    </div>
  )

  export default Nav;
