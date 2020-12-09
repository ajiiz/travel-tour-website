import React, { useEffect, useRef } from 'react'
import ProfileImage from "../assets/test-1.jpg"
import Stars from "../assets/stars.png"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { Power1, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Testimonials = () => {

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
        <div className="testimonials" ref={el => container = el}>
            <div className="testimonials__text">
                <h1 className="testimonials__text__header">Testimonials</h1>
                <img src={Stars} alt="stars"></img>
                <p className="testimonials__text__quote">
                    "Quosque in lacus a urna fementum euismod.
                    Integer mi nibh, dapibus ac scelerisque eu,
                    facilisis quis purus. Morbi blandit sit amet turpis nec."
                </p>
                <p className="testimonials__text__name">John Doe</p>
                <p className="testimonials__text__info">Founder of Circle</p>
            </div>
            <div className="testimonials__image">
                <img src={ProfileImage} alt="profile"></img>
                <div className="testimonials__image__btns">
                    <FiChevronLeft className="testimonials__image__btns__btn testimonials__image__btns__btn--inactive" />
                    <FiChevronRight className="testimonials__image__btns__btn testimonials__image__btns__btn--active" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
