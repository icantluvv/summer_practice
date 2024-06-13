"use client"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const BurgerMenu = () => {
    const [showBurger, setShowBurger] = useState(false)

    const menuRef = useRef<HTMLDivElement | null>(null)

    function handleBurger() {
        setShowBurger(!showBurger)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!menuRef.current?.contains(event.target as Node)) {
                // Клик был за пределами меню, закрываем меню
                setShowBurger(false)
            }
        }

        const handleScroll = () => {
            // Обработка события скролла
            // Закрываем меню при скролле
            setShowBurger(false)
        }

        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className="w-full flex lg:hidden fixed z-10 flex-col items-center">
            <section className="w-full bg-white h-[100px] flex justify-center border-b ">
                <div className="w-[90%] flex items-center justify-between">
                    <div className=" flex mt-[2vh]">
                        <Link className=" flex w-full" href={"/"}>
                            <Image
                                src={"/images/logo.svg"}
                                alt={"logo"}
                                width={50}
                                height={32}
                                layout="responsive"
                                className="max-w-[50px]"
                            ></Image>
                            <h1 className="font-bold text-[34px] ml-[0.2em]  ">
                                Games
                            </h1>
                        </Link>
                    </div>
                    <button
                        onClick={handleBurger}
                        className={`burger-button ${
                            showBurger ? "block" : "hidden"
                        }`}
                        type="button"
                        id="close-button"
                    >
                        <Image
                            src={
                                // showBurger
                                "/images/closeburger.svg"
                                // : "/images/burger.svg"
                            }
                            alt={showBurger ? "close-button" : "burger-button"}
                            width={60}
                            height={60}
                            layout="responsive"
                            className={`max-w-[40px] `}
                        ></Image>
                    </button>
                    <button
                        onClick={handleBurger}
                        className={`burger-button ${
                            showBurger ? "hidden" : "block"
                        }`}
                        type="button"
                        id="close-button"
                    >
                        <Image
                            src={"/images/burger.svg"}
                            alt={showBurger ? "close-button" : "burger-button"}
                            width={60}
                            height={60}
                            layout="responsive"
                            className={`max-w-[40px] `}
                        ></Image>
                    </button>
                </div>
            </section>
            <div className="relatie w-full z-[-10]">
                <div
                    ref={menuRef}
                    className={`w-full flex justify-center overflow-hidden transition-max-height duration-300 ${
                        showBurger ? "max-h-[400px]" : "max-h-0"
                    } absolute top-[100px] left-0 bg-white shadow-lg`}
                    style={{
                        maxHeight: showBurger ? "400px" : "0",
                        overflow: "hidden"
                    }}
                >
                    <nav className="flex-col w-[70%] flex items-start gap-9 mt-[2em] mb-[2em]">
                        <Link
                            href={"/"}
                            className=" text-[30px] font-reg border-black"
                        >
                            home
                        </Link>
                        <Link
                            href={"/shop"}
                            className="text-[30px] font-reg border-black"
                        >
                            shop
                        </Link>
                        <Link
                            href={"/"}
                            className=" text-[30px] font-reg  border-black"
                        >
                            news
                        </Link>
                        <Link
                            href={"/"}
                            className="text-[30px] font-reg border-black"
                        >
                            contacts
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default BurgerMenu
