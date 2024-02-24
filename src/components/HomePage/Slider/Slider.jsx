import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const Slider = () => {
  const [listImage, setListImage] = useState([]);
  const navigate = useNavigate();
  AOS.init({
    duration: 2000,
    once: false,
  });
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BE_KEY}/api/v1/movie/image`)
      .then((response) => {
        // Xử lý dữ liệu phản hồi
        setListImage(response.data.data.result);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error("Error:", error);
      });
  }, []);
  const handleGetDetailInfoMovie = (movieId) => {
    axios
      .get(`${import.meta.env.VITE_API_BE_KEY}/api/v1/movie?id=${movieId}`)
      .then((response) => {
        console.log(response.data.data);
        navigate("/detail", {
          state: { movieData: response.data.data.result },
        });
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div
        className="flex items-center justify-center flex-col h-[1000px] w-full ]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #09203f 10%, #537895 100%)",
        }}
      >
        <h3 className="mb-12 mt-4 text-4xl font-semibold text-white rounded-3xl  border-solid border-stone-50 p-5 border-2 w-[96]">
          Phim Đang Chiếu
        </h3>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {listImage.length > 0 &&
            listImage.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => handleGetDetailInfoMovie(item.id)}
                >
                  <div
                    data-aos="flip-left"
                    className="flex flex-col gap-6 mb-20 group relative shadow-lg 
                  text-white rounded-xl px-6 py-8 h-[300px] w-[215px] lg:h-[500px] lg:w-[350px] overflow-hidden cursor-pointer"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          "http://localhost:8080/img/" + item.path
                        })`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-3"></div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
