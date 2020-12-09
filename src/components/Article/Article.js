import React, { useEffect, useRef } from 'react'
import { Power1, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Article = ({ image, header, details, btnText, reversed}) => {

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
        <div className={(reversed) ? "article article--reversed" : "article"} ref={el => container = el}>
            <div className="article__image">
                <img src={image} alt="article"></img>
            </div>
            <div className={(reversed) ? "article__info article__info--reversed" : "article__info"}>
                <h1 className="article__info__header">{header}</h1>
                <p className="article__info__details">{details}</p>
                <button className="btn">{btnText}</button>
            </div>
        </div>
    )
}

export default Article
