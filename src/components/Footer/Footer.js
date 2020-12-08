import React from 'react'
import Logo from "../NavBar/Logo"
import Items from "./Items"
import FooterItem from "./FooterItem"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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
                                key={key}
                            />
                        )
                    })
                }
            </div>
            <div className="footer__icons">
                <FaTwitter />
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
            </div>
        </div>
    )
}

export default Footer
