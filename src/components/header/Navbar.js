import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink className='nav-link' to='/about-me' activeClassName="active">
                    <p>About Me</p>
                </NavLink></li>
                <li><NavLink className='nav-link' to='/portfolio' activeClassName="active">
                    <p>Portfolio</p>
                </NavLink></li>
                <li><NavLink className='nav-link' to='/contact' activeClassName="active">
                    <p>Contact</p>
                </NavLink></li>
                <li><NavLink className='nav-link' to='/resume' activeClassName="active">
                    <p>Resume</p>
                </NavLink></li>

            </ul>
        </nav>
    );
};

export default Navbar;

