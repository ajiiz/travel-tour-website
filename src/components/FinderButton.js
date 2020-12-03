import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const FinderButton = ({ text }) => {
    return (
        <>
            <p className="header-info__finder__btns__text">{text}</p>
            <BiChevronDown />
        </>
    )
}

export default FinderButton
