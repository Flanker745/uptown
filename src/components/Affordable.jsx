import { PiSwimmingPoolDuotone } from "react-icons/pi";
import ClubSkylla from "../images/Rectangle 639.png";
import ClubSkylla1 from "../images/Rectangle 639 (1).png";
import ClubSkylla2 from "../images/Rectangle 639 (2).png";
import ClubSkylla3 from "../images/Rectangle 639 (3).png";
import ClubSkyllaMain from "../images/Rectangle 641.png";
export default function Affordable() {
  return (
    <>
      <div className="w-[95%] m-auto md:mt-[90px] mt-7  ">
        <h4 className="lg:text-[50px] md:text-[30px]  text-[20px] font-semibold text-center	text-[#173F63]">
          MAKING LIVING SPACE AFFORDABLE
        </h4>
        <h6 className="px-2 sm:text-[21px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="flex flex-wrap justify-center lg:justify-between mt-5">
          <div className="lg:w-[24%] sm:w-[48%] w-[98%] text-center text-[#325D84] font-semibold">
            <div className="">
              <img className="w-full" src={ClubSkylla} alt="" />
            </div>
            <h5>Club Skylla</h5>
          </div>
          <div className="lg:w-[24%] sm:w-[48%] w-[98%] text-center text-[#325D84] font-semibold">
            <div className="">
              <img className="w-full" src={ClubSkylla1} alt="" />
            </div>
            <h5>Green Parkland</h5>
          </div>
          <div className="lg:w-[24%] sm:w-[48%] w-[98%] text-center text-[#325D84] font-semibold">
            <div className="">
              <img className="w-full" src={ClubSkylla2} alt="" />
            </div>
            <h5>Private balcony </h5>
          </div>
          <div className="lg:w-[24%] sm:w-[48%] w-[98%] text-center text-[#325D84] font-semibold">
            <div className="">
              <img className="w-full" src={ClubSkylla3} alt="" />
            </div>
            <h5>Environment friendly </h5>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap  items-center lg:border-2 border-[#325D84] rounded rounded-[15px]">
          <div className="lg:w-1/2 w-full lg:pr-6 mt-[-2px]">
            <img className="w-full" src={ClubSkyllaMain} alt="" />
          </div>
          <div className="lg:w-1/2 w-full ">
            <div className="md:text-[40px] text-[25px] text-center lg:text-start text-[#325D84] font-extrabold">
              <h4>WELCOME TO</h4>
              <h4 className="md:mt-[-20px]">THE CLUB SKYLLA</h4>
            </div>
            <div className="md:w-[85%] mt-2 sm:mt-5 md:text-[18px] text-[14px] text-netural-500">
              <p>
                Location of Uptown Skylla Zirakpur is Very Prime as it is close
                to Malls of Zirakpur, prominent Schools of Zirakpur, Hospitals
                of Zirakpur & close Proximity to International Airport Mohali
                Chandigarh.
              </p>
              <p className="mt-1 sm:mt-2">
                Location of Uptown Skylla Zirakpur is Very Prime as it is close
                to Malls of Zirakpur, prominent Schools{" "}
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
