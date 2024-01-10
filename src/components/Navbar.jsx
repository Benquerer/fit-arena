import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Navbar.css"

export const Navbar = () => {

    //stateHook to define if the menu is open
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">FitArena</Link>
            <div className="menu" onClick={() => {
                //Updates the variable state
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Alternates display of the list using the state of the menu (only for mobile, otherwise will always display)*/}
            <ul className={menuOpen ? "open":""}>
                {/* the NavLink is a wrapper for the Link component that keeps track if the link is active or not */}
                <li>  
                    <NavLink to="/supplements">Supplements</NavLink>
                </li>
                <li>
                    <NavLink to="/compare">Compare</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}
