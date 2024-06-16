import Image from "next/image"
import ProductCard from "./(components)/productCard"
import PromoCard from "./(components)/PromoCard"
export default function Home() {
    return (
        <main className="w-full relative flex flex-col items-center text-[#333333]">
            <section className="w-full relative lg:min-h-[650px] min-h-[550px] lg:mt-0 mt-[6em] ">
                <div className="w-full bg-black h-[100%] absolute z-5 opacity-40"></div>
                <Image
                    src={"/images/back.svg"}
                    alt={"back"}
                    layout="fill"
                    objectFit="cover"
                    className=" w-full"
                ></Image>
            </section>

            <section className="absolute w-[90%] z-6 max-w-[600px] lg:w-[46%] mt-[12em] lg:mt-0 lg:bg-white lg:right-[5%]  lg:top-[10%] lg:p-[3em]">
                <span className=" flex flex-col gap-2 w-full text-white lg:text-black text-center">
                    <h4 className="text-16px font-semibold">New Arrival</h4>
                    <h1 className="text-[50px] font-bold w-full">
                        Discover Our New Collection
                    </h1>
                    <p className="text-18px font-semibold">
                        Experience the luxury of our new lipsticks and elevate
                        your beauty routine today.
                    </p>
                </span>
            </section>

            <section className="flex flex-col mt-[3em] w-full items-center">
                <span className="flex flex-col w-full items-center mb-[4em]">
                    <h1 className=" text-[32px] mb-[0.5em] font-bold">
                        Browse The Range
                    </h1>
                    <p className="font-reg text-[20px] text-[#666666] max-w-[80%] text-center">
                        Explore our diverse range of lipsticks designed to suit
                        every style and occasion. Whether you prefer a bold
                        matte finish, a glossy shine, or long-lasting color, our
                        collection has the perfect lipstick for you.
                    </p>
                </span>

                <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory ">
                    <div className="flex gap-10">
                        <PromoCard></PromoCard>
                        <PromoCard></PromoCard>
                        <PromoCard></PromoCard>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col mt-[1.5em] mb-[3em] items-center">
                <h1 className="text-[32px] mb-[0.5em] font-bold">
                    Our Products
                </h1>

                <div className="flex justify-center max-w-[97%] gap-4 flex-wrap">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>

                <button className="hover:bg-[#F6F6F6] transition transition-100 active:bg-[#CECECE] border-2 border-black text-[16px] mt-[3em] font-bold p-[4em] pt-[0.5em] pb-[0.5em]">
                    Show More
                </button>
            </section>
        </main>
    )
}
