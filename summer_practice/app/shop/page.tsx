import React from "react"
import Image from "next/image"
import ProductCard from "../(components)/productCard"
import SwitchCount from "../(components)/switchCount"
import SortBy from "../(components)/SortBy"
import Advantages from "../(components)/advantages"

const Shop = () => {
    return (
        <main className="flex flex-col w-full items-center">
            <section className="w-full flex relative items-center flex-col">
                <div className="w-full lg:min-h-[417px] min-h-[30em]">
                    <Image
                        src={"/images/back_shop.svg"}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>

                <div className="w-full flex justify-start items-center pl-[5%] absolute bottom-0 left-0 h-[100px] bg-[#E8E8E8]">
                    <div className="lg:max-w-[28px] w-[35px] ml-[1.5em]">
                        <Image
                            src={"/images/how.svg"}
                            alt={""}
                            width={28}
                            height={28}
                            layout="responsive"
                        ></Image>
                    </div>
                    <div className="w-[2px] h-[37px] bg-[#9F9F9F] ml-[1.5em] lg:block hidden"></div>
                    <div className=" lg:ml-[1.5em] font-normal flex">
                        <SwitchCount></SwitchCount>
                        <SortBy></SortBy>
                    </div>
                    <span className="ml-4 max-[550px]:hidden">
                        <p>Сортировать</p>
                    </span>
                </div>
            </section>
            <section className="flex flex-wrap w-[95%] justify-center gap-y-8 gap-x-4 mt-[6em] mb-[7em]">
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
            </section>

            <Advantages></Advantages>
        </main>
    )
}

export default Shop
