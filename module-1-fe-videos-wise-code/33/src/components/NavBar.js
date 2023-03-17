import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img alt="logo" src={logo}/>
                    </a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar