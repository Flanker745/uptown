import AmenitiesChild from "./AmenitiesChild";
import { IoGolfOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoRestaurantOutline } from "react-icons/io5";
import img1 from "../images/Rectangle 643.png";
import img2 from "../images/Rectangle 643 (1).png";
import img3 from "../images/Rectangle 643 (2).png";
import img4 from "../images/Rectangle 643 (3).png";
import img5 from "../images/Rectangle 643 (4).png";
import img6 from "../images/Rectangle 643 (5).png";
 function Amenities() {
  return (
    <>
      <div id="amenitie" className="w-[95%] m-auto pt-9 sm:pt-[90px]">
        <h4 className="text-primary font-semibold text-center	text-[#173F63]">
          AMENITIES
        </h4>
        <h6 className=" sm:text-[18px] text-center	">
          Within the premises of the Sushma Township are reputed Schools.
        </h6>
        <div className="flex flex-wrap justify-between mt-4 sm:mt-[50px]">
          <AmenitiesChild
            image={img1}
            heading="OUR RESTAURANT"
            icon={<IoRestaurantOutline />}
          />
          <AmenitiesChild
            image={img2}
            heading="GOLF & GARDEN"
            icon={<IoGolfOutline />}
          />
          <AmenitiesChild
            image={img3}
            heading="FITNESS & GYM"
            icon={<CiDumbbell />}
          />
          <AmenitiesChild
            image={img4}
            heading="PRIVATE THEATRE"
            icon={<TbDeviceLandlinePhone />}
          />
          <AmenitiesChild
            image={img5}
            heading="SKY & LOUNGE"
            icon={<TbDeviceLandlinePhone />}
          />
          <AmenitiesChild
            image={img6}
            heading="RECEPTION"
            icon={<TbDeviceLandlinePhone />}
          />
        </div>
      </div>
    </>
  );
}

export default Amenities