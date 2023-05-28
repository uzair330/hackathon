import Image from "next/image";
export default function Pro() {
  return (
    <div className="flex items-center justify-center">
    <div className="grid md:grid-cols-2 m-20">
        <div className="">
            <div className=""> <div className="h-48  w-[400px]  bg-[#D6D6D8] m-2">
            <div className="flex">
              <div className=" w-full ">
               
                <div className="font-bold text-3xl pl-10 pt-16"> GET UP TO <span className="text-4xl">60%</span></div>
                <div className=" pl-10 text-xl font-medium"> For the summer season</div>
                
                </div>
              <div className="flex w-96 justify-center "><Image className="w-48 h-48 pt-16" src={"/pro1.webp"} width={1000} height={1000} alt="" /></div>
            </div>
          </div></div>
            <div className=""><div className="flex flex-col justify-center items-center h-48 w-[600px] bg-[#212121] text-white">
            <div className="font-bold text-3xl pb-4">GET 30% <span className="text-4xl">Off</span></div>
            <div className="">USE PROMO CODE</div>
            <div className="flex items-center justify-center m-2 p-2 w-80 h-10 bg-[#474747] text-xl rounded-md font-semibold">DINEWEEKEND SALE</div>
          </div></div>
        </div>
        <div className="grid md:flex gap-2">
            <div className=""><div className="h-[400px] md:w-60 w-60  bg-[#EFE1C7] mx-2">
            <div className="px-5 pt-10">Flex Sweatshirt</div>
            <div className="px-5 "><span className="line-through">$100</span><span className="font-bold"> $75.00</span></div>
            <div className=""><Image src={"/pro2.webp"} width={240} height={240} alt="" /></div>
          </div></div>
            <div className=""><div className="h-[400px] w-80 bg-[#D7D7D9] ">
          <div className="px-5 pt-10">Flex Sweatshirt</div>
            <div className="px-5 "><span className="line-through">$100</span><span className="font-bold"> $90.00</span></div>
            <div className=""><Image src={"/pro3.webp"} width={240}   height={240} alt="" /></div>
          </div></div>
        </div>
    </div>
    </div>
  );
}
