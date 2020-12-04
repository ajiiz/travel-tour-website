import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const FinderButton = ({ text }) => {
    return (
        <div className="header-info__finder__btns__btn">
            <p className="header-info__finder__btns__btn__text">{text}</p>
            <BiChevronDown />
        </div>
    )
}

export default FinderButton
