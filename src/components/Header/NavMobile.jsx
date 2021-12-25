import { useState } from 'react';
import NavLinks from './NavLinks';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';
import './header.scss';

function NavMobile() {

    const [open, setOpen] = useState(false);

    const humburgericon = <CgMenuRound className='header__gamburger' color='black'
        onClick={() => setOpen(!open)} />

    const humburgericonClose = <CgCloseO className='header__gamburger' color='black'
        onClick={() => setOpen(!open)} />


    const closeMobileMenu = () => setOpen(false);


    return (

        <nav className='header__navMobile'>
            {open ? humburgericonClose : humburgericon}

            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>

    )
}

export default NavMobile;
