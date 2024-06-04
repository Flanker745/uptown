import img4 from "../images/Rectangle 540.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState } from "react";
import GallerySlider1, { GallerySlider2, GallerySlider3, GallerySlider4 } from "./Gallerydata";
 function Gallery() {
  const [slide,updateSlide] = useState(0)
  return (
    <>
      <div id="gallery" className="sm:pt-[90px] pt-9">
        <h4 className="text-primary font-semibold text-center text-[#173F63]">
          GALLERY
        </h4>
        <h6 className=" sm:text-[18px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="flex text-neutral-500 flex-wrap mt-9">
          <div className="md:w-[30%] order-2 md:order-1 w-[90%] flex flex-wrap   ">
            <button onClick={()=>{updateSlide(0)}} className="w-[70%] mt-6 text-start m-auto">
              <h5 className={`lg:text-[20px]  font-semi-bold ${slide===0 ? "text-[#173F63]" : ""}`}>
                Project Walk Through
              </h5>
              <div className="flex mt-2 items-center">
                <div className={`border-2 w-[35%] ${slide===0 ? "border-[#173F63]" : ""}`}></div>
                <div className="border w-[65%]"></div>
              </div>
            </button>
            <button onClick={()=>{updateSlide(1)}} className="w-[70%] mt-6 text-start m-auto">
              <h5 className={`lg:text-[20px]  font-semi-bold ${slide===1 ? "text-[#173F63]" : ""}`}>
                Sample Flate
              </h5>
              <div className="flex mt-2 items-center">
                <div className={`border-2 w-[65%] ${slide===1 ? "border-[#173F63]" : ""}`}></div>
                <div className="border w-[35%]"></div>
              </div>
            </button>
            <button onClick={()=>{updateSlide(2)}} className="w-[70%] mt-6 text-start m-auto">
              <h5 className={`lg:text-[20px]  font-semi-bold ${slide===2 ? "text-[#173F63]" : ""}`}>
                Project Gallery
              </h5>
              <div className="flex mt-2 items-center">
                <div className={`border-2 w-[45%] ${slide===2 ? "border-[#173F63]" : ""}`}></div>
                <div className="border w-[55%]"></div>
              </div>
            </button>
            <button onClick={()=>{updateSlide(3)}} className="w-[70%] mt-6 text-start m-auto">
              <h5 className={`lg:text-[20px]  font-semi-bold ${slide===3 ? "text-[#173F63]" : ""}`}>
                Contraction
              </h5>
              <div className="flex rounded mt-2 items-center">
                <div className={`border-2 w-[25%] ${slide===3 ? "border-[#173F63]" : ""}`}></div>
                <div className="border w-[75%]"></div>
              </div>
            </button>
          </div>
          <div className="md:w-[70%] order-1 h-full md:order-2 md:pt-[40px] px-3 sm:px-0 w-full sm:mt-5 md:mt-0 ">
              {slide===0 ? <GallerySlider1/> : ""}
              {slide===1 ? <GallerySlider2/> : ""}
              {slide===2 ? <GallerySlider3/> : ""}
              {slide===3 ? <GallerySlider4/> : ""}

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
export default Gallery