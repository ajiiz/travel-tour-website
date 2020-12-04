import React from 'react'

const Article = ({ image, header, details, btnText }) => {
    return (
        <div className="article">
            <div className="article__image">
                <img src={image} alt="article"></img>
            </div>
            <div className="article__info">
                <h1 className="article__info__header">{header}</h1>
                <p className="article__info__details">{details}</p>
                <button className="btn">{btnText}</button>
            </div>
        </div>
    )
}

export default Article
