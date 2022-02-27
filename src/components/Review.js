import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Review = () => {
  return (
    <div className="review" id="rev">
      <div className="container">
        <h1 className="heading">
          <span>R</span>
          <span>E</span>
          <span>V</span>
          <span>I</span>
          <span>E</span>
          <span>W</span>
        </h1>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          autoHeight={true}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review1.jpg"
                alt="review1"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review2.jpg"
                alt="review2"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review3.jpg"
                alt="review3"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review4.jpg"
                alt="review4"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review5.jpg"
                alt="review5"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review6.jpg"
                alt="review6"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review7.jpg"
                alt="review7"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review8.jpg"
                alt="review8"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="user-image">
              <img
                src="images/review/review9.jpg"
                alt="review9"
                style={{ height: "360px" }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
