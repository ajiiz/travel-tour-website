import React from 'react'
import { BsX } from 'react-icons/bs'

const HamburgerMenu = ({ handleClick, isHamburgerMenu }) => {
    return (
        <div className={(isHamburgerMenu) ? "hamburger-menu slide-in" : "hamburger-menu"}>
            <div className="hamburger-menu__BsX-icon">
                <BsX onClick={() => handleClick()}/>
            </div>
            <ul className="hamburger-menu__items">
                <li className="hamburger-menu__items__item nav-bar__menu__items__item--active">Home</li>
                <li className="hamburger-menu__items__item">Destinations</li>
                <li className="hamburger-menu__items__item">About</li>
                <li className="hamburger-menu__items__item">Partner</li>
            </ul>
            <button className="hamburger-menu__btn btn btn--reversed">Login</button>
            <button className="hamburger-menu__btn btn">Register</button>
        </div>
    )
}

export default HamburgerMenu
