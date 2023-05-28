import Image from "next/image";
export default function Pro3(){
    return(
      <div className=""><div className=" md:h-[400px] md:w-[300px] bg-[#EFE1C7] mr-2 w-[300px] mb-8 ">
      <div className="px-5 pt-10">Flex Sweatshirt</div>
        <div className="px-5 "><span className="line-through">$100</span><span className="font-bold"> $90.00</span></div>
        <div className=""><Image src={"/pro2.webp"} width={242}   height={242} alt="" /></div>
      </div></div>
    )
}