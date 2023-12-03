import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1 className="large-text">Dictionary App</h1>
            <ul className="nav-child">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">History</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar