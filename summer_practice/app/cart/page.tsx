import React from "react"

import CartProduct from "../(components)/cartProduct"

const page = () => {
    return (
        <main className="w-full min-h-[41em] lg:pt-0 pt-[100px] flex lg:justify-center">
            <section className=" w-full lg:w-[90%] justify-between lg:justify-around items-center lg:items-start mt-[4em] flex lg:flex-row flex-col">
                <div className="flex flex-col lg:w-[73%]  max-w-[800px] w-full">
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
                                <p>Выгода:</p>
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
