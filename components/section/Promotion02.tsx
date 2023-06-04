import Image from 'next/image'
import React from 'react'

export const Promotion02 = () => {
  return (
    
    <div className="grid gap-4 lg:grid-cols-4 ">
  <div className="md:col-span-2 grid gap-4 ">
    <div className="bg-slate-500 h-[180px]  pr-3 ">
      <div className="flex justify-between items-center  ">
      <div className="col-span-2 pl-16 ">
                <div className="text-4xl font-bold ">
                      GET UP TO <span className="text-5xl"> 60%</span>
                </div>
                <div className="">For the summer season</div>
              </div>
              <div className="flex justify-center h-[180px] w-[170px]  ">
                <Image src={"/pro1.webp"} width={200} height={210} alt=''/>
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
    <div className="px-8 py-5">
    <div className="nowrap">Flex Sweatshirt</div>
    <div className="flex">
      <div className="line-through">$100.00</div>
      <div className="px-1">$75.00</div>
    </div>
    </div>
    <div className="flex justify-center ">
    <Image src={"/pro2.webp"} width={220} height={360} alt=''/>
    </div>
  </div>
  <div className="bg-blue-700 h-[376px] ">
    <div className="px-8 py-5 ">
    <div className="nowrap">Flex Push Button Bomber</div>
    <div className="flex">
      <div className="line-through">$100.00</div>
      <div className="px-1">$75.00</div>
    </div>
    </div>
    <div className="flex justify-center  ">
    <Image src={"/pro3.webp"} width={220} height={360} alt=''/>
    </div>
  </div>
  

</div>


  )
}
