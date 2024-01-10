import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMdFitness } from "react-icons/io";
import "../styles/Navbar.css"

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">FitArena</Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open":""}>
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
