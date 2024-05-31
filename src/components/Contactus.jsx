import img1 from "../images/Rectangle 682.png";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoArrowDownCircleOutline, IoLocationOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import horseimg from "../images/about_pat (1) 1.png";
import img2 from "../images/Rectangle 683.png";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contactus() {
  return (
    <>
      <div className="relative mt-[60px]">
        <div className="absolute sm:text-[16px] text-[12px] w-fit border-t top-0 translate-x-[-50%] left-[50%] flex ">
          <button className="md:px-7 px-4 py-1 bg-white  text-[#325D84]  rounded-bl-[12px] md:rounded-bl-[20px]">
            Near By
          </button>
          <button className="md:px-6 px-4 py-1 bg-[#325D84] text-white   rounded-br-[12px]  md:rounded-br-[20px]">
            Google Map
          </button>
        </div>
        <div className="absolute top-[10%] md:top-[40%] right-0  overflow-hidden  ">
          <div className="flex group justify-end ">
            <h5 className="bg-blue-200 invisible group-hover:visible  flex items-center px-2">
              Message
            </h5>
            <button className="text-white bg-[#496398] group p-2 group-hover:rounded-[0] rounded-tl-[10px] md:text-[25px]">
              <BiSolidMessageRoundedDetail />
            </button>
          </div>
          <div className="flex group justify-end">
            <h5 className="bg-blue-200 invisible group-hover:visible   flex items-center px-2">
              whatapp
            </h5>
            <button className="text-white bg-[#5ECF4D] group p-2 md:text-[25px]">
              <FaWhatsapp />
            </button>
          </div>
          <div className="flex group justify-end">
            <h5 className="bg-blue-200 invisible group-hover:visible   flex items-center px-2">
              Amount
            </h5>
            <button className="text-white bg-[#F17D40] group p-2 md:text-[25px]">
              <FaIndianRupeeSign />
            </button>
          </div>
          <div className="flex group justify-end">
            <h5 className="bg-blue-200 invisible group-hover:visible   flex items-center px-2">
              Call
            </h5>
            <button className="text-white bg-[#26C7AA] group p-2 md:text-[25px]">
              <MdCall />
            </button>
          </div>
          <div className="flex group justify-end">
            <h5 className="bg-blue-200 invisible group-hover:visible   flex items-center px-2">
              Download
            </h5>
            <button className="text-white bg-[#9C59D0] group p-2 group-hover:rounded-[0] rounded-bl-[10px] md:text-[25px]">
              <IoArrowDownCircleOutline />
            </button>
          </div>
        </div>
        <img className="w-full h-[200px] md:h-[400px]" src={img1} alt="" />
      </div>
      <div className="mt-[60px] flex flex-wrap">
        <div className="lg:w-[60%] w-full flex bg-[#173F63] relative">
          <div className="absolute bottom-0 left-0">
            <img src={horseimg} alt="" />
          </div>
          <div className="sm:w-[68%] w-full text-white flex items-center justify-end font-semibold sm:py-[70px] py-6 justify-center ">
            <div className=" pl-2 sm:pl-0">
              <div>
                <h5 className="sm:text-[40px]n text-[30px] font-semibold">
                  CONTACT US
                </h5>
                <p className="sm:text-[19px] font-normal">
                  You have any question? feel free to contact us.
                </p>
              </div>
              <div className='flex items-center gap-3 sm:gap-6 mt-3 sm"mt-[50px]'>
                <div>
                  <div className="sm:text-[25px] text-[18px] border-[3px] rounded-[50%] p-1 sm:p-2 ">
                    <BiSolidPhoneCall />
                  </div>
                </div>
                <div className="sm:text-[23px]">
                  <h5>+91 1234567890</h5>
                  <h5>+91 1234567890</h5>
                </div>
              </div>
              <div className='flex items-center gap-3 sm:gap-6 mt-3 sm"mt-[50px]'>
                <div>
                  <div className="sm:text-[25px] text-[18px] border-[3px] rounded-[50%] p-1 sm:p-2 ">
                    <MdOutlineMailOutline />
                  </div>
                </div>
                <div className="sm:text-[23px]">
                  <h5>needhelp@gmail.com</h5>
                  <h5>sushma@gmail.com</h5>
                </div>
              </div>
              <div className='flex items-center gap-3 sm:gap-6 mt-3 sm"mt-[50px]'>
                <div>
                  <div className="sm:text-[25px] text-[18px] border-[3px] rounded-[50%] p-1 sm:p-2 ">
                    <IoLocationOutline />
                  </div>
                </div>
                <div className="sm:text-[23px]">
                  <h5> PR-7 Airport Road,</h5>
                  <h5>Zirakpur, Punjab</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] hidden sm:block">
            <img src={img2} className="w-full sm:h-fit lg:h-full" alt="" />
          </div>
        </div>
        <div className="lg:w-[40%] flex justify-center items-center">
          <div className="w-[90%]">
            <h5 className="sm:text-[40px] text-[30px] mt-[30px] md:mt-0 text-[#325D84] font-bold">
              Get in touch{" "}
            </h5>
            <form action="">
              <input
                className="w-full  sm:text-[22px] py-2 sm:py-3 px-2 rounded border border-[#325D84] mt-2 sm:mt-5"
                type="text"
                placeholder="Your Name"
                name=""
                id=""
              />
              <input
                className="w-full  sm:text-[22px] py-2 sm:py-3 px-2 rounded border border-[#325D84] mt-2 sm:mt-5"
                type="text"
                placeholder="Mobile No."
                name=""
                id=""
              />
              <input
                className="w-full  sm:text-[22px] py-2 sm:py-3 px-2 rounded border border-[#325D84] mt-2 sm:mt-5"
                type="text"
                placeholder="Email"
                name=""
                id=""
              />
              <textarea
                className="w-full  sm:text-[22px] py-2 sm:py-3 px-2 rounded border border-[#325D84] mt-2 sm:mt-5"
                name=""
                id=""
                rows="4"
                placeholder="Message"
              ></textarea>
              <button className="sm:px-7 px-4 rounded py-1 bg-[#3D6B96] text-[20px] sm:text-[24px] text-white ml-5 mt-3 block">
                Explore Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
