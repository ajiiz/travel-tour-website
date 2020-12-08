import React, { useState, useEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from './Logo'
import { Power1, gsap } from 'gsap'

const Navbar = () => {

    const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
    let container = useRef(null)

    useEffect(() => {
        const menu = container.firstElementChild
        const list = container.children[1]
        const items = container.children[1].children[0]
        gsap.from(menu, {duration: 2, y:"-250", ease:Power1.easeOut})
        gsap.from(list, {duration: 2, y:"-250", ease: Power1.easeOut})
        gsap.from(items, {delay: 2, duration: 1.5, opacity:0, ease: Power1.easeInOut, stagger: 0.5})
    }, [])

    const handleClick = () => {
        setIsHamburgerMenu(!isHamburgerMenu)
    }

    return (
        <>
        <div className="nav-bar" ref={el => container = el}>
            <Logo />
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
                    <GiHamburgerMenu onClick={handleClick} />
                </div>
            </div>
        </div>
        <HamburgerMenu handleClick={handleClick} isHamburgerMenu={isHamburgerMenu} />
        </>
    )
}

export default Navbar
