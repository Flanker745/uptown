import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

import PricePlan from "./PricePlan";
import PaymentPlans from "./PaymentPlan";
import CurrentPlan from "./CurrentPlan";
function Price() {
  const [plan, updatePlan] = useState("pric");
  return (
    <>
      <div id="price" className="w-[95%] m-auto lg:pt-[90px] pt-9">
        <h4 className="text-primary  font-semibold text-center	text-[#325D84]">
          PRICE LIST
        </h4>
        <h6 className=" sm:text-[18px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="flex mt-9 justify-arount   ">
          <button
            onClick={() => {
              updatePlan("pric");
            }}
            className={`w-4/12 border-b-[7px]  pb-3 ${
              plan === "pric"
                ? "border-[#173F63] text-[#173F63]"
                : "text-[#A0A0A0]"
            } text-center flex gap-3 justify-center items-center `}
          >
            <h5 className="sm:text-[22px] text-[12px] font-bold"> PRICE</h5>
            <div>
              <FaChevronRight className="text-[12px] sm:text-[16px]" />
            </div>
          </button>
          <button
            onClick={() => {
              updatePlan("payment");
            }}
            className={`w-4/12 border-b-[7px] pb-3 ${
              plan === "payment"
                ? "border-[#173F63] text-[#173F63]"
                : "text-[#A0A0A0]"
            } text-center flex gap-3 justify-center items-center `}
          >
            <h5 className="sm:text-[22px] text-[12px] font-bold">
              {" "}
              PAYMENT PLANS
            </h5>
            <div>
              <FaChevronRight className="text-[12px] sm:text-[16px]" />
            </div>
          </button>
          <button
            onClick={() => {
              updatePlan("current");
            }}
            className={`w-4/12 border-b-[7px] pb-3 ${
              plan === "current"
                ? "border-[#173F63] text-[#173F63]"
                : "text-[#A0A0A0]"
            } text-center flex gap-3 justify-center items-center text-[#A0A0A0]`}
          >
            <h5 className="sm:text-[22px] text-[12px] font-bold">
              {" "}
              CURRENT OFFERS
            </h5>
            <div>
              <FaChevronRight className="text-[12px] sm:text-[16px]" />
            </div>
          </button>
        </div>
        {plan === "pric" ? <PricePlan /> : ""}
        {plan === "payment" ? <PaymentPlans /> : ""}
        {plan === "current" ? <CurrentPlan /> : ""}
      </div>
    </>
  );
}
export default  Price