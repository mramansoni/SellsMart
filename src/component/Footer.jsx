import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">© 2022 SELLSMART Company, Inc</p>

          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <h3 className='text-primary fw-bold'>SELLSMART</h3>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-primary">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/product" className="nav-link px-2 text-primary">Product</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link px-2 text-primary">About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link px-2 text-primary">Contact</NavLink></li>

          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer