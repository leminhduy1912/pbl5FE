import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import { GrLinkNext, GrNext } from "react-icons/gr";
const Slider = () => {
  return (
    <>
      <div
        className="container flex flex-col justify-items-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #09203f 10%, #537895 100%)",
        }}
      >
        <h3 className="mb-4 mt-4 text-4xl font-semibold text-white rounded-3xl  border-solid border-stone-50 p-5 border-2 w-[100]">
          Phim Đang Chiếu
        </h3>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/R.b4a8f689353a7232e7c2da62423d3037?rik=RtjTWkn20xsyKA&pid=ImgRaw&r=0"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/R.b4a8f689353a7232e7c2da62423d3037?rik=RtjTWkn20xsyKA&pid=ImgRaw&r=0"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/R.b4a8f689353a7232e7c2da62423d3037?rik=RtjTWkn20xsyKA&pid=ImgRaw&r=0"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/R.b4a8f689353a7232e7c2da62423d3037?rik=RtjTWkn20xsyKA&pid=ImgRaw&r=0"
              alt="slide_image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
