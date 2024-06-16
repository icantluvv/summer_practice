import React from "react"
import Image from "next/image"
const PromoCard = () => {
    return (
        <div className="flex flex-shrink-0 flex-col items-center">
            <div className="flex max-w-[356px] max-h-[347px]">
                <Image
                    src={"/images/tlof.svg"}
                    alt={""}
                    layout="responsive"
                    width={386}
                    height={357}
                    objectFit="cover"
                    className="lg:w-[386px] lg:h-[357px] w-[356px] h-[337px]"
                ></Image>
            </div>
            <span className="text-[24px] font-bold mt-[1em]">
                <h1>Экшн</h1>
            </span>
        </div>
    )
}

export default PromoCard
