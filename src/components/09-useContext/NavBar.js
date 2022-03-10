import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    
      <Link to='./' className="navbar-brand">useContext</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink  to='./' className="nav-item nav-link" aria-current="page">Home</NavLink>

          </li>
          <li className="nav-item">
            <NavLink  to='./about' className="nav-item nav-link">About</NavLink>

          </li>
          <li className="nav-item">
             <NavLink  to='./login' className="nav-item nav-link">Login</NavLink>
            
          </li>
        </ul>
      </div>
   
  </nav>

  )
}
