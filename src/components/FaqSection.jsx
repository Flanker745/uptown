import img1 from "../images/Rectangle 681.png";
import Faq from "./Faq";
export default function FaqSection() {
  return (
    <>
      <div className=" sm:mt-[90px] mt-9">
        <h4 className="sm:text-[50px] text-[35px] font-semibold text-center	text-[#173F63]">
          FAQ
        </h4>
        <h6 className=" sm:text-[21px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="sm:mt-[60px] flex">
          <div className="md:w-[72%] w-full px-2 sm:px-9">
            <Faq />
          </div>
          <div className="md:w-[28%] hidden md:block ">
            <img src={img1} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
