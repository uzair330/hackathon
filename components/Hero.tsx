import Image from "next/image";
import { Button } from "../components/ui/button"
import { ShoppingCart } from "lucide-react"
export default function Hero() {
  return (
    <>
    
      <div className="flex justify-center  md:px-36 md:py-8 px-8">
        <div className="w-full mt-12">
        <span className=" w-[450px] h-36 text-[#1F01FF] bg-[#E1EDFF] rounded-md py-2 px-6 mr-10 mb-10 mt-20 font-semibold ">Sale 70%</span>
          <div>

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl md:py-10 py-5">
              An Industrial Take on Streetwear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 md:w-[420px]  ">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
           <div className=""><Button className=" w-52 h-16 text-lg rounded-none mr-10 mb-10 mt-10">
      <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
    </Button></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-80 md:w-full">
      <div className="flex">
    <span className="pr-14"><Image src={"/h1.webp"} width={100} height={100} alt="" /></span>
<span className="pr-14"><Image src={"/h2.webp"} width={100} height={100} alt="" /></span>
</div>

<div className="flex">
<span className="pr-14"><Image src={"/h3.webp"} width={100} height={100} alt="" /></span>
<span className="pr-14"><Image src={"/h4.webp"} width={100} height={100} alt="" /></span>
</div>
</div>

    {/* <div className="flex gap-1 mt-16 ">
      
<span className="pr-14"><Image src={"/h1.webp"} width={100} height={100} alt="" /></span>
<span className="pr-14"><Image src={"/h2.webp"} width={100} height={100} alt="" /></span>

<span className="pr-14"><Image src={"/h3.webp"} width={100} height={100} alt="" /></span>
<span className="pr-14"><Image src={"/h4.webp"} width={100} height={100} alt="" /></span>

    </div>
    
<div className="md:hidden">
    <div className="flex items-center justify-center gap-16">
      <div className=""><span className="pr-14"><Image src={"/h1.webp"} width={100} height={100} alt="" /></span></div>
      <div className=""><span className="pr-14"><Image src={"/h2.webp"} width={100} height={100} alt="" /></span></div>
    </div>
    <div className="flex items-center justify-center gap-16">
      <div className=""><span className="pr-14"><Image src={"/h3.webp"} width={100} height={100} alt="" /></span></div>
      <div className=""><span className="pr-14"><Image src={"/h4.webp"} width={100} height={100} alt="" /></span></div>
    </div>
    </div> */}
        </div>
        </div>
        <div className="md:flex items-center justify-center w-full ">
            <div className="w-[600px] h-[600px]  rounded-full bg-[#FBECE2] relative hidden md:block"></div>
            <div className=" item-center  absolute hidden md:block">
                <Image src={"/header.webp"} width={670} height={670} alt="" /></div>
        </div>
      </div>
    </>
  );
}
