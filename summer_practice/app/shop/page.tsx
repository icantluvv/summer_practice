import React from "react"
import Image from "next/image"
import Link from "next/link"
import ProductCard from "../(components)/productCard"

const Shop = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full flex relative items-center flex-col">
                <div className="w-full lg:min-h-[417px] min-h-[30em]">
                    <Image
                        src={"/images/back_shop.svg"}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>

                <div className="w-full flex justify-start lg:justify-center absolute bottom-0 left-0 h-[100px] bg-[#E8E8E8]">
                    <div className="lg:w-[45%] ml-[5%] flex items-center">
                        <div className="max-w-[85px] mr-[1em]">
                            <Image
                                src={"/images/options.svg"}
                                alt={""}
                                width={85}
                                height={30}
                                layout="responsive"
                            ></Image>
                        </div>
                        <div className="max-w-[28] ml-[1.5em] lg:block hidden">
                            <Image
                                src={"/images/how.svg"}
                                alt={""}
                                width={28}
                                height={28}
                                layout="responsive"
                            ></Image>
                        </div>
                        <div className="w-[2px] h-[37px] bg-[#9F9F9F] ml-[1.5em] lg:block hidden"></div>
                        <span className=" ml-[1.5em] lg:block hidden  font-normal">
                            Showing 1–12 of 38 results
                        </span>
                    </div>

                    <div className="lg:w-[45%] max-w-[80%]  flex items-center justify-end gap-8">
                        <div className="gap-4 items-center lg:flex hidden">
                            <span className="text-[20px] mr font-normal">
                                Show
                            </span>
                            <input
                                className="w-[55px] h-[55px] pl-[19px] "
                                type=""
                                placeholder="12"
                            />
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="lg:text-[20px] text-[16px] font-normal lg:block hidden">
                                Sort by
                            </span>
                            <input
                                className="lg:w-[188px] lg:h-[55px] h-[40px] pl-[19px]"
                                type=""
                                placeholder="Default"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-[95%] justify-center gap-y-8 gap-x-4 mt-[6em] mb-[7em]">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="w-full flex justify-center lg:h-[20vh] pt-[4em] pb-[4em] bg-[#e8e8e8]">
                <div className="lg:w-[92%] flex-col w-[70%] lg:items-center lg:justify-between items-start lg:flex-row flex gap-7 ">
                    <div className="lg:max-w-[25%] ">
                        <Image
                            src={"/images/1st_grad.svg"}
                            alt={""}
                            width={337}
                            height={70}
                            layout="responsive"
                        ></Image>
                    </div>
                    <div className="lg:max-w-[24%]  ">
                        <Image
                            src={"/images/2nd_grad.svg"}
                            alt={""}
                            width={328}
                            height={70}
                            layout="responsive"
                        ></Image>
                    </div>
                    <div className="lg:max-w-[17%] ">
                        <Image
                            src={"/images/3rd_grad.svg"}
                            alt={""}
                            width={244}
                            height={70}
                            layout="responsive"
                        ></Image>
                    </div>
                    <div className="lg:max-w-[19%]  ">
                        <Image
                            src={"/images/4th_grad.svg"}
                            alt={""}
                            width={259}
                            height={70}
                            layout="responsive"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
