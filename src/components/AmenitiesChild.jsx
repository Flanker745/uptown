 function AmenitiesChild(prop) {
  return (
    <>
      <div className="lg:w-[33%] sm:w-[49%] w-[99%] mt-2 flex text-[#173F63] border border-[#173F63]">
        <div className="w-1/2 h-full">
          <img className="w-full h-full " src={prop.image} alt="" />
        </div>
        <div className="w-1/2 flex items-center px-3 justify-center relative">
          
          <div className="">
            <div className="text-[28px] relative sm:text-[35px]">
            <div className="absolute p-3 sm:p-4 border bg-blue-100 z-[-9] rounded-[50%] top-[-15px] left-[-10px]"></div>
              {prop.icon}</div>
            <div className="">
              <h5 className="text-[14px] sm:text-[16px] font-bold">
                {prop.heading}
              </h5>
              <p className="text-[10px] text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium quia illum quod laborum quam veniam .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AmenitiesChild
