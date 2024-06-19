import React from "react"
import Image from "next/image"
import Link from "next/link"
const ProductCard = () => {
    return (
        // <div className="lg:w-[32%]  max-w-[300px] lg:max-w-[500px] lg:min-w-[300px] pt-[2em] pb-[2em] border ">
        <div className="xl:w-[24%] lg:w-[32%] lg:min-w-[290px] lg:w-[30%] w-[47%] lg:py-[2em] py-[1em] border rounded-[10px]">
            <Link
                href={""}
                className="w-full h-full flex flex-col items-center"
            >
                <div className="w-[70%] lg:mb-[2em] mb-[1em]">
                    <Image
                        src={"/images/spider.svg"}
                        alt={"spider"}
                        layout="responsive"
                        width={203}
                        height={260}
                    ></Image>
                </div>

                <div className="flex flex-col  items-start lg:gap-4 gap-2 w-[90%] ">
                    <span className="line-clamp-2 text-center w-full">
                        <h1 className="font-medium lg:text-[20px] text-[14px]">
                            Игра Spider-Man 2 Standard Edition
                        </h1>
                    </span>
                    <span className="lg:text-[14px] text-[12px] text-center text-[#CECECE] font-normal line-clamp-2 lg:line-clamp-3">
                        <p>
                            Полностью на русском языку. Игра для PS5 Sony Marvel
                            «Человек-паук 2» — это стандартное издание в
                            экшен-жанре. Игра предназначена для игроков...
                        </p>
                    </span>
                    <div className="flex w-full lg:flex-row flex-col items-center gap-2 lg:gap-0 justify-between">
                        <span className="flex flex-col lg:flex-row items-center">
                            <p className="xl:text-[22px] text-[16px] font-bold lg:mr-[7px]">
                                7 550₽
                            </p>
                            <p className="xl:text-[14px] text-[12px] font-bold text-[#CECECE]">
                                10 260₽
                            </p>
                        </span>

                        <button className="hover:bg-white transition transition-100 hover:text-black font-semibold hover:border-2 border-black bg-black text-white text-[11px]  w-full lg:max-w-[110px]  h-[35px]">
                            Buy Now
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
