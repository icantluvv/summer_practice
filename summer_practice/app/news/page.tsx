import React from "react"
import Image from "next/image"
import Advantages from "../(components)/advantages"
import NewsMin from "../(components)/newsMin"

const page = () => {
    return (
        <main className="flex flex-col w-full items-center">
            <section className="w-full flex relative items-center flex-col">
                <div className="w-full lg:min-h-[417px] min-h-[30em]">
                    <Image
                        src={"/images/kratos.svg"}
                        alt={""}
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
            </section>
            <section className="w-full px-[5%] flex items-center my-10">
                <div className="w-[75%]"></div>
                <div className="w-[15%] flex flex-col items-center">
                    <span className="text-[24px] w-full font-medium">
                        Недавние
                    </span>
                    <div className="flex flex-col gap-y-[20px] mt-[25px]">
                        <NewsMin></NewsMin>
                        <NewsMin></NewsMin>
                        <NewsMin></NewsMin>
                        <NewsMin></NewsMin>
                        <NewsMin></NewsMin>
                    </div>
                </div>
            </section>

            <Advantages></Advantages>
        </main>
    )
}

export default page
