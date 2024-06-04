import img1 from "../images/image 6.png";
import img2 from "../images/image 7.png";
import img3 from "../images/image 8 (1).png";
import img4 from "../images/SBI-Logo 1.png";
 function Loan() {
  return (
    <>
      <div className="w-[95%] m-auto sm:mt-[90px] mt-9">
        <h4 className="text-primary font-semibold text-center	text-[#173F63]">
          HOME LONE FACILITY
        </h4>
        <h6 className=" sm:text-[18px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="flex flex-wrap sm:mt-[50px] mt-4  justify-between">
          <div className="md:w-[24%] w-[48%]   flex items-center justify-center rounded rounded-[10px] border ">
            <img className="w-[80%]" src={img1} alt="" />
          </div>
          <div className="md:w-[24%] w-[48%]   flex items-center justify-center rounded rounded-[10px] border ">
            <img className="w-[80%]" src={img2} alt="" />
          </div>
          <div className="md:w-[24%] w-[48%] mt-3 md:mt-0 flex items-center justify-center rounded rounded-[10px] border ">
            <img className="w-[50%]" src={img4} alt="" />
          </div>
          <div className="md:w-[24%] w-[48%]  mt-3 md:mt-0 flex items-center justify-center rounded rounded-[10px] border ">
            <img className="w-[50%]" src={img3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Loan
