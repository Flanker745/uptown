import { useState } from "react";
import FloorPlansFaq from "./FloorPlansFaq";
import TowerPlan from "./TowerPlan";
import MasterPlan from "./MasterPlan";
 function Floor() {
  const [slide, updateSlide] = useState("unit");
  return (
    <>
      <div id="floorPlans" className="w-[95%] m-auto pt-9 lg:pt-[90px]">
        <h4 className="text-primary text-[35px] font-semibold text-center	text-[#173F63]">
          FLOOR PLAN
        </h4>
        <h6 className=" sm:text-[18px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="w-full flex gap-4 text-[15px] md:text-[30px]  mt-3 sm:mt-0 text-center px-5  border-b-2 font-semibold text-[#A0A0A0]">
          <button
            onClick={() => {
              updateSlide("unit");
            }}
            className={`lg:w-[20%] relative md:w-[25%] w-[32%]  rounded py-2 sm:py-4 ${
              slide === "unit" ? "text-[#325D84]" : ""
            }`}
          >
            <h4>Unit Plan</h4>
            <div
              className={`absolute w-full rounded-[10px]  bottom-[-5%]  py-[2px] md:py-1 gp ${
                slide === "unit" ? "bg-[#325D84]" : ""
              } `}
            ></div>
          </button>
          <button
            onClick={() => {
              updateSlide("master");
            }}
            className={`lg:w-[20%] relative md:w-[25%] w-[32%]  rounded py-2 sm:py-4 ${
              slide === "master" ? "text-[#325D84]" : ""
            }`}
          >
            <h4>Master Plan</h4>
            <div
              className={`absolute w-full rounded-[10px]  bottom-[-5%]  py-[2px] md:py-1 gp ${
                slide === "master" ? "bg-[#325D84]" : ""
              } `}
            ></div>
          </button>
          <button
            onClick={() => {
              updateSlide("tower");
            }}
            className={`lg:w-[20%] relative md:w-[25%] w-[32%]  rounded py-2 sm:py-4 ${
              slide === "tower" ? "text-[#325D84]" : ""
            }`}
          >
            <h4>Tower Plan</h4>
            <div
              className={`absolute w-full rounded-[10px]  bottom-[-5%]  py-[2px] md:py-1 gp ${
                slide === "tower" ? "bg-[#325D84]" : ""
              } `}
            ></div>
          </button>
        </div>
        <div className="w-[95%] m-auto  mt-4">
          {slide === "unit" ? <FloorPlansFaq /> : ""}
          {slide === "master" ? <MasterPlan /> : ""}
          {slide === "tower" ? <TowerPlan /> : ""}
        </div>
      </div>
    </>
  );
}
export default Floor