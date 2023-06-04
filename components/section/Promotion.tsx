import React from "react";
import Pro1 from "../PromoPortion/Pro1";
import Image from "next/image";

export const Promotion = () => {
  return (
    <div className="m-32">
      {/* <div className="grid gap-4 lg:grid-cols-4 ">
  <div className="md:col-span-2 grid gap-6">
    <div className="bg-[#D6D6D8] h-[180px] pl-16 pr-3">
      <div className="flex justify-between items-center ">
      <div className="col-span-2 ">
                <div className="text-4xl font-bold ">
                      GET UP TO <span className="text-5xl"> 60%</span>
                </div>
                <div className="">For the summer season</div>
              </div>
              <div className="flex justify-center  ml-2 items-center ">
                
             <Image className=""  src="/pro1.webp" alt="" width={310} height={210} />
              </div>
    </div>
    </div>
    <div className="bg-[#212121]  h-[180px] text-white">
      <div className="flex justify-center items-center text-center">
      <div className="col-span-2 ">
                <div className="text-4xl font-bold pt-10 pb-3">
                      GET 30% <span className="text-5xl"> OFF</span>
                </div>
                <div className="p-3 uppercase">Use Promo code</div>
                <div className=""><span className="bg-[#474747] p-2 px-8 rounded-md font-semibold text-xl">DINEWEKENDSALE</span></div>
              </div>
              
    </div>
    </div>



  </div>
  <div className="bg-blue-700 h-[444px]">3</div>
  <div className="bg-green-600 h-[444px]">4</div>

</div> */}

<div className="grid gap-4 lg:grid-cols-4 ">
  <div className="md:col-span-2 grid gap-4 ">
    <div className="bg-slate-500 h-[180px] pl-16 pr-3 ">
      <div className="flex justify-between items-center  ">
      <div className="col-span-2 ">
                <div className="text-4xl font-bold ">
                      GET UP TO <span className="text-5xl"> 60%</span>
                </div>
                <div className="">For the summer season</div>
              </div>
              <div className="flex justify-center h-[180px]  ml-2 ">
              <Image className=""  src="/pro1.webp" alt="" width={310} height={210} />
              </div>
              </div>
    </div>
    </div>
    <div className="bg-[#212121]  h-[180px] text-white">
      <div className="flex justify-center items-center text-center">
      <div className="col-span-2 ">
                <div className="text-4xl font-bold pt-6 pb-2">
                      GET 30% <span className="text-5xl"> OFF</span>
                </div>
                <div className="p-3 uppercase">Use Promo code</div>
                <div className=""><span className="bg-[#474747] p-2 px-8 rounded-md font-semibold text-xl">DINEWEKENDSALE</span></div>
              </div>
              
    </div>
    </div>



  </div>
  <div className="bg-blue-700 h-[376px] ">
    <div className="px-10 py-5 font-semibold text-xl">
    <div className="">Flex Sweatshirt</div>
    <div className="flex">
      <div className="line-through">$100.00</div>
      <div className="px-1">$75.00</div>
    </div>
    </div>
    <div className="flex justify-center h-[276px]  ">
    <Image className=""  src="/pro2.webp" alt="" width={310} height={210} />
              
    </div>
  </div>
  <div className="bg-blue-700 h-[376px] ">
    <div className="px-10 py-5 font-semibold text-xl">
    <div className="">Flex Sweatshirt</div>
    <div className="flex">
      <div className="line-through">$100.00</div>
      <div className="px-1">$75.00</div>
    </div>
    </div>
    <div className="flex justify-center h-[276px]  ">
    <Image className=""  src="/pro3.webp" alt="" width={310} height={210} />
    </div>
  </div>
  

</div>


    

  );
};
