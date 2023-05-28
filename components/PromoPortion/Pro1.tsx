import Image from "next/image";
export default function Pro1(){
    return(
        <div className=""> <div className="md:h-48 h-80   bg-[#D6D6D8] md:w-[630px] mx-20 w-[300px] md:mb-4 mb-8">
            <div className="md:flex">
              <div className=" w-full ">
               
                <div className="font-bold text-3xl pl-10 md:pt-20 pt:8 px-5 pt-4 "> GET UP TO <span className="text-4xl">60%</span></div>
                <div className=" pl-10 text-xl font-medium"> For the summer season</div>
                
                </div>
              <div className="flex w-full justify-center"><Image className="md:overflow-hidden w-[210px]  h-[210px]  md:pt-7 mt-1 md:w-[210px] md:h-[210px] md:p-5 p-4" src={"/pro1.webp"} width={248} height={248} alt="" /></div>
            </div>
          </div></div>
    )
}