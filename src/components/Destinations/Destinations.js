import React, { useEffect, useRef } from 'react'
import DestinationItem from "./DestinationItem"
import Items from "./Items"
import { Power1, gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Destinations = () => {

    let container = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(container.children,
            {duration: 1.5, opacity: 0, ease: Power1.easeOut, stagger: 0.5,
            scrollTrigger: {
                trigger: container,
                start: '-96 50%',
            }
        })
    }, [])

    return (
        <div className="destinations" ref={el => container = el}>
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
