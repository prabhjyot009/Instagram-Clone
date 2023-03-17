import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to="/">
                        <img alt="logo" src={logo} height="45px"/>
                    </NavLink>
                    <form className="d-flex me-md-5" role="search">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <a class="nav-link text-dark fs-5 searchIcon" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a class="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-house"></i></a>
                        <a class="nav-link text-dark fs-5" href="#"><i class="fa-regular fa-heart"></i></a>
                        <NavLink class="nav-link text-dark fs-6 mt-1 ms-1" to="/myprofile"><i class="fa-solid fa-circle"></i></NavLink>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar