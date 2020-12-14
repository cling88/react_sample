import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul className="navList">
            <li className="navItem"><Link to="/">Home</Link></li>
            <li className="navItem"><Link to="/info">Info</Link></li>
            <li className="navItem"><Link to="/user">User</Link></li> 
        </ul>
    )
}

export default Nav
