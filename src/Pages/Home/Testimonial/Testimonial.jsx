import SectionTitles from "../../../Components/SectionTitle/SectionTitles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Testimonial = () => {
    const[reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('review.json')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])

  return (
    <section className="my-20">
      <SectionTitles
        subHeading={"what Our Client say's"}
        heading={"Testimonials"}
      ></SectionTitles>

      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          
          {
            reviews.map(rev => <SwiperSlide
            key={rev._id}
            >
                <div className="m-36">
                    <p>{rev.details}</p>
                    <h3 className="text-2xl text-orange-400 text-center">{rev.name}</h3>
                </div>
            </SwiperSlide>)
          }
        </Swiper>
      </>
    </section>
  );
};

export default Testimonial;
