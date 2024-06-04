import React, { useState, useEffect } from "react";
import logo1 from "../images/cropped-Logo-White-1-1 (1) 1.png";
import logo2 from "../images/cropped-Logo-White-1-1 (1) 2.png";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [nev, setnev] = useState(false);
  return (
    <>
      <div
        id="top"
        className="lg:h-screen md:h-[75vh] h-[60vh]  bg-[url('./images/Rectangle1.png')] bg-cover bg-black text-white"
      >
        <div className="h-full w-full bg-[rgba(0,0,0,0.7)] pt-3">
          <header
            className={`  z-[999999]   w-full ${
              scrolled
                ? "fixed z-[99] py-3 top-0 left-0 w-full bg-black"
                : "relative border-t py-0"
            }  top-0 flex gap-[10%]  lg:justify-around justify-between items-center px-2 xl:px-6 pt-2`}
          >
            <div>
              <a className="flex" href="#top">
                <div className="">
                  <img
                    className="xl:w-[70px] lg:w-[50px] w-[80px]"
                    src={logo2}
                    alt=""
                  />
                </div>
                <div className="xl:w-[110px] lg:w-[90px] w-[120px]">
                  <img src={logo1} alt="" />
                </div>
              </a>
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
                    ? "lg:flex lg:relative lg:top-0 z-[9] duration-300 top-[100%] lg:right-0 right-[5%] lg:px-0 px-3 z-[9] rounded lg:bg-transparent bg-white text-black w-[90%]  absolute lg:w-fit lg:text-white  xl:gap-5 gap-4 text-[15px] xl:text-[18px]"
                    : "lg:flex lg:relative lg:top-0 z-[9] duration-300  top-[-350%] lg:right-0 right-[5%] lg:px-0 px-3  rounded lg:bg-transparent bg-white text-black w-[90%]  absolute lg:w-fit lg:text-white  xl:gap-5 gap-4 text-[15px] xl:text-[18px]"
                }
              >
                <a className="group" href="#aboutUs">
                  <li className="border  relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    ABOUT US
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#product">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    PRODUTS
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#location">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    LOCATION MAP
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#floorPlans">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    FLOOR PLANS
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#price">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    PRICE
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#amenitie">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    AMENITIES
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#gallery">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    GALLERY
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#faq">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    FAQ
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
                <a className="group" href="#contactus">
                  <li className="border relative px-2 rounded border-red-300 my-2 lg:border-0 lg:px-0 lg:my-0 ">
                    CONTACT US
                    <div className="w-0  duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                  </li>
                </a>
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

export default Header;
