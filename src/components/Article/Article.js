import React from 'react'

const Article = ({ image, header, details, btnText, reversed}) => {
    return (
        <div className={(reversed) ? "article article--reversed" : "article"}>
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
