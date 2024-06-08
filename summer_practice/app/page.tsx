import Image from "next/image"
import ProductCard from "./(components)/productCard"
import PromoCard from "./(components)/PromoCard"
export default function Home() {
    return (
        <main className="w-full relative flex flex-col items-center text-[#333333]">
            <div className="w-full relative lg:min-h-[650px] min-h-[550px] lg:mt-0 mt-[6em] ">
                <div className="w-full bg-black h-[100%] absolute z-5 opacity-40"></div>
                <Image
                    src={"/images/back.svg"}
                    alt={"back"}
                    layout="fill"
                    objectFit="cover"
                    className=" w-full"
                ></Image>
            </div>

            <div className="absolute w-[70%] z-6 max-w-[600px] flex flex-col gap-2 lg:w-[46%] mt-[12em] lg:mt-0 text-white lg:text-black lg:bg-white lg:right-[5%] lg:top-[10%] lg:p-[3em]">
                <h4 className="text-16px font-semibold">New Arrival</h4>
                <h1 className="text-[50px] font-bold">
                    Discover Our New Collection
                </h1>
                <p className="text-18px font-semibold">
                    Experience the luxury of our new lipsticks and elevate your
                    beauty routine today.
                </p>
            </div>

            <div className="flex flex-col mt-[3em] w-full items-center">
                <div className="flex flex-col w-full items-center mb-[4em]">
                    <h1 className=" text-[32px] mb-[0.5em] font-bold">
                        Browse The Range
                    </h1>
                    <p className="font-reg text-[20px] text-[#666666] max-w-[80%] text-center">
                        Explore our diverse range of lipsticks designed to suit
                        every style and occasion. Whether you prefer a bold
                        matte finish, a glossy shine, or long-lasting color, our
                        collection has the perfect lipstick for you.
                    </p>
                </div>

                <div className="flex gap-10 justify-center">
                    <PromoCard></PromoCard>
                    <PromoCard></PromoCard>
                    <PromoCard></PromoCard>
                </div>
            </div>

            <div className="w-full flex flex-col mt-[1.5em] mb-[3em] items-center">
                <h1 className="text-[32px] mb-[0.5em] font-bold">
                    Our Products
                </h1>

                <div className="flex justify-center sm:justify-start gap-4 pl-[1em] pr-[1em] flex-wrap ">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>

                <button className="border-2 border-black text-[16px] mt-[3em] font-bold p-[4em] pt-[0.5em] pb-[0.5em]">
                    Show More
                </button>
            </div>
        </main>
    )
}
