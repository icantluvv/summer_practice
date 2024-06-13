import React from "react"
import Image from "next/image"
import Link from "next/link"
const ProductCard = () => {
    return (
        <div className="lg:w-[32%] lg:max-w-[390px] max-w-[300px] lg:max-h-[540px] pt-[2em] pb-[2em] border ">
            <Link
                href={""}
                className="w-full h-full flex flex-col items-center"
            >
                <div className="lg:max-w-[203px] lg:max-h-[260px] max-w-[150px]  mb-[3em]">
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
                        «Человек-паук 2» — это стандартное издание в
                        экшен-жанре. Игра предназначена для игроков...
                    </p>
                    <div className="flex w-full lg:flex-row flex-col items-center gap-2 lg:gap-0 justify-between">
                        <div className="flex flex-col lg:flex-row items-center">
                            <span className="text-[22px] font-bold mr-[7px]">
                                7 550₽
                            </span>
                            <span className="text-[14px] font-bold text-[#CECECE]">
                                10 260₽
                            </span>
                        </div>

                        <button className="hover:bg-white transition transition-100 hover:text-black font-semibold hover:border-2 border-black bg-black text-white text-[11px]  w-full lg:max-w-[120px]  h-[35px]">
                            Buy Now
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
