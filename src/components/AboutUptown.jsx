import about1 from "../images/Rectangle665.png";
import about2 from "../images/Rectangle666.png";
import aboutbg from "../images/about_pat (1) 1.png";
export default function About() {
  return (
    <>
      <div className="flex flex-wrap relative overflow-hidden py-9 sm:pt-[90px]">
        <div className="absolute hidden lg:block top-[-60%]  z-[-9] right-[0%] w-[41%]">
          <img src={aboutbg} alt="" />
        </div>
        <div className="w-1/12 lg:block hidden ">
          <img className="w-full h-[100%]" src={about1} alt="" />
        </div>
        <div className="lg:w-6/12 w-12/12 px-3  flex  items-center">
          <div className="">
            <h4 className="md:text-[40px] font-semibold text-[#A0A0A0]">
              About
            </h4>
            <h4 className="w-fit xl:text-[130px] lg:text-[90px] md:text-[70px] text-[40px] lg:my-[-35px]  xl:my-[-40px] sm:pl-5 text-[#325D84] font-semibold">
              UPTOWN
            </h4>
            <h4 className="xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] sm:pl-5  font-semibold text-[#A0A0A0]">
              SKYLLA ZIRAKPUR
            </h4>
            <p className="md:text-[20px] w-[95%] m-auto font-semibold text-neutral-600">
              Redefining the standards of elegant living with meticulously
              planned apartments or flats in Zirakpur that are crafted with
              sophisticated taste, Uptown Skylla Zirakpur has outdone its
              residential stature with impeccable.
            </p>
            <button className="px-3 py-1 bg-[#173F63] text-white ml-5 mt-3 block">
              Explore Now
            </button>
          </div>
        </div>
        <div className="lg:w-5/12 w-full flex relative items-center">
          <img className="w-full h-[80%]" src={about2} alt="" />
          <div className="absolute addwe text-transparent top-[60%] left-[50%]  translate-x-[-50%] font-semibold sm:text-[90px] md:text-[120px] text-[50px] lg:text-[100px]">
            <h3>UPTOWN</h3>
          </div>
        </div>
      </div>
    </>
  );
}
