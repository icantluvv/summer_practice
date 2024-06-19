import React from "react"
import Image from "next/image"
import Link from "next/link"

const BottomNav = () => {
    return (
        <div className="fixed z-[100] bottom-0 w-full h-[65px] bg-white lg:hidden flex justify-around items-center">
            <Link href={"account"} className="w-[15%] flex justify-center">
                <Image
                    src={"/images/acc.svg"}
                    alt={""}
                    width={28}
                    height={28}
                ></Image>
            </Link>
            <Link href={"/search"} className="w-[15%] flex justify-center">
                <Image
                    src={"/images/search.svg"}
                    alt={""}
                    width={28}
                    height={28}
                ></Image>
            </Link>
            <Link href={"/likes"} className="w-[15%] flex justify-center">
                <Image
                    src={"/images/likes.svg"}
                    alt={""}
                    width={28}
                    height={28}
                ></Image>
            </Link>
            <Link href={"cart"} className="w-[15%] flex justify-center">
                <Image
                    src={"/images/cart.svg"}
                    alt={""}
                    width={28}
                    height={28}
                ></Image>
            </Link>
        </div>
    )
}

export default BottomNav
