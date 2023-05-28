"use client";
import { SearchIcon, ShoppingCart } from "lucide-react";
import { Input } from "../components/ui/input";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";
import Menu from "./Menu";
export default function NavBar() {
  return (
    <div className="flex md:justify-between justify-center md:gap-0 gap-14  items-center h-13   md:px-24 md:m-10 mt-6">
      <div className="">
        <Image className="md:w-40 w-28 " src={"/Logo.webp"} width={150} height={150} alt=""></Image>
        
      </div>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Female</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Male</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>All Products</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center">
        <div className="md:absolute ">
          <SearchIcon className="h-4 hidden md:block" />
        </div>
        <div>
          <Input
            className="h-6 md:relative px-7 w-96 hidden md:block"
            type="email"
            placeholder="What you looking for?"
          />
        </div>
      </div>
      
      <div className="md:flex items-center md:justify-center w-11 h-11 rounded-full bg-[#F1F1F1] p-[14px] hidden justify-between">
        
        <ShoppingCart className="relative " />
        <div className="flex items-center justify-center top-10 right-36 absolute w-4 h-4 rounded-full bg-[#E62E32] pb-2 text-[12px] pt-[5px] text-white">
          0
        </div>
      </div>
      <div className="md:hidden block m-2 px-5 ">
        <Menu />
      </div>
    </div>
  );
}
