import React from 'react'
import { ShadNav } from './shadNav'
import {SearchIcon} from "lucide-react"
import {MenuIcon} from "lucide-react"
import {ShoppingCartIcon} from "lucide-react"
import Image from 'next/image'
export const Nav = () => {
  return (
    <nav>
<div className="flex justify-between items-center px-28 py-5"> 
<div className="">
    <Image src={"/Logo.webp"} width={100} height={100} alt='Logo' />
</div>
<div className="hidden lg:block"> <ShadNav /> </div>
<div className="lg:flex border border-gray-200  rounded-md p-1 items-center hidden w-[30%] ">
    <SearchIcon  size={16}/>
    <input className='px-1 text-sm' type="text" placeholder='What are you looking for'/>
</div>


<div className="lg:block hidden  p-2">

<div className="h-11 w-11 rounded-full bg-gray-200 relative flex justify-center items-center">
  <div className="relative">
    <div className="absolute left-3 bottom-2 flex h-5 w-5 items-center justify-center rounded-full text-sm pb-1 bg-red-600 text-white">0</div>
  </div>
  <div className=" "><ShoppingCartIcon size={25} /></div>
</div>
</div>
<div className="lg:hidden"><MenuIcon /></div>
</div>


  </nav>
  )
}
