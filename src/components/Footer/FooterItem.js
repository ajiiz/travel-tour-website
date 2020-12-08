import React from 'react'

function FooterItem({ header, details }) {
    return (
        <ul className="footer__items__list">
                <li className="footer__items__list__element footer__items__list__element--header">{header}</li>
                <li className="footer__items__list__element">{details[0]}</li>
                <li className="footer__items__list__element">{details[1]}</li>
                <li className="footer__items__list__element">{details[2]}</li>
                <li className="footer__items__list__element">{details[3]}</li>
                <li className="footer__items__list__element">{details[4]}</li>
            </ul>
    )
}

export default FooterItem
