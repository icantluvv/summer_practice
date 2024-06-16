import React from "react"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white flex flex-col justify-around text-[#D9D9D9] items-center">
            <section className="lg:flex-row flex flex-col w-[90%] mt-[2em] mb-[2em] gap-[13%]">
                <div className=" flex flex-col h-[100px] justify-around">
                    <Link href={"/"} className="text-[16px] h-[27px] ">
                        <h1 className="hover:border-b-[3px]">Home</h1>
                    </Link>
                    <Link href={"/help"} className="text-[16px] h-[27px]">
                        <h1 className="hover:border-b-[3px]">Help</h1>
                    </Link>
                </div>
                <div className=" flex flex-col h-[100px] justify-around ">
                    <Link href={"/shop"} className="text-[16px]  h-[27px]">
                        <h1 className="hover:border-b-[3px]">Shop</h1>
                    </Link>
                    <Link href={"/Payment"} className="text-[16px]  h-[27px]">
                        <h1 className="hover:border-b-[3px]">
                            Payment Options
                        </h1>
                    </Link>
                </div>

                <div className=" flex flex-col  h-[100px] justify-around">
                    <Link href={"/about"} className="text-[16px]  h-[27px]">
                        <h1 className="hover:border-b-[3px]">About</h1>
                    </Link>
                    <Link href={"/returns"} className="text-[16px]  h-[27px]">
                        <h1 className="hover:border-b-[3px]">Returns</h1>
                    </Link>
                </div>

                <div className=" flex flex-col  h-[100px] justify-around">
                    <Link href={"/contacts"} className="text-[16px]  h-[27px]">
                        <h1 className="hover:border-b-[3px]">Contacts</h1>
                    </Link>
                    <Link href={"/privacy"} className="text-[16px] h-[27px]">
                        <h1 className="hover:border-b-[3px]">
                            Privacy Policies
                        </h1>
                    </Link>
                </div>
            </section>

            <div className="w-[90%] h-[1px] bg-[#D9D9D9] opacity-40"></div>

            <section className="w-[90%] mb-[2em]">
                <span className="text-[#D9D9D9] opacity-50">
                    <p>2024 Games All rights reverved</p>
                </span>
            </section>
        </footer>
    )
}

export default Footer
