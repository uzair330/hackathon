"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../components/ui/menubar";
import { MenuIcon,ShoppingCart } from "lucide-react";
export default function Menu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <MenuIcon />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Home <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>

          <MenubarSeparator />
          <MenubarItem>
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F1F1F1] p-[14px] ">
        
        <ShoppingCart className="relative " />
        <div className="flex items-center justify-center top-2 right-[130px] absolute w-4 h-4 rounded-full bg-[#E62E32] pb-2 text-[12px] pt-[5px] text-white">
          0
        </div>
      </div>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Female</MenubarItem>
          <MenubarItem>Male</MenubarItem>
          <MenubarItem>Kids</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>All Products</MenubarItem>
          
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
