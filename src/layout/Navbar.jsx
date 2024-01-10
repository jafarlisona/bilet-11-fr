import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
            </div>
            <div className="pages">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add-page">Add</NavLink>
                <NavLink to="#">Services</NavLink>
                <NavLink to="#">Blog</NavLink>
                <NavLink to="#">Contact</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar