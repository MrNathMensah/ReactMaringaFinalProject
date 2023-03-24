import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {


  return (
        <header>
         <div class="header-container">
            <div class="header-left">
             <a href="#">
        <img src="aiti.png" alt="AITI logo" class="logo"/>
      </a>
      
    </div>
    <nav class="header-right">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li><Link to="/classes">Classes</Link></li>
        <li>
          <Link to="/aboutpage">About</Link>
        </li>
      </ul>
    </nav>
    <div class="header-btns">
      <button class="add-project-btn">Add Project</button>
      <button class="log-in-btn">Log In</button>
    </div>
  </div>
</header>
  )
}

export default Header
