import React from 'react'

function FooterItem({ header, details }) {
    return (
        <div className="footer__items__item">
            <ul className="footer__items__item__list">
                <li className="footer-_items__item__list__element footer-_items__item__list__element--header">{header}</li>
                <li className="footer-_items__item__list__element">{details[0]}</li>
                <li className="footer-_items__item__list__element">{details[1]}</li>
                <li className="footer-_items__item__list__element">{details[2]}</li>
                <li className="footer-_items__item__list__element">{details[3]}</li>
                <li className="footer-_items__item__list__element">{details[4]}</li>
            </ul>
        </div>
    )
}

export default FooterItem
