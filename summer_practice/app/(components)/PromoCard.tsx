import React from "react"
import Image from "next/image"
const PromoCard = () => {
    return (
        <div className="flex max-w-[386px] flex-col items-center">
            <div className="flex ">
                <Image
                    src={"/images/tlof.svg"}
                    alt={""}
                    layout="responsive"
                    width={386}
                    height={357}
                    objectFit="cover"
                ></Image>
            </div>
            <h1 className="text-[24px] font-bold mt-[1em]">Экшн</h1>
        </div>
    )
}

export default PromoCard
