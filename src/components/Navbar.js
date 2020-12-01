import React from 'react'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar__logo">there goes logo</div>
            <div className="nav-bar__menu">
                <ul className="nav-bar__menu__items">
                    <li className="nav-bar__menu__items__item">Home</li>
                    <li className="nav-bar__menu__items__item">Destinations</li>
                    <li className="nav-bar__menu__items__item">About</li>
                    <li className="nav-bar__menu__items__item">Partner</li>
                </ul>
            </div>
            <button className="btn btn-reversed">Login</button>
            <button className="btn">Register</button>
        </div>
    )
}

export default Navbar
