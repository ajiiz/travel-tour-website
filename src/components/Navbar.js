import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

    return (
        <div className="nav-bar">
            <div className="nav-bar__logo">
                <div className="nav-bar__logo__outer-circle">
                    <div className="nav-bar__logo__outer-circle__inner-circle"></div>
                </div>
            </div>
            <div className="nav-bar__menu">
                <ul className="nav-bar__menu__items">
                    <li className="nav-bar__menu__items__item nav-bar__menu__items__item--active">Home</li>
                    <li className="nav-bar__menu__items__item">Destinations</li>
                    <li className="nav-bar__menu__items__item">About</li>
                    <li className="nav-bar__menu__items__item">Partner</li>
                </ul>
                <button className="nav-bar__menu__btn btn btn--reversed">Login</button>
                <button className="nav-bar__menu__btn btn">Register</button>
                <div className="nav-bar__menu__burger">
                    <GiHamburgerMenu />
                </div>
            </div>
            {
                (isHamburgerMenu) ?
                <HamburgerMenu />
                : null
            }
        </div>
    )
}

export default Navbar
