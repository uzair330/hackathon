"use client"
import Image from 'next/image'
import React from 'react'
import { ShoppingCartIcon } from "lucide-react"
 
import { Button } from "../../components/ui/button"
export const Hero = () => {
  return (
    <div className=" pt-16 pb-20 mx-14">
    <div className="flex ">
        <div className="">
            <div className="bg-[#E1EDFF] w-28 rounded-md mb-10 mt-4 flex justify-center items-center text-[#1F01FF] font-semibold p-2">Sale 70%</div>
        <div className="  lg:text-6xl text-5xl font-bold">An Industrial Take on Streetwear</div>
        <p className='py-8'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        <Button  className='w-48 h-16 text-[18px] rounded-sm'>
      <ShoppingCartIcon  className="mr-2 h-6 w-6 " /> Start Shopping
    </Button>
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-1 py-8">
  <div className="p-2"> <Image src={"/h1.webp"} width={100} height={100} alt='' /></div>
  <div className="p-2"><Image src={"/h2.webp"} width={100} height={100} alt='' /></div>
  <div className="p-2"><Image src={"/h3.webp"} width={100} height={100} alt='' /></div>
  <div className="p-2"><Image src={"/h4.webp"} width={100} height={100} alt='' /></div>
</div>
        </div>

<div className="hidden lg:block">
<div className="bg-[#FBECE2] w-[550px] h-[550px] rounded-full relative flex justify-center items-center">
  <div className="w-[630px] h-[630px] rounded-full absolute pt-4">
    <Image src={"/header.webp"} width={1000} height={1000} alt='' />
  </div>
</div>
</div>
</div>
</div>
  )
}
