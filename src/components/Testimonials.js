import React from 'react'
import ProfileImage from "../assets/test-1.jpg"
import Stars from "../assets/stars.png"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const Testimonials = () => {
    return (
        <div className="testimonials">
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
                    <FiChevronLeft />
                    <FiChevronRight />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
