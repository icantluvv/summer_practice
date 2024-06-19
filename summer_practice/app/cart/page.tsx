import React from "react"
import Image from "next/image"
import CartProduct from "../(components)/cartProductCard"

const page = () => {
    return (
        <main className="w-full min-h-[41em] lg:pt-0 pt-[100px] flex lg:justify-center">
            <section className=" w-full lg:w-[90%] justify-between lg:justify-around items-center lg:items-start  flex lg:flex-row flex-col">
                <span className="w-full flex pl-[5%] mt-[2em] mb-[2em] items-center justify-between pr-[5%]">
                    <h1 className="font-semibold text-[24px]">Корзина</h1>
                    <div>
                        <Image
                            src={"/images/cart.svg"}
                            alt={""}
                            width={28}
                            height={28}
                        ></Image>
                    </div>
                </span>
                <div className="flex flex-col lg:w-[73%]  max-w-[800px] w-full items-center lg:items-start">
                    <div className="bg-[#e8e8e8] w-full h-[55px]  items-center lg:flex hidden">
                        <ul className="flex w-full font-semibold ">
                            <li className="w-[50%] pl-4">Продукт</li>
                            <li className="w-[30%] ">Цена</li>
                            <li className="w-[20%] ">Количество</li>
                        </ul>
                    </div>
                    <CartProduct></CartProduct>
                </div>
                <div className="flex flex-col-reverse mb-5 lg:flex-col w-[98%] lg:w-[24%] mt-[5em] lg:mt-0">
                    <button className="w-full h-[60px] bg-[#e8e8e8] lg:bg-black text-black lg:text-white rounded-[10px] text-[20px] font-semibold flex items-center justify-center hover:bg-[#d9d9d9] hover:text-black active:bg-[#b8b8b8] transition ">
                        Check out
                    </button>

                    <div className="mt-6 w-full h-[100px] mb-1 bg-black text-white lg:text-black lg:bg-[#e8e8e8] rounded-[10px] text-[20px] font-semibold flex items-center justify-center  ">
                        <div className="w-full flex flex-col items-center text-[16px] font-normal">
                            <span className="flex w-[90%] justify-between ">
                                <p>Всего товаров: 1</p>
                                <p>7599р</p>
                            </span>
                            <span className="flex w-[90%] justify-between ">
                                <p>Скидка:</p>
                                <p>0р</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
