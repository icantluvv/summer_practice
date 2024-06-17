import React from "react"

import CartProduct from "../(components)/cartProduct"

const page = () => {
    return (
        <main className="w-full min-h-[41em] lg:pt-0 pt-[100px] flex justify-center">
            <section className="flex w-[90%] justify-center gap-6 my-[4em]">
                <div className="flex flex-col w-[77%] max-w-[800px] ">
                    <div className="bg-[#e8e8e8] w-full h-[55px] flex items-center mb-[5em]">
                        <ul className="flex w-full font-semibold ">
                            <li className="w-[40%] pl-[2em]">Продукт</li>
                            <li className="w-[10%]">Цена</li>
                            <li className="w-[20%]">Количество</li>
                            <li className="w-[30%]">Итоговая цена</li>
                        </ul>
                    </div>
                    <CartProduct></CartProduct>
                </div>
                <div className="flex flex-col w-[35%] max-w-[350px] h-[350px] bg-[#e8e8e8] items-center pt-8">
                    <span>
                        <h1 className="font-semibold text-[32px]">
                            Cart Totals
                        </h1>
                    </span>
                    <span className="w-[70%] flex flex-col items-center gap-8 mt-[4em]">
                        <span className="font-medium text-[16px] flex justify-between w-full">
                            Subtotal
                            <p className="text-[#9F9F9F] text-[16px]">
                                Rs. 250,000.00
                            </p>
                        </span>
                        <span className="font-medium text-[16px] flex justify-between w-full">
                            Total
                            <p className="text-[20px] text-red-500">
                                Rs. 250,000.00
                            </p>
                        </span>
                    </span>
                    <button className="font-medium active:bg-[#CECECE] hover:bg-[#d9d9d9] bg-transparent text-[20px] border-2 border-black mt-[45px] px-10 py-2 rounded-2xl">
                        Check Out
                    </button>
                </div>
            </section>
        </main>
    )
}

export default page
