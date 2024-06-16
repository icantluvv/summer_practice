import React from "react"
import Image from "next/image"

const Advantages = () => {
    return (
        <section className="w-full flex justify-center xl:h-[20vh] pt-[2em] pb-[2em] bg-[#e8e8e8]">
            <div className="xl:w-[95%] flex-col w-[85%] xl:justify-between items-center items-start xl:flex-row flex gap-y-4">
                <div className="flex xl:max-w-[27%] xl:flex-row flex-col text-center xl:text-start items-center gap-x-2">
                    <div className="lg:w-[60px] w-[40px]">
                        <Image
                            src={"/images/trophy1.svg"}
                            alt={""}
                            width={60}
                            height={60}
                            layout="responsive"
                        ></Image>
                    </div>
                    <span className="flex flex-col">
                        <h1 className="xl:text-[25px] text-[20px] font-semibold ">
                            High Quality
                        </h1>
                        <p className="xl:text-[20px] text-[14px] text-[#898989] font-medium">
                            crafted from top materials
                        </p>
                    </span>
                </div>

                <div className="flex  xl:max-w-[26%]  xl:flex-row flex-col text-center xl:text-start items-center gap-x-2">
                    <div className="lg:w-[60px] w-[40px]">
                        <Image
                            src={"/images/guarantee.svg"}
                            alt={""}
                            width={60}
                            height={60}
                            layout="responsive"
                        ></Image>
                    </div>
                    <span className="flex flex-col">
                        <h1 className="xl:text-[25px] text-[20px] font-semibold ">
                            Warranty Protection
                        </h1>
                        <p className="xl:text-[20px] text-[14px] text-[#898989] font-medium">
                            Over 2 years
                        </p>
                    </span>
                </div>

                <div className="flex  xl:max-w-[25%] xl:flex-row flex-col text-center xl:text-start items-center gap-x-2">
                    <div className="lg:w-[60px] w-[40px]">
                        <Image
                            src={"/images/shipping.svg"}
                            alt={""}
                            width={60}
                            height={60}
                            layout="responsive"
                        ></Image>
                    </div>
                    <span className="flex flex-col">
                        <h1 className="xl:text-[25px] text-[20px] font-semibold ">
                            Free Shipping
                        </h1>
                        <p className="xl:text-[20px] text-[14px] text-[#898989] font-medium">
                            Order over 150 $
                        </p>
                    </span>
                </div>

                <div className="flex xl:max-w-[25%]  xl:flex-row flex-col text-center xl:text-start items-center gap-x-2">
                    <div className="lg:w-[60px] w-[40px]">
                        <Image
                            src={"/images/customer-support.svg"}
                            alt={""}
                            width={60}
                            height={60}
                            layout="responsive"
                        ></Image>
                    </div>
                    <span className="flex flex-col">
                        <h1 className="xl:text-[25px] text-[20px] font-semibold ">
                            24 / 7 Support
                        </h1>
                        <p className="xl:text-[20px] text-[14px] text-[#898989] font-medium">
                            Dedicated support
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Advantages
