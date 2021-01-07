import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <NavLink className="nav-link active" to="/profile">Profile</NavLink>
                <NavLink className="nav-link" to="/messages">Messages</NavLink>
                <NavLink className="nav-link" to="/users">Users</NavLink>
            </nav>

        </div>
    )
}

export default Header