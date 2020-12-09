import React, { useEffect, useRef } from 'react'
import TrendingItem from "./TrendingItem"
import Items from "./Items"
import { Power1, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Trending = () => {

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
        <div className="trending" ref={el => container = el}>
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
