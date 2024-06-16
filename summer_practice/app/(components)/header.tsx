import React from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full h-[100px] flex justify-center hidden lg:flex">
            <div className="w-[90%] h-full flex justify-between items-center">
                <Link className=" flex items-center " href={"/"}>
                    <Image
                        src={"/images/logo.svg"}
                        alt={"logo"}
                        width={50}
                        height={32}
                        layout="responsive"
                        className="max-w-[50px]"
                    ></Image>
                    <h1 className="font-bold text-[34px]  ml-[0.2em]">Games</h1>
                </Link>
                
                <nav className="h-[25px] flex items-center gap-20 ">
                    <Link
                        href={"/"}
                        className="hover:border-b-[3px] h-[27px] text-[16px] font-medium border-black"
                    >
                        Home
                    </Link>
                    <Link
                        href={"/shop"}
                        className="hover:border-b-[3px] h-[27px] text-[16px] font-medium border-black"
                    >
                        Shop
                    </Link>
                    <Link
                        href={"/news"}
                        className="hover:border-b-[3px] h-[27px] text-[16px] font-medium  border-black"
                    >
                        News
                    </Link>
                    <Link
                        href={"/contacts"}
                        className="hover:border-b-[3px] h-[27px] text-[16px] font-medium border-black"
                    >
                        Contacts
                    </Link>
                </nav>

                <div className="flex gap-10">
                    <Link href={"/profile"}>
                        <Image
                            src={"/images/acc.svg"}
                            alt={"acc"}
                            layout="responsive"
                            height={28}
                            width={28}
                            className="max-w-[28px]"
                        ></Image>
                    </Link>
                    <button>
                        <Image
                            src={"/images/search.svg"}
                            alt={"search"}
                            layout="responsive"
                            height={28}
                            width={28}
                            className="max-w-[28px]"
                        ></Image>
                    </button>
                    <button>
                        <Image
                            src={"/images/likes.svg"}
                            alt={"likes"}
                            layout="responsive"
                            height={28}
                            width={28}
                            className="max-w-[28px]"
                        ></Image>
                    </button>
                    <Link href={"/cart"}>
                        <Image
                            src={"/images/cart.svg"}
                            alt={"cart"}
                            layout="responsive"
                            height={28}
                            width={28}
                            className="max-w-[28px]"
                        ></Image>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
