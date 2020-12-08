import React from 'react'
import Logo from "./NavBar/Logo"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__info">
                <Logo />
                <p className="footer__info__advice">
                    Plan and book your perfect trip with expert advice,
                    travel tips destination information from us
                </p>
                <p className="footer__info__copyright">
                    ©2020 Thousand Sunny. All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
