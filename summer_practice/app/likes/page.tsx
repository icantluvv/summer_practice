import React from "react"
import Image from "next/image"
import ProductCard from "../(components)/productCard"
import SimilarProduct from "../(components)/similarProductCard"
import ScrollerSimilar from "../(components)/scrollerSimilar"
import SimilarProductsScroller from "../(components)/SimilarProductsScroller"

const page = () => {
    return (
        <main className="pt-[100px] lg:pt-0 min-h-screen flex mb-[2em] flex-col items-center">
            <section className="w-full flex pl-[5%] mt-[2em] items-center justify-between pr-[5%]">
                <h1 className="font-semibold text-[24px]">Избранные товары</h1>
                <div>
                    <Image
                        src={"/images/likes.svg"}
                        alt={""}
                        width={28}
                        height={28}
                    ></Image>
                </div>
            </section>
            <section className="px-[5%] w-full flex gap-4 lg:justify-start justify-between my-[3em] flex-wrap">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </section>

            <section className="w-full px-[5%] flex flex-col my-[1em]">
                <h1 className="font-semibold text-[24px] ">Похожие товары</h1>
                {/* <div className="w-full flex gap-4 mt-[3em] overflow-x-auto scrollbar-hide">
                    <SimilarProduct></SimilarProduct>
                    <SimilarProduct></SimilarProduct>
                    <SimilarProduct></SimilarProduct>
                    <SimilarProduct></SimilarProduct>
                    <SimilarProduct></SimilarProduct>
                    <SimilarProduct></SimilarProduct>
                    <SimilarProduct></SimilarProduct>
                </div> */}
                <SimilarProductsScroller />
            </section>
        </main>
    )
}

export default page
