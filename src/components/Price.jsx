import React from "react";

function PricePaln() {
  return (
    <div className="mt-9 ">
      <div className="relative border w-full flex flex-wrap">
        <div className=" md:w-[70%] w-full h-[150px] border bg-cover bg-center bg-[url('./images/Rectangle443.png')]"></div>
        <div className="md:w-[30%] w-full pt-[30px] border flex flex-col items-center sm:pb-[90px]">
          <div className="">
            <h5 className="text-[25px]   font-semibold">
              3 BHK + STAFF + LOUNGE
            </h5>
            <h5 className="text-[25px] text-[#173F63] font-semibold">
              1920 SQFT
            </h5>
            <h5 className=" text-[14px]">
              Introdusing Our Excutive Low Rise Tower
            </h5>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-[1.5px] flex items-center justify-center absolute top-0 right-0 w-full h-full">
          <button className="text-white px-3 py-2 border border-white rounded flex gap-2 text-[22px]">
            {" "}
            <span className="text-[30px]">
              <FaUnlock />
            </span>{" "}
            Unlock Price
          </button>
        </div>
      </div>
      <div className="relative border mt-2 w-full flex flex-wrap">
        <div className=" md:w-[70%] w-full h-[150px] border bg-cover bg-center bg-[url('./images/Rectangle642.png')]"></div>
        <div className="md:w-[30%] w-full pt-[30px]  border">
          <div className="flex flex-col items-center">
            <div>
              <h5 className="text-[25px] ">3 BHK + STAFF + LOUNGE</h5>
              <h5 className="text-[25px] text-[#173F63] font-semibold">
                1920 SQFT
              </h5>
              <h5 className=" text-[14px]">
                Introdusing Our Excutive Low Rise Tower
              </h5>
            </div>
          </div>
          <button className="block w-full bg-[#173F63] mt-9 text-white text-[25px] font-bold">
            <FaIndianRupeeSign className=" inline" /> 2.34CR
          </button>
        </div>
      </div>
      <div className="relative border w-full flex flex-wrap">
        <div className=" md:w-[70%] w-full h-[150px] border bg-cover bg-center bg-[url('./images/Rectangle443.png')]"></div>
        <div className="md:w-[30%] w-full pt-[30px] border flex flex-col items-center sm:pb-[90px]">
          <div className="">
            <h5 className="text-[25px]   font-semibold">
              3 BHK + STAFF + LOUNGE
            </h5>
            <h5 className="text-[25px] text-[#173F63] font-semibold">
              1920 SQFT
            </h5>
            <h5 className=" text-[14px]">
              Introdusing Our Excutive Low Rise Tower
            </h5>
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-[1.5px] flex items-center justify-center absolute top-0 right-0 w-full h-full">
          <button className="text-white px-3 py-2 border border-white rounded flex gap-2 text-[22px]">
            {" "}
            <span className="text-[30px]">
              <FaUnlock />
            </span>{" "}
            Unlock Price
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricePaln;
