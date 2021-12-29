import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import NavMobile from './NavMobile';
import Nav from './Nav';
import '../../scss/_vars.scss';
import './header.scss';

function Header() {
    return <header className='header'>
        <div className="header__min">
            <div className="container">
                <ul>
                    <li><NavLink to="//ContactsMain">г. Бишкек ул. Токтогула 24</NavLink></li>
                    <li><Link to="//ContactsMain"> тел. 0702 33 33 33</Link></li>
                    <li><Link to="/"> <FaTelegramPlane className='sosLink tel' /></Link></li>
                    <li><Link to="/"> <GrInstagram className='sosLink' /></Link></li>
                </ul>
            </div>
        </div>
        <div className="header__inner">
            {/* <div className="container"> */}
                <div className="header__logo">
                    <NavLink to="/">ORION</NavLink>
                </div>
                <NavMobile />
                <Nav />
            {/* </div> */}
        </div>

    </header>
}

export default Header;
