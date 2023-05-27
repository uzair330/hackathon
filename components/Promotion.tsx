import Image from "next/image";
import { Button } from "../components/ui/button"
export default function Promotion() {
  return (
    <>
      <div className="flex items-center justify-center uppercase text-[12px] font-semibold pt-6 pb-5 text-[#1F01FF] ">
        PROMOTIONS
      </div>
      <div className="flex items-center justify-center uppercase text-3xl font-bold  pb-11">
        Our Promotions Events
      </div>


      <div className="flex justify-center items-center mx-10">
        <div className="">
          <div className="h-48 w-[600px] bg-[#D6D6D8] mb-4">
            <div className="flex">
              <div className=" w-full ">
               
                <div className="font-bold text-3xl pl-10 pt-16"> GET UP TO <span className="text-4xl">60%</span></div>
                <div className=" pl-10 text-xl font-medium"> For the summer season</div>
                
                </div>
              <div className="flex w-full justify-center "><Image src={"/pro1.webp"} width={248} height={248} alt="" /></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-48 w-[600px] bg-[#212121] text-white">
            <div className="font-bold text-3xl pb-4">GET 30% <span className="text-4xl">Off</span></div>
            <div className="">USE PROMO CODE</div>
            <div className="flex items-center justify-center m-2 p-2 w-80 h-10 bg-[#474747] text-xl rounded-md font-semibold">DINEWEEKEND SALE</div>
          </div>
        </div>
        <div className="flex ">
          <div className="h-[400px] w-80 bg-[#EFE1C7] mx-4">
            <div className="px-5 pt-10">Flex Sweatshirt</div>
            <div className="px-5 "><span className="line-through">$100</span><span className="font-bold"> $75.00</span></div>
            <div className=""><Image src={"/pro2.webp"} width={240} height={240} alt="" /></div>
          </div>
          <div className="h-[400px] w-80 bg-[#D7D7D9] ">
          <div className="px-5 pt-10">Flex Sweatshirt</div>
            <div className="px-5 "><span className="line-through">$100</span><span className="font-bold"> $75.00</span></div>
            <div className=""><Image src={"/pro3.webp"} width={240} height={240} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
