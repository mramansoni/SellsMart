import React from 'react'
import { NavLink } from 'react-router-dom'
import Cartbtn from './button/Cartbtn'
import Login from './button/Login'
import Signup from './button/Signup'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li> 

            </ul>
          <NavLink className="navbar-brand mx-auto fw-bold" to="/">SELLSMART</NavLink>
          <Login/>
          <Signup/>
          <Cartbtn/>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Header