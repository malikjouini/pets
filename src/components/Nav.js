import React from 'react'
import logo from '../images/logo.png';
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <nav>
            <img className="logo" src={logo}/>
            <h1>PETS</h1>
            <ul className="nav-links">
                <li>home</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default Nav
