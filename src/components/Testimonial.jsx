import img1 from "../images/Rectangle 97.png";
import img2 from "../images/Rectangle 98.png";
import { FaArrowAltCircleDown } from "react-icons/fa";
function Testimonial() {
  return (
    <>
      <div className="w-[95%] m-auto md:mt-[90px] mt-9">
        <h4 className="text-primary font-bold text-center	text-[#173F63]">
          TESTIMONIAL
        </h4>
        <h6 className=" sm:text-[18px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="lg:w-[85%] w-[95%]  md:w-full m-auto flex flex-wrap justify-between mt-4 sm:mt-[35px]">
          <div className="md:w-[49%] hover:scale-105 duration-300 w-full border-2 sm:p-7 p-2 rounded-[15px] items-center justify-between shadow-[0_0px_5px_1px_rgba(0,0,0,0.3)] flex">
            <div className="w-[30%]">
              <img src={img1} className="w-full h-full" alt="" />
            </div>
            <div className="w-[68%]">
              <h5 className="text-[20px] sm:text-[24px] border-b text-[#656262] font-bold">
                Shivani
              </h5>
              <p className="sm:text-[14px] text-[10px] sm:mt-5 text-[#493E3E]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
          </div>
          <div className="md:w-[49%] hover:scale-105 duration-300 w-full mt-5 md:mt-0 border-2 sm:p-7 p-2 rounded-[15px] items-center justify-between shadow-[0_0px_5px_1px_rgba(0,0,0,0.3)] flex">
            <div className="w-[30%]">
              <img src={img2} className="w-full h-full" alt="" />
            </div>
            <div className="w-[68%]">
              <h5 className="text-[20px] sm:text-[24px] border-b text-[#656262] font-bold">
                Kamla
              </h5>
              <p className="sm:text-[14px] text-[10px] sm:mt-5 text-[#493E3E]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-[90%] m-auto sm:mt-[60px] mt-[30px]  flex justify-around">
          <div className="relative hover:scale-105 duration-300 flex items-center pl-[20px] z-[9]">
            <div className="text-[#173F63] left-0 bg-white absolute lg:text-[90px] text-[25px] sm:text-[50px] border-2 rounded-[50%]">
              <FaArrowAltCircleDown />
            </div>
            <div className="border-2 relative z-[-9] sm:pl-[40px] hover:bg-[#173F63] hover:text-white text-[#173F63] pl-[10px] lg:pl-[120px] sm:pr-[20px] pr-[10px] lg:pr-[50px] sm:py-3 py-1 shadow-[2px_10px_5px_1px_rgba(0,0,0,0.3)] rounded-[10px]  border-[#3D6B96]">
              <h5 className="lg:text-[30px] text-[12px] sm:text-[20px]  font-bold">
                Brochure
              </h5>
            </div>
          </div>
          <div className="relative hover:scale-105 duration-300 flex items-center pl-[20px] z-[9]">
            <div className="text-[#173F63] left-0 bg-white absolute lg:text-[90px]  text-[25px] sm:text-[50px] border-2 rounded-[50%]">
              <FaArrowAltCircleDown />
            </div>
            <div className="border-2 relative z-[-9] sm:pl-[40px] hover:bg-[#173F63] hover:text-white text-[#173F63]  pl-[10px] lg:pl-[120px] sm:pr-[20px] pr-[10px] lg:pr-[50px] sm:py-3 py-1 shadow-[2px_10px_5px_1px_rgba(0,0,0,0.3)] rounded-[10px]  border-[#3D6B96]">
              <h5 className="lg:text-[30px] text-[12px] sm:text-[20px]   font-bold">
                Price List
              </h5>
            </div>
          </div>
          <div className="relative hover:scale-105 duration-300 flex items-center pl-[20px] z-[9]">
            <div className="text-[#173F63] left-0 bg-white absolute lg:text-[90px] text-[25px] sm:text-[50px] border-2 rounded-[50%]">
              <FaArrowAltCircleDown />
            </div>
            <div className="border-2 relative z-[-9] sm:pl-[40px] hover:bg-[#173F63] hover:text-white text-[#173F63]  pl-[10px] lg:pl-[120px] sm:pr-[20px] pr-[10px] lg:pr-[50px] sm:py-3 py-1 shadow-[2px_10px_5px_1px_rgba(0,0,0,0.3)] rounded-[10px]  border-[#3D6B96]">
              <h5 className="lg:text-[30px] text-[12px] sm:text-[20px] text-[14px] font-bold">
                Site Palns
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default  Testimonial