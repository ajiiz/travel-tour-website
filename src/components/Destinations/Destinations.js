import React from 'react'
import DestinationItem from "./DestinationItem"
import Items from "./Items"

const Destinations = () => {
    return (
        <div className="destinations">
            <div className="destinations__header">
                <h1 className="destinations__header__main">Featured destinations</h1>
                <p className="destinations__header__text">View all &gt;</p>
            </div>
            <div className="destinations__items">
                {
                    Items.map((data, key) => {
                        return (
                            <DestinationItem
                                name={data.name}
                                country={data.country}
                                image={data.image}
                                key={key}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Destinations
