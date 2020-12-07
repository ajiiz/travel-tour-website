import React from 'react'

const DestinationItems = ({ name, country, image }) => {
    return (
        <div className="destinations__items__item">
            <div className="destinations__items__item__image">
                <img src={image} alt="destination"></img>
            </div>
            <div className="destinations__items__item__text-container">
                <h1 className="destinations__items__item__text__name">{name}</h1>
                <p className="destinations__items__item__text__country">{country}</p>
            </div>
        </div>
    )
}

export default DestinationItems