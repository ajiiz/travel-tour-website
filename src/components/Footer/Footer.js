import React from 'react'
import Logo from "../NavBar/Logo"
import Items from "./Items"
import FooterItem from "./FooterItem"

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
            <div className="footer__items">
                {
                    Items.map((data, key) => {
                        return (
                            <FooterItem
                                header={data.header}
                                details={data.details}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer
