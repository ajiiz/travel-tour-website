import React from 'react'

const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu">
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
