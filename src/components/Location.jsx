import map from "../images/Rectangle 633.png";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiHospital1 } from "react-icons/ci";
import { MdOutlineDirectionsRailway } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";
export default function Locatio() {
  return (
    <>
      <div className="w-[100%]  text-center mt-9 sm:mt-[90px]">
        <div className="w-[95%] m-auto">
          <h4 className="md:text-[50px] text-[25px] sm:text-[30px] font-semibold  text-center	text-neutral-600">
            {" "}
            WORLD CLASS LOCATION
          </h4>
          <h6 className=" md:text-[21px] text-[12px] sm:text-[18px] font-semibold text-center text-neutral-500  md:w-[80%] w-[95%]	lg:w-[60%] m-auto">
            Location of Uptown Skylla Zirakpur is Very Prime as it is close to
            Malls of Zirakpur, prominent Schools of Zirakpur,
          </h6>
          <div className="mt-5">
            <img className="w-full" src={map} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap bg-[#173F63] mt-8 text-white">
          <div className="lg:w-[20%] md:w-[33%] w-[50%] border md:border-0 py-4 md:border-r flex items-center flex-col">
            <div>
              <div className="flex items-center">
                <div className="sm:text-[50px] text-[30px] px-2 border-r">
                  <RiGraduationCapLine />
                </div>
                <div className="flex items-center ml-2 gap-1">
                  <h6 className="sm:text-[50px] text-[30px] font-bold">05</h6>
                  <div className="sm:text-[18px] font-semibold">
                    <h6>mins</h6>
                    <h6>from</h6>
                  </div>
                </div>
              </div>
              <div className="sm:text-[20px] font-semibold">
                <h6>Education Center</h6>
              </div>
            </div>
          </div>
          <div className="lg:w-[20%] md:w-[33%] w-[50%] border md:border-0 py-4 md:border-r flex items-center flex-col">
            <div>
              <div className="flex items-center">
                <div className="sm:text-[50px] text-[30px] px-2 border-r">
                  <CiHospital1 />
                </div>
                <div className="flex items-center ml-2 gap-1">
                  <h6 className="sm:text-[50px] text-[30px] font-bold">10</h6>
                  <div className="sm:text-[18px] font-semibold">
                    <h6>mins</h6>
                    <h6>from</h6>
                  </div>
                </div>
              </div>
              <div className="sm:text-[20px] font-semibold">
                <h6>Hospital</h6>
              </div>
            </div>
          </div>
          <div className="lg:w-[20%] md:w-[33%] w-[50%] border md:border-0 py-4 lg:border-r flex items-center flex-col">
            <div>
              <div className="flex items-center">
                <div className="sm:text-[50px] text-[30px] px-2 border-r">
                  <MdOutlineDirectionsRailway />
                </div>
                <div className="flex items-center ml-2 gap-1">
                  <h6 className="sm:text-[50px] text-[30px] font-bold">15</h6>
                  <div className="sm:text-[18px] font-semibold">
                    <h6>mins</h6>
                    <h6>from</h6>
                  </div>
                </div>
              </div>
              <div className="sm:text-[20px] font-semibold">
                <h6>Railway Station</h6>
              </div>
            </div>
          </div>
          <div className="lg:w-[20%] md:w-[33%] w-[50%] border md:border-0 py-4 md:border-r flex items-center flex-col">
            <div>
              <div className="flex items-center">
                <div className="sm:text-[50px] text-[30px] px-2 border-r">
                  <AiTwotoneShop />
                </div>
                <div className="flex items-center ml-2 gap-1">
                  <h6 className="sm:text-[50px] text-[30px] font-bold">20</h6>
                  <div className="sm:text-[18px] font-semibold">
                    <h6>mins</h6>
                    <h6>from</h6>
                  </div>
                </div>
              </div>
              <div className="sm:text-[20px] font-semibold">
                <h6>Market</h6>
              </div>
            </div>
          </div>
          <div className="lg:w-[20%] md:w-[33%] w-[50%] border md:border-0 py-4 md:border-r flex items-center flex-col">
            <div>
              <div className="flex items-center">
                <div className="sm:text-[50px] text-[30px] px-2 border-r">
                  <FaPlane />
                </div>
                <div className="flex items-center ml-2 gap-1">
                  <h6 className="sm:text-[50px] text-[30px] font-bold">30</h6>
                  <div className="sm:text-[18px] font-semibold">
                    <h6>mins</h6>
                    <h6>from</h6>
                  </div>
                </div>
              </div>
              <div className="sm:text-[20px] font-semibold">
                <h6>Airport</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
