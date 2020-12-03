import React from 'react'
import HeaderImage from '../assets/header.svg'
import { BiChevronDown } from 'react-icons/bi'

const Header = () => {
    return (
        <header>
            <div className="header-info">
                <div className="header-info__text">
                    <h1 className="header-info__text__main">Explore and Travel</h1>
                    <p className="header-info__text__lower">Holiday finder</p>
                    <hr className="header-info__text__line"/>
                </div>
            </div>
            <div className="header-image">
                <img src={HeaderImage} alt="header image"></img>
            </div>
        </header>
    )
}

export default Header
