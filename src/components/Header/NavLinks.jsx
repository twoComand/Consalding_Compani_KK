import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks(props) {
    return (
        <ul className="header__menu">
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/">Главный</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/AboutUsMain">О Нас</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/ServiseMain">Услуги</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/PriceListMain">Прайст Лист</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/NewsMain">Новости</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/ContactsMain">Контакты</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;
