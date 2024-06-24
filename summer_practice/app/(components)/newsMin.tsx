import React from "react"
import Image from "next/image"
import Link from "next/link"

const NewsMin = () => {
    return (
        <Link className="w-full flex items-center" href={""}>
            <div className=" w-[90%] max-w-[80px]">
                <Image
                    src={"/images/miniNews.svg"}
                    alt={""}
                    width={80}
                    height={80}
                    layout="responsive"
                ></Image>
            </div>
            <span className="px-3">
                <h1 className="text-[14px] font-medium  line-clamp-2 ">
                    8 лет назад вышла Batman: Arkham Knight 
                </h1>
                <p className="text-[12px] text-[#9F9F9F]">23 Jul 2023</p>
            </span>
        </Link>
    )
}

export default NewsMin
