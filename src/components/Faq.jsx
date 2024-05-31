import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { faqdata1 } from "./Faqdata";
export default function Faq() {
  let faqd = faqdata1;
  const [faqid, setfaqid] = useState(faqd[0].id);
  return (
    <>
      <div>
        {faqd.map((v) => {
          return (
            <div className="w-full hover:scale-105 duration-300 mt-2 sm:mt-4">
              <div
                onClick={() => {
                  setfaqid(faqid === v.id ? 0 : v.id);
                }}
                className={`sm:py-4 py-2 flex  items-center ${
                  faqid === v.id
                    ? "rounded-t-[7px] bg-[#173F63] text-white"
                    : "text-[#173F63] border shadow rounded-[7px] bg-white"
                }`}
              >
                <h5 className="text-[14px] sm:text-[22px] w-[90%]  pl-8 font-semibold">
                  {v.id}. {v.ques}
                </h5>
                <h5 className="text-[14px] sm:text-[30px] text-[20px] w-[10%]">
                  {faqid === v.id ? <FaChevronDown /> : <FaChevronRight />}
                </h5>
              </div>
              <div
                className={`bg-[#173F63] text-[13px]  ${
                  faqid === v.id ? "h-auto visible" : "h-0 invisible"
                }  rounded-b-[7px]`}
              >
                <h5 className="sm:text-[22px] py-2 sm:py-5 border-t w-[97%] m-auto text-white  ">
                  <h5 className="w-[90%] m-auto">{v.ans}</h5>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
//
