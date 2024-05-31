import React, { useState } from "react";
import logo1 from "../images/cropped-Logo-White-1-1 (1) 1.png";
import logo2 from "../images/cropped-Logo-White-1-1 (1) 2.png";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [nev, setnev] = useState(false);
  return (
    <>
      <div className="lg:h-screen md:h-[75vh] h-[60vh]  bg-[url('./images/Rectangle1.png')] bg-cover bg-black text-white">
        <div className="h-full w-full bg-[rgba(0,0,0,0.7)] pt-3">
          <header className=" border-t z-[999999] relative w-full  top-0 flex   justify-between items-center px-2 xl:px-6 pt-2">
            <div className="flex">
              <div className="">
                <img
                  className="xl:w-[80px] lg:w-[60px] w-[85px]"
                  src={logo2}
                  alt=""
                />
              </div>
              <div className="xl:w-[120px] lg:w-[100px] w-[125px]">
                <img src={logo1} alt="" />
              </div>
            </div>

            <div className=" ">
              <div
                onClick={() => {
                  setnev(!nev);
                }}
                className="text-[30px] lg:hidden md:block"
              >
                <IoMenu />
              </div>
              <ul
                className={
                  nev
                    ? "lg:flex lg:relative lg:top-0 z-[9] duration-300 top-[100%] lg:right-0 right-[5%] lg:px-0 px-3 z-[9] rounded lg:bg-transparent bg-white text-black w-[90%]  absolute lg:w-fit lg:text-white  xl:gap-5 gap-4 text-[16px] xl:text-[20px]"
                    : "lg:flex lg:relative lg:top-0 z-[9] duration-300  top-[-350%] lg:right-0 right-[5%] lg:px-0 px-3  rounded lg:bg-transparent bg-white text-black w-[90%]  absolute lg:w-fit lg:text-white  xl:gap-5 gap-4 text-[16px] xl:text-[20px]"
                }
              >
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  PRODUTS
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  ABOUT US
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  LOCATION MAP
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  FLOOR PLANS
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  PRICE
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  AMENITIES
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  GALLERY
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  FAQ
                </li>
                <li className="border px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                  CONTACT US
                </li>
              </ul>
            </div>
          </header>
          <section className="flex justify-center h-full md:text-[60px] text-[30px] sm:text-[40px] lg:text-[90px] text-center mt-[20px] sm:mt-0 sm:items-center">
            <h3 className="sm:w-3/4 sm:mt-[-130px] leading-[30px] sm:leading-[40px] md:leading-[70px] lg:leading-[90px]">
              WELCOME TO NEXT GENERATION LIVING
            </h3>
          </section>
        </div>
      </div>
    </>
  );
}
