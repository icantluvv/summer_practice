import React from "react"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="w-full bg-black text-white flex flex-col justify-around text-[#D9D9D9] items-center">
            <div className="lg:flex-row flex flex-col w-[90%] mt-[2em] mb-[2em] gap-[13%]">
                <div className=" flex flex-col h-[100px] justify-around">
                    <Link href={"/"} className="text-[16px] h-[27px] ">
                        <span className="hover:border-b-[3px]">Home</span>
                    </Link>
                    <Link href={"/help"} className="text-[16px] h-[27px]">
                        <span className="hover:border-b-[3px]">Help</span>
                    </Link>
                </div>
                <div className=" flex flex-col h-[100px] justify-around ">
                    <Link href={"/shop"} className="text-[16px]  h-[27px]">
                        <span className="hover:border-b-[3px]">Shop</span>
                    </Link>
                    <Link href={"/Payment"} className="text-[16px]  h-[27px]">
                        <span className="hover:border-b-[3px]">
                            Payment Options
                        </span>
                    </Link>
                </div>

                <div className=" flex flex-col  h-[100px] justify-around">
                    <Link href={"/about"} className="text-[16px]  h-[27px]">
                        <span className="hover:border-b-[3px]">About</span>
                    </Link>
                    <Link href={"/returns"} className="text-[16px]  h-[27px]">
                        <span className="hover:border-b-[3px]">Returns</span>
                    </Link>
                </div>

                <div className=" flex flex-col  h-[100px] justify-around">
                    <Link href={"/contacts"} className="text-[16px]  h-[27px]">
                        <span className="hover:border-b-[3px]">Contacts</span>
                    </Link>
                    <Link href={"/privacy"} className="text-[16px] h-[27px]">
                        <span className="hover:border-b-[3px]">
                            Privacy Policies
                        </span>
                    </Link>
                </div>
            </div>

            <div className="w-[90%] h-[1px] bg-[#D9D9D9] opacity-40"></div>
            <div className="w-[90%] mb-[2em]">
                <p className="text-[#D9D9D9] opacity-50">
                    2024 Games All rights reverved
                </p>
            </div>
        </div>
    )
}

export default Footer
