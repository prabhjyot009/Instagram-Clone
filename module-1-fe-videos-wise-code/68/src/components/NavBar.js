import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'
import {NavLink} from 'react-router-dom'
import './Card.css'
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
                        <a className="nav-link text-dark fs-5 searchIcon" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i class="fa-solid fa-house"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i class="fa-regular fa-heart"></i></a>
                        <div class="dropdown ms-5">
                          <a class="btn" href="#" role="button" data-bs-toggle="dropdown">
                          <img className='p-2 post-profile-pic' alt="profile pic" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                          </a>

                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">
                            <NavLink className="nav-link text-dark fs-5 mt-0" to="/myprofile"><i class="fa-solid fa-circle"></i>My Profile</NavLink>
                              </a></li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                        
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar