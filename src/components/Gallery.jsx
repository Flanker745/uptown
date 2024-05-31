import img1 from "./../images/Rectangle 673.png";
import img2 from "./../images/Rectangle 674.png";
import img3 from "./../images/Rectangle6.png";
import img4 from "../images/Rectangle 540.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import Slider from "react-slick";
export default function Gallery() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="sm:mt-[90px] mt-9">
        <h4 className="sm:text-[50px] text-[35px] font-semibold text-center text-[#173F63]">
          GALLERY
        </h4>
        <h6 className=" sm:text-[21px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="flex flex-wrap mt-9">
          <div className="md:w-[30%] order-2 md:order-1 w-[90%] flex flex-wrap   ">
            <div className="w-[70%] mt-6 m-auto">
              <h5 className="lg:text-[20px] text-neutral-500 font-semi-bold">
                Project Walk Through
              </h5>
              <div className="flex mt-2 items-center">
                <div className="border-2 w-[35%] border-[#173F63]"></div>
                <div className="border w-[65%]"></div>
              </div>
            </div>
            <div className="w-[70%] mt-6 m-auto">
              <h5 className="lg:text-[20px] text-neutral-500 font-semi-bold">
                Sample Flate
              </h5>
              <div className="flex mt-2 items-center">
                <div className="border-2 w-[65%] border-[#173F63]"></div>
                <div className="border w-[35%]"></div>
              </div>
            </div>
            <div className="w-[70%] mt-6 m-auto">
              <h5 className="lg:text-[20px] text-neutral-500 font-semi-bold">
                Project Gallery
              </h5>
              <div className="flex mt-2 items-center">
                <div className="border-2 w-[45%] border-[#173F63]"></div>
                <div className="border w-[55%]"></div>
              </div>
            </div>
            <div className="w-[70%] mt-6 m-auto">
              <h5 className="lg:text-[20px] text-neutral-500 font-semi-bold">
                Contraction
              </h5>
              <div className="flex rounded mt-2 items-center">
                <div className="border-2 w-[25%] border-[#173F63]"></div>
                <div className="border w-[75%]"></div>
              </div>
            </div>
          </div>
          <div className="md:w-[70%] order-1 md:order-2 md:pt-[40px] px-3 sm:px-0 w-full sm:mt-5 md:mt-0 ">
            <div className="slider-container ">
              <Slider {...settings}>
                <div className=" ">
                  <img
                    className="sm:w-[300px] w-full px-1 md:w-[435px] h-[200px] md:h-[204px]"
                    src={img1}
                    alt=""
                  />
                </div>
                <div className=" ">
                  <img
                    className="sm:w-[300px] w-full px-1 md:w-[435px] h-[200px] md:h-[204px] "
                    src={img2}
                    alt=""
                  />
                </div>
                <div className="  ">
                  <img
                    className="sm:w-[300px] w-full px-1 w-[435px] h-[200px] md:h-[204px] rounded-[10px]"
                    src={img3}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[60px] bg-[#173F63] ">
        <div className="w-[95%] flex flex-wrap justify-center items-center m-auto h-full">
          <div className="lg:w-[35%] w-[90%] my-5 lg:my-0  h-full ">
            <img className="h-full w-full" src={img4} alt="" />
          </div>
          <div className="lg:w-[45%]  md:my-5 lg:my-0 md:w-[60%] w-[90%] text-center text-white text-[18px] font-semibold">
            <h5>Are You Interested In This Property?</h5>
          </div>
          <div className="lg:w-[20%] my-3 md:-5 lg:my-0 md:w-[40%] ">
            <button className="flex px-4 rounded-[20px] text-[#173F63] bg-white items-center ">
              Contect with us <MdOutlineArrowRightAlt className="text-[32px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
