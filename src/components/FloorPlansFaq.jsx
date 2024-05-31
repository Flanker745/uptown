import faq_img1 from "./../images/image 8.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";
import { useState } from "react";
import { faqdata2 } from "./Faqdata";

export default function FloorPlansFaq() {
  let faqd = faqdata2;
  const [faqid, setfaqid] = useState(faqd[0].id);

  return (
    <>
      {faqd.map((v) => {
        return (
          <div className="border hover:scale-105 duration-300 rounded-[7px] shadow my-2">
            <div
              onClick={() => {
                setfaqid(faqid === v.id ? 0 : v.id);
              }}
              className="  flex bg-white py-2 md:py-5 justify-around border-b items-center"
            >
              <div className="w-[22%] md:w-fit">
                <img className="md:w-full w-full" src={faq_img1} alt="" />
              </div>
              <div className="font-semibold text-[#A0A0A0]">
                <h5 className="text-[12px] md:text-[16px]">Exclusive 3 BHK </h5>
                <h4 className="text-[#325D84] text-[18px] md:text-[35px]">
                  1980 sq.ft. (East | type -1 )
                </h4>
                <h4 className="text-[12px] md:text-[16px]">
                  Where Comfort meets Happiness everyday{" "}
                </h4>
              </div>
              <div className=" text-[20px] md:text-[40px] bg-neutral-200 rounded-[50%] flex items-center justify-center p-1 md:p-2 text-[#325D84]">
                <IoIosArrowDown />
              </div>
            </div>
            <div
              className={`   flex  ${
                faqid === v.id ? "h-auto visible py-2 " : " h-0 invisible p-0"
              }  justify-around items-center `}
            >
              <div className="lg:w-[100%] flex flex-wrap items-center ">
                <div className="lg:w-[40%] md:w-[20%] w-[30%] items-center justify-center flex">
                  <img className="w-[80%]" src={faq_img1} alt="" />
                </div>
                <div className="lg:w-[35%] md:w-[45%] w-[70%] flex flex-col items-center border-r ">
                  <div className="flex rounded font-semibold text-[12px]  sm:text-[18px] text-white border border-[#325D84] w-fit">
                    <button className="sm:px-4 px-1 py-1  bg-[#325D84]">
                      1980 Sq.Ft.
                    </button>
                    <button className="sm:px-4 px-1 py-1 text-[#325D84]">
                      1980 Sq.Ft.
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="flex ">
                      <div className="font-semibold text-[12px] sm:text-[18px] border-r-2 border-[#325D84] pr-6 ">
                        <h6 className="border-b border-[#325D84] md:text-[14px] lg:text-[16px] text-[#325D84]">
                          Rera Carpet Area
                        </h6>
                        <h5 className="lg:text-[30px] md:text-[20px] text-neutral-500">
                          1242 Sq.Ft.
                        </h5>
                      </div>
                      <div className="font-semibold text-[12px] sm:text-[18px]  border-[#325D84] px-6 ">
                        <h6 className="border-b border-[#325D84] text-[#325D84]">
                          Balcony Area
                        </h6>
                        <h5 className="lg:text-[30px] md:text-[20px] text-neutral-500">
                          305 Sq.Ft.
                        </h5>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <div className="font-semibold text-[12px] sm:text-[18px] border-r-2 border-[#325D84] pr-6 ">
                        <h6 className="border-b border-[#325D84] md:text-[14px] lg:text-[16px]  text-[#325D84]">
                          External Wall Area
                        </h6>
                        <h5 className="lg:text-[30px] md:text-[20px] text-neutral-500">
                          1242 Sq.Ft.
                        </h5>
                      </div>
                      <div className="font-semibold text-[12px] sm:text-[18px]  border-[#325D84] px-6 ">
                        <h6 className="border-b border-[#325D84] md:text-[14px] lg:text-[16px]  text-[#325D84]">
                          Common Area
                        </h6>
                        <h5 className="lg:text-[30px] md:text-[20px] text-neutral-500">
                          305 Sq.Ft.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[25%] md:w-[35%] w-full flex flex-col items-center h-full">
                  <div className="flex rounded font-semibold md:text-[18px] text-[12px] mt-2 sm:mt-0 lg:text-[20px] text-white border border-[#325D84] w-fit">
                    <button className="px-4 rounded lg:py-2 py-1 bg-[#325D84]">
                      2D View
                    </button>
                    <button className="px-4  lg:py-2 py-1 text-[#325D84]">
                      3D View
                    </button>
                  </div>
                  <div className="flex gap-4  md:gap-0 md:flex-col">
                    <div className="text-white text-[14px] lg:text-[30px] md:text-[22px] mt-5 bg-[#325D84] p-1 w-fit m-auto md:p-2 lg:p-4 rounded-[50%]">
                      <FaFilePdf />
                    </div>
                    <div className="text-[#325D84] mt-2 text-center">
                      <h5>Brochure Download </h5>
                      <button className="lg:text-[18px] text-[12px] font-semibold px-3 py-1 sm:px-6 sm:py-2 rounded-[21px] border border-[#325D84] mt-2 lg:mt-5">
                        Schedule a visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
