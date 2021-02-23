import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="navigation">
                <div className="title">
                    <h1>DevBug</h1>
                </div>
                <ul className="menu">
                    <li><NavLink to="/" exact activeClassName="selected">HOME</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="selected">BLOG</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="selected">CONTACT</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
