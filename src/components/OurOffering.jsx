import Apartments1 from "../images/Rectangle 635.png";
import Apartments2 from "../images/Rectangle 635 (1).png";
import Apartments3 from "../images/Rectangle 635 (2).png";
import { LuSend } from "react-icons/lu";
import { LiaChartAreaSolid } from "react-icons/lia";

import { HiMiniPencilSquare } from "react-icons/hi2";
import {
  IoLocationOutline,
  IoKeyOutline,
  IoCallOutline,
} from "react-icons/io5";
 function OurOffring() {
  return (
    <>
      <div id="product" className="sm:pt-[90px] pt-9">
        <h4 className="text-primary  font-semibold text-center	text-[#173F63]">
          OUR OFFERING
        </h4>
        <h6 className=" text-center	sm:text-[18px]">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="w-[95%] m-auto flex flex-wrap sm:mt-5 justify-between">
          <div className="lg:w-[32%] sm:w-[48%] w-[95%] m-auto mt-8 md:mt-0  border p-2">
            <div className="w-full">
              <img className="w-full" src={Apartments1} alt="" />
            </div>
            <div className="mt-2 px-1">
              <h4 className="text-[20px] sm:text-[27px] font-bold text-[#173F63]">
                High Rise Apartments
              </h4>
              <div className="flex items-center">
                <IoLocationOutline className="text-[#325D84]" />
                <h4 className="text-[12px] font-semibold text-neutral-500">
                  Airport Road, Zirakpur
                </h4>
              </div>
              <div className="border-t-2 mt-2 ">
                <div className="flex">
                  <div className="w-1/2 px-1">
                    <h4 className="text-[12px] font-semibold  text-neutral-500">
                      Project type
                    </h4>
                    <h4 className="text-[13px] font-bold  text-[#325D84]">
                      Highrise Apartments
                    </h4>
                  </div>
                  <div className="w-1/2 px-1 flex items-center gap-2">
                    <div className="text-[24px] sm:text-[30px] text-[#325D84]">
                      <LiaChartAreaSolid />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold  text-neutral-500">
                        Area
                      </h4>
                      <h4 className="text-[13px] font-bold  text-[#325D84]">
                        2520 Sq Ft
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3">
                  <div className="w-1/2 px-1 flex items-center gap-2">
                    <div className="text-[24px] sm:text-[30px] text-[#325D84]">
                      <IoKeyOutline />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold  text-neutral-500">
                        Status
                      </h4>
                      <h4 className="text-[13px] font-bold  text-[#325D84]">
                        Under Construction
                      </h4>
                    </div>
                  </div>
                  <div className="w-1/2 px-1 flex items-center gap-2">
                    <div className="text-[24px] sm:text-[30px] text-[#325D84]">
                      <HiMiniPencilSquare />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold  text-neutral-500">
                        Unit Type
                      </h4>
                      <h4 className="text-[13px] font-bold  text-[#325D84]">
                        4 BHK Homes
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] sm:w-[48%] w-[95%] m-auto mt-8 md:mt-0  border p-2">
            <div className="w-full">
              <img className="w-full" src={Apartments2} alt="" />
            </div>
            <div className="mt-2 px-1">
              <h4 className="text-[20px] sm:text-[27px] font-bold text-[#173F63]">
                High Rise Apartments
              </h4>
              <div className="flex items-center">
                <IoLocationOutline className="text-[#325D84]" />
                <h4 className="text-[12px] font-semibold text-neutral-500">
                  Airport Road, Zirakpur
                </h4>
              </div>
              <div className="border-t-2 mt-2 ">
                <div className="flex">
                  <div className="w-1/2 px-1">
                    <h4 className="text-[12px] font-semibold  text-neutral-500">
                      Project type
                    </h4>
                    <h4 className="text-[13px] font-bold  text-[#325D84]">
                      Highrise Apartments
                    </h4>
                  </div>
                  <div className="w-1/2 px-1 flex items-center gap-2">
                    <div className="text-[24px] sm:text-[30px] text-[#325D84]">
                      <LiaChartAreaSolid />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold  text-neutral-500">
                        Area
                      </h4>
                      <h4 className="text-[13px] font-bold  text-[#325D84]">
                        2520 Sq Ft
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3 justify-between">
                  <button className="lg:px-3 px-1 py-1 text-[12px] sm:text-[14px] :text-[16px] border-2 border-[#325D84] gap-1 bg-[rgba(50,93,132,0.1)] flex items-center text-[#325D84] font-semibold">
                    <LuSend className="sm:text-[18px]" /> Enquire now{" "}
                  </button>
                  <button className="lg:px-3 px-1 py-1 text-[12px] sm:text-[14px] xl:text-[16px] border-2 border-[#325D84] flex items-center gap-3 bg-[rgba(50,93,132,0.1)] text-[#325D84] font-semibold">
                    {" "}
                    <IoLocationOutline className="text-[20px]" /> Book a site
                    visit{" "}
                  </button>
                  <button className="text-[22px] sm:text-[28px] px-1 py-1 bg-[#325D84] text-white">
                    <IoCallOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] sm:w-[48%] w-[95%] m-auto mt-8 lg:mt-0  border p-2">
            <div className="w-full">
              <img className="w-full" src={Apartments3} alt="" />
            </div>
            <div className="mt-2 px-1">
              <h4 className="text-[20px] sm:text-[27px] font-bold text-[#173F63]">
                High Rise Apartments
              </h4>
              <div className="flex items-center">
                <IoLocationOutline className="text-[#325D84]" />
                <h4 className="text-[12px] font-semibold text-neutral-500">
                  Airport Road, Zirakpur
                </h4>
              </div>
              <div className="border-t-2 mt-2 ">
                <div className="flex">
                  <div className="w-1/2 px-1">
                    <h4 className="text-[12px] font-semibold  text-neutral-500">
                      Project type
                    </h4>
                    <h4 className="text-[13px] font-bold  text-[#325D84]">
                      Highrise Apartments
                    </h4>
                  </div>
                  <div className="w-1/2 px-1 flex items-center gap-2">
                    <div className="text-[24px] sm:text-[30px] text-[#325D84]">
                      <LiaChartAreaSolid />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold  text-neutral-500">
                        Area
                      </h4>
                      <h4 className="text-[13px] font-bold  text-[#325D84]">
                        2520 Sq Ft
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3">
                  <div className="w-1/2 px-1 flex items-center gap-2">
                    <div className="text-[24px] sm:text-[30px] text-[#325D84]">
                      <IoKeyOutline />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold  text-neutral-500">
                        Status
                      </h4>
                      <h4 className="text-[13px] font-bold  text-[#325D84]">
                        Under Construction{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="w-1/2 px-1 flex items-center gap-2">
                    <div className="text-[24px] sm:text-[30px] text-[#325D84]">
                      <HiMiniPencilSquare />
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold  text-neutral-500">
                        Unit Type
                      </h4>
                      <h4 className="text-[13px] font-bold  text-[#325D84]">
                        4 BHK Homes
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OurOffring