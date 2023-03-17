import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to="/">
                        <img alt="logo" src={logo} height='45px'/>
                    </NavLink>
                    <form className="d-flex me-md-5" role="search">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" aria-label="Search"/>
                        <a className="nav-link text-dark fs-5 searchIcon" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart"></i></a>
                        <NavLink className="nav-link text-dark fs-5 mt-0" to="/myprofile"><i className="fa-solid fa-circle"></i></NavLink>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar