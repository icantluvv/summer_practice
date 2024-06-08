import React from "react"
import Image from "next/image"
const ProductCard = () => {
    return (
        <div className="lg:w-[32%] lg:max-w-[390px] max-w-[300px] lg:max-h-[524px] flex flex-col border items-center ">
            <div className="lg:max-w-[203px] lg:max-h-[260px] max-w-[150px] mt-[2em] mb-[3em]">
                <Image
                    src={"/images/spider.svg"}
                    alt={"spider"}
                    layout="responsive"
                    width={203}
                    height={260}
                ></Image>
            </div>
            <div className="flex flex-col  items-start gap-4 w-[90%]">
                <h1 className="text-[16px] font-medium">
                    Игра Spider-Man 2 Standard Edition
                </h1>
                <p className="text-[13px] text-[#CECECE] font-reg">
                    Полностью на русском языку. Игра для PS5 Sony Marvel
                    «Человек-паук 2» — это стандартное издание в экшен-жанре.
                    Игра предназначена для игроков...
                </p>
                <div className="flex w-full lg:flex-row flex-col mb-[2em] items-center gap-2 lg:gap-0 justify-between">
                    <span className="text-[22px] font-bold">7 550₽</span>
                    <span className="text-[14px] font-bold text-[#CECECE] lg:r-[3em]">
                        10 260₽
                    </span>
                    <button className="bg-black text-white text-[11px]  w-full lg:max-w-[144px] pt-[1em] pb-[1em] pl-[4em] pr-[4em] max-h-[35px]">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
