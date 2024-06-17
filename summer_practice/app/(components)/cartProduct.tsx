import React from "react"
import Image from "next/image"

const CartProduct = () => {
    return (
        <div className="w-full flex">
            <ul className="flex text-[16px] items-center flex-1">
                <li className="w-[40%] pl-[2em] flex lg:flex-row flex-col lg:gap-x-6 gap-y-4 lg:items-center">
                    <div className="max-w-[107px]">
                        <Image
                            src={"/images/cart_prod_image.svg"}
                            width={107}
                            height={107}
                            alt={""}
                            layout="responsive"
                        ></Image>
                    </div>
                    <span className="w-[80%]">
                        <p>Spider-Man & Miles</p>
                    </span>
                </li>
                <li className="w-[10%]">
                    <span>
                        <p>7599p</p>
                    </span>
                </li>
                <li className="w-[20%]">
                    <span>
                        <p>1</p>
                    </span>
                </li>
                <li className="w-[30%] flex justify-between pr-[5%]">
                    <span>
                        <p>7599p</p>
                    </span>
                </li>
            </ul>
            <div className="pr-[5%] flex items-center">
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
    )
}

export default CartProduct
