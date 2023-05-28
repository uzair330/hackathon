import Image from "next/image";
export default function Pro4(){
    return(
        
      <div className=""><div className="h-[400px]  bg-[#D7D7D9] w-[300px] ">
      <div className="px-5 pt-10">Flex Sweatshirt</div>
        <div className="px-5 "><span className="line-through">$100</span><span className="font-bold"> $90.00</span></div>
        <div className=""><Image src={"/pro3.webp"} width={240}   height={240} alt="" /></div>
      </div></div>
            
    )
}