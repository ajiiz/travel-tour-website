import React from 'react'
import HeaderImage from '../../assets/header.svg'
import FinderButton from './FinderButton'

const Header = () => {
    return (
        <header>
            <div className="header-info">
                <div className="header-info__text">
                    <h1 className="header-info__text__main">Explore and Travel</h1>
                </div>
                <div className="header-info__finder">
                    <p className="header-info__finder__text">Holiday finder</p>
                    <hr className="header-info__finder__line"/>
                    <div className="header-info__finder__btns">
                        <FinderButton text="Location"/>
                        <FinderButton text="Activity"/>
                        <FinderButton text="Grade"/>
                        <FinderButton text="Date"/>
                    </div>
                    <button className="btn">Explore</button>
                </div>
            </div>
            <div className="header-image">
                <img src={HeaderImage} alt="header"></img>
            </div>
        </header>
    )
}

export default Header
