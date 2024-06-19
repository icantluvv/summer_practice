"use client"

import React from "react"

interface ScrollerSimilarProps {
    onScrollLeft: () => void
    onScrollRight: () => void
}
const ScrollerSimilar: React.FC<ScrollerSimilarProps> = ({
    onScrollLeft,
    onScrollRight
}) => {
    return (
        <div className="w-full justify-end text-[25px] gap-4 hidden lg:flex my-[1em]">
            <button onClick={onScrollLeft} className="hover:text-[#b9b9b9]">
                {"<"}
            </button>
            <button className="hover:text-[#b9b9b9]" onClick={onScrollRight}>
                {">"}
            </button>
        </div>
    )
}

export default ScrollerSimilar
