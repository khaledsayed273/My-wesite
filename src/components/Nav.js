import React from 'react'
import {  NavLink } from 'react-router-dom'
import './nav.css'

function Nav({state}) {
    return (
        <nav id='nav' className={state}>
            <ul className='h-100'>
                <li><NavLink to='/'><i className="fa-solid fa-house"></i>home</NavLink></li>
                <li><NavLink to='/about'><i className="fa-solid fa-user"></i>about</NavLink></li>
                <li><NavLink to='/skills'><i className="fa-solid fa-star"></i>skills</NavLink></li>
                <li><NavLink to='/portfolio'><i className="fa-solid fa-image-portrait"></i>portfolio</NavLink></li>
                <li><NavLink to='/contact'><i className="fa-solid fa-message"></i>contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
