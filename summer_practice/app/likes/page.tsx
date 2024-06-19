import React from "react"
import Image from "next/image"
import ProductCard from "../(components)/productCard"

const page = () => {
    return (
        <main className="pt-[100px] lg:pt-0 min-h-screen flex flex-col items-center">
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

            <section className="w-[90%] flex flex-col my-[3em]">
                <h1 className="font-semibold text-[24px] mb-[1em]">
                    Похожие товары
                </h1>
            </section>
        </main>
    )
}

export default page
