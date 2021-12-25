import React from 'react';
import NavLinks from './NavLinks';
import './header.scss';

function Nav() {
    return (
        <nav className='header__nav'>
            <NavLinks />
        </nav>
    )
}

export default Nav;
