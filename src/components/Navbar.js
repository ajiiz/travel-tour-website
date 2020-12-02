import React from 'react'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar__logo">there goes logo</div>
            <ul className="nav-bar__menu">
                <li className="nav-bar__menu__item nav-bar__menu__item--active">Home</li>
                <li className="nav-bar__menu__item">Destinations</li>
                <li className="nav-bar__menu__item">About</li>
                <li className="nav-bar__menu__item">Partner</li>
            </ul>
            <button className="btn btn-reversed">Login</button>
            <button className="btn">Register</button>
        </div>
    )
}

export default Navbar
