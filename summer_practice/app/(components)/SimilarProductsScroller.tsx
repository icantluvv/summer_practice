"use client"

import React, { useRef } from "react"
import SimilarProduct from "../(components)/similarProductCard"
import ScrollerSimilar from "../(components)/scrollerSimilar"

const SimilarProductsScroller = () => {
    const similarProductsRef = useRef<HTMLDivElement>(null) // Явно указываем тип рефа

    const scrollLeft = () => {
        if (similarProductsRef.current) {
            similarProductsRef.current.scrollBy({
                left: -similarProductsRef.current.clientWidth,
                behavior: "smooth"
            })
        }
    }

    const scrollRight = () => {
        if (similarProductsRef.current) {
            similarProductsRef.current.scrollBy({
                left: similarProductsRef.current.clientWidth,
                behavior: "smooth"
            })
        }
    }

    return (
        <div className="w-full px-[5%] flex flex-col my-[1em]">
            <div
                ref={similarProductsRef}
                className="w-full flex gap-4 mt-[3em] overflow-x-auto scrollbar-hide"
            >
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
                <SimilarProduct />
            </div>
            <ScrollerSimilar
                onScrollLeft={scrollLeft}
                onScrollRight={scrollRight}
            />
        </div>
    )
}

export default SimilarProductsScroller
