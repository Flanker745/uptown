import { PiSwimmingPoolDuotone } from "react-icons/pi";
import { useState } from "react";
import { AffordableData } from "./AffordableData";
function Affordable() {
  const [skylla,updateSkylla] = useState(0)
  const AffortableData = AffordableData
  return (
    <>
      <div className="w-[95%] m-auto md:mt-[90px] mt-7  ">
        <h4 className="text-primary font-semibold text-center	text-[#173F63]">
          MAKING LIVING SPACE AFFORDABLE
        </h4>
        <h6 className="px-2 sm:text-[18px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="flex flex-wrap justify-center sm:justify-between mt-5">
          {AffortableData.map((v,i)=>{
            return(
              <button key={i} onClick={()=>{updateSkylla(v.id)}} className={`lg:w-[24%] ${skylla !==v.id ? "grayscale" : ""}  sm:w-[48%] w-[98%] text-center text-[#325D84] font-semibold`}>
            <div className="rounded-[10px] h-[140px] xl:h-[140px] overflow-hidden">
              <img className="w-full h-full hover:scale-105 duration-300" src={v.img} alt="" />
            </div>
            <h5 >{v.heading}</h5>
          </button>
            )
          })}
        </div>
        <div className="mt-8 flex flex-wrap  items-center overflow-hidden lg:border-2 border-[#325D84] rounded rounded-[15px]">
          <div className="lg:w-1/2 w-full h-full pe-5  ">
            <img className="w-full h-full" src={AffortableData[skylla].img} alt="" />
          </div>
          <div className="lg:w-1/2 w-full ">
            <div className="md:text-[40px] text-[25px] text-center lg:text-start text-[#325D84] font-extrabold">
              <h4>WELCOME TO</h4>
              <h4 className="md:mt-[-20px]">THE {AffortableData[skylla].heading}</h4>
            </div>
            <div className="md:w-[85%] mt-2 sm:mt-5 md:text-[18px] text-[14px] text-netural-500">
              <p>
                {AffortableData[skylla].dis1}
              </p>
              <p className="mt-1 sm:mt-2">
              {AffortableData[skylla].dis2}
              </p>
            </div>
            <div className="flex text-[#325D84] mt-4 sm:mt-9">
              <div className="w-[20%] flex flex-col items-center">
                <div className="sm:text-[50px] text-[30px] ">
                  <PiSwimmingPoolDuotone />
                </div>
                <h5 className="w-[75%] sm:text-[16px] text-[12px] text-center">
                  Air Conditined
                </h5>
              </div>
              <div className="w-[20%] flex flex-col items-center">
                <div className="sm:text-[50px] text-[30px] ">
                  <PiSwimmingPoolDuotone />
                </div>
                <h5 className="w-[75%] sm:text-[16px] text-[12px] text-center">
                  Swimming Pool
                </h5>
              </div>
              <div className="w-[20%] flex flex-col items-center">
                <div className="sm:text-[50px] text-[30px] ">
                  <PiSwimmingPoolDuotone />
                </div>
                <h5 className="w-[75%] sm:text-[16px] text-[12px] text-center">
                  Art Gymnasium
                </h5>
              </div>
              <div className="w-[20%] flex flex-col items-center">
                <div className="sm:text-[50px] text-[30px] ">
                  <PiSwimmingPoolDuotone />
                </div>
                <h5 className="w-[75%] sm:text-[16px] text-[12px] text-center">
                  Pool Table
                </h5>
              </div>
              <div className="w-[20%] flex flex-col items-center">
                <div className="sm:text-[50px] text-[30px] ">
                  <PiSwimmingPoolDuotone />
                </div>
                <h5 className="w-[75%] sm:text-[16px] text-[12px] text-center">
                  Party Mall
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default  Affordable