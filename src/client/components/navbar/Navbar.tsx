import React from 'react';
import style from './navbar.module.scss'

const Navbar = () => {

    return (
        <nav className={`nav-wrapper`}>
            <div className={`nav-wrapper ${style.doTitle} `}>
                <a href="#" >Todo list</a>
            </div>
        </nav>
    )
}


export default Navbar;