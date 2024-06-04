import logo from "../images/footer.png";
import img3 from "../images/cropped-Logo-White-.png";
import img4 from "../images/Untitled__1_-removebg-preview 1.png";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandPicsart } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";

 function Footer() {
  return (
    <>
      <div className="sm:mt-[90px]  mt-9 ">
        <footer className="bg-[#0A1A28] py-2 text-white flex flex-wrap items-center justify-around">
          <div className="lg:w-[33%] md:w-[48%] w-[98%] pl-4 md:pl-[50px] ">
            <div>
              <div className=" w-[25%] ">
                <img className="w-full h-full" src={logo} alt="" />
              </div>

              <div className="text-[12px] mt-3 w-[90%] sm:w-[70%]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[33%] md:w-[48%] mt-4 md:mt-0 w-full ">
            <div className="flex relative  items-center justify-center">
              <div className="w-[50%] flex justify-center">
                <ul className="flex list-disc flex-col gap-3 sm:text-[18px]">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Product</li>
                  <li>Amenities</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div className="w-[33%] top-0 left-[50%] translate-x-[-50%] absolute">
                <img className="md:w-full w-[100px]" src={img3} alt="" />
              </div>
              <div className="w-[50%] flex justify-center md:justify-end">
                <ul className="flex list-disc flex-col gap-3 sm:text-[18px]">
                  <li>Privacy Policy</li>
                  <li>Help & Supports</li>
                  <li>Terms of Service</li>
                  <li>Contact Us</li>
                  <li className="invisible"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[33%]  md:w-[48%] flex mt-5 md:mt-0 items-center justify-center">
            <div className="hidden md:block">
              <h5 className="text-center">Sushma Service Partner</h5>
              <div>
                <img src={img4} alt="" />
              </div>
              <div className="flex mt-3 gap-3">
                <div className="text-[25px] text-black bg-white p-1 rounded-[50%]">
                  <TiSocialInstagram />
                </div>
                <div className="text-[20px] text-black bg-white p-2 rounded-[50%]">
                  <FaFacebookF />
                </div>
                <div className="text-[20px] text-black bg-white p-2 rounded-[50%]">
                  <FaTwitter />
                </div>
                <div className="text-[20px] text-black bg-white p-2 rounded-[50%]">
                  <TbBrandPicsart />
                </div>
                <div className="text-[20px] text-black bg-white p-2 rounded-[50%]">
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="md:flex text-[10px] sm:text-[16px] justify-center text-center items-center py-3">
          <h5>© Copyright 2024 sushma. All Rights Reserved</h5>
          <h5 className="mx-7 hidden md:block">|</h5>
          <h5>Designed & developed by Adiyogi Technosoft Pvt. Ltd.</h5>
        </div>
      </div>
    </>
  );
}
export default Footer