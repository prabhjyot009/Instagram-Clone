import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5">
                        <img alt="logo" src={logo} height="45px"/>
                    </a>
                    <form className="d-flex me-5" role="search">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <a class="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-house"></i></a>
                        <a class="nav-link text-dark fs-5" href="#"><i class="fa-regular fa-heart"></i></a>
                        <a class="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-circle"></i></a>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar