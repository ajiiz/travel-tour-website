import React from 'react'

const TrendingItem = ({ header, details, image }) => {
    return (
        <div className="trending__items__item">
            <div className="trending__items__item__image">
                <img src={image} alt="trending"></img>
            </div>
            <div className="trending__items__item__text">
                <h1 className="trending__items__item__text__header">{header}</h1>
                <p className="trending__items__item__text__details">{details}</p>
                <p className="trending__items-_item__text__info">Read more</p>
            </div>
        </div>
    )
}

export default TrendingItem
