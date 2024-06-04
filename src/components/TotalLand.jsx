import img from "../images/c.png";
 function Total() {
  return (
    <>
      <div className="w-[95%] m-auto border  md:mt-[50px] bg-[url('./images/Rectangle661.png')] bg-cover">
        <div className="h-full bg-[rgba(23,63,99,0.7)]">
          <div className="flex flex-wrap pl-2 sm:pl-0 sm:justify-around font-bold text-white py-[20px] md:py-[70px]">
            <div className={`lg:w-[23%] md:w-[40%] relative`}>
              <div className="absolute h-[140%] lg:block hidden top-[-20%] left-0">
                <img className="h-full w-full" src={img} alt="" />
              </div>
              <div className="flex items-center gap-2">
                <h5 className="xl:text-[70px] text-[30px] font-semibold sm:text-[50px] ">
                  8.5
                </h5>
                <h6 className=" sm:text-[20px] text-center font-semibold">
                  Totla Land Area
                </h6>
              </div>
            </div>
            <div className="lg:w-[23%] md:w-[40%] relative">
              <div className="absolute h-[140%] lg:block hidden top-[-20%] left-0">
                <img className="h-full w-full" src={img} alt="" />
              </div>
              <div className="flex items-center gap-2">
                <h5 className="xl:text-[70px] text-[30px] sm:text-[50px] ">
                  383
                </h5>
                <h6 className=" sm:text-[20px] text-center font-semibold">
                  Number of apartments
                </h6>
              </div>
            </div>
            <div className="lg:w-[23%] md:w-[40%] relative">
              <div className="absolute h-[140%] lg:block hidden top-[-20%] left-0">
                <img className="h-full w-full" src={img} alt="" />
              </div>
              <div className="flex items-center gap-2">
                <h5 className="xl:text-[70px] text-[30px] sm:text-[50px] ">
                  S+13
                </h5>
                <h6 className=" sm:text-[20px] text-center font-semibold">
                  Configration
                </h6>
              </div>
            </div>
            <div className="lg:w-[23%] md:w-[40%] relative">
              <div className="absolute h-[140%] lg:block hidden top-[-20%] left-0">
                <img className="h-full w-full" src={img} alt="" />
              </div>
              <div className="flex items-center gap-2">
                <h5 className="xl:text-[70px] text-[30px] sm:text-[50px] ">
                  2.023
                </h5>
                <h6 className=" sm:text-[20px] text-center font-semibold">
                  Expected hand over
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Total