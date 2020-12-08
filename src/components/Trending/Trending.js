import React from 'react'
import TrendingItem from "./TrendingItem"
import Items from "./Items"

const Trending = () => {
    return (
        <div className="trending">
            <div className="trending__header">
                <h1 className="trending__header__main">Trending stories</h1>
                <p className="trending__header__text">View all &gt;</p>
            </div>
            <div className="trending__items">
                {
                    Items.map((data, key) => {
                        return (
                            <TrendingItem
                                header={data.header}
                                details={data.details}
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

export default Trending
