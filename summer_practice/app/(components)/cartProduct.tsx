import React from "react"
import Image from "next/image"

const CartProduct = () => {
    return (
        <div className="w-full flex  mt-6 border-b pb-5">
            <div className="flex text-[16px] items-center w-full lg:flex-row flex-col relative">
                <div className="lg:w-[50%] w-[100%] px-2 flex lg:flex-row flex-col lg:gap-x-6 gap-y-4 items-center  ">
                    <div className="lg:max-w-[107px] w-[30%] lg:min-w-[107px] min-w-[170px]">
                        <Image
                            src={"/images/cart_prod_image.svg"}
                            width={107}
                            height={107}
                            alt={""}
                            layout="responsive"
                            className="lg:max-w-[107px] w-[300px] "
                        ></Image>
                    </div>
                    <span>
                        <p>Spider-Man & Miles</p>
                    </span>
                </div>
                <div className="lg:w-[30%] w-full">
                    <span className="flex justify-center">
                        <p>7599p</p>
                    </span>
                </div>
                <div className="lg:w-[14%] w-[50%] lg:max-w-full max-w-[160px] flex justify-around items-center">
                    <button className="w-[30px] h-[30px] border border-[#e9e9e9] text-[#a9a9a9] flex items-center justify-center rounded-[5px] active:bg-[#e9e9e9]">
                        -
                    </button>
                    <span>
                        <p>1</p>
                    </span>
                    <button className="w-[30px] h-[30px] border border-[#e9e9e9] text-[#a9a9a9] flex items-center justify-center rounded-[5px] active:bg-[#e9e9e9]">
                        +
                    </button>
                </div>
                <div className="absolute top-5 lg:h-full lg:top-0 right-[5%] lg:right-3 flex items-center">
                    <button>
                        <div>
                            <Image
                                src={"/images/delete_product.svg"}
                                width={107}
                                height={107}
                                alt={""}
                                layout="responsive"
                            ></Image>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
