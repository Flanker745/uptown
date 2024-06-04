import React from 'react'
import img1 from "./../images/Rectangle 673.png";
import img2 from "./../images/Rectangle 674.png";
import img3 from "./../images/Rectangle6.png";
import Slider from "react-slick";
import { CiPlay1 } from "react-icons/ci";

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
function GallerySlider1() {
    
  return (
    <>
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
                    className="sm:w-[300px] w-full px-1 md:w-[435px] h-[200px] md:h-[204px] rounded-[10px]"
                    src={img3}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
    </>
  )
}

export default GallerySlider1

function GallerySlider2() {
    return (
      <>
                <div className='relative w-[96%] '>
                        <img src={img2} className='w-full h-[230px] '  alt="" />
                        <div className='absolute top-1/2 left-1/2 text-[25px] translate-x-[-50%] translate-y-[-50%] p-5 bg-white rounded-full'>
                        <a href="https://youtu.be/cxtqT014sKA"><CiPlay1 /></a>

                        </div>
                </div>
      </>
    )
  }
  
  export { GallerySlider2}

  function GallerySlider3() {
    return (
      <>
              <div className="slider-container ">
              <Slider {...settings}>
                <div className=" ">
                  <img
                    className="sm:w-[300px] w-full px-1 md:w-[435px] h-[200px] md:h-[204px]"
                    src={img3}
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
                    className="sm:w-[300px] w-full px-1 md:w-[435px] h-[200px] md:h-[204px] rounded-[10px]"
                    src={img1}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
      </>
    )
  }
  
  export { GallerySlider3}


  function GallerySlider4() {
    return (
      <>
            <div className='relative w-[96%] '>
                        <img src={img3} className='w-full h-[230px] '  alt="" />
                        <div className='absolute top-1/2 left-1/2 text-[25px] translate-x-[-50%] translate-y-[-50%] p-5 bg-white rounded-full'>
                        <a href="https://youtu.be/cxtqT014sKA"><CiPlay1 /></a>

                        </div>
                </div>
      </>
    )
  }
  
  export { GallerySlider4}