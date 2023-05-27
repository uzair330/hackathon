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
export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-13  px-24 m-10">
      <div className="">
        <Image src={"/Logo.webp"} width={150} height={150} alt=""></Image>
      </div>

      <div className="">
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
        <div className="absolute ">
          <SearchIcon className="h-4" />
        </div>
        <div>
          <Input
            className="h-6 relative px-7 w-96"
            type="email"
            placeholder="What you looking for?"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F1F1F1] p-[14px]">
        <ShoppingCart className="relative" />
        <div className="flex items-center justify-center top-10 right-36 absolute w-4 h-4 rounded-full bg-[#E62E32] pb-2 text-[12px] pt-[5px] text-white">
          0
        </div>
      </div>
    </div>
  );
}
